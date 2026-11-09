
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://energiqtech.com";

export default function SEO({ title, description, path = "/" }) {
  const canonical = new URL(path, BASE_URL).href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="EnerG IQ Tech" />
      <meta
        property="og:image"
        content="https://energiqtech.com/favicon.png"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://energiqtech.com/favicon.png"
      />
    </Helmet>
  );
}

