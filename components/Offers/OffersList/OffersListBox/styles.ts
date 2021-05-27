import styled from "styled-components";

type OffersListBoxCardProps = {
  color: string;
};

export const OffersListBoxCard = styled.div`
  padding: 20px;
  display: flex;
  cursor: pointer;
  border-radius: 6px;
  background: #ffffff;
  margin-bottom: 12px;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%), 0 1px 5px 0 rgb(0 0 0 / 4%);
  border-left: 5px solid ${(props: OffersListBoxCardProps) => props.color};
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 5px 4px 0 rgb(0 0 0 / 5%), 0 4px 5px 0 rgb(0 0 0 / 4%);
  }
`;

export const OffersListBoxImage = styled.div`
  width: 100%;
  height: 85px;
  max-width: 85px;
  max-height: 40px;
  position: relative;
`;

export const OffersListBoxInner = styled.div`
  flex: 1;
  padding: 0px 0px 0px 20px;
`;

export const OffersListBoxDescription = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
`;

export const OffersListBoxTitle = styled.div`
  color: #37474f;
  font-size: 16px;
  font-weight: 600;
`;

export const OffersListBoxSalaryContent = styled.div`
  display: flex;
  align-items: center;
`;

export const OffersListBoxSalary = styled.div`
  color: #1ec66c;
  font-size: 16px;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: none;
  }
`;

export const OffersListBoxSalaryMobile = styled.div`
  color: #1ec66c;
  font-size: 16px;
  display: none;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: block;
  }
`;

export const OffersListBoxPublished = styled.div`
  font-size: 10px;
  border-radius: 20px;
  padding: 3px 6px;
  margin-left: 10px;
  border: 1px solid #e0e0e0;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: none;
  }
`;

export const OffersListBoxPublishedMobile = styled.div`
  font-size: 10px;
  border-radius: 20px;
  padding: 3px 6px;
  display: none;
  margin-left: auto;
  border: 1px solid #e0e0e0;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: block;
  }
`;

export const OffersListBoxHelps = styled.div`
  display: flex;
  align-items: center;
`;

export const OffersListBoxSkillsContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: none;
  }
`;

export const OffersListBoxSkillsItem = styled.div`
  color: #99a1ab;
  font-size: 10px;
  padding: 3px 6px;
  margin-left: 10px;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
`;

export const OffersListBoxCompany = styled.div`
  color: #99a1ab;
  display: flex;
  font-size: 11px;
  margin-right: 20px;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: none;
  }
`;

export const OffersListBoxSvg = styled.svg`
  width: 14px;
  fill: #99a1ab;
  margin-right: 5px;
`;

export const OffersListBoxRemote = styled.div`
  color: #ff4081;
  font-size: 11px;
  padding: 2px 10px;
  background: #fff5f8;
  border-radius: 15px;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: none;
  }
`;

export const OffersListBoxRemoteMobile = styled.div`
  color: #ff4081;
  font-size: 11px;
  padding: 2px 10px;
  background: #fff5f8;
  border-radius: 15px;
  display: none;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: block;
  }
`;
