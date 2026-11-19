"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";


type Language = "pt-BR" | "EN" | "ES";



export function SeletorIdioma() {
    const { lang } = useParams<{ lang: string }>();
    const [selectedLanguage, setSelectedLanguage] = useState(lang);
    const pathname = usePathname();
    const router = useRouter();
    const pathSemLang = pathname.replace(/^\/[^/]+/, "");



    return (
        <section className="flex  gap-6 items-center z-20">
            <Link href={`/${lang}/`}>início</Link>
            <Link href={`/${lang}/filmes`}>catalogo</Link>
            <div className="flex w-3xs flex-row rounded-2xl border bg-transparent text-2xl justify-evenly overflow-hidden p-0.5 ml-4">
                <button
                    type="button"
                    className={`flex-1 cursor-pointer ${lang == "pt-BR" ? "bg-amber-200 font-bold rounded-2xl" : ""}`}
                    id="pt-BR"
                    onClick={() => { router.replace(`/pt-BR${pathSemLang}`) }}
                >
                    PT
                </button>

                <button
                    type="button"
                    id="EN"
                    onClick={() => { router.replace(`/EN${pathSemLang}`) }}
                    className={`flex-1 cursor-pointer ${lang == "EN" ? "bg-amber-200 font-bold rounded-2xl" : ""}`}
                >
                    EN
                </button>
                <button
                    type="button"
                    className={`flex-1 cursor-pointer ${lang == "ES" ? "bg-amber-200 font-bold rounded-2xl" : ""}`}
                    id="ES"
                    onClick={() => { router.replace(`/ES${pathSemLang}`); }}
                >
                    ES
                </button>


            </div>
        </section>
    );
}