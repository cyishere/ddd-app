import Head from "next/head";

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  const description = "DDD App, learn German nouns with SRS & colors.";
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <title>{title} | Learn German Nouns</title>
    </Head>
  );
};

export default SEO;
