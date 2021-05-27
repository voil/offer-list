import styled from "styled-components";

type OfferDetialsSpecTechBoxStarsItemProps = {
  active: boolean;
};

export const OfferDetialsSpecTechContent = styled.div`
  margin-top: 12px;
  border-radius: 6px;
  background: #ffffff;
  margin-bottom: 12px;
  text-decoration: none;
  padding: 20px 20px 0px 20px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%), 0 1px 5px 0 rgb(0 0 0 / 4%);
`;

export const OfferDetialsSpecTechHeader = styled.div`
  width: 100%;
  color: #37474f;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 0px;
  margin-bottom: 20px;
  border-bottom: 2px solid rgb(243, 246, 248);
`;

export const OfferDetialsSpecTechInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const OfferDetialsSpecTechBox = styled.div`
  flex: 0 0 20%;
  display: flex;
  max-width: 20%;
  margin: 0px 0px 32px;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const OfferDetialsSpecTechBoxStars = styled.div`
  display: flex;
  align-items: center;
`;

export const OfferDetialsSpecTechBoxStarsItem = styled.div`
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 50%;
  background: ${(props: OfferDetialsSpecTechBoxStarsItemProps) =>
    props.active ? "#ff4081" : "#bfc5d2"};
  margin: 0px 10px 5px 0px;
`;

export const OfferDetialsSpecTechTitle = styled.div`
  width: 90%;
  display: block;
  color: #37474f;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const OfferDetialsSpecTechDescription = styled.div`
  color: #99a1ab;
  font-size: 14px;
`;
