import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_URL } from './Seo';

// Old standalone pages now live as sections on the home page; keep their URLs working.
export default function RedirectToSection({ section }: { section: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/#${section}`);
  }, [router, section]);

  return (
    <Head>
      <title>Saiful Khan</title>
      <link rel="canonical" href={`${SITE_URL}/#${section}`} />
      <meta name="robots" content="noindex" />
      <meta httpEquiv="refresh" content={`0; url=/#${section}`} />
    </Head>
  );
}
