import { OfferDetialsContent } from "./styles";
import OfferDetialsHeader from "@/components/Offers/OfferDetials/OfferDetialsHeader";
import OfferDetialsCompany from "@/components/Offers/OfferDetials/OfferDetialsCompany";
import OfferDetialsSpecTech from "@/components/Offers/OfferDetials/OfferDetialsSpecTech";

type OfferDetialsType = {
  isVisible: boolean;
};

/**
 * Offers detials
 * Component for show offers list
 * @props OfferDetialsType isVisible
 */
export default function OfferDetials({ isVisible }: OfferDetialsType) {
  return (
    <OfferDetialsContent isVisible={isVisible}>
      <OfferDetialsHeader />
      <OfferDetialsCompany />
      <OfferDetialsSpecTech />
    </OfferDetialsContent>
  );
}
