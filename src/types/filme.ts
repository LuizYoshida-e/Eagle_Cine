

import type { Locale } from '@/i18n/config';
export const GENEROS = [
    'acao', 'aventura', 'animacao', 'comedia', 'crime',
    'drama', 'fantasia', 'ficcao', 'romance', 'suspense',
] as const;
export type Genero = (typeof GENEROS)[number];
export const PAISES = ['BR', 'US', 'GB', 'JP', 'KR', 'NZ', 'FR'] as const;
export type Pais = (typeof PAISES)[number];
export const CLASSIFICACOES = ['L', '10', '12', '14', '16', '18'] as const;
export type Classificacao = (typeof CLASSIFICACOES)[number];
export interface FilmeTraducao {
    titulo: string;
    sinopseCurta: string;
    sinopse: string;
}
export interface Filme {
    slug: string;
    tituloOriginal: string;
    dataLancamento: string; // ISO, ex.: '1972-03-24' 
    nota: number;
    duracaoMin: number;
    generos: readonly Genero[];
    direcao: string;
    elenco: readonly string[];
    pais: Pais;
    classificacao: Classificacao;
    poster: string;
    traducoes: Record<Locale, FilmeTraducao>;
}