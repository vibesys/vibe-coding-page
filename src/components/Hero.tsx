
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ElegantShape } from './ui/shape-landing-hero';

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.1)_0,rgba(0,0,0,0)_60%)]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-primary/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-secondary/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-primary/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-secondary/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center lg:text-left flex flex-col lg:flex-row items-center pt-16">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <motion.h1 
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Transforme Suas <span className="gradient-text">Ideias</span> em Sistemas de Verdade
          </motion.h1>
          
          <motion.p 
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Soluções acessíveis e sob medida para o seu negócio, com desenvolvimento inteligente via Vibe Coding.
          </motion.p>
          
          <motion.div 
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a 
              href="https://wa.me/5511973413045" 
              target="_blank" 
              rel="noreferrer"
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 group transition-all duration-300 vibrant-shadow-orange hover-up"
            >
              Solicite um Orçamento
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#nossa-historia"
              className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Saiba Mais
            </a>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <motion.div 
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-lg"></div>
            </div>
            <div className="absolute inset-4 rounded-lg overflow-hidden border border-white/10 backdrop-blur flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Código de programação em um laptop" 
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <div className="inline-block px-3 py-1 bg-black/70 text-primary rounded-full text-sm mb-2">
                  Tecnologia acessível
                </div>
                <h3 className="text-xl font-bold mb-1">Desenvolvimento sob medida</h3>
                <p className="text-sm text-gray-300">Para pequenos negócios e profissionais liberais</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <div className="animate-bounce">
          <a href="#nossa-historia" className="flex flex-col items-center text-gray-400 hover:text-white">
            <span className="text-sm">Descubra mais</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
