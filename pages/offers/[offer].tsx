import React from "react";
import dynamic from "next/dynamic";
import { mainTheme } from "@/support/constants";
import { useStoreSelector } from "@/hooks/index";
import { OffersHook } from "@/hooks/offers.hook";
import { ThemeProvider } from "styled-components";
import HeadPage from "@/components/Custom/HeadPage";
import ApiError from "@/components/Custom/ApiError";
import ContentPage from "@/components/Custom/ContentPage";
import OfferDetials from "@/components/Offers/OfferDetials";
import SpinnerLoading from "@/components/Custom/SpinnerLoading";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";

/**
 * Function to get static paths.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

/**
 * Function to get static props for page.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      offerDetialsId: params?.offer,
      url: process.env.URL_OFFER_LIST_API,
    },
    revalidate: 1,
  };
};

/**
 * Offer page.
 * Main page to show current offer.
 */
export default function Offer({
  url,
  offerDetialsId,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const offertHook = OffersHook(url, offerDetialsId);
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
        {!offertHook.currentOffer ? (
          !apiState.isApiDisbaled ? (
            <SpinnerLoading />
          ) : (
            <></>
          )
        ) : (
          <>
            <OfferDetials isVisible={currentStateType === "list"} />
            <Map
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
