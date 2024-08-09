import Image from "next/image";
import { ClientsSection } from "./components/clients-section";
import { PortFolioSection } from "./components/portfolio-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <PortFolioSection/>
      <ClientsSection />
    </main>
  );
}
