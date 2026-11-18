

export const LOCALES = ['pt-BR', 'en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'pt-BR';


export function isLocale(){
    if (!LOCALES)
        return(
    console.log("erro")
    )
}

