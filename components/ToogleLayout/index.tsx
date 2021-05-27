import {
  ToogleLayoutContent,
  ToogleLayoutButtonMap,
  ToogleLayoutButtonReturn,
  ToogleLayoutButtonMapSvg,
  ToogleLayoutButtonReturnSvg,
} from "./styles";
import { TypesOfLayoutState } from "@/support/constants";
import { toogleCurrentStateOffers } from "@/store/offers.reducer";
import { useStoreSelector, useStoreDispatch } from "@/hooks/index";

/**
 * Toogle layout
 * Component to show toogle layout.
 */
export default function ToogleLayout() {
  const dispatch = useStoreDispatch();
  const currentStateType = useStoreSelector(
    (state) => state.offers.currentStateType
  );

  return (
    <ToogleLayoutContent>
      <ToogleLayoutButtonReturn
        typeState={currentStateType}
        data-testid="listType"
        onClick={() =>
          dispatch(toogleCurrentStateOffers(TypesOfLayoutState.LIST))
        }
      >
        <ToogleLayoutButtonReturnSvg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </ToogleLayoutButtonReturnSvg>
      </ToogleLayoutButtonReturn>
      <ToogleLayoutButtonMap
        data-testid="mapType"
        onClick={() =>
          dispatch(toogleCurrentStateOffers(TypesOfLayoutState.MAP))
        }
        typeState={currentStateType}
      >
        <ToogleLayoutButtonMapSvg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"></path>
        </ToogleLayoutButtonMapSvg>
      </ToogleLayoutButtonMap>
    </ToogleLayoutContent>
  );
}
