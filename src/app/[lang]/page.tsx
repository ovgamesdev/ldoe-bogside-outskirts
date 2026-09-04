import { SITE_AUTHOR, SITE_META, SITE_ORIGIN } from '@/config/site.config'
import { MainMapClient } from '@/core/components/MainMapClient'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return [
    { lang: 'ru' },
    { lang: 'en' },
  ];
}

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { lang } = await props.params;
  const isEn = lang === 'en';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const meta = isEn ? SITE_META.en : SITE_META.ru;

  const path = `/${lang}/`;

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: meta.title,
    description: meta.description,
    manifest: `${basePath}/site-${isEn ? 'en' : 'ru'}.webmanifest`,
    alternates: {
      canonical: path,
      languages: {
        ru: '/ru/',
        en: '/en/',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: path,
      siteName: meta.siteName,
      locale: meta.ogLocale,
      type: 'website',
      images: [{ url: `/og-image-${lang}.png`, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_AUTHOR.twitterHandle,
      title: meta.title,
      description: meta.description,
      creator: SITE_AUTHOR.twitterHandle,
      images: [`/og-image-${lang}.png`],
    },
  };
}

export default async function Page(props: Props) {
  // Распаковываем params, чтобы Next.js корректно привязал этот компонент к статическим путям
  const { lang } = await props.params;
  const isEn = lang === 'en';
  const meta = isEn ? SITE_META.en : SITE_META.ru;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: meta.jsonLdName,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any (Web)',
    url: `${SITE_ORIGIN}/${lang}/`,
    inLanguage: isEn ? 'en' : 'ru',
    description: meta.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">
        {meta.title} — {isEn ? 'Last Day on Earth: Survival interactive map' : 'Интерактивная карта Last Day on Earth: Survival'}
      </h1>
      <MainMapClient />
    </>
  );
}