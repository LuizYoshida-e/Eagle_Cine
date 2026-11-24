import { LOCALES } from "@/i18n/config";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import styles from './styles.module.css'
import { CatalogoLink } from "@/components/layout/catalogoLink";
import {BBH_Bogle} from 'next/font/google'
import {getDictionary, hasLocale} from '@/i18n/dictionaries'
import { notFound } from "next/navigation";



export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

  const bbh = BBH_Bogle({
  weight:"400",
})

export default async function Home({ params }: PageProps<'/[lang]'>) {

  const { lang } = await params
  if (!hasLocale(lang)) notFound()
    


  const dict = await getDictionary(lang);

  return (
    <section className="
    absolute bg-linear-to-b from-[#8399f1] via-[#7d7bf9] to-[#0a0a2d]
    w-screen  h-screen
    flex-1  top-0   right-0
    " >
        <main className="flex-1">
          <div className="mt-60 ml-10 flex flex-col gap-5">
            <p>{dict.home.suporteTitulo}</p>
            <h1 className={`${bbh.className} text-7xl`}>{dict.home.tituloUm} <span className="text-amber-400">{dict.home.tituloDois}</span> {dict.home.tituloTres}</h1>
            <h2 className="text-4xl">{dict.home.subTitulo}</h2>
            <CatalogoLink lang ={lang} className="bg-sky-200 rounded-xl py-4 px-9 flex items-center gap-3 cursor-pointer w-fit z-10">{dict.home.buton} <FiArrowRight/></CatalogoLink>
          </div>
        </main>

        <footer>
          <p className="text-white absolute bottom-0 m-3">&copy; Eagle IT pro solutions</p>
        </footer>
    </section>  
  );
}

