
export default function Impressum() {
  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="impressum-title">
      <h1 id="impressum-title" className="text-3xl md:text-4xl font-semibold">Impressum</h1>
      <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      <article className="prose prose-slate max-w-none">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Max Mustermann<br/>Musterstraße 1<br/>12345 Musterstadt<br/>Deutschland</p>

        <h3>Kontakt</h3>
        <p>Telefon: +49 (0)123 456789<br/>Telefax: +49 (0)123 456788<br/>E-Mail: info@mustermann.de</p>

        <h3>Umsatzsteuer-ID</h3>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE123456789</p>

        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>Max Mustermann<br/>Musterstraße 1<br/>12345 Musterstadt</p>

        <h3>Haftung für Inhalte</h3>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

        <h3>Haftung für Links</h3>
        <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

        <h3>Urheberrecht</h3>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>

        <h4>Wichtig</h4>
        <ul>
          <li>Bei Unternehmen sind zusätzlich Handelsregister, Registernummer und Registergericht anzugeben.</li>
          <li>Bei Freiberuflern / Selbstständigen genügt in der Regel die Anschrift + Kontaktdaten.</li>
          <li>Falls du eine Umsatzsteuer-ID hast, musst du diese nennen.</li>
          <li>Falls es sich um eine journalistisch-redaktionelle Seite handelt, muss ein Verantwortlicher nach § 55 RStV genannt werden.</li>
        </ul>
      </article>
    </main>
  );
}
