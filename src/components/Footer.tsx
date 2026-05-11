import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-border py-16">
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="font-display font-bold text-2xl mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-8 bg-gradient-red rounded-sm" />
              BT <span className="text-primary">AUTOTRANSPORT</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Premium autotransport, pechhulp en voertuigservices vanuit Rotterdam — door heel Nederland en Europa.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Navigatie</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#diensten" className="hover:text-primary">Diensten</a></li>
              <li><a href="#waarom" className="hover:text-primary">Waarom Ons</a></li>
              <li><a href="#reviews" className="hover:text-primary">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Rotterdam, Nederland</li>
              <li>+31 (0)10 000 0000</li>
              <li>info@btautotransport.nl</li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-gradient-red hover:border-transparent transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} BT Autotransport. Alle rechten voorbehouden.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
