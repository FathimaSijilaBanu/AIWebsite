import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ExpertiseSection from './components/ExpertiseSection';
import CaseStudies from './components/CaseStudies';
import Awards from './components/Awards';
import Accelerators from './components/Accelerators';
import Testimonials from './components/Testimonials';
import Partnerships from './components/Partnerships';
import CompanyEvents from './components/CompanyEvents';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
     
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
        
     
    </>
  );
} 