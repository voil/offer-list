import { useMap } from "react-leaflet";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { OfferType } from "@/store/offers.reducer";
import { hParseUrlOffer } from "@/support/helpers";
import { setOffertDetails } from "@/store/offers.reducer";
import { useStoreSelector, useStoreDispatch } from "@/hooks/index";
import { popupTemplate, clusterIconTemplate } from "@/support/constants";

let L: any = null;

/**
 * Map hook.
 * @param OfferType[] offers
 */
export function MapHook(offers: OfferType[]) {
  const map = useMap();
  const router = useRouter();
  const dispatch = useStoreDispatch();
  const [isMapInitialized, setMapInitializedState] = useState(false);
  const [currentHoverMaker, setCurrentHoverMaker] = useState(null);
  const currentOffer = useStoreSelector((state) => state.offers.currentOffer);
  const currentDetials = useStoreSelector((state) => state.offers.offerDetials);
  const currentStateType = useStoreSelector(
    (state) => state.offers.currentStateType
  );

  /**
   * Function to create tile layer.
   * @param L
   */
  const createTileLayer = (L: any) => {
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(map);
  };

  /**
   * Function to create marker cluster group.
   * @param L
   * @return markerClusterGroup
   */
  const createMarkerClusterGroup = (L: any) => {
    return L.markerClusterGroup({
      showCoverageOnHover: false,
      iconCreateFunction: (cluster: any) => {
        const clusterChildMarkers = cluster.getAllChildMarkers();
        return L.divIcon({
          html: clusterIconTemplate
            .replace(
              "%icon%",
              clusterChildMarkers[0].options.icon.options.iconUrl
            )
            .replace("%count%", cluster.getChildCount()),
          className: "marker-cluster-custom",
          iconSize: L.point(40, 40, true),
        });
      },
    });
  };

  /**
   * Function to assign markers to layer map.
   * @param L
   */
  const assignMarkers = (L: any) => {
    const markers = createMarkerClusterGroup(L);
    offers.forEach((offer) => {
      markers.addLayer(
        L.marker([offer.latitude, offer.longitude], {
          id: offer.id,
          url: `/offers/${hParseUrlOffer(offer.company_name, offer.title)}`,
          icon: L.icon({
            iconUrl: `/assets/markers/${offer.marker_icon}.svg`,
            iconSize: [48, 48],
            iconAnchor: [32, 64],
            popupAnchor: [-7, -65],
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
          }),
        })
          .on("mouseover", function (ev: any) {
            ev.target.openPopup();
          })
          .on("mouseout", function (ev: any) {
            ev.target.closePopup();
          })
          .on("click", function (ev: any) {
            dispatch(setOffertDetails(offer));
            router.push(ev.target.options.url);
          })
          .bindPopup(
            popupTemplate
              .replace("%icon%", offer.company_logo_url)
              .replace(
                "%title%",
                `${
                  offer.title.length > 25
                    ? `${offer.title.substr(0, 25)}...`
                    : offer.title
                }`
              )
              .replace(
                "%company%",
                `${
                  offer.company_name.length > 25
                    ? `${offer.company_name.substr(0, 25)}...`
                    : offer.company_name
                }`
              )
              .replace(
                "%salary%",
                `${offer.salary_from} - ${offer.salary_to} ${
                  offer.salary_currency
                    ? offer.salary_currency.toLocaleUpperCase()
                    : null
                }`
              )
          )
      );
    });
    map.addLayer(markers);
  };

  /**
   * Function to fadeOut for current marker hovered.
   * @param currentHoverMaker
   * @param callback
   */
  const fadeOutCurrentMarker = (
    currentHoverMaker: any,
    callback: (marker: any) => void
  ) => {
    let currentOpacity = 1;
    let finishInterval = 0;
    const idInterval = setInterval(() => {
      currentHoverMaker?.setOpacity(currentOpacity);
      finishInterval += 150;
      currentOpacity = 1 + ((0 - 1) * finishInterval) / 1000;
      if (finishInterval >= 1000) {
        clearInterval(idInterval);
        currentHoverMaker?.setOpacity(0);
        callback(currentHoverMaker);
      }
    }, 25);
  };

  /**
   * Function to remove current hover marker.
   */
  const removeCurrentHoverLayer = () => {
    if (currentHoverMaker) {
      setCurrentHoverMaker(null);
      fadeOutCurrentMarker(currentHoverMaker, (marker) => {
        map.removeLayer(marker);
      });
    }
  };

  /**
   * Function to create hover marker icon.
   */
  const createHoverMarkerIcon = (L: any) => {
    removeCurrentHoverLayer();
    if (currentOffer) {
      const offer = offers.find((offer) => offer.id === currentOffer);
      const marker = L.marker(
        [offer?.latitude as number, offer?.longitude as number],
        {
          icon: L.icon({
            iconUrl: `/assets/markers/${offer?.marker_icon}.svg`,
            iconSize: [48, 48],
            iconAnchor: [32, 64],
            popupAnchor: [-7, -65],
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
          }),
        }
      ).addTo(map);

      marker.bounce();
      setCurrentHoverMaker(marker);
      setTimeout(() => {
        map.setView([offer?.latitude as number, offer?.longitude as number]);
      }, 300);
    }

    if (!currentOffer) {
      removeCurrentHoverLayer();
    }
  };

  /**
   * Function to set viewport to offer detials.
   * @param Any L
   */
  const setMapViewportToOffertDetials = (L: any) => {
    if (!currentDetials) {
      return;
    }
    map.setView([currentDetials.latitude, currentDetials.longitude], 18);
    L.Marker.stopAllBouncingMarkers();
    setTimeout(() => {
      Object.values(map._layers).forEach((layer) => {
        if (
          layer instanceof L.Marker &&
          layer.options.id === currentDetials.id
        ) {
          layer.bounce();
          layer.openPopup();
        }
      });
    }, 100);
  };

  useEffect(() => {
    if (offers.length > 0 && !isMapInitialized) {
      require("react-leaflet-markercluster");
      require("leaflet.smooth_marker_bouncing");
      L = require("leaflet");
      createTileLayer(L);
      map.whenReady(() =>
        setTimeout(() => {
          setMapInitializedState(true);
          assignMarkers(L);
          if (!currentDetials) {
            map.setView([51.8751297, 14.6466807], 5);
          }
        }, 0)
      );
    }

    if (isMapInitialized) {
      createHoverMarkerIcon(L);
    }
    if (currentStateType === "map") {
      map.invalidateSize();
    }

    setMapViewportToOffertDetials(L);
  }, [offers, currentOffer, currentStateType, currentDetials]);
}
