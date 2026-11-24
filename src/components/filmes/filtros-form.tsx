"use client"

import { FILMES } from "@/data/filmes";
import { Locale } from "@/i18n/dictionaries";
import { GENEROS, type Genero } from "@/types/filme";
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const GENERO_LABELS: Record<Genero, string> = {
    acao: "Ação",
    aventura: "Aventura",
    animacao: "Animação",
    comedia: "Comédia",
    crime: "Crime",
    drama: "Drama",
    fantasia: "Fantasia",
    ficcao: "Ficção",
    romance: "Romance",
    suspense: "Suspense",
};

export function FiltroForm({ lang }: { lang: Locale }) {
    const [titulo, setTitulo] = useState("")


    const searchParams = useSearchParams();

    const pathname = usePathname()

    const router = useRouter()

    console.log(titulo + searchParams + " espaco " + pathname)

    function replace() {
        router.replace(`?&${titulo}`)
    }



    return (
        <form method="get" className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="Titulo" className="text-sm font-medium">Busca por título</label>
                    <input
                        type="text"
                        name="Titulo"
                        id="Titulo"
                        placeholder="Digite aqui o título"
                        className="w-full rounded-lg border border-amber-900/20 bg-amber-50 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        onChange={Event => { replace; setTitulo(Event.target.value) }}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="Genero" className="text-sm font-medium">Gênero</label>
                    <select
                        name="Genero"
                        id="Genero"
                        defaultValue={searchParams.get("Genero") ?? ""}
                        className="w-full rounded-lg border border-amber-900/20 bg-amber-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                    >
                        <option value="">Todos os gêneros</option>
                        {GENEROS.map((genero) => (
                            <option key={genero} value={genero}>
                                {GENERO_LABELS[genero]}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium">Data de lançamento</span>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="dataDe" className="text-xs text-amber-50/90">De</label>
                            <input
                                type="date"
                                name="dataDe"
                                id="dataDe"
                                className="w-full min-w-0 rounded-lg border border-amber-900/20 bg-amber-50 px-2 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="dataAte" className="text-xs text-amber-50/90">Até</label>
                            <input
                                type="date"
                                name="dataAte"
                                id="dataAte"
                                className="w-full min-w-0 rounded-lg border border-amber-900/20 bg-amber-50 px-2 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="nota" className="text-sm font-medium">Nota mínima</label>
                    <input
                        type="number"
                        min="0"
                        max="10"
                        name="nota"
                        id="nota"
                        placeholder="0 a 10"
                        className="w-full rounded-lg border border-amber-900/20 bg-amber-50 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="duracao" className="text-sm font-medium">Duração máxima (minutos)</label>
                    <input
                        type="number"
                        min="0"
                        name="duracao"
                        id="duracao"
                        placeholder="Ex.: 120"
                        className="w-full rounded-lg border border-amber-900/20 bg-amber-50 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button type="submit" className="rounded-lg bg-amber-900 px-4 py-2 font-semibold text-white transition-colors hover:bg-amber-950">
                    Aplicar filtros
                </button>
                <button type="submit" className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-amber-950 transition-colors hover:bg-white" onClick={replace}>
                    Limpar filtros
                </button>
            </div>
        </form>
    );
}

function getElementById(arg0: string) {
    throw new Error("Function not implemented.");
}
