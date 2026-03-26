const Datenschutz = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-black text-zinc-300">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 border-b border-red-600 pb-4 italic">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider">
              1. Datenschutz auf einen Blick
            </h2>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider">
              2. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest">
              Wer ist verantwortlich für die Datenerfassung?
            </h3>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber: <br />
              <strong>Martin Dachdeckerei</strong>, Baumschulenring 13, 72202
              Nagold.
            </p>
            <h3 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest">
              Wie erfassen wir Ihre Daten?
            </h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei handelt es sich um Daten, die Sie in ein
              Kontaktformular eingeben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider">
              3. Hosting und SSL-Verschlüsselung
            </h2>
            <p className="mb-4">
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Wir nutzen hierfür den Anbieter:
            </p>
            <p className="mb-4 bg-zinc-900/50 p-3 border-l-2 border-red-600">
              <strong>IONOS SE</strong>
              <br />
              Elgendorfer Str. 57, 56410 Montabaur, Deutschland.
            </p>
            <p className="mb-4">
              Die personenbezogenen Daten, die auf dieser Website erfasst
              werden, werden auf den Servern des Hosters gespeichert. Weitere
              Details entnehmen Sie der Datenschutzerklärung von IONOS unter:{" "}
              <br />
              <a
                href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 underline transition-colors"
              >
                https://www.ionos.de/terms-gtc/datenschutzerklaerung/
              </a>
            </p>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://“ auf
              „https://“ wechselt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider">
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </section>

          <section className="pt-10 border-t border-zinc-900 text-zinc-500 text-xs italic">
            <p>Stand: {new Date().toLocaleDateString("de-DE")}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
