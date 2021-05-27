import styled from "styled-components";

export const HeaderPageContent = styled.div`
  width: 100%;
  display: flex;
  height: 68px;
  min-height: 68px;
  padding: 0px 24px;
  background: #ffffff;
  align-items: center;
  border-bottom: 1px solid #e4e8f0;
`;

export const HeaderPageLogo = styled.svg`
  width: 225px;
  margin: 0px -40px;
  fill: #37474f;
`;

export const HeaderPageDescription = styled.p`
  top: -3px;
  color: #99a1ab;
  font-weight: 400;
  position: relative;
  font-size: 0.875rem;
  margin: 0px 0px 0px 16px;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: none;
  }
`;
