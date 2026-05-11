import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#waarom", label: "Waarom Ons" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className="inline-block w-2 h-8 bg-gradient-red rounded-sm" />
          BT <span className="text-primary">AUTOTRANSPORT</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+31000000000"
            className="inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:shadow-red transition-all"
          >
            <Phone className="w-4 h-4" /> Bel Direct
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground py-2">
                {l.label}
              </a>
            ))}
            <a href="tel:+31000000000" className="bg-gradient-red text-primary-foreground px-5 py-3 rounded-md text-center font-semibold">
              Bel Direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
