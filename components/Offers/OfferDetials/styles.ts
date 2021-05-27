import styled from "styled-components";

type OfferDetialsContentProps = {
  isVisible: boolean;
};

export const OfferDetialsContent = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0px 10px;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    width: 100%;
    display: ${(props: OfferDetialsContentProps) =>
      props.isVisible ? "flex" : "none"};
  }
`;
