import Image from "next/image";
import { ClientsSection } from "./components/clients-section";
import { ContactSection } from "./components/contact-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
