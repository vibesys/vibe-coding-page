import { 
  BadgeDollarSign, 
  Settings, 
  HeadsetIcon, 
  Database, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

const BenefitsCards = () => {
  const benefits = [
    {
      title: "Custo acessível",
      description: "Soluções personalizadas com preços justos para pequenos negócios e profissionais liberais.",
      icon: BadgeDollarSign,
      color: "text-secondary"
    },
    {
      title: "Personalização completa",
      description: "Sistemas criados especificamente para as necessidades do seu negócio, sem funcionalidades desnecessárias.",
      icon: Settings,
      color: "text-primary"
    },
    {
      title: "Suporte humano e ágil",
      description: "Atendimento personalizado e respostas rápidas para suas dúvidas e solicitações.",
      icon: HeadsetIcon,
      color: "text-secondary"
    },
    {
      title: "Tecnologia moderna",
      description: "Utilizamos as melhores tecnologias como React, Supabase e outras ferramentas modernas.",
      icon: Database,
      color: "text-primary"
    },
    {
      title: "Sistemas evolutivos",
      description: "Suas soluções crescem junto com o seu negócio, com atualizações e novas funcionalidades.",
      icon: TrendingUp,
      color: "text-secondary"
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-black/95 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0,rgba(0,0,0,0)_60%)]"></div>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-medium">Benefícios</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnologia <span className="gradient-text">Acessível</span> para o Seu Dia a Dia
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trabalhamos para tornar a tecnologia acessível e útil para seu negócio, com foco em resultados práticos e rápidos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover-up transition-all duration-300"
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-${benefit.color.split('-')[1]}/10 ${benefit.color}`}>
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Pronto para transformar seu negócio?</h3>
          <Button 
            asChild
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover-up vibrant-shadow-orange"
          >
            <a href="https://wa.me/5511973413045" target="_blank" rel="noreferrer">
              Solicite seu projeto agora mesmo!
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;
