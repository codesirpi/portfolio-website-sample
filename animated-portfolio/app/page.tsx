import Image from "next/image";
import { ClientsSection } from "./components/clients-section";
import { ContactSection } from "./components/contact-section";
import HeroSection from "./pages/home/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
