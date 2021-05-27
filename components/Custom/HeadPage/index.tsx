import Head from "next/head";

/**
 * Head page.
 * Component to set head for current page.
 */
export default function HeadPage() {
  return (
    <Head>
      <link rel="shortcut icon" href="/assets/favicon-32x32.png" />
      <link
        href="/assets/apple-icon-57x57.png"
        rel="apple-touch-icon"
        sizes="57x57"
      />
      <link
        href="/assets/apple-icon-60x60.png"
        rel="apple-touch-icon"
        sizes="60x60"
      />
      <link
        href="/assets/apple-icon-72x72.png"
        rel="apple-touch-icon"
        sizes="72x72"
      />
      <link
        href="/assets/apple-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        href="/assets/apple-icon-114x114.png"
        rel="apple-touch-icon"
        sizes="114x114"
      />
      <link
        href="/assets/apple-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="/assets/apple-icon-144x144.png"
        rel="apple-touch-icon"
        sizes="144x144"
      />
      <link
        href="/assets/apple-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href="/assets/apple-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/assets/android-icon-192x192.png"
        rel="icon"
        sizes="192x192"
        type="image/png"
      />
      <link
        href="/assets/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/assets/favicon-96x96.png"
        rel="icon"
        sizes="96x96"
        type="image/png"
      />
      <link href="/assets/manifest.json" rel="manifest" />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta
        content="/assets/ms-icon-144x144.png"
        name="msapplication-TileImage"
      />
      <meta content="#ffffff" name="theme-color" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <title>OfferList: #1 Job Board for IT industry in Poland</title>
      <meta
        content="The first map of the labor market in the IT sector. We want to simplify the search process to minimum."
        name="description"
      />
      <meta content="https://offerlist.it" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="OfferList" property="og:title" />
      <meta
        content="OfferList: #1 Job Board for IT industry in Poland"
        property="og:description"
      />
      <meta content="/assets/offerlist-cover.jpg" property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;subset=latin-ext"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:400,700&amp;subset=latin-ext"
        rel="stylesheet"
      />
    </Head>
  );
}
