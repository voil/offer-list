export const mainTheme = {
  mainColor: '#ff4081',
  breakResponsive: 1024,
};

export enum TypesOfLayoutState {
  LIST = "list",
  MAP = "map",
}

export const levelSkills = [
  'nice to have',
  'junior',
  'regular',
  'advanced',
  'master'
]

export const popupTemplate: string = `
<div class="popupMarker">
  <div class="popupMarker__column popupMarker__column--icon">
    <img src="%icon%" class="popupMarker__icon"/>
  </div>
  <div class="popupMarker__column popupMarker__column--descrption">
    <div class="popupMarker__title">%title%</div>
    <div class="popupMarker__salary">%salary%</div>
    <div class="popupMarker__company">%company%</div>
  </div>
</div>
`;

export const clusterIconTemplate: string = `
<div class="clusterGroup">
  <img src="%icon%" />
  <span class="clusterGroup__count">%count%</span>
</div>
`;

interface LanguageProgrammingColorsInterface {
  [key: string]: string;
}

export const languageProgrammingColors: LanguageProgrammingColorsInterface = {
  c: "#34DD9E",
  pm: "#80CBC4",
  ux: "#FF9A07",
  go: "#6A90E5",
  php: "#157CFC",
  net: "#672572",
  erp: "#1B68C2",
  html: "#FF7D50",
  java: "#F9597A",
  game: "#ED407A",
  data: "#66B137",
  ruby: "#ef5350",
  admin: "#70EBF2",
  scala: "#F1474D",
  other: "#D44BD5",
  devops: "#7F66E0",
  python: "#2361B7",
  mobile: "#BC4B8D",
  testing: "#017B6D",
  support: "#D468DE",
  security: "#134AA7",
  analytics: "#3B5998",
  javascript: "#FFC706",
  architecture: "#FF6D00",
};
