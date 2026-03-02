

import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import UseCases from "./sections/UseCases"
import Features from "./sections/Features"
import HowItWorks from "./sections/HowItWorks"
import FAQ from "./sections/FAQ"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <UseCases />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>

      <Footer />

    </div>
  )
}

export default App
