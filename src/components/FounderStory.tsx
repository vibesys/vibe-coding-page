
import { Quote } from 'lucide-react';

const FounderStory = () => {
  return (
    <section id="nossa-historia" className="section-padding bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.03)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-medium">História Real</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            De uma Necessidade Pessoal a uma <span className="gradient-text">Solução para Muitos</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <div className="relative rounded-2xl overflow-hidden h-[400px] border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Michel Oliveira trabalhando" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-1">Michel Oliveira</h3>
                  <p className="text-sm text-gray-300">Fundador da VibeSys</p>
                  <div className="flex mt-4 space-x-3">
                    <a 
                      href="https://wa.me/5511973413045" 
                      target="_blank" 
                      rel="noreferrer"
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 lg:p-10 rounded-xl border border-gray-800 relative">
                <Quote size={40} className="absolute text-primary/10 top-6 left-6" />
                <div className="space-y-4 relative z-10 text-gray-300">
                  <p>
                    "Eu, Michel Oliveira, Assessor de Investimentos, enfrentei uma dor comum a muitos pequenos 
                    empreendedores: a falta de um sistema acessível. Precisava gerenciar meus clientes com mais 
                    eficiência, mas os custos de sistemas personalizados eram altos demais.
                  </p>
                  <p>
                    Sonhava com uma funcionalidade simples e poderosa: <strong className="text-white">associar tags aos meus clientes</strong>, 
                    como 'PETR4'. Assim, com um clique, poderia filtrar e comunicar todos os clientes impactados 
                    por notícias sobre a Petrobras. Para tornar isso realidade, mergulhei em cursos, fóruns e horas 
                    de estudo. Foi assim que nasceu minha <strong className="text-white">skill em desenvolvimento</strong>, e com ela, 
                    a missão de ajudar outros como eu.
                  </p>
                  <p>
                    A VibeSys é o resultado desse esforço: criar <strong className="text-white">soluções tecnológicas acessíveis</strong> para 
                    quem mais precisa — pequenos empreendedores, negócios locais, e profissionais liberais como 
                    dentistas, advogados, esteticistas e outros."
                  </p>
                </div>

                <div className="mt-8">
                  <a 
                    href="https://wa.me/5511973413045" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover-up"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Falar com Michel via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
