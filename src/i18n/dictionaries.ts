import { LOCALES } from './config'


const dictionaries = {
    'en': () => import('./dictionaries/en.json').then((module) => module.default),
    'es': () => import('./dictionaries/es.json').then((module) => module.default),
    'pt-BR': () => import('./dictionaries/pt-BR.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries
export function hasLocale(locale: string): locale is Locale{
    return LOCALES.includes(locale)
}
export const getDictionary = async (locale: Locale) => dictionaries[locale]()