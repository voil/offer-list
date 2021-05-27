import Link from "next/link";
import { useStoreDispatch } from "@/hooks/index";
import { hParseUrlOffer } from "@/support/helpers";
import { OffersListContent, OffersListLink } from "./styles";
import { setCurrentOffer, OfferType } from "@/store/offers.reducer";
import OffersListBox from "@/components/Offers/OffersList/OffersListBox";

type OffersListType = {
  offers: OfferType[];
  isVisible: boolean;
};

/**
 * Offers list
 * Component for show offers list
 * @props OffersListType offers
 * @props OffersListType isVisible
 */
export default function OffersList({ offers, isVisible }: OffersListType) {
  const dispatch = useStoreDispatch();

  return (
    <OffersListContent
      data-testid="listOffer"
      isVisible={isVisible}
      onMouseLeave={() => dispatch(setCurrentOffer(null))}
    >
      {offers.map((offer) => (
        <Link
          href={`/offers/${hParseUrlOffer(offer.company_name, offer.title)}`}
          key={offer.id}
        >
          <OffersListLink>
            <OffersListBox currentOffer={offer} />
          </OffersListLink>
        </Link>
      ))}
    </OffersListContent>
  );
}
