import { FILMES } from '@/data/filmes'
import { FilmeCard } from '@/components/filmes/filme-card';
import { LOCALES } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import notFound from './not-found';
import { FiltroForm } from '@/components/filmes/filtros-form';
import { userSchema } from '@/lib/filtros-schema'

export default async function Page({
    params,
    searchParams,
}: PageProps<"/[lang]/filmes">) {

    const { lang: routeLang } = await params;
    const lang = LOCALES.find((locale) => locale === routeLang);
    if (!lang) return notFound();

    const dict = await getDictionary(lang);

    const query = await searchParams;

    const filters = userSchema.parse(query);

    const filmesFiltrados = FILMES.filter((filme) => {
        const tituloFiltrado =
            !filters.Titulo || filme.traducoes[lang].titulo.toLowerCase().includes(filters.Titulo.toLowerCase());

        const generoFiltrado =
            !filters.Genero || filme.generos.some((genero) => genero === filters.Genero);

        const dataDeFiltrado =
            !filters.dataDe || filme.dataLancamento >= filters.dataDe;

        const dataAteFiltrado =
            !filters.dataAte || filme.dataLancamento <= filters.dataAte;

        const notaFiltrado =
            !filters.nota || filme.nota >= filters.nota;

        const duracaoFiltrado =
            !filters.duracao || filme.duracaoMin <= filters.duracao;

        return tituloFiltrado && generoFiltrado && dataDeFiltrado && dataAteFiltrado && notaFiltrado && duracaoFiltrado;
    });

    return (
        <article className="flex-1 bg-gray-100">
            <div className='flex gap-5 items-center'>
                <h1 className="text-4xl mx-8 my-4">{dict.common.catalogo}</h1>
                <p>{dict.common.quantidadefilmes} {filmesFiltrados.length} {dict.common.filmes}</p>
            </div>
            <div className="mx-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
                <aside className="rounded-xl bg-slate-900 p-5 text-white shadow-md">
                    <h2 className="mb-5 text-xl font-semibold">{dict.filtro.filtroTitulo}</h2>
                    <FiltroForm labels={dict.filtro} />
                </aside>
                <section className="grid grid-cols-1 gap-6 xl:grid-cols-2 2xl:grid-cols-3">
                    {filmesFiltrados.length === 0 ? (
                        <p className="text-2xl">{dict.catalog.semResultados}</p>
                    ) : (
                        filmesFiltrados.map((filme) => (
                            <FilmeCard key={filme.slug} filme={filme} lang={lang} />
                        ))
                    )}
                </section>
            </div>


        </article>
    );
}