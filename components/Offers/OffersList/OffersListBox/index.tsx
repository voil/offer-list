import Image from "next/image";
import {
  OffersListBoxSvg,
  OffersListBoxCard,
  OffersListBoxImage,
  OffersListBoxTitle,
  OffersListBoxInner,
  OffersListBoxHelps,
  OffersListBoxRemote,
  OffersListBoxSalary,
  OffersListBoxCompany,
  OffersListBoxPublished,
  OffersListBoxSkillsItem,
  OffersListBoxDescription,
  OffersListBoxSalaryMobile,
  OffersListBoxRemoteMobile,
  OffersListBoxSalaryContent,
  OffersListBoxSkillsContent,
  OffersListBoxPublishedMobile,
} from "./styles";
import { TimeAgo } from "@n1ru4l/react-time-ago";
import { useStoreDispatch } from "@/hooks/index";
import { languageProgrammingColors } from "@/support/constants";
import { setCurrentOffer, OfferType } from "@/store/offers.reducer";

type OffersListBoxProps = {
  currentOffer: OfferType;
};

/**
 * Offers list box
 * Component for show offers list box.
 * @props OffersListBoxProps currentOffer
 */
export default function OffersListBox({ currentOffer }: OffersListBoxProps) {
  const dispatch = useStoreDispatch();

  return (
    <OffersListBoxCard
      onMouseOver={() => dispatch(setCurrentOffer(currentOffer.id))}
      color={languageProgrammingColors[currentOffer.marker_icon]}
    >
      <OffersListBoxImage>
        <Image
          src={currentOffer.company_logo_url}
          alt={currentOffer.company_name}
          layout="fill"
          objectFit="contain"
        />
      </OffersListBoxImage>
      <OffersListBoxInner>
        <OffersListBoxDescription>
          <OffersListBoxTitle>{currentOffer.title}</OffersListBoxTitle>
          <OffersListBoxSalaryContent>
            <OffersListBoxSalary>
              {currentOffer.salary_from
                ? `${currentOffer.salary_from} - ${currentOffer.salary_to} ${
                    currentOffer.salary_currency
                      ? currentOffer.salary_currency.toLocaleUpperCase()
                      : null
                  }`
                : "Undisclosed Salary"}
            </OffersListBoxSalary>
            <OffersListBoxPublished>
              <TimeAgo
                date={new Date(currentOffer.published_at)}
                render={({
                  error,
                  value,
                }: {
                  error: string;
                  value: string;
                }) => <span>{value}</span>}
              />
            </OffersListBoxPublished>
            {currentOffer.remote ? (
              <OffersListBoxRemoteMobile>
                Fully remote
              </OffersListBoxRemoteMobile>
            ) : null}
          </OffersListBoxSalaryContent>
        </OffersListBoxDescription>
        <OffersListBoxHelps>
          <OffersListBoxSalaryMobile>
            {currentOffer.salary_from
              ? `${currentOffer.salary_from} - ${currentOffer.salary_to} ${
                  currentOffer.salary_currency
                    ? currentOffer.salary_currency.toLocaleUpperCase()
                    : null
                }`
              : "Undisclosed Salary"}
          </OffersListBoxSalaryMobile>
          <OffersListBoxCompany>
            <OffersListBoxSvg
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
            </OffersListBoxSvg>
            {currentOffer.company_name}
          </OffersListBoxCompany>
          <OffersListBoxCompany>
            <OffersListBoxSvg
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
            </OffersListBoxSvg>
            {currentOffer.city}
          </OffersListBoxCompany>
          {currentOffer.remote ? (
            <OffersListBoxRemote>Fully remote</OffersListBoxRemote>
          ) : null}
          <OffersListBoxSkillsContent>
            {currentOffer.skills.map((skill) => (
              <OffersListBoxSkillsItem key={skill.name}>
                {skill.name}
              </OffersListBoxSkillsItem>
            ))}
          </OffersListBoxSkillsContent>
          <OffersListBoxPublishedMobile>
            <TimeAgo
              date={new Date(currentOffer.published_at)}
              render={({ error, value }: { error: string; value: string }) => (
                <span>{value}</span>
              )}
            />
          </OffersListBoxPublishedMobile>
        </OffersListBoxHelps>
      </OffersListBoxInner>
    </OffersListBoxCard>
  );
}
