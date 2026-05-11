import {
  Truck, Zap, Wrench, BatteryCharging, CircleDot, UserCheck, Car, AlertTriangle,
} from "lucide-react";

const services = [
  { icon: Truck, title: "Autotransport NL & EU", desc: "Voertuigtransport door heel Nederland en Europa, snel en veilig geleverd." },
  { icon: Zap, title: "Spoedtransport", desc: "Acuut transport nodig? Wij rijden direct uit voor uw spoedklus." },
  { icon: AlertTriangle, title: "Schadeauto Transport", desc: "Professioneel transport van schadevoertuigen naar herstelbedrijf of opslag." },
  { icon: Wrench, title: "Pechhulp op Locatie", desc: "Snelle pechhulp waar u ook bent, met deskundige monteurs ter plaatse." },
  { icon: BatteryCharging, title: "Jumpstart Service", desc: "Lege accu? Wij starten uw voertuig snel en vakkundig op locatie." },
  { icon: CircleDot, title: "Lekke Band Reparatie", desc: "Mobiele bandenservice — wij komen naar u toe en lossen het op." },
  { icon: UserCheck, title: "Rent a Bob", desc: "Veilig thuisgebracht door een professionele chauffeur, in uw eigen auto." },
  { icon: Car, title: "In- & Verkoop Auto's", desc: "Eerlijke prijzen voor inkoop en een ruim aanbod kwaliteitsvoertuigen." },
];

export function Services() {
  return (
    <section id="diensten" className="py-24 md:py-32 bg-surface relative">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Onze Diensten</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Alles wat u nodig heeft, <span className="text-gradient-red">onder één dak</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background p-8 hover:bg-surface transition-all relative cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-red group-hover:shadow-red transition-all">
                <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-red group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
