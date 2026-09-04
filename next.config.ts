import type { NextConfig } from 'next'
import { REPO_NAME } from './src/config/site.config'

// const isGithubActions = process.env.GITHUB_ACTIONS || false;
// Точное название репозитория задаётся один раз в src/config/site.config.ts —
// именно этот файл нужно менять при создании нового проекта, next.config.ts
// трогать не нужно.
// const currentBasePath = isGithubActions ? `/${REPO_NAME}` : '';
const currentBasePath = `/${REPO_NAME}`;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  
  allowedDevOrigins: ['192.168.0.104'],
  // Устанавливаем basePath для встроенных механизмов Next.js
  basePath: currentBasePath,
  assetPrefix: currentBasePath,
  
  // Пробрасываем вычисленный basePath в клиентскую часть кода
  env: {
    NEXT_PUBLIC_BASE_PATH: currentBasePath,
  },
  
  images: {
    unoptimized: true, // На GitHub Pages нет Node.js сервера для оптимизации картинок
  },
};

export default nextConfig;