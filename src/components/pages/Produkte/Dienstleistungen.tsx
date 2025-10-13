
import { ShieldCheck, Layers, Repeat, Atom, Sparkles, Workflow, Eraser, EyeOff } from "lucide-react";
import { GradientBar, GradientCard } from "@/shared/ui/Atoms";

function Section({ icon: Icon, title, kicker, children, id }:{icon:any,title:string,kicker?:string,children:any,id:string}) {
  return (
    <section id={id}>
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">{Icon && <Icon className="w-6 h-6 opacity-80" aria-hidden />}{title}</h2>
      <GradientBar /> {kicker && <p className="text-slate-600 max-w-3xl">{kicker}</p>}
      <div className="mt-4 text-slate-700 leading-relaxed max-w-4xl">{children}</div>
    </section>
  );
}

function Bullet({ icon: Icon, children }:{icon:any,children:any}) {
  return <li className="flex items-start gap-3"><Icon className="mt-1 h-5 w-5" aria-hidden /><span>{children}</span></li>;
}

function Overview() {
  const OverviewCard = ({ href, icon: Icon, title, desc }:{href:string,icon:any,title:string,desc?:string}) => (
    <a href={href} className="block group focus:outline-none">
      <div className="bg-white p-6 rounded-3xl hover:shadow-md transition" style={{border:"3px solid transparent",borderRadius:"1.5rem",
      backgroundImage:"linear-gradient(#ffffff,#ffffff),linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",backgroundOrigin:"border-box",backgroundClip:"padding-box, border-box",color:"#000"}}>
        <div className="mb-3 opacity-80"><Icon className="w-6 h-6" aria-hidden /></div>
        <h3 className="font-semibold inline-flex items-center gap-1">{title}</h3>
        {desc ? <p className="text-sm text-slate-700 mt-1">{desc}</p> : null}
      </div>
    </a>
  );
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <OverviewCard href="#pvd" icon={Atom} title="PVD-Beschichten" desc="Unser Kerngeschäft: präzise, reproduzierbare Funktionsschichten."/>
      <OverviewCard href="#strahlen" icon={Sparkles} title="Strahlen zur Oberflächenoptimierung" desc="Perfekte Vorbereitung: Reinigen, Verdichten, Antireflex-Optimierung."/>
      <OverviewCard href="#strategie" icon={Workflow} title="Strategieberatung" desc="Prozessgestaltung von der Auswahl bis zur Integration."/>
    </div>
  );
}

export default function Dienstleistungen() {
  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="page-title">
      <h1 id="page-title" className="text-3xl md:text-4xl font-semibold">Dienstleistungen</h1>
      <div className="space-y-12 mt-8">
        <Overview />
        <Section id="pvd" icon={Atom} title="PVD-Beschichten – unser Kerngeschäft" kicker="Im Mittelpunkt unserer Arbeit steht das auftragsbezogene PVD-Beschichten (Physical Vapour Deposition) von Kundenbauteilen.">
          <p>Mit diesem hochpräzisen Verfahren veredeln wir Oberflächen für die Medizintechnik, um höchste Anforderungen an Qualität, Funktionalität und Langlebigkeit zu erfüllen.</p>
          <p className="font-medium mt-4">Unsere Beschichtungen bieten:</p>
          <ul className="mt-2 space-y-2">
            <Bullet icon={ShieldCheck}>Verbesserte Verschleißfestigkeit und Korrosionsbeständigkeit</Bullet>
            <Bullet icon={Layers}>Gezielte Funktionalisierung der Oberfläche (z. B. Biokompatibilität, Antireflexeigenschaften)</Bullet>
            <Bullet icon={Repeat}>Reproduzierbare Ergebnisse für Serien- und Sonderfertigungen</Bullet>
          </ul>
        </Section>
        <Section id="strahlen" icon={Sparkles} title="Strahlen zur Oberflächenoptimierung – die perfekte Vorbereitung" kicker="Vor der Beschichtung bieten wir bei Bedarf ein präzises Strahlen an, um die Bauteile optimal auf den PVD-Prozess vorzubereiten.">
          <ul className="space-y-2">
            <Bullet icon={Eraser}>Abtragen / Reinigen: Entfernen von Verunreinigungen und unerwünschten Rückständen wie z. B. Schichten</Bullet>
            <Bullet icon={Layers}>Verdichten: Schaffen einer homogenen Oberflächenstruktur und -topographie</Bullet>
            <Bullet icon={EyeOff}>Antireflex-Optimierung: Gezielte Beeinflussung der optischen Eigenschaften von Bauteilen und PVD-Schichten</Bullet>
          </ul>
        </Section>
        <Section id="strategie" icon={Workflow} title="Strategieberatung – Ihr Weg zur optimalen Prozessgestaltung" kicker="Neben den technischen Dienstleistungen begleiten wir unsere Kunden auch auf einer strategischen Ebene.">
          <p>Wir beraten Unternehmen bei der Gestaltung und Optimierung von Prozessen im Bereich Oberflächenveredelung – von der Auswahl geeigneter Verfahren bis hin zur Integration in bestehenden Abläufen.</p>
        </Section>
      </div>
    </main>
  );
}
