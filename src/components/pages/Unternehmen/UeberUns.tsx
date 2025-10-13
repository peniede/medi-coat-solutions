
import { FlaskConical } from "lucide-react";

export default function UeberUns() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="ueber-uns-title">
      <h2 id="ueber-uns-title" className="text-3xl md:text-4xl font-semibold">Über uns</h2>
      <p className="mt-3 text-slate-600 max-w-3xl">
        MediCoat Solutions steht für präzise, reproduzierbare PVD-Beschichtungen für die Medizintechnik. Unsere Mission:
        Funktion und Patientensicherheit zusammenbringen – durch validierte Prozesse, Transparenz und partnerschaftliche
        Zusammenarbeit.
      </p>

      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h3 className="text-2xl md:text-3xl font-semibold">Innovation trifft Präzision</h3>
          <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
          <p className="text-slate-700 leading-relaxed">
            Unser Unternehmen wurde <strong>2025</strong> von <strong>Dr. Fabian Seifried</strong> gegründet – mit der Vision,
            die Medizintechnik durch modernste Beschichtungslösungen sicherer, effizienter und nachhaltiger zu machen.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Wir sind spezialisiert auf <strong>PVD-Schichten</strong>, die höchste Qualitäts- und Sicherheitsstandards erfüllen.
            Unsere Prozesse sind nach <strong>DIN EN ISO 13485</strong> zertifiziert. Mit unserem Know-how unterstützen wir
            Medizintechnikhersteller dabei, Produkte zu entwickeln, die den steigenden Anforderungen an Funktionalität,
            Haltbarkeit und Biokompatibilität gerecht werden.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500">
            <FlaskConical className="w-48 h-48 text-slate-400" />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">Erfahrung und Kompetenz</h3>
        <p className="text-slate-700 leading-relaxed mt-3 max-w-4xl">
          Dr. Seifried bringt seine langjährige industrielle und wissenschaftliche Expertise in der Beschichtungs- und
          Werkstofftechnologie in das Unternehmen ein. Diese Kombination aus Forschungstiefe und Praxiserfahrung bildet das
          Fundament für unsere innovativen Lösungen und unser Verständnis für die besonderen Herausforderungen der
          Medizintechnik.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">Unser Anspruch</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { title: "Qualität", text: "Zertifizierte Prozesse und konsequente Einhaltung internationaler Standards." },
            { title: "Innovation", text: "Permanente Weiterentwicklung unserer Beschichtungstechnologien." },
            { title: "Partnerschaft", text: "Enge Zusammenarbeit mit Kunden für maßgeschneiderte Lösungen." },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-3xl"
              style={{
                border: "5px solid transparent",
                borderRadius: "1.5rem",
                backgroundImage:
                  "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                color: "#000000",
              }}
            >
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">Unser Ziel</h3>
        <p className="text-slate-700 leading-relaxed mt-3 max-w-4xl">
          Wir wollen die Zukunft der Medizintechnik mitgestalten – durch zuverlässige, präzise und nachhaltige
          Beschichtungslösungen, die einen echten Mehrwert für Patienten und Hersteller schaffen.
        </p>
      </section>
    </div>
  );
}
