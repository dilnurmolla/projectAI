import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import UseCases from "../sections/UseCases";
import Features from "../sections/Features";
import FAQ from "../sections/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
