const Impressum = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-black text-zinc-300">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 border-b border-red-600 pb-4 italic">
          Impressum
        </h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Martin Dachdeckerei
              <br />
              Baumschulenring 13
              <br />
              72202 Nagold
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
              Vertreten durch
            </h2>
            <p>
              Jurij Martin
              <br />
              Eric Martin
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
              Kontakt
            </h2>
            <p>
              Telefon: +49 176 43488639
              <br />
              E-Mail: klarseric02@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
