import { LOCALES } from "@/i18n/config";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { CatalogoLink } from "@/components/layout/catalogoLink";
import { Header } from "@/components/layout/header";
import { BBH_Bogle } from 'next/font/google'
import { getDictionary, hasLocale } from '@/i18n/dictionaries'
import { notFound } from "next/navigation";
import hero from "@/../public/posters/hero.png"



export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

const bbh = BBH_Bogle({
  weight: "400",
})

export default async function Home({ params }: PageProps<'/[lang]'>) {

  const { lang } = await params

  if (!hasLocale(lang)) notFound();




  const dict = await getDictionary(lang);

  return (
    <section className="
    flex flex-1 flex-col overflow-hidden text-white
    ">
      <Header lang={lang} className="relative z-10" />

      <div className="opacity-100">
      <Image
        src={hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />
      </div>

      <main className="relative z-10 flex-1">
        <div className="mt-60 ml-10 flex flex-col gap-5">
          <p>{dict.home.suporteTitulo}</p>
          <h1 className={`${bbh.className} text-7xl`}>{dict.home.tituloUm} <span className="text-amber-300">{dict.home.tituloDois}</span> {dict.home.tituloTres}</h1>
          <h2 className="text-4xl">{dict.home.subTitulo}</h2>
          <CatalogoLink lang={lang} className="bg-sky-200 rounded-xl py-4 px-9 flex items-center gap-3 cursor-pointer w-fit z-10 text-black">{dict.home.buton} <FiArrowRight /></CatalogoLink>
        </div>
      </main>

      <footer className="relative z-10 mt-auto">
        <p className="m-3">&copy; Eagle IT pro solutions</p>
      </footer>
    </section>
  );
}

