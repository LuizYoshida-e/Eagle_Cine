import { FilmeCard } from '@/components/filmes/filme-card';
import { FILMES } from '@/data/filmes'
import { isLocale } from '@/i18n/config';
import notFound from '../not-found';

export default async function Page({
    params,
}: PageProps<"/[lang]/filmes">) {

    const { lang } = await params;
    if (!isLocale(lang)) notFound();

    return (
        <article className="mt-5">
            <h1 className="text-4xl mx-8 my-4">Catálogo</h1>
            <div>
                <section className="grid gap-20 flex-wrap grid-cols-4 row-auto ">
                    {FILMES.map((filme) => (
                        <FilmeCard key={filme.slug} filme={filme} lang={lang}></FilmeCard>
                    ))}
                </section>
            </div>


        </article>
    )

}