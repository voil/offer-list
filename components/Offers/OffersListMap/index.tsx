import "leaflet/dist/leaflet.css";
import { useCallback, useContext, useMemo } from "react";
import { MapContainer } from "react-leaflet";
import { OffersListMapContent } from "./styles";
import { OfferType } from "@/store/offers.reducer";
import OffersListMapContainer from "@/components/Offers/OffersListMap/OffersListMapContainer";

type OffersListType = {
  offers: OfferType[];
  isVisible: boolean;
};

/**
 * Offers list map
 * Component for show map container.
 * @props OffersListType offers
 * @props OffersListType isVisible
 */
export default function OffersListMap({ offers, isVisible }: OffersListType) {
  return (
    <OffersListMapContent isVisible={isVisible}>
      <MapContainer
        center={[51.8751297, 14.6466807]}
        zoom={5}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        <OffersListMapContainer offers={offers} />
      </MapContainer>
    </OffersListMapContent>
  );
}
