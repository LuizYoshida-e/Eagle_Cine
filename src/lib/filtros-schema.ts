import { z } from "zod";

export const userSchema = z.object({
    Titulo: z.string().catch(""),
    Genero: z.string().catch(""),
    dataDe: z.string().catch(""),
    dataAte: z.string().catch(""),
    nota: z.coerce.number().min(0).max(10).catch(0),
    duracao: z.coerce.number().int().min(0).catch(0),
});