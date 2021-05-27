import React from "react";
import dynamic from "next/dynamic";
import { mainTheme } from "@/support/constants";
import { OffersHook } from "@/hooks/offers.hook";
import { useStoreSelector } from "@/hooks/index";
import { ThemeProvider } from "styled-components";
import ApiError from "@/components/Custom/ApiError";
import HeadPage from "@/components/Custom/HeadPage";
import OffersList from "@/components/Offers/OffersList";
import ContentPage from "@/components/Custom/ContentPage";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import SpinnerLoading from "@/components/Custom/SpinnerLoading";

/**
 * Function to get static props for page.
 */
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      url: process.env.URL_OFFER_LIST_API,
    },
  };
};

/**
 * Home page.
 * Main page to show list of offerts.
 */
export default function Home({
  url,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const offertHook = OffersHook(url);
  const apiState = useStoreSelector((state) => state.global);
  const currentStateType = useStoreSelector(
    (state) => state.offers.currentStateType
  );

  const Map = React.useMemo(
    () =>
      dynamic(() => import("@/components/Offers/OffersListMap"), {
        ssr: false,
      }),
    []
  );

  return (
    <ThemeProvider theme={mainTheme}>
      <HeadPage />
      <ContentPage>
        {offertHook.offersList.length === 0 ? (
          !apiState.isApiDisbaled ? (
            <SpinnerLoading />
          ) : (
            <></>
          )
        ) : (
          <>
            <OffersList
              isVisible={currentStateType === "list"}
              offers={offertHook.offersList}
            />
            <Map
              data-testid="listMap"
              isVisible={currentStateType === "map"}
              offers={offertHook.offersList}
            />
          </>
        )}
        {apiState.isApiDisbaled ? <ApiError /> : <></>}
      </ContentPage>
    </ThemeProvider>
  );
}
