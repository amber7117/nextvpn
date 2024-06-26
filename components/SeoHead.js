import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: "blackvpn - Best VPN For Privacy, Country, and Price",
  siteName: "blackvpn",
  description:
    "Explore blackvpn.io for the best VPN services tailored to your privacy needs. Secure your connection with our high-speed servers worldwide. Enjoy affordable prices and premium features.",
  url: "https://blackvpn.io",
  type: "website",
  robots: "follow, index",
  author: "active117",
};

const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.description} />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />

      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@F2aldi" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Additional SEO Meta */}
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta name="publish_date" property="og:publish_date" content={meta.date} />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}

      {/* Windows 8 app icon */}
      <meta name="msapplication-TileColor" content="#F53838" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />

      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#F53838" />
    </Head>
  );
};

const favicons = [
  { rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-icon-57x57.png" },
  { rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-icon-60x60.png" },
  { rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-icon-72x72.png" },
  { rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-icon-76x76.png" },
  { rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-icon-114x114.png" },
  { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-icon-120x120.png" },
  { rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/apple-icon-144x144.png" },
  { rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-icon-152x152.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-icon-180x180.png" },
  { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#F59A9A" },
  { rel: "icon", href: "/favicon/favicon.ico" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon/favicon-96x96.png" },
  { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon/android-icon-192x192.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export default SeoHead;
