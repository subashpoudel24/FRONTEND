import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Subash Poudel - Full Stack Developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@subashpoudel" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/img/me.png" as="image" type="image/png" />
        <link rel="preload" href="/img/me2.png" as="image" type="image/png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&family=Sora:wght@100..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        
        {/* Website Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Subash Poudel - Full Stack Developer",
              "description": "Professional Full Stack Developer portfolio showcasing web development, mobile app development, and digital marketing services.",
              "url": "https://subashpoudel.com",
              "author": {
                "@type": "Person",
                "name": "Subash Poudel"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://subashpoudel.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
