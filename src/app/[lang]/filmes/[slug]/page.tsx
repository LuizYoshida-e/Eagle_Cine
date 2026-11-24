import { FILMES } from "@/data/filmes";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import { Filme } from "@/types/filme";
import notFound from "../../not-found";
import { Locale } from "@/i18n/config";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { CatalogoLink } from "@/components/layout/catalogoLink";


export default async function Page({
    params,
}: PageProps<"/[lang]/filmes/[slug]">) {

    const { lang, slug }: { lang: Locale; slug: string } = await params;
    if (!hasLocale(lang)) notFound();

    const filme = FILMES.find(item => item.slug === slug)

    if (!filme || filme == null || filme == undefined) notFound();

    const traducao = filme.traducoes[lang]

    const dict = await getDictionary(lang);



    return (
        <main className="ml-20 mt-4">
            <section>   {/* voltar */}
                <CatalogoLink lang={lang} className="flex items-center gap-3 text-xl mb-2 bg-emerald-200 w-fit rounded-2xl p-3">
                    <FiArrowLeft />Voltar
                </CatalogoLink>

            </section>

            <div className="flex gap-9">   {/* divisão do voltar */}
                <aside>    {/* Imagem */}
                    <img src={filme?.poster} alt={filme?.traducoes.slug} width={400} height={500} className="rounded-xl" />
                </aside>

                <section className="flex flex-col gap-5">   {/* Corpo */}
                    <span className="flex gap-5">
                        {filme?.generos.map((gen) => (
                            <div key={gen} className="bg-blue-300 p-2 rounded-xl text-[20px]">{gen}</div>
                        ))} </span>
                    <h2 className="text-5xl font-semibold">{filme?.traducoes[lang].titulo}</h2>
                    <div className="flex opacity-70 gap-6">
                        <span className="flex ">{filme?.tituloOriginal} </span>
                        <span>{filme?.dataLancamento}</span>
                    </div>
                    <span className="text-[18px] flex-wrap max-w-3xl text-justify"><p className="text-2xl">Sinopse</p>{filme?.traducoes[lang].sinopse}</span>
                    <span><h3 className="flex text-[20px]">{dict.movieCard.fichaTecnica}</h3></span>
                    <article className="grid grid-cols-2 gap-6 border border-cyan-600 w-fit p-9 justify-between px-10">
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.tituloOriginal}</h4>
                            <p>{filme?.tituloOriginal}</p>
                        </div>
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.direcao}</h4>
                            <p>{filme?.direcao}</p>
                        </div>
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.elenco}</h4>
                            <p>{filme?.elenco}</p>
                        </div>
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.lancamento}</h4>
                            <p>{filme?.dataLancamento}</p>
                        </div>
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.pais}</h4>
                            <p>{filme?.pais}</p>
                        </div>
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.classificacaoIndicativa}</h4>
                            <p>{filme?.classificacao}</p>
                        </div>
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.duracao}</h4>
                            <p>{filme?.duracaoMin}</p>
                        </div>
                    </article>
                </section>
            </div>

        </main>
    )

}