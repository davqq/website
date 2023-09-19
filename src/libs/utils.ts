import { ui, defaultLang } from "./ui.ts";

export function getLanguage() {
  if (typeof navigator !== "undefined" && navigator.language in ui) {
    return navigator.language as keyof typeof ui;
  }
  return defaultLang;
}

export function useTranslations() {
  const lang = getLanguage();

  return function translation(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key];
  };
}
