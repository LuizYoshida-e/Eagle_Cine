import { SeletorIdioma } from "./seletor-idioma";

export function Header() {
    return (
        <header>
            <section className="flex justify-between items-baseline">
                <div className="flex items-baseline">
                    <p
                        className="font-bold text-4xl">
                        Eagle

                        <span
                            className="bg-yellow-200 text-[22px] font-bold flex-1 py-2 px-2 rounded-xl">
                            CINE
                        </span>
                    </p>
                </div>

                <div className="w-fit">
                    <SeletorIdioma />
                </div>

            </section>


        </header>
    );
}