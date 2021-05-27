import styled from "styled-components";

type OffersListMapContentProps = {
  isVisible: boolean;
};

export const OffersListMapContent = styled.div`
  width: 45%;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: ${(props: OffersListMapContentProps) =>
      props.isVisible ? "block" : "none"};
    width: 100%;
  }
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;
