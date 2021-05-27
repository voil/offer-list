import styled from "styled-components";

type ToogleButtonProps = {
  typeState: string;
};

export const ToogleLayoutContent = styled.div`
  height: 50px;
  padding: 10px;
  display: none;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakResponsive}px) {
    display: flex;
  }
`;

export const ToogleLayoutButtonReturn = styled.button`
  width: 40px;
  border: none;
  outline: none;
  display: ${(props: ToogleButtonProps) =>
    props.typeState === "map" ? "flex" : "none"};
  color: #777777;
  background: #ffffff;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.5);
`;

export const ToogleLayoutButtonMap = styled.button`
  width: 36px;
  padding: 7px;
  border: none;
  outline: none;
  color: #777777;
  margin-left: auto;
  background: #fdeaf0;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  display: ${(props: ToogleButtonProps) =>
    props.typeState === "list" ? "flex" : "none"};
`;

export const ToogleLayoutButtonMapSvg = styled.svg`
  fill: #ff4081;
`;

export const ToogleLayoutButtonReturnSvg = styled.svg`
  fill: #777777;
`;
