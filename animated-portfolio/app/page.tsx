import Image from "next/image";
import { ClientsSection } from "./components/clients-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <ClientsSection />
    </main>
  );
}
