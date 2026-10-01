import React from 'react';
import Head from 'next/head';

export const SITE_URL = 'https://saifulkhan.github.io';

interface SeoProps {
  title: string;
  description: string;
  path: string; // page path, e.g. '/' or '/software'
}

export default function Seo({ title, description, path }: SeoProps) {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const image = `${SITE_URL}/profile.jpeg`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Saiful Khan" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
