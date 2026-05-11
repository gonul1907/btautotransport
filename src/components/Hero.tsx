import heroImg from "@/assets/hero-truck.jpg";
import { ArrowRight, Phone, ShieldCheck, Clock, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="BT Autotransport vrachtwagen met luxe auto's"
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="container-x relative z-10 pt-32 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            24/7 Beschikbaar in heel Europa
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            Snel, Veilig &{" "}
            <span className="text-gradient-red">Professioneel</span>{" "}
            Autotransport
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            BT Autotransport uit Rotterdam verzorgt premium voertuigtransport, spoed­transport en pechhulp door heel Nederland en Europa. Vertrouw op ervaring, snelheid en service.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-semibold shadow-red hover:scale-[1.02] transition-all"
            >
              Vraag Offerte Aan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+31000000000"
              className="inline-flex items-center gap-2 border border-border bg-surface/50 backdrop-blur text-foreground px-7 py-4 rounded-md font-semibold hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="w-4 h-4" /> Direct Contact
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: Clock, label: "24/7", sub: "Bereikbaar" },
              { icon: MapPin, label: "EU", sub: "Heel Europa" },
              { icon: ShieldCheck, label: "100%", sub: "Verzekerd" },
            ].map((s) => (
              <div key={s.sub} className="border-l-2 border-primary pl-4">
                <s.icon className="w-5 h-5 text-primary mb-2" />
                <div className="text-2xl font-bold font-display">{s.label}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
