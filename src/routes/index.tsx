import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BT Autotransport Rotterdam — Snel & Veilig Autotransport door Europa" },
      {
        name: "description",
        content:
          "BT Autotransport uit Rotterdam: professioneel autotransport, spoedtransport, pechhulp en voertuigservices door heel Nederland en Europa. 24/7 bereikbaar.",
      },
      { property: "og:title", content: "BT Autotransport — Premium Voertuigtransport vanuit Rotterdam" },
      { property: "og:description", content: "Snel, veilig en professioneel autotransport door heel Europa." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
