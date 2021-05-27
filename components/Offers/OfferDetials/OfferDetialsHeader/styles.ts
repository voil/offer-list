import { darken } from "polished";
import styled from "styled-components";
import { languageProgrammingColors } from "@/support/constants";

type OfferDetialsHeaderContentProps = {
  language: string;
};

export const OfferDetialsHeaderContent = styled.div`
  height: 100%;
  display: flex;
  align-items: top;
  padding: 40px 20px 60px;
  border-radius: 0px 0px 4px 4px;
  background: ${(props: OfferDetialsHeaderContentProps) =>
    `url("/assets/header_background.png") center center / cover no-repeat, linear-gradient(30deg, ${
      languageProgrammingColors[props.language]
    }, ${darken(0.05, languageProgrammingColors[props.language])})`};
`;

export const OfferDetialsHeaderColumnIcon = styled.div`
  width: 147px;
  display: flex;
  height: 147px;
  flex-shrink: 0;
  position: relative;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-clip: padding-box;
  background-color: rgba(255, 255, 255, 0.3);
  border: 10px solid rgba(255, 255, 255, 0.15);
`;

export const OfferDetialsHeaderColumnIconContent = styled.div`
  width: 107px;
  height: 107px;
  display: flex;
  padding: 22px;
  position: relative;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  background-color: rgb(255, 255, 255);
`;

export const OfferDetialsHeaderColumnIconInner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  background-color: rgb(255, 255, 255);
`;

export const OfferDetialsHeaderColumnDetails = styled.div`
  flex: 1;
  color: #ffffff;
  padding-left: 10px;
`;

export const OfferDetialsHeaderColumnDetailsTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const OfferDetialsHeaderColumnDetailsCityIcon = styled.svg`
  width: 25px;
  fill: #ffffff;
`;

export const OfferDetialsHeaderColumnDetailsCity = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  margin-right: 12px;
  align-items: center;
  margin-bottom: 10px;
`;

export const OfferDetialsHeaderColumnDetailsSalary = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
`;

export const OfferDetialsHeaderColumnDetailsEmployment = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
`;

export const OfferDetialsHeaderColumnDetailsRemote = styled.div`
  font-size: 12px;
  padding: 2px 8px;
  line-height: 17px;
  margin-left: 10px;
  text-align: center;
  border-radius: 4px;
  white-space: nowrap;
  color: rgb(255, 64, 129);
  background-color: rgb(255, 245, 248);
`;
