import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import ToogleLayout from "../components/ToogleLayout";
import { TypesOfLayoutState } from "../support/constants";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "jest-without-globals";
import { toogleCurrentStateOffers } from "../store/offers.reducer";

describe("Test ToogleLayout component", () => {
  let component: any = null;
  let spyDispatch: any = null;

  beforeEach(() => {
    spyDispatch = jest.spyOn(store, "dispatch");
    component = render(
      <Provider store={store}>
        <ToogleLayout />
      </Provider>
    );
  });

  it("should change store to LIST element.", async () => {
    const listTypeElement = await component.findByTestId("listType");
    fireEvent.click(listTypeElement);
    expect(spyDispatch).toHaveBeenCalledWith(
      toogleCurrentStateOffers(TypesOfLayoutState.LIST)
    );

    expect(store.getState().offers.currentStateType).toEqual(
      TypesOfLayoutState.LIST
    );
  });

  it("should change store to MAP element.", async () => {
    const listTypeElement = await component.findByTestId("mapType");
    fireEvent.click(listTypeElement);
    expect(spyDispatch).toHaveBeenCalledWith(
      toogleCurrentStateOffers(TypesOfLayoutState.MAP)
    );

    expect(store.getState().offers.currentStateType).toEqual(
      TypesOfLayoutState.MAP
    );
  });
});
