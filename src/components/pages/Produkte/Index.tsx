
import { Link } from "react-router-dom";
import { FileText, Wrench, Download } from "lucide-react";

export default function ProdukteIndex() {
  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-3xl hover:shadow-md transition h-full flex flex-col"
      style={{border:"3px solid transparent",borderRadius:"1.5rem",backgroundImage:"linear-gradient(#ffffff,#ffffff),linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
      backgroundOrigin:"border-box",backgroundClip:"padding-box, border-box",color:"#000"}}>{children}</div>
  );
  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="produkte-title">
      <h1 id="produkte-title" className="text-3xl md:text-4xl font-semibold">Produkte</h1>
      <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      <p className="mt-3 text-slate-600 max-w-3xl">PVD-Schichten und Dienstleistungen für medizintechnische Anwendungen – von der Entwicklung über die Serie bis zur Dokumentation.</p>
      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <Link to="/produkte/portfolio"><Card><div className="mb-3"><FileText /></div><h3 className="font-semibold">Portfolio an PVD-Schichten</h3><p className="text-sm text-slate-700 mt-1">TiN, CrN, DLC & Co. – Eigenschaften und Einsatzfelder.</p></Card></Link>
        <Link to="/produkte/dienstleistungen"><Card><div className="mb-3"><Wrench /></div><h3 className="font-semibold">Dienstleistungen</h3><p className="text-sm text-slate-700 mt-1">Prozessentwicklung, Vor-/Nachbehandlung, Logistik.</p></Card></Link>
        <Link to="/produkte/downloadcenter"><Card><div className="mb-3"><Download /></div><h3 className="font-semibold">Downloadcenter</h3><p className="text-sm text-slate-700 mt-1">Datenblätter, Spezifikationen, Richtlinien.</p></Card></Link>
      </section>
    </main>
  );
}
