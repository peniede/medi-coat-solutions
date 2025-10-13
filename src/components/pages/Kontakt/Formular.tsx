
import React, { useState } from "react";

export default function KontaktFormular() {
  const [form, setForm] = useState({ salutation:"", title:"", firstName:"", lastName:"", company:"", position:"", email:"", phone:"", subject:"Allgemeine Anfrage", nachricht:"", privacy:false, honeypot:"" });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState({ submitting:false, success:false });
  const formStartRef = React.useRef(Date.now());

  const validateContactForm = (values:any) => {
    const e:Record<string,string> = {};
    const singleName = (values.name || "").trim();
    const salutation = (values.salutation || "").trim();
    const title = (values.title || "").trim();
    const firstName = (values.firstName || "").trim() || (singleName ? singleName.split(" ")[0] : "");
    const lastName = (values.lastName || "").trim() || (singleName ? singleName.split(" ").slice(1).join(" ") : "");
    const company = (values.company || "").trim();
    const position = (values.position || "").trim();
    const email = (values.email || "").trim();
    const phone = (values.phone || "").trim();
    const subject = (values.subject || "").trim();
    const nachricht = (values.nachricht || "").trim();
    const privacy = !!values.privacy;
    const files = Array.from(values.files || []);

    const honeypot = (values.honeypot || "").trim();
    const elapsedMs = typeof values.elapsedMs === "number" ? values.elapsedMs : 0;
    if (honeypot) e.bot = "Verdacht auf automatisierte Eingabe.";
    if (elapsedMs < 2000) e.bot = e.bot || "Bitte erneut absenden.";

    if (!salutation) e.salutation = "Bitte Anrede wählen.";
    if (!firstName) e.firstName = "Bitte Vornamen angeben.";
    if (!lastName && !singleName) e.lastName = "Bitte Nachnamen angeben.";
    if (!company) e.company = "Bitte Unternehmen/Institution angeben.";

    if (!email) { e.email = "Bitte E‑Mail angeben."; } else {
      const at = email.indexOf("@"); const dot = email.lastIndexOf("."); const looksLikeEmail = at > 0 && dot > at + 1 && dot < email.length - 1;
      if (!looksLikeEmail) e.email = "Ungültige E‑Mail-Adresse.";
    }
    if (!nachricht) e.nachricht = "Bitte eine Nachricht eingeben.";
    if (!privacy) e.privacy = "Bitte stimmen Sie der Datenverarbeitung zu.";

    const totalSize = files.reduce((s:any,f:any)=> s + (f.size || 0), 0);
    if (files.length > 5) e.files = "Maximal 5 Dateien.";
    if (totalSize > 15 * 1024 * 1024) e.files = "Maximal 15 MB Gesamtdatenvolumen.";
    return e;
  };

  React.useEffect(()=>{ /* runValidationSelfTests placeholder */ },[]);

  function onChange(evt:any){
    const { name, value, type, checked } = evt.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? !!checked : value }));
    if (status.success) setStatus({ submitting:false, success:false });
  }
  function onFilesChange(evt:any){ const incoming = Array.from(evt.target.files || []); setFiles(incoming as any); if (status.success) setStatus({ submitting:false, success:false }); }
  async function onSubmit(evt:any){
    evt.preventDefault();
    const elapsedMs = Date.now() - formStartRef.current;
    const v = validateContactForm({ ...form, files, elapsedMs });
    setErrors(v);
    if (Object.keys(v).length) return;
    try{ setStatus({ submitting:true, success:false }); await new Promise(r=>setTimeout(r,900)); setStatus({ submitting:false, success:true });
      setForm({ salutation:"", title:"", firstName:"", lastName:"", company:"", position:"", email:"", phone:"", subject:"Allgemeine Anfrage", nachricht:"", privacy:false, honeypot:"" }); setFiles([]); formStartRef.current = Date.now();
    }catch{ setStatus({ submitting:false, success:false }); }
  }
  const totalSize = files.reduce((s, f:any) => s + (f.size || 0), 0);

  return (
    <section className="mx-auto max-w-5xl">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Kontaktformular</h2>
        <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-6" />
        <p className="text-slate-700 leading-relaxed max-w-3xl">Für eine schnelle, strukturierte und sichere Kommunikation empfehlen wir Ihnen unser Kontaktformular.</p>
        <form className="mt-8 space-y-8" onSubmit={onSubmit} noValidate>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="honeypot" autoComplete="off" tabIndex={-1} value={form.honeypot} onChange={onChange} />
          </div>
          {errors.bot && (<div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800">Verdacht auf automatisiertes Absenden. Bitte erneut versuchen.</div>)}

          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="text-sm font-medium">Anrede*</label><select name="salutation" value={form.salutation} onChange={onChange} className="mt-1 w-full border rounded-xl p-2"><option value=""></option><option>Herr</option><option>Frau</option><option>Divers</option></select>{errors.salutation && <p className="text-sm text-red-700 mt-1">{errors.salutation}</p>}</div>
            <div><label className="text-sm font-medium">Titel</label><input name="title" value={form.title} onChange={onChange} className="mt-1 w-full border rounded-xl p-2" /></div>
            <div><label className="text-sm font-medium">Vorname*</label><input name="firstName" value={form.firstName} onChange={onChange} className="mt-1 w-full border rounded-xl p-2" />{errors.firstName && <p className="text-sm text-red-700 mt-1">{errors.firstName}</p>}</div>
            <div><label className="text-sm font-medium">Nachname*</label><input name="lastName" value={form.lastName} onChange={onChange} className="mt-1 w-full border rounded-xl p-2" />{errors.lastName && <p className="text-sm text-red-700 mt-1">{errors.lastName}</p>}</div>
            <div><label className="text-sm font-medium">Unternehmen / Institution*</label><input name="company" value={form.company} onChange={onChange} className="mt-1 w-full border rounded-xl p-2" />{errors.company && <p className="text-sm text-red-700 mt-1">{errors.company}</p>}</div>
            <div><label className="text-sm font-medium">Position</label><input name="position" value={form.position} onChange={onChange} className="mt-1 w-full border rounded-xl p-2" /></div>
            <div className="md:col-span-2"><label className="text-sm font-medium">E‑Mail*</label><input name="email" value={form.email} onChange={onChange} className="mt-1 w-full border rounded-xl p-2" />{errors.email && <p className="text-sm text-red-700 mt-1">{errors.email}</p>}</div>
            <div className="md:col-span-2"><label className="text-sm font-medium">Telefon</label><input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full border rounded-xl p-2" /></div>
            <div className="md:col-span-2"><label className="text-sm font-medium">Betreff</label><select name="subject" value={form.subject} onChange={onChange} className="mt-1 w-full border rounded-xl p-2"><option>Allgemeine Anfrage</option><option>Technische Frage</option><option>Angebot anfordern</option></select></div>
            <div className="md:col-span-2"><label className="text-sm font-medium">Nachricht*</label><textarea name="nachricht" value={form.nachricht} onChange={onChange} className="mt-1 w-full border rounded-xl p-2 min-h-[140px]" />{errors.nachricht && <p className="text-sm text-red-700 mt-1">{errors.nachricht}</p>}</div>
            <div className="md:col-span-2"><label className="text-sm font-medium">Dateien hochladen (optional, max. 5 Dateien, gesamt 15 MB)</label><input type="file" multiple onChange={onFilesChange} className="mt-1 w-full" /><p className="text-xs text-slate-500 mt-1">{files.length} Datei(en), Gesamtgröße {(totalSize/1024/1024).toFixed(2)} MB</p>{errors.files && <p className="text-sm text-red-700 mt-1">{errors.files}</p>}</div>
            <div className="md:col-span-2 flex items-start gap-2"><input id="privacy" name="privacy" type="checkbox" checked={form.privacy} onChange={onChange} className="mt-1" /><label htmlFor="privacy" className="text-sm">Ich stimme der Verarbeitung meiner Angaben gem. Datenschutzerklärung zu.</label>{errors.privacy && <p className="text-sm text-red-700 mt-1">{errors.privacy}</p>}</div>
          </div>
          <div className="flex gap-3"><button type="submit" className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white font-medium shadow" disabled={status.submitting}>{status.submitting? "Senden…" : "Nachricht senden"}</button>{status.success && <span className="text-green-700 text-sm mt-2">✓ Nachricht gesendet</span>}</div>
        </form>
      </div>
    </section>
  );
}
