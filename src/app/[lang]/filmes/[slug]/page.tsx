import { FILMES } from "@/data/filmes";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { CatalogoLink } from "@/components/layout/catalogoLink";
import { anoReferencia } from "@/components/filmes/filme-card";
import { Locale } from "@/i18n/config";

type Props = PageProps<"/[lang]/filmes/[slug]">;


export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { lang, slug } = await params;
    if (!hasLocale(lang)) notFound();

    const filme = FILMES.find(item => item.slug === slug);
    if (!filme) notFound();

    const title = filme.traducoes[lang].titulo;
    const description = filme.traducoes[lang].sinopseCurta;

    return {
        title,
        description,

    };
}

export default function Page(props: Props) {
    return (
        <Suspense fallback={<main className="flex-1 bg-gray-100 pl-20 pt-4">Carregando filme...</main>}>
            <DetalhesFilme {...props} />
        </Suspense>
    );
}

async function DetalhesFilme({
    params,
}: Props) {
    const { lang, slug } = await params;
    if (!hasLocale(lang)) notFound();

    const filme = FILMES.find(item => item.slug === slug)

    if (!filme) notFound();

    const dict = await getDictionary(lang);

    function anoFormatado(date:string, lang :Locale){
        return new Intl.DateTimeFormat(anoReferencia[lang] , {
            dateStyle:"long",
            timeZone: 'UTC' 
        }).format(new Date(`${date}`))
    }

    return (
        <main className="flex-1 bg-gray-100">
            <section>   {/* voltar */}
                <CatalogoLink lang={lang} className="flex items-center gap-3 text-xl mb-2 bg-cyan-200 w-fit rounded-2xl p-3 ml-20 mt-4">
                    <FiArrowLeft />{dict.movieCard.voltar}
                </CatalogoLink>

            </section>

            <div className="flex gap-9 ml-20 mt-4">   {/* divisão do voltar */}
                <aside>    {/* Imagem */}
                    <Image
                        src={filme.poster}
                        alt={filme.traducoes[lang].titulo}
                        width={400}
                        height={500}
                        sizes="400px"
                        className="rounded-xl"
                    />
                </aside>

                <section className="flex flex-col gap-5 ">   {/* Corpo */}
                    <span className="flex gap-5">
                        {filme?.generos.map((gen) => (
                            <div key={gen} className="bg-blue-300 p-2 rounded-xl text-[20px]">{gen}</div>
                        ))} </span>
                    <h2 className="text-5xl font-semibold">{filme?.traducoes[lang].titulo}</h2>
                    <div className="flex opacity-70 gap-6">
                        <span className="flex ">{filme?.tituloOriginal} </span>
                        <span>{anoFormatado(filme.dataLancamento, lang)}</span>
                    </div>
                    <span className="text-[18px] flex-wrap max-w-3xl text-justify"><p className="text-2xl">{dict.movieCard.sinopse}</p>{filme?.traducoes[lang].sinopse}</span>
                    <span><h3 className="flex text-[20px]">{dict.movieCard.fichaTecnica}</h3></span>
                    <article className="grid grid-cols-2 gap-6 border border-cyan-600 w-3xl p-9 justify-between px-10 bg-amber-100 rounded-2xl">
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.tituloOriginal}</h4>
                            <p>{filme?.tituloOriginal}</p>
                        </div>
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.direcao}</h4>
                            <p>{filme?.direcao}</p>
                        </div>
                        <div className="flex flex-wrap gap-5 flex-col">
                            <h4 className="text-[14px]">{dict.movieCard.elenco}</h4>
                            {filme.elenco.map((elenco) => (
                                <span key={elenco}>{elenco}</span>
                            ))}
                        </div>
                        <div>
                            <h4 className="text-[14px]">{dict.movieCard.lancamento}</h4>
                            <p>{anoFormatado(filme.dataLancamento, lang)}</p>
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