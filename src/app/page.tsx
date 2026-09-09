import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Skills,
} from "@/components/sections/Content";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
