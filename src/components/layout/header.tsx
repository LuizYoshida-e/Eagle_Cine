import { SeletorIdioma } from "./seletor-idioma";
import { getDictionary, hasLocale } from '@/i18n/dictionaries'
import { notFound } from "next/navigation";



export async function Header({lang}:{lang:string}) {

    if (!hasLocale(lang)) notFound()

    const dict = await getDictionary(lang);
    let inicio = dict.common.inicio
    let catalogo = dict.common.catalogo

    return (
        
        <header>
            <section className="flex justify-between items-baseline">
                <div className="flex items-baseline">
                    <p
                        className="font-bold text-4xl z-20">
                        Eagle

                        <span
                            className="bg-yellow-200 text-[22px] font-bold flex-1 py-2 px-2 rounded-xl ml-3 ">
                            CINE
                        </span>
                    </p>
                </div>

                <div className="w-fit flex flex-row gap-5 items-center">
                    <SeletorIdioma inicio={inicio} catalogo={catalogo}/>
                </div>

            </section>


        </header>
    );
}