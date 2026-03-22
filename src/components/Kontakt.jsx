import { useState } from "react";
import { PhoneCall, Send, ChevronDown } from "lucide-react";
import { services } from "../data/servicesData";
import emailjs from "@emailjs/browser";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: services[0]?.title || "Sonstiges",
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
      .then(() => {
        alert("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
        setFormData({
          name: "",
          email: "",
          service: services[0]?.title || "Sonstiges",
          message: "",
        });
      })
      .catch(() => {
        alert("Es gab ein Problem. Bitte versuchen Sie es später erneut.");
      });
  };

  return (
    <section id="kontakt" className="bg-black py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-6">
            <PhoneCall className="text-red-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
            Kontaktieren <span className="text-red-600">Sie uns</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="bg-zinc-900/50 border border-white/10 text-white p-4 rounded-sm focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-600"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="bg-zinc-900/50 border border-white/10 text-white p-4 rounded-sm focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-600"
          />

          {/* DROPDOWN */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-zinc-500 text-xs uppercase font-bold tracking-widest ml-1">
              Dienstleistung
            </label>
            <div className="relative group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-zinc-900/50 border border-white/10 text-white p-4 rounded-sm focus:outline-none focus:border-red-600 cursor-pointer appearance-none pr-12 transition-all"
              >
                {services.map((s, index) => (
                  <option
                    key={index}
                    value={s.title}
                    className="bg-zinc-900 text-white"
                  >
                    {s.title}
                  </option>
                ))}
                <option value="Sonstiges" className="bg-zinc-900 text-white">
                  Sonstiges
                </option>
              </select>

              {/* THE RED ARROW ICON */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-red-600 group-hover:scale-110 transition-transform">
                <ChevronDown size={20} strokeWidth={3} />
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-zinc-500 text-xs uppercase font-bold tracking-widest ml-1">
              Ihre Nachricht
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Beschreiben Sie kurz Ihr Vorhaben (z.B. Ort, ca. m², Terminwunsch)..."
              required
              className="bg-zinc-900/50 border border-white/10 text-white p-4 rounded-sm h-40 focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-600 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-red-600 hover:bg-red-700 text-white font-bold py-5 rounded-sm transition-all active:scale-[0.98] uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-red-600/10"
          >
            Anfrage Senden <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Kontakt;
