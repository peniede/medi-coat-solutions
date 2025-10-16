# Medi Neu - Vite + React + Tailwind Landing

Dieses Repository enthält ein leichtgewichtiges Starter-Template für eine moderne Homepage mit Vite, React und Tailwind CSS.

Schnellstart (Windows PowerShell):

1. Node.js installieren (empfohlen LTS)
2. In PowerShell die Ausführungsrichtlinie temporär erlauben, falls `npm` als PS1-Fehler auftritt:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```

3. Abhängigkeiten installieren:

```powershell
npm install
```

4. Dev-Server starten:

```powershell
npm run dev
```

Alternativ kannst du in cmd.exe oder einer anderen Shell arbeiten, falls du die PowerShell-Richtlinie nicht ändern möchtest.

Was enthalten ist:

- Vite + React Setup
- TailwindCSS Konfiguration
- Komponenten: Navbar, Hero, Features, Footer

Nächste Schritte:
- UI weiter anpassen
- Content und Bilder hinzufügen
- Deployment auf Vercel/Netlify

Build der React/Vite App
Lokal im Projekt:
Ergebnis: dist/ (Inhalt dieser Ordner hochladen, nicht der Ordner selbst)
PHPMailer vorbereiten (wenn Composer auf Host nicht verfügbar)
Lokal im Projekt-Ordner:
Nachher hast du ein vendor/ Verzeichnis mit autoload.php — dieses hochladen
Projektstruktur auf dem Host (empfohlen)
public_html/ ← Webroot (hier hostet der Server)
index.html
assets/ ...
contact.php ← PHP Endpoint (im Webroot)
vendor/ ← optional, falls du Composer nicht auf Host ausführen kannst
../ ← eine Ebene über public_html (NICHT öffentlich erreichbar)
config.php ← SMTP credentials / sensible Daten (outside webroot)
config.php (außerhalb public_html)
Beispiel (lege in die Parent‑Directory, nicht in public_html):
contact.php (im public_html) — Autoload & PHPMailer verwenden
Wichtig: Pfade anpassen, z.B. require DIR . '/../vendor/autoload.php' und require DIR . '/../config.php'
Beispiel (bereits früher bereitgestellt) — prüfe Pfade bevor du hochlädst.
Upload via SFTP/FTP (FileZilla)
Verbindung: Host, Benutzername, Passwort (oder SSH Key), Port (22 für SFTP)
Remote‑Verzeichnis prüfen: öffne den FTP‑Root; finde public_html / html / www (abhängig von IONOS Tarif)
Upload Schritte:
Öffne dist/ lokal, markiere ALLE Dateien und Ordner, ziehe in public_html auf dem Server
Lade contact.php in public_html
Lade vendor/ (oder nur vendor/autoload.php + benötigte libs) nach public_html/vendor wenn Composer vor Ort nicht möglich
Lade config.php eine Ebene höher als public_html (falls möglich) — in FileZilla: gehe einen Ordner nach oben und lade config.php dorthin
Dateiberechtigungen: Dateien 644, falls möglich config.php 600 (via SSH / Hosting Panel)
.htaccess (SPA‑Fallback)
public_html/.htaccess:
Dadurch funktionieren client‑side routes (z. B. /blog)
Testen / Debugging
Test contact endpoint mit curl (lokal oder server):
Erwartung: JSON { "ok": true } oder Fehlermeldung
Check: Browser Network Tab, PHP error_log (IONOS Control Panel / Logging) bei Fehlern
Prüfe Mailzustellung (Inbox + Spam). Wenn Spam, nutze SMTP (PHPMailer) + SPF/DKIM für Domain
Häufige Fehler & Lösungen
500 / Fehler: prüfe PHP‑Fehlerlog, prüfe autoload Pfad, prüfe config.php Lage
vendor/autoload.php fehlt: Entweder Composer auf Host ausführen oder hochgeladenes vendor/ nicht vollständig
contact.php 404: falscher Pfad (sollte public_html/contact.php sein)
SMTP Auth Fehler: Benutzer/Pass prüfen, Port (587 TLS oder 465 SSL), Hostname (ionos smtp Host), From‑Adresse muss authorized sein
Sicherheit & Produktionstipps
config.php außerhalb Webroot (wichtig)
HTTPS aktivieren via IONOS SSL im Control Panel
Rate‑limit und Honeypot / reCAPTCHA (serverseitig token prüfen)
SPF/DKIM/DMARC Mail-Records konfigurieren für bessere Zustellung
Testen mit realen E‑Mails und prüfen, ob Host Mail‑Limits gibt
Optional: ZIP hochladen & entpacken im Panel


