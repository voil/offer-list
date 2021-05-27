import offers from "@/store/offers.reducer";
import global from "@/store/global.reducer";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { watcherOffersSaga } from "@/sagas/offers.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    global,
    offers,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherOffersSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
