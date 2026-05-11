import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Mark van Dijk", role: "Particulier · Rotterdam", text: "Mijn auto vanuit Duitsland opgehaald binnen 24 uur. Super netjes en professioneel. Echt een aanrader!", rating: 5 },
  { name: "Sandra de Boer", role: "Autobedrijf · Utrecht", text: "Wij werken al jaren met BT Autotransport. Altijd op tijd, communicatie is top en de prijzen zijn eerlijk.", rating: 5 },
  { name: "Youssef El Amrani", role: "Particulier · Amsterdam", text: "Pechhulp midden in de nacht. Binnen 30 minuten ter plaatse. Geweldige service, dik verdiende 5 sterren.", rating: 5 },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-surface">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Klantbeoordelingen</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Vertrouwd door <span className="text-gradient-red">honderden</span> klanten.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="relative p-8 rounded-lg bg-background border border-border hover:border-primary transition-all">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/15" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{r.text}"</p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
