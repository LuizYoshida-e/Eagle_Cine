import { SeletorIdioma } from "./seletor-idioma";
import { getDictionary, hasLocale } from '@/i18n/dictionaries'
import { notFound } from "next/navigation";
import { Suspense } from "react";



export async function Header({
    lang,
    className,
}: {
    lang: string;
    className?: string;
}) {

    if (!hasLocale(lang)) notFound()

    const dict = await getDictionary(lang);
    let inicio = dict.common.inicio
    let catalogo = dict.common.catalogo

    return (

        <header className={className}>
            <section className="flex justify-between items-baseline px-6 py-4">
                <div className="flex items-baseline">
                    <p
                        className="font-bold text-4xl z-20 text-white">
                        Eagle

                        <span
                            className="bg-yellow-200 text-[22px] font-bold flex-1 py-2 px-2 rounded-xl ml-3 text-black">
                            CINE
                        </span>
                    </p>
                </div>

                <Suspense fallback={null}>
                    <div className="w-fit flex flex-row gap-5 items-center text-white text-[20px]">
                        <SeletorIdioma inicio={inicio} catalogo={catalogo} lang={lang} />
                    </div>
                </Suspense>
            </section>


        </header>
    );
}