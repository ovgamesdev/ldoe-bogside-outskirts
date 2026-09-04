import { SITE_AUTHOR, SITE_META, SITE_ORIGIN } from "@/config/site.config"
import type { Metadata } from "next"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: SITE_META.ru.title,
  description: SITE_META.ru.description,
  openGraph: {
    title: SITE_META.ru.title,
    description: SITE_META.ru.description,
    url: "/",
    siteName: SITE_META.ru.siteName,
    locale: SITE_META.ru.ogLocale,
    type: "website",
    images: [
      {
        url: `/og-image-ru.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_META.ru.siteName} Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.ru.title,
    description: SITE_META.ru.description,
    creator: SITE_AUTHOR.name,
    images: [`/og-image-ru.png`],
  },
};

export default function RootPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var savedLang = localStorage.getItem('ldoe_language');
                var lang = (savedLang === 'en' || savedLang === 'ru') ? savedLang : (navigator.language.toLowerCase().startsWith('en') ? 'en' : 'ru');
                var currentPath = window.location.pathname;
                
                // Проверяем, содержит ли путь уже язык (слэш обязателен, чтобы избежать ложных срабатываний)
                if (!currentPath.match(/\\/(en|ru)(\\/|$)/)) {
                  var newPath = currentPath.endsWith('/') ? currentPath + lang + '/' : currentPath + '/' + lang + '/';
                  window.location.replace(newPath);
                }
              } catch (e) {}
            })();
          `,
        }}
      />
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] text-white">
        <p>Загрузка... / Loading...</p>
      </div>
    </>
  );
}