export type EtLang = "uz" | "ru";

export interface EtMessages {
  appTitle: string;
  lightMode: string;
  darkMode: string;
  notifications: string;
  profile: string;
  voltageComposition: string;
  total: string;
  layerNotConnected: string;
  loading: string;
  noData: string;
  layers: string;
  deviceLayers: string;
  lineLayers: string;
  transformer: string;
  substation: string;
  externalSource: string;
  line: string;
  indicators: string;
  hideIndicators: string;
  showIndicators: string;
  hideLayers: string;
  showLayers: string;
  totalTransformers: string;
  totalNetwork: string;
  selectedTransformers: string;
  selectedLines: string;
  unitCount: string;
  unitMeters: string;
  unitKm: string;
  devicesTab: string;
  linesTab: string;
  search: string;
  filter: string;
  all: string;
  colId: string;
  colType: string;
  colVoltage: string;
  colConnection: string;
  colStatus: string;
  selectDevice: string;
  noMatch: string;
  loadingMap: string;
  needData: string;
  traceTitle: string;
  traceLoading: string;
  traceWaitingMap: string;
  traceNoNetwork: string;
  traceNoConfigs: string;
  traceTabInput: string;
  traceTabResults: string;
  traceTypes: string;
  traceConnected: string;
  traceSubnetwork: string;
  traceConnectedHint: string;
  traceDownstreamHint: string;
  traceUpstreamHint: string;
  traceSubnetworkHint: string;
  traceStarts: string;
  traceBarriers: string;
  traceStartsHint: string;
  traceBarriersHint: string;
  traceAddStart: string;
  traceAddBarrier: string;
  traceClickMap: string;
  traceRun: string;
  traceRunning: string;
  traceReset: string;
  traceRemove: string;
  traceNoResults: string;
  traceResult: string;
  traceElements: string;
  traceDevice: string;
  traceNeedInputs: string;
  traceNeedStart: string;
  traceRunError: string;
  traceNoAsset: string;
  attributeInfo: string;
  close: string;
  name: string;
  type: string;
  voltage: string;
  power: string;
  status: string;
  connectedLines: string;
  active: string;
  inactive: string;
  upstream: string;
  downstream: string;
  langUz: string;
  langRu: string;
  mapTypes: string;
  hideMapTypes: string;
  showMapTypes: string;
  basemapSatellite: string;
  basemapHybrid: string;
  basemapStreets: string;
  basemapNavigation: string;
  basemapTopo: string;
  basemapTerrain: string;
  basemapOceans: string;
  basemapGray: string;
  basemapDark: string;
  basemapNight: string;
  basemapOsm: string;
}

const uz: EtMessages = {
  appTitle: "Elektr tarmoqlari monitoringi",
  lightMode: "Yorug' rejim",
  darkMode: "Qorong'u rejim",
  notifications: "Bildirishnomalar",
  profile: "Profil",
  voltageComposition: "Kuchlanish tarkibi",
  total: "Jami",
  layerNotConnected: "Qatlam ulanmagan",
  loading: "Yuklanmoqda…",
  noData: "Ma'lumot yo'q",
  layers: "Qatlamlar",
  deviceLayers: "Elektr tarmog'i uskunalari",
  lineLayers: "Elektr tarmog'i",
  transformer: "Transformator",
  substation: "Podstansiya",
  externalSource: "Tashqi manba",
  line: "Liniya",
  indicators: "Asosiy ko'rsatkichlar",
  hideIndicators: "Asosiy ko'rsatkichlarni yopish",
  showIndicators: "Asosiy ko'rsatkichlarni ochish",
  hideLayers: "Qatlamlarni yopish",
  showLayers: "Qatlamlarni ochish",
  totalTransformers: "Umumiy Transformatorlar",
  totalNetwork: "Umumiy elektr tarmoqlari",
  selectedTransformers: "Tanlangan transformatorlar",
  selectedLines: "Tanlangan liniyalar",
  unitCount: "ta",
  unitMeters: "m",
  unitKm: "km",
  devicesTab: "Elektr tarmog'i uskunalari",
  linesTab: "Elektr tarmog'i",
  search: "Qidirish...",
  filter: "Filtr",
  all: "Barchasi",
  colId: "ID",
  colType: "Uskuna turi",
  colVoltage: "Kuchlanish",
  colConnection: "Bog'lanish turi",
  colStatus: "Holati",
  selectDevice: "Xaritada uskuna tanlang",
  noMatch: "Mos yozuv topilmadi",
  loadingMap: "Xarita yuklanmoqda…",
  needData:
    "Ma'lumot yo'q. Widget sozlamalarida Select data orqali 2 qatlamni ulang (ixtiyoriy — Web Mapdan ham topiladi).",
  traceTitle: "Tarmoq izlash",
  traceLoading: "Trace yuklanmoqda…",
  traceWaitingMap: "Xarita yuklanishini kuting…",
  traceNoNetwork:
    "Web Mapda Utility Network topilmadi. UN_Electrik Web Mapni tekshiring.",
  traceNoConfigs:
    "Shared Trace Configuration yo'q. ArcGIS Pro da Named Trace Configuration yarating va share qiling.",
  traceTabInput: "Kiritish",
  traceTabResults: "Natijalar",
  traceTypes: "Trace turlari",
  traceConnected: "Bog'langan",
  traceSubnetwork: "Subtarmoq",
  traceConnectedHint:
    "Boshlang'ich nuqtadan bog'langan barcha tarmoq elementlarini aniqlaydi.",
  traceDownstreamHint: "Oqim yo'nalishida pastga qarab trace qiladi.",
  traceUpstreamHint: "Oqim yo'nalishida yuqoriga qarab trace qiladi.",
  traceSubnetworkHint: "Subtarmoq chegarasidagi elementlarni ko'rsatadi.",
  traceStarts: "Boshlang'ich nuqtalar",
  traceBarriers: "To'siqlar",
  traceStartsHint: "Trace uchun boshlang'ich nuqtalarni xaritadan qo'shing.",
  traceBarriersHint: "Ixtiyoriy — to'siqlar shart emas. Bajarish uchun boshlang'ich nuqta yetarli.",
  traceAddStart: "Boshlang'ich nuqta qo'shish",
  traceAddBarrier: "To'siq qo'shish",
  traceClickMap: "Xaritadagi uskuna yoki liniyaga bosing…",
  traceRun: "Bajarish",
  traceRunning: "Ishlamoqda…",
  traceReset: "Tozalash",
  traceRemove: "O'chirish",
  traceNoResults: "Hali natija yo'q. Kiritish bo'limidan Bajarishni bosing.",
  traceResult: "Natija",
  traceElements: "element",
  traceDevice: "Uskuna",
  traceNeedInputs: "Kamida 1 trace turi va 1 boshlang'ich nuqta kerak.",
  traceNeedStart:
    "Boshlang'ich nuqta qo'shing: + bosing, keyin xaritadagi liniya yoki uskunani bosing.",
  traceRunError: "Trace bajarilmadi.",
  traceNoAsset:
    "Tarmoq elementi topilmadi. Liniya yoki uskuna ustiga bosing (bo'sh joy emas).",
  attributeInfo: "Atribut ma'lumotlar",
  close: "Yopish",
  name: "Nomi",
  type: "Turi",
  voltage: "Kuchlanish",
  power: "Quvvati",
  status: "Holati",
  connectedLines: "Bog'langan liniyalar",
  active: "Faol",
  inactive: "Nofaol",
  upstream: "Yuqori oqim",
  downstream: "Pastga oqim",
  langUz: "UZ",
  langRu: "RU",
  mapTypes: "Xarita turi",
  hideMapTypes: "Xarita turini yopish",
  showMapTypes: "Xarita turini tanlash",
  basemapSatellite: "Sun'iy yo'ldosh",
  basemapHybrid: "Gibrid",
  basemapStreets: "Ko'cha xaritasi",
  basemapNavigation: "Navigatsiya",
  basemapTopo: "Topografik",
  basemapTerrain: "Relyef",
  basemapOceans: "Okean",
  basemapGray: "Kulrang",
  basemapDark: "Qora rejim",
  basemapNight: "Tungi xarita",
  basemapOsm: "OpenStreetMap",
};

const ru: EtMessages = {
  appTitle: "Мониторинг электрических сетей",
  lightMode: "Светлый режим",
  darkMode: "Тёмный режим",
  notifications: "Уведомления",
  profile: "Профиль",
  voltageComposition: "Состав напряжения",
  total: "Всего",
  layerNotConnected: "Слой не подключён",
  loading: "Загрузка…",
  noData: "Нет данных",
  layers: "Слои",
  deviceLayers: "Оборудование электросети",
  lineLayers: "Электрическая сеть",
  transformer: "Трансформатор",
  substation: "Подстанция",
  externalSource: "Внешний источник",
  line: "Линия",
  indicators: "Основные показатели",
  hideIndicators: "Скрыть основные показатели",
  showIndicators: "Показать основные показатели",
  hideLayers: "Скрыть слои",
  showLayers: "Показать слои",
  totalTransformers: "Всего трансформаторов",
  totalNetwork: "Общая длина сети",
  selectedTransformers: "Выбранные трансформаторы",
  selectedLines: "Выбранные линии",
  unitCount: "шт",
  unitMeters: "м",
  unitKm: "км",
  devicesTab: "Оборудование электросети",
  linesTab: "Электрическая сеть",
  search: "Поиск...",
  filter: "Фильтр",
  all: "Все",
  colId: "ID",
  colType: "Тип оборудования",
  colVoltage: "Напряжение",
  colConnection: "Тип связи",
  colStatus: "Состояние",
  selectDevice: "Выберите оборудование на карте",
  noMatch: "Совпадений не найдено",
  loadingMap: "Загрузка карты…",
  needData:
    "Нет данных. В настройках через Select data выберите 2 слоя (необязательно — слои находятся и из Web Map).",
  traceTitle: "Трассировка сети",
  traceLoading: "Загрузка трассировки…",
  traceWaitingMap: "Ожидание загрузки карты…",
  traceNoNetwork:
    "Utility Network не найден в Web Map. Проверьте UN_Electrik.",
  traceNoConfigs:
    "Нет Shared Trace Configuration. Создайте Named Trace Configuration в ArcGIS Pro и опубликуйте.",
  traceTabInput: "Ввод",
  traceTabResults: "Результаты",
  traceTypes: "Типы трассировки",
  traceConnected: "Связанные",
  traceSubnetwork: "Подсеть",
  traceConnectedHint:
    "Определяет все элементы сети, связанные с начальной точкой.",
  traceDownstreamHint: "Трассировка вниз по направлению потока.",
  traceUpstreamHint: "Трассировка вверх по направлению потока.",
  traceSubnetworkHint: "Показывает элементы в пределах подсети.",
  traceStarts: "Начальные точки",
  traceBarriers: "Барьеры",
  traceStartsHint: "Добавьте начальные точки трассировки на карте.",
  traceBarriersHint: "Необязательно — барьеры не нужны. Для запуска достаточно начальной точки.",
  traceAddStart: "Добавить начальную точку",
  traceAddBarrier: "Добавить барьер",
  traceClickMap: "Нажмите на объект сети на карте…",
  traceRun: "Запуск",
  traceRunning: "Выполняется…",
  traceReset: "Очистить",
  traceRemove: "Удалить",
  traceNoResults: "Результатов пока нет. Нажмите «Запуск» во вкладке «Ввод».",
  traceResult: "Результат",
  traceElements: "элементов",
  traceDevice: "Оборудование",
  traceNeedInputs: "Нужны минимум 1 тип трассировки и 1 начальная точка.",
  traceNeedStart:
    "Добавьте начальную точку: нажмите +, затем линию или оборудование на карте.",
  traceRunError: "Трассировка не выполнена.",
  traceNoAsset:
    "Элемент сети не найден. Нажмите на линию или оборудование (не пустое место).",
  attributeInfo: "Атрибутивные данные",
  close: "Закрыть",
  name: "Название",
  type: "Тип",
  voltage: "Напряжение",
  power: "Мощность",
  status: "Состояние",
  connectedLines: "Связанные линии",
  active: "Активен",
  inactive: "Неактивен",
  upstream: "Восходящий поток",
  downstream: "Нисходящий поток",
  langUz: "UZ",
  langRu: "RU",
  mapTypes: "Тип карты",
  hideMapTypes: "Скрыть тип карты",
  showMapTypes: "Выбрать тип карты",
  basemapSatellite: "Спутник",
  basemapHybrid: "Гибрид",
  basemapStreets: "Улицы",
  basemapNavigation: "Навигация",
  basemapTopo: "Топографическая",
  basemapTerrain: "Рельеф",
  basemapOceans: "Океан",
  basemapGray: "Серая",
  basemapDark: "Тёмный режим",
  basemapNight: "Ночная карта",
  basemapOsm: "OpenStreetMap",
};

const DICTS: Record<EtLang, EtMessages> = { uz, ru };

export function getMessages(lang: EtLang): EtMessages {
  return DICTS[lang] || uz;
}

export function translateEquipment(label: string, t: EtMessages): string {
  const n = String(label || "").toLowerCase();
  if (n.includes("transform")) return t.transformer;
  if (n.includes("podstansiya") || n.includes("substation") || n.includes("подстанц")) {
    return t.substation;
  }
  if (n.includes("tashqi") || n.includes("manba") || n.includes("external") || n.includes("внешн")) {
    return t.externalSource;
  }
  if (n.includes("liniya") || n.includes("line") || n.includes("линия")) return t.line;
  return label;
}

export function translateStatus(value: string, t: EtMessages): string {
  const n = String(value || "").toLowerCase();
  if (n === "faol" || n === "активен" || n === "active") return t.active;
  if (n === "nofaol" || n === "неактивен" || n === "inactive") return t.inactive;
  return value;
}

export function translateFlow(value: string, t: EtMessages): string {
  const n = String(value || "").toLowerCase();
  if (n.includes("yuqori") || n.includes("upstream") || n.includes("восход")) {
    return t.upstream;
  }
  if (n.includes("past") || n.includes("downstream") || n.includes("нисход")) {
    return t.downstream;
  }
  return value;
}

/** Named trace configuration titles from Web Map (Connected, Upstream, …). */
export function translateTraceType(title: string, t: EtMessages): string {
  const n = String(title || "").toLowerCase().trim();
  if (!n) return title;
  if (n === "connected" || n.includes("connect") || n.includes("bog'lan") || n.includes("связан")) {
    return t.traceConnected;
  }
  if (n === "downstream" || n.includes("downstream") || n.includes("past") || n.includes("нисход")) {
    return t.downstream;
  }
  if (n === "upstream" || n.includes("upstream") || n.includes("yuqori") || n.includes("восход")) {
    return t.upstream;
  }
  if (n === "subnetwork" || n.includes("subnet") || n.includes("subtarmoq") || n.includes("подсет")) {
    return t.traceSubnetwork;
  }
  return title;
}

export function translateTraceTypeHint(title: string, t: EtMessages): string {
  const n = String(title || "").toLowerCase().trim();
  if (!n) return "";
  if (n === "connected" || n.includes("connect") || n.includes("bog'lan") || n.includes("связан")) {
    return t.traceConnectedHint;
  }
  if (n === "downstream" || n.includes("downstream") || n.includes("past") || n.includes("нисход")) {
    return t.traceDownstreamHint;
  }
  if (n === "upstream" || n.includes("upstream") || n.includes("yuqori") || n.includes("восход")) {
    return t.traceUpstreamHint;
  }
  if (n === "subnetwork" || n.includes("subnet") || n.includes("subtarmoq") || n.includes("подсет")) {
    return t.traceSubnetworkHint;
  }
  return title;
}
