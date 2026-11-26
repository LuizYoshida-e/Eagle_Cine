"use client";

import { CatalogoLink } from "@/components/layout/catalogoLink";
import { useParams } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const messages: Record<string, string> = {
    pt: "Não encontrado",
    en: "Not found",
    es: "No encontrado",
};

export default function NotFound() {
    const { lang } = useParams<{ lang: string; slug: string }>();
    return (
        <section>
            <h1>{messages[lang] ?? messages.pt}</h1>
            {/* voltar */}
            <CatalogoLink lang={lang} className="flex items-center gap-3 text-xl mb-2 bg-emerald-200 w-fit rounded-2xl p-3">
                <FiArrowLeft />Voltar
            </CatalogoLink>

        </section>
    )
}