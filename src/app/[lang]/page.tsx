import { LOCALES } from "@/i18n/config";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import styles from './styles.module.css'
import { CatalogoLink } from "@/components/layout/catalogoLink";


export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params

  return (
    <section className="
    absolute bg-linear-to-b from-[#8399f1] via-[#7d7bf9] to-[#0a0a2d]
    w-screen  h-screen
    flex-1  top-0   right-0
    " >
        <main className="h-[inherit]">
          <div className="mt-60 ml-10 ">
            <p>Nosso catálogo com</p>
            <h1 className="text-7xl">Seus filmes <span className="text-amber-400">preferidos</span> aqui</h1>
            <h2 className="text-4xl">Explore mais filmes</h2>
            <CatalogoLink lang ={lang} className="bg-sky-200 rounded-xl py-4 px-9 my-2 flex items-center gap-3 cursor-pointer w-fit z-10">Ver Catálogo <FiArrowRight/></CatalogoLink>
          </div>
        </main>

        <footer>
          <p className="text-white ">&copy; </p>
        </footer>
    </section>  
  );
}

