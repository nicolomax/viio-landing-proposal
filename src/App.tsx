import HeroSection from './components/HeroSection';
import InstitutionalPartners from './components/InstitutionalPartners';
import GridFeatures from './components/GridFeatures';
import FeaturesSection from './components/FeaturesSection';
import SystemsSection from './components/SystemsSection';
import HowItWorksSection from './components/HowItWorksSection';
import SecuritySection from './components/SecuritySection.tsx';
import UseCasesSection from './components/UseCasesSection';
import EmpresasSection from './components/EmpresasSection.tsx';
import MediaSection from './components/MediaSection.tsx';
import CTA1Section from './components/CTA1Section.tsx';
import FAQSection from './components/FAQSection.tsx';
import FinalCTASection from './components/FinalCTASection.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <main className="relative">
        <HeroSection />
        <InstitutionalPartners />
        <GridFeatures />
        <FeaturesSection />
        <SystemsSection />
        <HowItWorksSection />
        <SecuritySection />
        <UseCasesSection />
        <EmpresasSection />
        <MediaSection />
        <CTA1Section />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
    </div>
  )
}

export default App
