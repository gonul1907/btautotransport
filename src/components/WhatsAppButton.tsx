import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-red shadow-red flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
    </a>
  );
}
