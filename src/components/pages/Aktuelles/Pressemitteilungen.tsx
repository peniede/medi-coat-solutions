
import { useState } from "react";
import { GradientCard } from "@/shared/ui/Atoms";
export default function Pressemitteilungen(){
  const [open, setOpen] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Pressemitteilungen</h1>
      <section className="mt-10">
        <p className="text-slate-700 leading-relaxed mt-4">Als junges Unternehmen veröffentlichen wir ausgewählte Meldungen.</p>
      </section>
      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Aktuelle Mitteilungen</h3>
        <GradientCard><h4 className="text-lg font-semibold underline cursor-pointer" onClick={()=>setOpen(!open)}>MediCoat Solutions präsentiert innovative PVD-Schichten...</h4>
        {open && (<><p className="text-sm text-slate-600 mt-1">📅 15. März 2025 – Kieselbronn</p><p className="text-slate-700 mt-4">Details ...</p></>)}</GradientCard>
      </section>
    </section>
  );
}
