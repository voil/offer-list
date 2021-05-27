import { AnyAction } from "redux";

/**
 * GlobalType.
 * Type for global object.
 */
export type GlobalType = {
  isApiDisbaled: boolean;
};

/**
 * ACTIONS.
 * Actions names for reducer dispatch.
 */
export enum ACTIONS {
  TOOGLE_API_ERROR = "TOOGLE_API_ERROR",
}

/**
 * TypeReturnAction<T>.
 * Type for action return data object item.
 */
export type TypeReturnAction<T> = {
  type: string;
  payload: T;
};

/**
 * initialState.
 * Main state for global store reducer.
 */
export const initialState: GlobalType = {
  isApiDisbaled: false,
};

/**
 * Main function of global reducer.
 * @param FiltersType state
 * @param AnyAction action
 * @return GlobalType
 */
export default function reducer(
  state = initialState,
  action: AnyAction
): GlobalType {
  switch (action.type) {
    case ACTIONS.TOOGLE_API_ERROR: {
      return {
        isApiDisbaled: action.payload,
      };
    }
    default:
      return state;
  }
}

/**
 * Function to toogle state api.
 * @param Boolean state
 * @return TypeReturnAction<boolean>
 */
export function toogleApiState(state: boolean): TypeReturnAction<boolean> {
  return {
    type: ACTIONS.TOOGLE_API_ERROR,
    payload: state,
  };
}
