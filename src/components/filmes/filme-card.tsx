import { Locale } from "@/i18n/config";
import { Filme } from "@/types/filme";
import Link from "next/link";
import { FiStar } from "react-icons/fi";


export function FilmeCard({ filme,lang }: { filme: Filme; lang:Locale}) {
    return (
        <Link href={`/${lang}/filmes/${filme.slug}`} className="bg-amber-600 flex flex-row rounded-xl p-2 gap-9 justify-between px-2 h-50" >
            <article className="flex gap-6 flex-col justify-center">
                <span className="text-[20px]">{filme.traducoes[lang].titulo}</span>
                <span>{filme.dataLancamento}</span>
                <span>{filme.pais}</span>
            </article>

            <div className="w-fit relative">
                <span><img src={filme.poster} alt={filme.traducoes[lang].titulo} className="max-w-32 max-h-40 rounded-xl" /></span> {/* Tentei usar sizes mas não consegui fazer funcionar */}
                <span className="absolute top-1 right-2 text-white bg-black bg:opacity-45 text-[12px] flex gap-1 items-center">{filme.nota}<FiStar /></span>
            </div>

        </Link>
    )
}

