import { Header } from "@/components/layout/header";

export default async function FilmesLayout({
  children,
  params,
}: LayoutProps<"/[lang]/filmes">) {
  const { lang } = await params;

  return (
    <>
      <Header
        lang={lang}
        className="bg-slate-800"
      />
      {children}
    </>
  );
}
