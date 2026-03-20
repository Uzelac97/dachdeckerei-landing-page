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
            <h3 className="text-white font-bold mb-2">
              Wer ist verantwortlich für die Datenerfassung?
            </h3>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber: <br />
              Martin Dachdeckerei, Baumschulenring 13, 72202 Nagold.
            </p>
            <h3 className="text-white font-bold mb-2">
              Wie erfassen wir Ihre Daten?
            </h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider">
              3. Hosting
            </h2>
            <p></p>
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
