import Image from "next/image";

import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
    </main>
  );
}
