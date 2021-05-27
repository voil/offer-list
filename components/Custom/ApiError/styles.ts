import styled from "styled-components";

export const ApiErrorContent = styled.div`
  width: 100%;
  padding: 40px 0px;
  text-align: center;
`;

export const ApiErrorIcon = styled.svg`
  width: 200px;
  fill: ${(props) => props.theme.mainColor};
`;

export const ApiErrorDescription = styled.div`
  font-size: 32px;
  text-align: center;
  padding-top: 10px;
  color: ${(props) => props.theme.mainColor};
`;
