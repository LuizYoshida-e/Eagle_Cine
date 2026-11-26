"use client"

import { GENEROS, type Genero } from "@/types/filme";
import { Notable } from "next/font/google";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsDatabaseDash } from "react-icons/bs";
import z from "zod";

type FilterLabels = {
    buscaTitulo: string;
    buscaTituloPlaceHolder: string;
    genero: string;
    todosGeneros: string;
    generos: Record<Genero, string>;
    dataLancamento: string;
    de: string;
    ate: string;
    notaMinima: string;
    notaPlaceHolder: string;
    duracaoMaxima: string;
    duracaoPlaceHolder: string;
    aplicarFiltros: string;
    limparFiltros: string;
};

export function FiltroForm({ labels }: { labels: FilterLabels }) {
    const [titulo, setTitulo] = useState("")

    const searchParams = useSearchParams();

    const pathname = usePathname()

    const router = useRouter()

    function limparFiltro() {
        router.replace(pathname)
    }





    return (
        <form method="get" className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="Titulo" className="text-sm font-medium">{labels.buscaTitulo}</label>
                    <input
                        type="text"
                        name="Titulo"
                        id="Titulo"
                        placeholder={labels.buscaTituloPlaceHolder}
                        className="w-full rounded-lg border border-amber-900/20 bg-amber-50 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        onChange={Event => { setTitulo(Event.target.value) }}
                        defaultValue={searchParams.get("Titulo") ?? ""}

                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="Genero" className="text-sm font-medium">{labels.genero}</label>
                    <select
                        name="Genero"
                        id="Genero"
                        defaultValue={searchParams.get("Genero") ?? ""}
                        className="w-full rounded-lg border border-amber-900/20 bg-amber-50 px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                    >
                        <option value="">{labels.todosGeneros}</option>
                        {GENEROS.map((genero) => (
                            <option key={genero} value={genero}>
                                {labels.generos[genero]}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium">{labels.dataLancamento}</span>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="dataDe" className="text-xs text-amber-50/90">{labels.de}</label>
                            <input
                                type="date"
                                name="dataDe"
                                id="dataDe"
                                className="w-full min-w-0 rounded-lg border border-amber-900/20 bg-amber-50 px-2 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                                defaultValue={searchParams.get("dataDe") ?? ""}

                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="dataAte" className="text-xs text-amber-50/90">{labels.ate}</label>
                            <input
                                type="date"
                                name="dataAte"
                                id="dataAte"
                                className="w-full min-w-0 rounded-lg border border-amber-900/20 bg-amber-50 px-2 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
                                defaultValue={searchParams.get("dataAte") ?? ""}

                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="nota" className="text-sm font-medium">{labels.notaMinima}</label>
                    <input
                        type="number"
                        min="0"
                        max="10"
                        name="nota"
                        id="nota"
                        placeholder={labels.notaPlaceHolder}
                        className="w-full rounded-lg border border-amber-900/20 bg-amber-50 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        defaultValue={searchParams.get("nota") ?? ""}

                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="duracao" className="text-sm font-medium">{labels.duracaoMaxima}</label>
                    <input
                        type="number"
                        min="0"
                        name="duracao"
                        id="duracao"
                        placeholder={labels.duracaoPlaceHolder}
                        className="w-full rounded-lg border border-amber-900/20 bg-amber-50 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        defaultValue={searchParams.get("duracao") ?? ""}

                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button type="submit" className="rounded-lg bg-amber-900 px-4 py-2 font-semibold text-white transition-colors hover:bg-amber-950">
                    {labels.aplicarFiltros}
                </button>
                <button type="button" className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-amber-950 transition-colors hover:bg-white" onClick={limparFiltro}>
                    {labels.limparFiltros}
                </button>
            </div>
        </form>
    );
}


