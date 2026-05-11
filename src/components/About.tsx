import aboutImg from "@/assets/about-truck.jpg";

export function About() {
  return (
    <section id="over" className="py-24 md:py-32 relative">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Vrachtwagen onderweg in Europa"
            loading="lazy"
            width={1280}
            height={896}
            className="rounded-lg object-cover w-full h-[500px] shadow-glow"
          />
          <div className="absolute -bottom-6 -right-6 bg-gradient-red text-primary-foreground p-6 rounded-lg shadow-red max-w-[200px]">
            <div className="text-4xl font-bold font-display">10+</div>
            <div className="text-sm uppercase tracking-wider">Jaar ervaring in transport</div>
          </div>
        </div>

        <div>
          <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Over BT Autotransport</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Betrouwbaarheid die <span className="text-gradient-red">rolt</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            BT Autotransport uit Rotterdam staat voor betrouwbaarheid, snelheid en service. Wij verzorgen autotransport, pechhulp en voertuigservices door heel Nederland en Europa — voor zowel particulieren als zakelijke klanten.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Onze ervaren chauffeurs en moderne apparatuur garanderen dat uw voertuig veilig en op tijd op zijn bestemming aankomt. Geen verrassingen, alleen kwaliteit.
          </p>

          <ul className="space-y-3">
            {["Volledig verzekerd transport", "Vaste contactpersoon", "Transparante en eerlijke prijzen"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                </span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
