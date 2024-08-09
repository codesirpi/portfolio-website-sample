import Image from "next/image";
import { ClientsSection } from "./components/clients-section";
import { ContactSection } from "./components/contact-section";
import { StacksSection } from "./components/stacks-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <ClientsSection />
      <StacksSection />
      <ContactSection />
    </main>
  );
}
