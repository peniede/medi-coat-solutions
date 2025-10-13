
import { MapPin, Building2, ShieldCheck } from "lucide-react";

export default function Standorte() {
  const Card = ({ children }) => (
    <div className="bg-white rounded-3xl p-6" style={{ border: "5px solid transparent", borderRadius: "1.5rem",
      backgroundImage:"linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
      backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box", color: "#0f172a"}}>{children}</div>
  );
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Standorte</h1>
      <div className="h bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      <p className="mt-3 text-slate-600 max-w-3xl">Unser zentraler Standort für Entwicklung, Beschichtung und Qualitätssicherung.</p>
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold">Unser Firmensitz</h2>
          <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
          <p className="text-slate-700 mt-3 max-w-4xl">Der Hauptsitz unseres Unternehmens befindet sich in:</p>
          <address className="not-italic mt-3">
            <div className="flex items-start gap-3 text-slate-800 font-medium">
              <MapPin className="w-6 h-6 mt-0.5 opacity-70" />
              <div>Ludwig-Wolf-Straße 23<br />75249 Kieselbronn</div>
            </div>
          </address>
          <p className="text-slate-700 mt-4 max-w-4xl">Von hier aus steuern wir sämtliche Prozesse – von der Entwicklung über die Qualitätssicherung bis hin zur Kundenbetreuung.</p>
        </div>
        <div className="lg:col-span-5">
          <Card>
            <div className="flex items-start gap-3">
              <Building2 className="w-6 h-6 mt-1 opacity-70" />
              <div>
                <h3 className="font-semibold">Kernfunktionen am Standort</h3>
                <ul className="mt-2 text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Entwicklung & Prozessdesign</li><li>Beschichtung (PVD) & Validierung</li><li>Qualitätssicherung & Dokumentation</li><li>Kundenbetreuung & Projektmanagement</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
