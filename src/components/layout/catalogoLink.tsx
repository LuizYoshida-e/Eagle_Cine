import Link from "next/link"
import { ReactNode } from "react"


export function CatalogoLink({lang, children, className}:{
    lang:string,
    children:ReactNode,
    className?: string | undefined
}){
    return(
        <Link href={`/${lang}/filmes`} className={className}>
            {children}
        </Link>
    )
}