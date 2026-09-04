// Набор карт этого проекта. Единственное место, которое нужно поменять,
// чтобы добавить/убрать/переименовать карту — компоненты в src/core сами
// подстраиваются под этот список (см. AVAILABLE_MAPS ниже).
import { IMapConfig } from '@/core/lib/types'

export const MAP_CONFIG = {
  bogside_outskirts: {
    width: 59812,
    height: 59801,
    markersJson: `/data/bogside_outskirts/markers.json`,
    // zonesJson: `/data/bogside_outskirts/zones.json`,
    // areasJson: `/data/bogside_outskirts/areas.json`,
    tilePath: `/tiles/bogside_outskirts/{z}/{y}/{x}.webp`,
    tileSize: 512,
    minZoom: 0,
    maxZoom: 7,
  }
} as const satisfies Record<string, IMapConfig>;

// MapKey больше не хардкодится строковым union'ом в движке — он выводится
// прямо из ключей MAP_CONFIG. Добавили карту в MAP_CONFIG — она сама
// появилась в MapKey и в AVAILABLE_MAPS, без правок в src/core.
export type MapKey = keyof typeof MAP_CONFIG;

export const AVAILABLE_MAPS = Object.keys(MAP_CONFIG) as MapKey[];

// Карта, которая открывается по умолчанию (когда в URL нет ?map=...).
export const DEFAULT_MAP: MapKey = 'bogside_outskirts';
