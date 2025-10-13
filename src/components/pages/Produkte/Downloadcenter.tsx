
export default function Downloadcenter() {
  const DocLink = ({ title, desc, href }) => (
    <a href={href} className="block rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition" download>
      <div className="flex items-start justify-between gap-3">
        <div><h4 className="font-semibold text-slate-900">{title}</h4>{desc && <p className="text-sm text-slate-600 mt-1">{desc}</p>}</div>
        <span className="text-xs text-blue-700 underline whitespace-nowrap">PDF herunterladen</span>
      </div>
    </a>
  );
  const Section = ({ title, children }) => (<section className="mt-12"><h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
    <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />{children}</section>);
  const CategoryHeading = ({ children }) => (
    <div className="md:col-span-2 rounded-xl p-[2px] bg-gradient-to-r from-blue-800/20 via-blue-600/20 to-green-500/20">
      <div className="rounded-xl bg-white px-4 py-2"><h4 className="text-lg font-semibold text-black">{children}</h4></div>
    </div>
  );
  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="downloadcenter-title">
      <h2 id="downloadcenter-title" className="text-3xl md:text-4xl font-semibold">Downloadcenter</h2>
      <div className="h bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      <p className="mt-3 text-slate-600 max-w-3xl">Willkommen im Downloadcenter von MediCoat Solutions. Hier finden Sie aktuelle und relevante Dokumente: Datenblätter zu unseren PVD‑Schichten, Begleitschein & Anforderungen für das Beschichtungsgut, AGBs und die Datenschutzerklärung.</p>
      <Section title="Dokumente zum Download">
        <div className="grid md:grid-cols-2 gap-6">
          <CategoryHeading>Datenblätter</CategoryHeading>
          <DocLink title="TiN-mod – Der „Allrounder“" desc="Vielseitig einsetzbar..." href="/downloads/datenblatt-tin-mod.pdf"/>
          <DocLink title="CrN-mod – Die „Erfahrene“" desc="Robust, langlebig..." href="/downloads/datenblatt-crn-mod.pdf"/>
          <DocLink title="ZrN – Die „Unterschätzte“" desc="Besondere Eigenschaften..." href="/downloads/datenblatt-zrn.pdf"/>
          <DocLink title="CrN‑MC – Die „Starke“" desc="Maximale Belastbarkeit..." href="/downloads/datenblatt-crn-mc.pdf"/>
          <DocLink title="DLC – Der „Diamant“ (externer Partner)" desc="Elegant und widerstandsfähig" href="/downloads/datenblatt-dlc.pdf"/>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <CategoryHeading>Sonstige Dokumente</CategoryHeading>
          <DocLink title="Begleitschein für das Beschichtungsgut" href="/downloads/begleitschein-beschichtungsgut.pdf" />
          <DocLink title="Anforderungen an das Beschichtungsgut" href="/downloads/anforderungen-beschichtungsgut.pdf" />
          <DocLink title="AGBs" href="/downloads/agbs.pdf" />
          <DocLink title="Datenschutzerklärung" href="/downloads/datenschutzerklaerung.pdf" />
          <DocLink title="REACH-Konformität" href="/downloads/REACH-Bescheinigung.pdf" />
        </div>
      </Section>
      <p className="mt-10 text-slate-700">Alle Dokumente stehen Ihnen als PDF zum Download zur Verfügung.</p>
    </main>
  );
}
