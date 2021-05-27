import Image from "next/image";
import { useStoreSelector } from "@/hooks/index";
import {
  OfferDetialsHeaderContent,
  OfferDetialsHeaderColumnIcon,
  OfferDetialsHeaderColumnDetails,
  OfferDetialsHeaderColumnIconInner,
  OfferDetialsHeaderColumnDetailsCity,
  OfferDetialsHeaderColumnIconContent,
  OfferDetialsHeaderColumnDetailsTitle,
  OfferDetialsHeaderColumnDetailsSalary,
  OfferDetialsHeaderColumnDetailsRemote,
  OfferDetialsHeaderColumnDetailsCityIcon,
  OfferDetialsHeaderColumnDetailsEmployment,
} from "./styles";

/**
 * Offers detials header
 * Component for show offers detials header.
 */
export default function OfferDetialsHeader() {
  const offer = useStoreSelector((state) => state.offers.offerDetials);
  return (
    <OfferDetialsHeaderContent language={offer?.marker_icon || "c"}>
      <OfferDetialsHeaderColumnIcon>
        <OfferDetialsHeaderColumnIconContent>
          <OfferDetialsHeaderColumnIconInner>
            <Image
              src={offer?.company_logo_url || ""}
              alt={offer?.company_name}
              layout="fill"
              objectFit="contain"
            />
          </OfferDetialsHeaderColumnIconInner>
        </OfferDetialsHeaderColumnIconContent>
      </OfferDetialsHeaderColumnIcon>
      <OfferDetialsHeaderColumnDetails>
        <OfferDetialsHeaderColumnDetailsTitle>
          {offer?.title}
        </OfferDetialsHeaderColumnDetailsTitle>
        <OfferDetialsHeaderColumnDetailsCity>
          <OfferDetialsHeaderColumnDetailsCityIcon
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
            <circle cx="12" cy="9" r="2.5"></circle>
          </OfferDetialsHeaderColumnDetailsCityIcon>
          {offer?.street}, {offer?.city}
          {offer?.remote ? (
            <OfferDetialsHeaderColumnDetailsRemote>
              Fully remote
            </OfferDetialsHeaderColumnDetailsRemote>
          ) : (
            <></>
          )}
        </OfferDetialsHeaderColumnDetailsCity>
        <OfferDetialsHeaderColumnDetailsSalary>
          {offer?.salary_from
            ? `${offer.salary_from} - ${offer.salary_to} ${
                offer.salary_currency
                  ? offer.salary_currency.toLocaleUpperCase()
                  : null
              }`
            : "Undisclosed Salary"}
          <OfferDetialsHeaderColumnDetailsEmployment>
            {offer?.employment_type === "b2b"
              ? `  net/month - ${offer?.employment_type}`
              : `  gross/month - ${offer?.employment_type}`}
          </OfferDetialsHeaderColumnDetailsEmployment>
        </OfferDetialsHeaderColumnDetailsSalary>
      </OfferDetialsHeaderColumnDetails>
    </OfferDetialsHeaderContent>
  );
}
