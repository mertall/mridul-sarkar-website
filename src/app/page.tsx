import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { HighlightProvider } from "@/components/HighlightContext";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightProvider>
        <div className="mx-auto max-w-6xl px-6 pb-24 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <Experience />
          <main className="mt-14 lg:mt-0">
            <Projects />
          </main>
        </div>
      </HighlightProvider>
      <Footer />
    </>
  );
}
