import React from "react";
import { contactData } from "../data/contactData";
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
              {contactData.companyName}
              <br />
              {contactData.address}
              <br />
              {contactData.zipCode} {contactData.city}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
              Vertreten durch
            </h2>
            <p>
              {contactData.team.map((member, index) => (
                <React.Fragment key={index}>
                  {member.name}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">
              Kontakt
            </h2>
            <p>
              Telefon: {contactData.mainPhone}
              <br />
              E-Mail: {contactData.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
