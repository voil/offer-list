import { ACTIONS } from "@/store/offers.reducer";
import { takeLatest, put } from "redux-saga/effects";
import { toogleApiState } from "@/store/global.reducer";

/**
 * Function generator to change state of api.
 */
function* displayErrorApi() {
  yield put(toogleApiState(true));
}

/**
 * Function watcher saga to watch action when api disabled.
 */
export const watcherOffersSaga = function* root() {
  yield takeLatest(ACTIONS.GET_OFFERS_ERROR, displayErrorApi);
};
