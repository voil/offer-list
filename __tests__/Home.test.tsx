import React from "react";
import { store } from "../store";
import HomePage from "../pages/index";
import { Provider } from "react-redux";
import { render, act } from "@testing-library/react";
import { toogleApiState } from "../store/global.reducer";
import { describe, it, expect } from "jest-without-globals";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      beforePopState: jest.fn(),
    };
  },
}));

describe("Test HomePage component", () => {
  let component: any = null;

  beforeEach(() => {
    process.env.NODE_ENV = "production";

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: "java-lead-ec220a85-c239-4d94-8490-9543c9e6499e",
              title: "Java Lead",
              street: "rynek",
              city: "Kraków",
              country_code: "PL",
              marker_icon: "java",
              remote: false,
              experience_level: "senior",
              salary_from: 15000,
              salary_to: 25000,
              salary_currency: "pln",
              latitude: 50.0618971,
              longitude: 19.9367559,
              employment_type: "b2b",
              published_at: "2019-01-09T15:28:01.856Z",
              company_name: "Gogozoom",
              company_url: "http://gogozoom.com",
              company_size: "1+",
              company_logo_url:
                `${process.env.URL_OFFER_LIST_API}/samples/offers/company_logos/original/688f52370eadf07080178cf1dd39b760e68b899a.png`,
              skills: [{ name: "Java", level: 5 }],
            },
          ]),
      })
    );

    component = render(
      <Provider store={store}>
        <HomePage url={process.env.URL_OFFER_LIST_API} />
      </Provider>
    );
  });

  it("should display alert notification.", async () => {
    await store.dispatch(toogleApiState(true));
    expect(await component.findByTestId("apiError")).toBeInTheDocument();
  });

  it("should display list element.", async () => {
    await act(async () => {
      expect(await component.findByTestId("listOffer")).toBeInTheDocument();
    });
  });
});
