import { AnyAction } from "redux";
import { TypesOfLayoutState } from "@/support/constants";

/**
 * OfferType.
 * Type for offer object.
 */
export type OfferType = {
  id: string;
  city: string;
  title: string;
  street: string;
  remote: boolean;
  latitude: number;
  longitude: number;
  salary_to: number;
  marker_icon: string;
  company_url: string;
  salary_from: number;
  country_code: string;
  published_at: string;
  company_name: string;
  company_size: string;
  salary_currency: string;
  employment_type: string;
  experience_level: string;
  company_logo_url: string;
  skills: Array<{ name: string; level: number }>;
};

/**
 * ACTIONS.
 * Actions names for reducer dispatch.
 */
export enum ACTIONS {
  GET_OFFERS_LIST = "GET_OFFERS_LIST",
  GET_OFFERS_ERROR = "GET_OFFERS_ERROR",
  SET_OFFER_DETIALS = "SET_OFFER_DETIALS",
  SET_CURRENT_OFFERT = "SET_CURRENT_OFFERT",
  TOOGLE_STATE_OFFERT = "TOOGLE_STATE_OFFERT",
}

/**
 * TypeReturnAction<T>.
 * Type for action return data object item.
 */
export type TypeReturnAction<T> = {
  type: string;
  payload?: T;
};

/**
 * InitialState
 * Type for initial state of reducer.
 */
type InitialState = {
  list: OfferType[];
  currentOffer: string | null;
  offerDetials: OfferType | null;
  currentStateType: TypesOfLayoutState;
};

/**
 * initialState.
 * Main state for offers store reducer.
 */
export const initialState: InitialState = {
  list: [],
  currentOffer: null,
  offerDetials: null,
  currentStateType: TypesOfLayoutState.LIST,
};

/**
 * Main function of offers reducer.
 * @param initialState state
 * @param AnyAction action
 * @return InitialState
 */
export default function reducer(
  state = initialState,
  action: AnyAction
): InitialState {
  switch (action.type) {
    case ACTIONS.GET_OFFERS_LIST: {
      return {
        ...state,
        list: action.payload,
      };
    }
    case ACTIONS.SET_CURRENT_OFFERT: {
      return {
        ...state,
        currentOffer: action.payload,
      };
    }
    case ACTIONS.TOOGLE_STATE_OFFERT: {
      return {
        ...state,
        currentStateType: action.payload,
      };
    }
    case ACTIONS.SET_OFFER_DETIALS: {
      return {
        ...state,
        offerDetials: action.payload,
      };
    }
    default:
      return state;
  }
}

/**
 * Function to get async offers list.
 * @param String urlApi
 * @return TypeReturnAction<OfferType[]>
 */
export async function getAsyncOffersList(urlApi: string): Promise<OfferType[]> {
  return await (await fetch(`${urlApi}/offers`)).json();
}

/**
 * Function action to set offers list.
 * @param String urlApi
 * @return TypeReturnAction<OfferType[] | boolean>>
 */
export async function getOffersList(
  urlApi: string
): Promise<TypeReturnAction<OfferType[] | boolean>> {
  try {
    const response = await getAsyncOffersList(urlApi);
    return {
      type: ACTIONS.GET_OFFERS_LIST,
      payload: response,
    };
  } catch (error) {
    return {
      type: ACTIONS.GET_OFFERS_ERROR,
    };
  }
}

/**
 * Function action to set current offert
 * @param String | Null uniqueOffertId
 * @return TypeReturnAction<string | null>
 */
export function setCurrentOffer(
  uniqueOffertId: string | null
): TypeReturnAction<string | null> {
  return {
    type: ACTIONS.SET_CURRENT_OFFERT,
    payload: uniqueOffertId,
  };
}

/**
 * Function action to set offer details.
 * @param OfferType | Null offer
 * @return TypeReturnAction<OfferType | null>
 */
export function setOffertDetails(
  offer: OfferType | null
): TypeReturnAction<OfferType | null> {
  return {
    type: ACTIONS.SET_OFFER_DETIALS,
    payload: offer,
  };
}

/**
 * Function action to toogle current state offers.
 * @param TypesOfLayoutState currentState
 * @return TypeReturnAction<TypesOfLayoutState>
 */
export function toogleCurrentStateOffers(
  currentState: TypesOfLayoutState
): TypeReturnAction<TypesOfLayoutState> {
  return {
    type: ACTIONS.TOOGLE_STATE_OFFERT,
    payload: currentState,
  };
}
