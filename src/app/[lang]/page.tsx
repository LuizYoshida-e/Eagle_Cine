import { LOCALES } from "@/i18n/config";
import Image from "next/image";

export function generateStaticParams(){
    return LOCALES.map((lang) => ({lang}))
}

export default async function Home({params}:PageProps<'/[lang]'>) {
  const {lang} = await params

  return (
    <div >
      <main >
        <h1>home teste</h1>
      </main>
    </div>
  );
}
