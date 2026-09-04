// ВНИМАНИЕ: этот файл — контент конкретного проекта (набор карт/языка/лута).
// При создании нового проекта на основе этого движка редактируется ТОЛЬКО этот файл
// (плюс остальные файлы в src/config/) — компоненты в src/core менять не нужно.


export const translations = {
  ru: {
    siteTitle: 'LDOE Окраина болот — Интерактивная карта',
    siteDescription: 'Интерактивная карта локаций Last Day on Earth: Survival (LDOE) — Окраина болот: лут, боссы, зоны спавна и маршруты.',

    map_bogside_outskirts: 'Окраина болот',
    btn_hide: 'Скрыть всё',
    btn_show: 'Показать всё',
    filters: 'Фильтры',
    cursor_pos: 'X: {x}, Y: {y}',
    out_of_map: 'За пределами карты',
    unker_credits: 'Специально для сообщества ',
    done: "Готово",
    mark_done: "Отметить как готово",
    mark_ignored: "Не буду",
    undo: "Вернуть",
    reset_all: "Сбросить всё",
    confirm_reset_all: "Вы уверены, что хотите отменить выполнение всех ящиков и вернуть все области на базовые позиции?",
    scout_maps: "Карты Разведки",
    bogs_maps: "Карты Болот",
    // Категории
    start: 'Начальная точка',
    layer_zones: 'Случайный спавн',
    location: 'Названия локаций',
    box: 'Ящики',
    box_winch: "Гуманитарный груз",
    box_pickup: 'Ящики с лутом',
    barricade_atv_ram: "Баррикады",
    door_atv_winch: "Дверь на лебёдку ATV",
    door_c4: 'Дверь на взрыв',
    door_axe: 'Дверь под топор',
    door_crowbar: 'Дверь под монтировку',
    door_electrical_panel: 'Дверь с электрощитком',
    door_key: 'Дверь на ключ',
    corpse_keys: 'Ключи для двери',
    unique_resource: 'Уникальный ресурс',
    generator: 'Генератор',

    // Подписи предустановленных позиций area (generic-слоты, общие для всех area,
    // но у каждой area — свои offsetX/offsetY на каждой из них).
    pos_top_left: 'Верхний левый',
    pos_top_center: 'Верхний центр',
    pos_top_right: 'Верхний правый',
    pos_left: 'Слева',
    pos_center: 'Центр',
    pos_right: 'Справа',
    pos_bottom: 'Снизу',
    pos_bottom_left: 'Нижний левый',
    pos_bottom_center: 'Нижний центр',
    pos_bottom_right: 'Нижний правый',

    // Названия area — показываются в попапе позиции области (вместо названия позиции).
    loc_tank: "Танк",
    loc_air_crash: "Вертолет",
    loc_trucks: "Грузовики",
    loc_containers: "Контейнеры",
    loc_houses: "Дома",
    loc_wrecked_cars: "Разбитые авто",
    loc_alpha_drilling_rig: "Буровая установка «Альфа»",
    loc_beta_drilling_rig: "Буровая установка «Бета»",
    loc_gamma_drilling_rig: "Буровая установка «Гамма»",

    // Попап позиции area (AreaPositionPopupContent) — доступен всем пользователям,
    // не только в dev-режиме.
    area_position_confirmed: 'Положение подтверждено',
    area_position_unconfirmed: 'Положение не подтверждено',
    confirm_position: 'Подтвердить положение',
    rotation_label: 'Поворот',
    rotation_reset: 'сброс',
    rotate_by_deg: 'Повернуть на {deg}°',
    switch_to: 'Сменить на',
    loot_alt: 'Лут',
    loot_fullsize_alt: 'Лут (полный размер)',
    loot_example: 'Пример лута',

    // Dev-only: точность данных предустановленной позиции area (x/y/rotation
    // в areas.json), проверена ли она дев-ом в игре — отдельно от
    // area_position_confirmed (то — состояние игрока про текущую позицию).
    data_verified: 'Данные проверены',
    data_unverified: 'Данные не проверены',
    mark_verified: 'Пометить как проверенные',
    mark_unverified: 'Снять пометку проверки',
    confirm_edit_verified_position: 'Эта позиция помечена как проверенная — данные точны. Всё равно изменить их?',
  },
  en: {
    siteTitle: 'LDOE Bogside Outskirts — Interactive Map',
    siteDescription: 'Interactive map for Last Day on Earth: Survival (LDOE). Track locations, loot, bosses, and zones across the Bogside Outskirts.',
    
    map_bogside_outskirts: 'Bogside Outskirts',
    btn_hide: 'Hide All',
    btn_show: 'Show All',
    filters: 'Filters',
    cursor_pos: 'X: {x}, Y: {y}',
    out_of_map: 'Out of map bounds',
    unker_credits: 'Specially for the community ',
    done: "Done",
    mark_done: "Mark as done",
    mark_ignored: "Ignore",
    undo: "Undo",
    reset_all: "Reset All",
    confirm_reset_all: "Are you sure you want to reset all boxes and move all areas back to their base positions?",
    scout_maps: "Scout Maps",
    bogs_maps: "Bogs Maps",
    // Categories
    start: 'Start',
    layer_zones: 'Random spawn',
    location: 'POI titles',
    box: 'Crates',
    box_winch: "Aid Box",
    box_pickup: 'Loot Crates',
    barricade_atv_ram: "Barricade",
    door_atv_winch: "ATV Winch Door",
    door_c4: 'C4 Door',
    door_axe: 'Axe Door',
    door_crowbar: 'Crowbar Door',
    door_electrical_panel: 'Electrical Panel Door',
    door_key: 'Key-Locked Door',
    corpse_keys: 'Door Keys',
    unique_resource: 'Unique Resource',
    generator: 'Generator',

    // Preset area-position slot labels (generic slots shared by every area, each
    // area has its own offsetX/offsetY for each of them).
    pos_top_left: 'Top left',
    pos_top_center: 'Top center',
    pos_top_right: 'Top right',
    pos_left: 'Left',
    pos_center: 'Center',
    pos_right: 'Right',
    pos_bottom: 'Bottom',
    pos_bottom_left: 'Bottom left',
    pos_bottom_center: 'Bottom center',
    pos_bottom_right: 'Bottom right',

    // Area display names — shown in the area position popup instead of the position name.
    loc_tank: "Broken Tank",
    loc_air_crash: "Airplane Crash",
    loc_trucks: "Mil-Trucks",
    loc_containers: "Containers",
    loc_houses: "Houses",
    loc_wrecked_cars: "Wrecked Cars",
    loc_alpha_drilling_rig: "Alpha Drilling Rig",
    loc_beta_drilling_rig: "Beta Drilling Rig",
    loc_gamma_drilling_rig: "Gamma Drilling Rig",

    // Area position popup (AreaPositionPopupContent) — available to all users,
    // not only in dev mode.
    area_position_confirmed: 'Position confirmed',
    area_position_unconfirmed: 'Position not confirmed',
    confirm_position: 'Confirm position',
    rotation_label: 'Rotation',
    rotation_reset: 'reset',
    rotate_by_deg: 'Rotate by {deg}°',
    switch_to: 'Switch to',
    loot_alt: 'Loot',
    loot_fullsize_alt: 'Loot (full size)',
    loot_example: 'Loot example',

    // Dev-only: accuracy of a preset area position's data (x/y/rotation in
    // areas.json), i.e. whether a dev has verified it against the game —
    // separate from area_position_confirmed (that's a player-side state
    // about the area's current position).
    data_verified: 'Data verified',
    data_unverified: 'Data not verified',
    mark_verified: 'Mark as verified',
    mark_unverified: 'Unmark verified',
    confirm_edit_verified_position: 'This position is marked as verified — the data is accurate. Change it anyway?',
  },
};

export type TranslationKey = keyof typeof translations.ru;
