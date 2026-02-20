import type { Locale } from "@/i18n.config";

export const dictionaries = {
  en: () => import("./content.en").then((module) => module),
  es: () => import("./content.es").then((module) => module),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.es();
};
