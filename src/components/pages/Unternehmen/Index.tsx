
import { Link } from "react-router-dom";
import { Building2, Users, MapPin } from "lucide-react";

export default function UnternehmenIndex() {
  const Card = ({ children }) => (
    <div
      className="bg-white p-6 rounded-3xl hover:shadow-md transition h-full flex flex-col"
      style={{
        border: "3px solid transparent",
        borderRadius: "1.5rem",
        backgroundImage:
          "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        color: "#0f172a",
      }}
    >
      {children}
    </div>
  );

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Unternehmen</h1>
      <div className="h-1 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      <p className="mt-3 text-slate-700 max-w-3xl">
        Lernen Sie MediCoat Solutions kennen: Vision, Menschen und Standorte. Die Inhalte dieser Rubrik sind bewusst von der
        Startseite getrennt, um diese fokussiert zu halten.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <Link to="/unternehmen/ueber-uns">
          <Card>
            <Building2 className="mb-3 opacity-80" />
            <h3 className="font-semibold">Über uns</h3>
            <p className="text-sm text-slate-700 mt-1">Selbstverständnis, Historie und Qualitätsversprechen.</p>
          </Card>
        </Link>
        <Link to="/unternehmen/team">
          <Card>
            <Users className="mb-3 opacity-80" />
            <h3 className="font-semibold">Team / Ansprechpartner</h3>
            <p className="text-sm text-slate-700 mt-1">Ihre direkten Kontakte – transparent und persönlich.</p>
          </Card>
        </Link>
        <Link to="/unternehmen/standorte">
          <Card>
            <MapPin className="mb-3 opacity-80" />
            <h3 className="font-semibold">Standorte</h3>
            <p className="text-sm text-slate-700 mt-1">Produktion & Verwaltung – Wege und Anfahrt.</p>
          </Card>
        </Link>
      </div>
    </main>
  );
}
