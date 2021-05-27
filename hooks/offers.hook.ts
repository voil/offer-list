import { useEffect } from "react";
import { useRouter } from "next/router";
import { hParseUrlOffer } from "@/support/helpers";
import {
  getOffersList,
  OfferType,
  setOffertDetails,
} from "@/store/offers.reducer";
import { useStoreSelector, useStoreDispatch } from "@/hooks/index";

/**
 * offer hook.
 * @param String urlApi
 */
export function OffersHook(urlApi: string, offerDetialsId?: string) {
  const dispatch = useStoreDispatch();
  const router = useRouter();
  const offersList = useStoreSelector((state) => state.offers.list);
  const currentOffer = useStoreSelector((state) => state.offers.offerDetials);

  /**
   * Function to watch router and clear offer detials.
   */
  const watchChangeRouterAndClearOfferDetials = () => {
    router.beforePopState(({ url, as }) => {
      if (url === "/") {
        dispatch(setOffertDetails(null));
      } else {
        setCurrentOffertDetails(as.replace("/offers/", ""));
      }
      return true;
    });
  };

  /**
   * Function to set offer detials.
   */
  const setCurrentOffertDetails = async (queryUrl?: string | null) => {
    offerDetialsId = queryUrl || offerDetialsId;
    if (offerDetialsId && offersList.length > 0) {
      const currentOffertDetials = offersList.find((offer) => {
        return (
          hParseUrlOffer(offer.company_name, offer.title) === offerDetialsId
        );
      });
      if (!currentOffertDetials) {
        router.push("/");
      }

      dispatch(setOffertDetails(currentOffertDetials as OfferType));
    }
  };

  useEffect(() => {
    async function fetchDataOffers() {
      if (offersList.length === 0) {
        dispatch(await getOffersList(urlApi));
      }
    }
    fetchDataOffers();
    setCurrentOffertDetails();
    watchChangeRouterAndClearOfferDetials();
  }, [dispatch, offersList]);

  return {
    offersList,
    currentOffer,
  };
}
