import { Clock, Zap, Globe2, Award, Euro, Wrench } from "lucide-react";

const items = [
  { icon: Clock, title: "24/7 Bereikbaar", desc: "Dag en nacht, 7 dagen per week tot uw dienst." },
  { icon: Zap, title: "Snelle Service", desc: "Korte responstijden en directe inzet bij spoed." },
  { icon: Globe2, title: "Door Heel Europa", desc: "Transport tot in elke uithoek van Europa." },
  { icon: Award, title: "Ervaren Chauffeurs", desc: "Vakmensen die uw voertuig met zorg behandelen." },
  { icon: Euro, title: "Transparante Prijzen", desc: "Heldere offertes — geen verborgen kosten." },
  { icon: Wrench, title: "Professionele Apparatuur", desc: "Modern wagenpark en geavanceerde uitrusting." },
];

export function WhyUs() {
  return (
    <section id="waarom" className="py-24 md:py-32 relative">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Waarom BT Autotransport</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Zes redenen om voor <span className="text-gradient-red">ons</span> te kiezen.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-lg border border-border bg-surface hover:border-primary hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-7xl font-display font-bold text-foreground/[0.04] group-hover:text-primary/10 transition-colors">
                0{i + 1}
              </div>
              <item.icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
