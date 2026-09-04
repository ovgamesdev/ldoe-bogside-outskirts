# Что изменилось

Код разделён на две зоны:

```
src/
  config/            ← ВСЁ специфичное для этого проекта (карта, тексты, метаданные)
    site.config.ts   ← REPO_NAME, BASE_URL, STORAGE_PREFIX, EXTERNAL_SITE_LINK,
                         SITE_META (title/description/og/jsonLd на ru и en),
                         SITE_KEYWORDS, SITE_AUTHOR, GA_MEASUREMENT_ID
    maps.config.ts   ← MAP_CONFIG, MapKey (выводится из MAP_CONFIG), AVAILABLE_MAPS, DEFAULT_MAP
    translations.ts  ← весь словарь переводов + TranslationKey

  core/              ← ДВИЖОК, одинаков для всех карт, переезжает в отдельный репозиторий
    components/      ← MapViewInner, MainMapClient, MobileHeader, MobileBottomSheet,
                         ImageModal, DevToolsPanel, BoxPickupLootContent
    context/         ← LanguageContext.tsx (генерик, тянет данные из src/config/translations.ts)
    lib/             ← types.ts (GroupsKeys/ALL_GROUPS/ICON_CONFIG/sortGroups и т.п.), analytics.ts

  app/               ← остаётся в проекте (это требование роутинга Next.js),
                         но теперь это тонкие файлы, которые только читают
                         конфиг и рендерят core-компоненты
```

next.config.ts теперь читает `REPO_NAME` из `src/config/site.config.ts` — сам файл
трогать не нужно.

## Что менять при создании нового проекта (нового набора карт)

Всё сводится к папке `src/config/` + `public/`:

1. `src/config/site.config.ts` — REPO_NAME, тексты SITE_META, EXTERNAL_SITE_LINK.
2. `src/config/maps.config.ts` — список карт (MAP_CONFIG).
3. `src/config/translations.ts` — переводы под новый набор карт/лута.
4. `public/data`, `public/loot`, `public/tiles`, `og-image-*.png`, `site-*.webmanifest`.

Ничего в `src/core/` и `src/app/` менять не требуется — они переиспользуются как есть.

## Как физически разнести на 2 git-репозитория

Рекомендуемый вариант для Next.js — **git submodule**, а не npm-пакет: это
обычные файлы на диске, `next dev` подхватывает изменения в них мгновенно, без
`npm link` и без риска задублировать React в двух `node_modules`.

### 1. Создать core-репозиторий

```bash
mkdir ldoe-core && cd ldoe-core
git init
cp -r /path/to/this/project/src/core/* .
git add . && git commit -m "initial core"
git remote add origin git@github.com:ovgamesdev/ldoe-core.git
git push -u origin main
```

### 2. В map-репозитории подключить core как submodule

```bash
cd ldoe-bogside-outskirts   # текущий проект
rm -rf src/core
git submodule add git@github.com:ovgamesdev/ldoe-core.git src/core
git submodule update --init --recursive
```

`tsconfig.json` менять не нужно — алиас `@/*` уже указывает на `./src/*`, а значит
`@/core/...` и `@/config/...` резолвятся автоматически.

### 3. Разработка одновременно в обоих репозиториях

```bash
npm run dev   # в map-репозитории — правки в src/core подхватываются сразу (hot reload)
```

Коммитить изменения нужно раздельно:

```bash
# правка движка
cd src/core
git add . && git commit -m "fix: ..." && git push        # уходит в ldoe-core

# фиксация новой версии движка в проекте карты
cd ../..
git add src/core && git commit -m "chore: bump core"     # уходит в ldoe-bogside-outskirts
```

### 4. Второй (и третий, и т.д.) map-проект

```bash
mkdir ldoe-scout && cd ldoe-scout
git init
git submodule add git@github.com:ovgamesdev/ldoe-core.git src/core
# скопировать src/app, src/config (и отредактировать!), package.json, next.config.ts, public/
```

Если движок вырастет и понадобятся версии/релизы/откаты — тогда есть смысл
перейти с submodule на настоящий npm-пакет (`@ovgamesdev/ldoe-core`, публикуемый как
git-зависимость или в приватный registry), с `transpilePackages` в
`next.config.ts` и `npm link`/pnpm workspaces для локальной разработки.
Но для 1–3 карт submodule проще и решает задачу без лишней инфраструктуры.

## Проверено

- `npx tsc --noEmit` — чисто, ни одной ошибки типов.
- `npm run build` — доходит до сборки страниц; единственные ошибки —
  недоступность fonts.googleapis.com в тестовой песочнице (сеть) и
  не связанное с рефакторингом предупреждение Tailwind4 `@theme` в globals.css.
  У вас в обычном окружении с доступом в интернет это соберётся штатно.

## Осталось сделать вам вручную (не код, а данные/ассеты)

- Добавить обратно `public/` (data, loot, tiles, манифесты, og-картинки) — в
  выгруженном вами архиве их не было.
- Проверить `src/config/site.config.ts` — там сейчас те же значения, что были
  захардкожены раньше (ldoe-bogside-outskirts), при заведении нового проекта их нужно
  заменить.
