import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Focus } from "@/components/sections/Focus";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { LanguageProvider } from "@/content/language-provider";

export default function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Focus />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
