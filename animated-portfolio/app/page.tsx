import AboutSection from "./components/about-section/about-section";
import { ClientsSection } from "./components/clients-section";

export default function Home() {
  return (
    // <main ="flex min-h-screen flex-col items-center justify-between ">
    <main className="">
      <AboutSection />
      <ClientsSection />
    </main>
  );
}
