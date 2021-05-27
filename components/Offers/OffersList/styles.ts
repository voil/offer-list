import styled from "styled-components";

type OffersListContentProps = {
  isVisible: boolean;
};

export const OffersListContent = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  overflow-y: auto;
  flex-direction: column;
  padding: 10px;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    width: 100%;
    padding: 10px;
    display: ${(props: OffersListContentProps) =>
      props.isVisible ? "flex" : "none"};
  }
`;

export const OffersListLink = styled.a`
  text-decoration: none;
`;
