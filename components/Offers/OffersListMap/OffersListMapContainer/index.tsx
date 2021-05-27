import { MapHook } from "@/hooks/map.hook";
import { OfferType } from "@/store/offers.reducer";

type OffersListMapContainerType = {
  offers: OfferType[];
};

/**
 * Offers list map container whit map.
 * Component for show map.
 * @props OffersListMapContainerType offers
 */
export default function OffersListMapContainer({
  offers,
}: OffersListMapContainerType) {
  MapHook(offers);
  return <></>;
}
