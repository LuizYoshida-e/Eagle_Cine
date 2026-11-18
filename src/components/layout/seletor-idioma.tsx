"use client";

export function SeletorIdioma() {
    return (
        <div className="flex w-fit flex-row gap-5 rounded-2xl border bg-transparent px-5 text-2xl">
            <button type="button" className="cursor-pointer focus:bg-amber-300 font-bold">
                PT
            </button>
            <button type="button" className="cursor-pointer focus:bg-amber-300">
                EN
            </button>
            <button type="button" className="cursor-pointer focus:bg-amber-300">
                ES
            </button>
        </div>
    );
}