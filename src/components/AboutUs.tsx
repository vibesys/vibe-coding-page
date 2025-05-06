
import { Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="quem-somos" className="section-padding bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,174,219,0.05)_0,rgba(0,0,0,0)_60%)]"></div>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-medium">Quem Somos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tecnologia que faz <span className="gradient-text">sentido</span> para o seu negócio
            </h2>
            <p className="text-gray-300 mb-6">
              A <strong className="text-white">VibeSys</strong> é uma empresa especializada em <strong className="text-white">desenvolvimento de sistemas sob demanda</strong>, 
              criada para atender às necessidades específicas de <strong className="text-white">pequenos negócios e profissionais liberais</strong> que desejam 
              automatizar e otimizar seus processos.
            </p>
            <p className="text-gray-300 mb-6">
              Utilizamos o <strong className="text-primary">método Vibe Coding</strong>, uma abordagem ágil e eficiente que nos permite desenvolver 
              soluções personalizadas com custos acessíveis e prazos reduzidos, sem comprometer a qualidade.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-primary" size={20} />
                <h3 className="font-bold">O Método Vibe Coding</h3>
              </div>
              <p className="text-sm text-gray-300">
                Nossa metodologia combina desenvolvimento ágil com tecnologias modernas e inteligência artificial, 
                permitindo criar <strong className="text-white">sistemas personalizados acessíveis</strong> que realmente 
                resolvem as necessidades específicas dos nossos clientes.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="rounded-full h-20 w-20 bg-black/80 flex items-center justify-center border border-white/20">
                  <div className="rounded-full h-16 w-16 bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Equipe colaborando no desenvolvimento" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <span className="text-sm text-primary font-medium">Automação para pequenos negócios</span>
                <h3 className="text-xl font-bold">Sistemas que crescem com você</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
