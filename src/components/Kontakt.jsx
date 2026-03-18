import { useState } from "react";
import { Headset } from "lucide-react";
import emailjs from "@emailjs/browser";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Flachdachabdichtung",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
        setFormData({
          name: "",
          email: "",
          service: "Flachdachabdichtung",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Es gab ein Problem. Bitte versuchen Sie es später erneut.");
      });
  };

  return (
    <section id="kontakt" className="bg-zinc-950 py-20 px-4">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Headset className="text-red-600 w-10 h-10 animate-bounce-slow" />
          <h2 className="text-white text-3xl font-bold uppercase tracking-widest">
            Kontakt
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-zinc-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-zinc-500"
          />

          <div className="flex flex-col gap-2 text-left">
            <label className="text-gray-400 text-sm font-medium ml-1">
              Gewünschte Dienstleistung
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl focus:outline-none focus:border-red-600 transition-all cursor-pointer"
            >
              <option value="" disabled>
                Dienstleistung auswählen *
              </option>
              <option value="Flachdachabdichtung">Flachdachabdichtung</option>
              <option value="Balkon & Terrasse">Balkon & Terrasse</option>
              <option value="Reparatur & Wartung">Reparatur & Wartung</option>
              <option value="ABS Safety">ABS Safety</option>
              <option value="Dachfenster">Dachfenster</option>
              <option value="Flüssigkunststoff">Flüssigkunststoff</option>
              <option value="Besichtigungssysteme">Besichtigungssysteme</option>
              <option value="Leckageortung">Leckageortung</option>
              <option value="Sonstiges">Sonstiges / Allgemeine Anfrage</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 text-left">
            <label className="text-gray-400 text-sm font-medium ml-1">
              Ihre Nachricht
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Wie können wir Ihnen helfen?"
              required
              className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl h-32 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-zinc-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg mt-4 transition transform active:scale-95 uppercase tracking-wider"
          >
            Anfrage Jetzt Senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default Kontakt;
