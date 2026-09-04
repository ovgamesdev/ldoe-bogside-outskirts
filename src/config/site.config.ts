// Идентичность конкретного сайта/проекта. Меняется целиком при создании
// нового проекта на основе этого движка (src/core) — остальной код трогать
// не нужно. Значения тут используются в next.config.ts, в app/layout.tsx,
// app/page.tsx, app/[lang]/page.tsx и в src/core (BASE_URL/STORAGE_PREFIX).

import { TranslationKey } from './translations'

// Точное название GitHub-репозитория — используется как basePath в
// next.config.ts (GitHub Pages отдаёт сайт не из корня домена, а из
// подпапки /<repo>/) и как BASE_URL для ссылок на статику в коде.
export const REPO_NAME = 'ldoe-bogside-outskirts';

// Базовый путь ассетов сайта. Раньше жил в lib/initial-data.ts (движок),
// теперь — здесь, единственном месте, специфичном для проекта.
export const BASE_URL = `/${REPO_NAME}`;

// Полный origin+repo, нужен для metadataBase/canonical/jsonLd.url в
// app/layout.tsx, app/page.tsx и app/[lang]/page.tsx.
export const SITE_ORIGIN = `https://ovgamesdev.github.io/${REPO_NAME}`;

// Префикс ключей localStorage. Сайт хостится на GitHub Pages, где localStorage
// общий на весь origin (username.github.io) — т.е. другой проект на том же
// аккаунте по другому пути мог бы случайно использовать такие же короткие
// ключи ('marker_statuses' и т.п.) и конфликтовать с этим сайтом. Префикс —
// ключ самого сайта (совпадает с REPO_NAME) — исключает такие коллизии.
export const STORAGE_PREFIX = REPO_NAME;

// Ссылки на "сестринские" проекты (другие сайты на этом же движке) —
// используются в MobileHeader/MainMapClient как внешние ссылки "↗" в списке
// карт. Можно перечислить сколько угодно (0, 1, несколько). Пустой массив —
// ни одного пункта в меню не показывается.
export const EXTERNAL_SITE_LINKS: { url: string; translationKey: TranslationKey }[] = [
  {
    url: 'https://ovgamesdev.github.io/ldoe-scout/',
    translationKey: 'scout_maps',
  },
  {
    url: 'https://ovgamesdev.github.io/ldoe-bogs/',
    translationKey: 'bogs_maps',
  },
];

// Текст под каждый язык для <title>, meta description, OpenGraph, Twitter
// card, JSON-LD и site.webmanifest name — используется в
// app/layout.tsx / app/page.tsx / app/[lang]/page.tsx.
export const SITE_META = {
  ru: {
    title: 'LDOE Окраина болот — Интерактивная карта',
    titleTemplate: '%s | LDOE Окраина болот',
    description:
      'Интерактивная карта локаций игры Last Day on Earth: Survival (LDOE) — Окраина болот. Лут, боссы, зоны спавна и маршруты.',
    siteName: 'LDOE Окраина болот',
    ogLocale: 'ru_RU',
    applicationName: 'LDOE Окраина болот',
    jsonLdName: 'LDOE Окраина болот',
  },
  en: {
    title: 'LDOE Bogside outskirts — Interactive Map',
    titleTemplate: '%s | LDOE Bogside outskirts',
    description:
      'Interactive map for Last Day on Earth: Survival (LDOE). Track locations, loot, bosses, and zones across the Bogside outskirts.',
    siteName: 'LDOE Bogside outskirts',
    ogLocale: 'en_US',
    applicationName: 'LDOE Bogside outskirts',
    jsonLdName: 'LDOE Bogside outskirts',
  },
} as const;

export const SITE_KEYWORDS = [
  'LDOE',
  'Last Day on Earth',
  'LDOE Окраина болот',
  'LDOE интерактивная карта',
  'Окраина болот',
  'Bogside Outskirts',
  'LDOE Bogside Outskirts',
  'LDOE interactive map',
  'Last Day on Earth survival',
  'карта лута LDOE',
];

export const SITE_AUTHOR = {
  name: 'ovgamesdev',
  url: 'https://github.com/ovgamesdev',
  twitterHandle: '@ovgamesdev',
};

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
