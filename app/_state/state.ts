import { atom } from "recoil";

export const artDataState = atom({
  key: `artData`,
  default: null,
});

export const infoWindowData = atom({
  key: `infoWindowData`,
  default: {
    DATE: "",
    END_DATE: "",
    GUNAME: "",
    IS_FREE: "",
    MAIN_IMG: "",
    ORG_LINK: "",
    ORG_NAME: "",
    PLACE: "",
    TITLE: "",
  },
});
