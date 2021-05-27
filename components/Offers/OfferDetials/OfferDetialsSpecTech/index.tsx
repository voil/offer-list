import { useStoreSelector } from "@/hooks/index";
import { levelSkills } from "@/support/constants";
import {
  OfferDetialsSpecTechBox,
  OfferDetialsSpecTechTitle,
  OfferDetialsSpecTechInner,
  OfferDetialsSpecTechHeader,
  OfferDetialsSpecTechContent,
  OfferDetialsSpecTechBoxStars,
  OfferDetialsSpecTechDescription,
  OfferDetialsSpecTechBoxStarsItem,
} from "./styles";

/**
 * Offers detials spec tech
 * Component for show tech stack.
 */
export default function OfferDetialsSpecTech() {
  const skills = useStoreSelector((state) => state.offers.offerDetials?.skills);
  return (
    <OfferDetialsSpecTechContent>
      <OfferDetialsSpecTechHeader>Tech Stack</OfferDetialsSpecTechHeader>
      <OfferDetialsSpecTechInner>
        {skills?.map((skill) => (
          <OfferDetialsSpecTechBox key={skill.name}>
            <OfferDetialsSpecTechBoxStars>
              {levelSkills.map((name, index) => (
                <OfferDetialsSpecTechBoxStarsItem
                  key={`${name}_${index}`}
                  active={skill.level > index}
                />
              ))}
            </OfferDetialsSpecTechBoxStars>
            <OfferDetialsSpecTechTitle>{skill.name}</OfferDetialsSpecTechTitle>
            <OfferDetialsSpecTechDescription>
              {levelSkills[skill.level - 1]}
            </OfferDetialsSpecTechDescription>
          </OfferDetialsSpecTechBox>
        ))}
      </OfferDetialsSpecTechInner>
    </OfferDetialsSpecTechContent>
  );
}
