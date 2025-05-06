
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import SystemBenefits from '../components/SystemBenefits';
import FounderStory from '../components/FounderStory';
import BenefitsCards from '../components/BenefitsCards';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "VibeSys - Sistemas Personalizados para Pequenos Negócios";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <SystemBenefits />
      <FounderStory />
      <BenefitsCards />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
