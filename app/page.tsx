import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ExpertiseSection from './components/ExpertiseSection';
import CaseStudies from './components/CaseStudies';
import Awards from './components/Awards';
import Accelerators, { Testimonials } from './components/Accelerators';
// import Testimonials from './components/Testimonials';
import Partnerships from './components/Partnerships';
import CompanyEvents from './components/CompanyEvents';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="relative w-screen max-w-[100vw] overflow-x-hidden">
      <div className="w-full">
        <Hero />
        <IntroSection />
        <ExpertiseSection />
        <CaseStudies/>
        <Awards/>
        <Accelerators/>
        <Testimonials/>
        <Partnerships/>
        <CompanyEvents/>
        <Contact/>
      </div>
    </div>
  );
} 