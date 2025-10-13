import { Link } from 'react-router-dom'

export default function Team(){
  const person = { 
    name: "Dr. Fabian Seifried", 
    role: "Geschäftsführung / Gründer", 
    email: "fabian.seifried@medicoat.example" 
  };
  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="team-title">
      <h2 id="team-title" className="text-3xl md:text-4xl font-semibold">Team / Ansprechpartner</h2>
      <p className="mt-3 text-slate-600 max-w-3xl">Wir sind für Sie da. Sprechen Sie uns an – direkt und ohne Umwege.</p>
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h3 className="text-2xl md:text-3xl font-semibold">Ihr direkter Ansprechpartner</h3>
          <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
          <p className="text-slate-700 leading-relaxed">
            Unser Unternehmen wird von <strong>{person.name}</strong> geleitet. Als Gründer bringt er langjährige wissenschaftliche und industrielle Erfahrung in der Beschichtungs- und Werkstofftechnologie ein.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white font-medium shadow">
              Kontaktformular öffnen
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500">
            <div className="text-center px-6">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-slate-200" />
              <h4 className="font-semibold">{person.name}</h4>
              <p className="text-sm text-slate-600">{person.role}</p>
              <a className="text-sm text-blue-700 underline mt-2 inline-block" href={`mailto:${person.email}`}>{person.email}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
