import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container-x grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Contact</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Klaar om uw voertuig te <span className="text-gradient-red">verplaatsen</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Neem direct contact met ons op voor een vrijblijvende offerte. Wij reageren binnen één uur.
          </p>

          <div className="space-y-4 mb-10">
            <a href="tel:+31000000000" className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary group transition-all">
              <div className="w-12 h-12 rounded-md bg-gradient-red flex items-center justify-center"><Phone className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Telefoon</div>
                <div className="font-semibold group-hover:text-primary">+31 (0)10 000 0000</div>
              </div>
            </a>
            <a href="https://wa.me/31000000000" className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary group transition-all">
              <div className="w-12 h-12 rounded-md bg-gradient-red flex items-center justify-center"><MessageCircle className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
                <div className="font-semibold group-hover:text-primary">Stuur ons direct een bericht</div>
              </div>
            </a>
            <a href="mailto:info@btautotransport.nl" className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary group transition-all">
              <div className="w-12 h-12 rounded-md bg-gradient-red flex items-center justify-center"><Mail className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">E-mail</div>
                <div className="font-semibold group-hover:text-primary">info@btautotransport.nl</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-md bg-gradient-red flex items-center justify-center"><MapPin className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Locatie</div>
                <div className="font-semibold">Rotterdam, Nederland</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border h-64">
            <iframe
              title="BT Autotransport Rotterdam"
              src="https://www.google.com/maps?q=Rotterdam&output=embed"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-surface border border-border rounded-lg p-8 md:p-10 h-fit lg:sticky lg:top-28"
        >
          <h3 className="text-2xl font-bold mb-6">Vraag een offerte aan</h3>

          {sent ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-red flex items-center justify-center mb-4">
                <Send className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">Bedankt!</h4>
              <p className="text-muted-foreground">We nemen zo snel mogelijk contact met u op.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <Field label="Naam" name="name" required />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="E-mail" name="email" type="email" required />
                <Field label="Telefoon" name="phone" type="tel" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Ophaaladres" name="from" required />
                <Field label="Bestemming" name="to" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Bericht</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Vertel ons over uw transport..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-red text-primary-foreground py-4 rounded-md font-semibold hover:shadow-red transition-all flex items-center justify-center gap-2"
              >
                Verstuur Aanvraag <Send className="w-4 h-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
      />
    </div>
  );
}
