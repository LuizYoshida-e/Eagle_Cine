import { Locale } from "@/i18n/config";
import { Filme } from "@/types/filme";
import Image from "next/image";
import Link from "next/link";
import { FiStar } from "react-icons/fi";

export const anoReferencia= {
    "pt-BR" : "pt-BR",
    en : "en-US",
    es : "es-ES"
} 


export function FilmeCard({ filme,lang }: { filme: Filme; lang:Locale}) {

    function anoFormatado(date:string, lang :Locale){
        return new Intl.DateTimeFormat(anoReferencia[lang] , {
            dateStyle:"long",
        }).format(new Date(`${date}`))
    }

    return (
        <Link href={`/${lang}/filmes/${filme.slug}`} className="bg-slate-900 flex flex-row rounded-xl p-2 gap-9 justify-between items-center px-8 h-50" >
            <article className="flex gap-6 flex-col justify-center text-white">
                <span className="text-[20px]">{filme.traducoes[lang].titulo}</span>
                <span>{anoFormatado(filme.dataLancamento, lang)}</span>
                <span>{filme.pais}</span>
            </article>

            <div className="w-fit relative">
                <span>
                    <Image
                        src={filme.poster}
                        alt={filme.traducoes[lang].titulo}
                        width={150}
                        height={250}
                        sizes="128px"
                        className="max-w-32 max-h-40 rounded-xl"
                    />
                </span>
                <span className="absolute top-1 right-2 text-white bg-transparent bg:opacity-45 text-[12px] flex gap-1 items-center">{filme.nota}<FiStar /></span>
            </div>

        </Link>
    )
}

