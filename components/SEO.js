import Head from 'next/head';

const SEO = ({
  title = "Subash Poudel - Full Stack Developer | React, Next.js, MongoDB Expert",
  description = "Professional Full Stack Developer Subash Poudel with 5+ years experience. Expert in React, Next.js, MongoDB, JavaScript. 20+ projects completed. Available for web development services.",
  image = "/img/me.png",
  url = "",
  type = "website",
  keywords = "Subash Poudel, Full Stack Developer, React Developer, Next.js Developer, MongoDB Expert, JavaScript Developer, Web Developer Nepal",
  author = "Subash Poudel",
  canonical = ""
}) => {
  const siteUrl = 'https://subashpoudel.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : fullUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Subash Poudel - Full Stack Developer" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@subashpoudel" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="NP" />
      <meta name="geo.placename" content="Nepal" />
      <meta name="language" content="English" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
    </Head>
  );
};

export default SEO;