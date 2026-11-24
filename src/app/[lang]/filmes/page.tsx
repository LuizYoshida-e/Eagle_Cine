import { FILMES } from '@/data/filmes'
import { FilmeCard } from '@/components/filmes/filme-card';
import { LOCALES } from '@/i18n/config';
import notFound from '../not-found';
import { FiltroForm } from '@/components/filmes/filtros-form';

export default async function Page({
    params,
    searchParams,
}: PageProps<"/[lang]/filmes">) {

    const { lang: routeLang } = await params;
    const lang = LOCALES.find((locale) => locale === routeLang);
    if (!lang) return notFound();

    const query = await searchParams;

    const tituloFiltro = String(query?.Titulo ?? "").toLowerCase();
    const generoFiltro = typeof query?.Genero === "string" ? query.Genero :"";
    const dataDeFiltro = String(query?.dataDe ?? "")
    const dataAteFiltro = String(query?.dataAte ?? "")
    const notaFiltro = Number(query?.nota ?? "")
    const duracaoFiltro = Number(query?.duracao ?? "")

    const filmesFiltrados = FILMES.filter((filme) => {
        const tituloFiltrado =
        !tituloFiltro || filme.traducoes[lang].titulo.toLowerCase().includes(tituloFiltro)
        
        const generoFiltrado =
        !generoFiltro || filme.generos.some((genero) => genero === generoFiltro);

        const dataDeFiltrado=
        !dataDeFiltro || filme.dataLancamento >= dataDeFiltro;

        const dataAteFiltrado=
        !dataAteFiltro || filme.dataLancamento <= dataAteFiltro;

        const notaFiltrado=
        !notaFiltro || filme.nota >= notaFiltro;

        const duracaoFiltrado=
        !duracaoFiltro || filme.duracaoMin <= duracaoFiltro;


        return tituloFiltrado && generoFiltrado && dataDeFiltrado && dataAteFiltrado && notaFiltrado && duracaoFiltrado;


})


    return (

        <article className="mt-5">
            <h1 className="text-4xl mx-8 my-4">Catálogo</h1>
            <div className="mx-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
                <aside className="rounded-xl bg-amber-600 p-5 text-white shadow-md">
                    <h2 className="mb-5 text-xl font-semibold">Filtros</h2>
                    <FiltroForm lang={lang} />
                </aside>
                <section className="grid grid-cols-1 gap-6 xl:grid-cols-2 2xl:grid-cols-3">
                    {filmesFiltrados.length === 0 ? (
                        <p className="text-2xl">Nenhum resultado encontrado</p>
                    ) : (
                        filmesFiltrados.map((filme) => (
                            <FilmeCard key={filme.slug} filme={filme} lang={lang} />
                        ))
                    )}
                </section>
            </div>


        </article>
    )

}