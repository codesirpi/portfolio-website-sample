import Image from "next/image";
import HeroSection from "./pages/home/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
    </main>
  );
}
