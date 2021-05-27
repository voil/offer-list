import styled from "styled-components";

type OfferDetialsCompanySvgProps = {
  fill: string;
};

export const OfferDetialsCompanyContent = styled.div`
  display: flex;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    margin: 0px;
    flex-wrap: wrap;
    transform: translateY(0%);
  }
`;

export const OfferDetialsCompanyBox = styled.div`
  flex: 1 1 0%;
  display: flex;
  margin: 0px 5px;
  padding: 20px 5px;
  border-radius: 4px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  -webkit-box-pack: center;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    margin: 0.5px 0.5px 0.5px 0px;
    flex: 0 0 49.9%;
    max-width: 49.9%;
  }
`;

export const OfferDetialsCompanyIcon = styled.div`
  top: 0px;
  left: 50%;
  padding: 8px;
  display: flex;
  border-radius: 50%;
  position: absolute;
  justify-content: center;
  -webkit-box-pack: center;
  background: rgb(255, 255, 255);
  transform: translate(-50%, -50%);
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px;
`;

export const OfferDetialsCompanySvg = styled.svg`
  fill: ${(props: OfferDetialsCompanySvgProps) => props.fill};
  width: 20px;
  height: 20px;
`;

export const OfferDetialsCompanyTitle = styled.div`
  color: rgb(55, 71, 79);
  text-align: center;
`;

export const OfferDetialsCompanyDescription = styled.div`
  white-space: nowrap;
  color: rgb(153, 161, 171);
  font-size: 11px;
`;
