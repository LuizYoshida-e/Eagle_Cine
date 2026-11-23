import { redirect } from "next/navigation";


export const LOCALES = ['pt-BR', 'en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'pt-BR';


export function isLocale({lang} : {lang:Locale}){
    if (!LOCALES)
        return(
    redirect("/")
    )
}

