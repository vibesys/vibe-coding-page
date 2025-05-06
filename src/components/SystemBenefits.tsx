
import { ListTodo, Users, ShoppingCart, Package, Calendar, Wallet, Briefcase } from 'lucide-react';
import { Button } from './ui/button';

const SystemBenefits = () => {
  // Systems with icons
  const systems = [
    { name: "Controle de Tarefas", icon: ListTodo },
    { name: "Gestão de Clientes", icon: Users },
    { name: "Controle de Supermercado", icon: ShoppingCart },
    { name: "Controle de Estoque", icon: Package },
    { name: "Agendamento para Consultórios", icon: Calendar },
    { name: "Financeiro simplificado", icon: Wallet },
    { name: "CRM para pequenos escritórios", icon: Briefcase },
  ];

  return (
    <section id="por-que-sistema" className="section-padding bg-black/95 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.05)_0,rgba(0,0,0,0)_60%)]"></div>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-medium">Por que ter um sistema?</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Automatize seu negócio, <span className="gradient-text">amplie seus resultados</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Em um mercado competitivo, a tecnologia certa faz toda a diferença entre o sucesso e o fracasso.
            Automatize processos e foque no que realmente importa: seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-black to-gray-900/80 p-8 rounded-xl border border-gray-800 hover-up transition-all duration-300">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Autoridade</h3>
            <p className="text-gray-300">
              "Empresas que automatizam seus processos crescem até 3x mais rápido. Não é apenas uma questão 
              de eficiência, mas de se posicionar como uma empresa moderna e preparada para o futuro."
            </p>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-900/80 p-8 rounded-xl border border-gray-800 hover-up transition-all duration-300">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20v-8"></path>
                <path d="M18 20V9.5a3 3 0 0 0-6 0v1"></path>
                <path d="M6 20v-7"></path>
                <path d="M18 16H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Escassez</h3>
            <p className="text-gray-300">
              "A tecnologia certa pode ser o diferencial entre o sucesso e o fracasso. A cada dia que passa sem um sistema adequado, 
              seu negócio perde oportunidades valiosas de crescer e se destacar."
            </p>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-900/80 p-8 rounded-xl border border-gray-800 hover-up transition-all duration-300">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Clareza de Solução</h3>
            <p className="text-gray-300">
              "Controle suas tarefas, estoque, clientes ou agenda de atendimentos sem complicações. 
              Sistemas personalizados que realmente resolvem problemas reais do seu negócio."
            </p>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-900/80 p-8 rounded-xl border border-gray-800 hover-up transition-all duration-300">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5.5"></path>
                <path d="M2 14.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.5"></path>
                <path d="M2 12h20"></path>
                <path d="M6 12v2"></path>
                <path d="M18 12v2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Custo-Benefício</h3>
            <p className="text-gray-300">
              "Investir em um sistema personalizado não é uma despesa, mas um investimento que traz retorno 
              imediato em produtividade e organização, evitando perdas e otimizando recursos."
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 text-center mb-10">
          <h3 className="text-2xl font-bold mb-6">Soluções que podemos desenvolver para o seu negócio</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {systems.map((system, index) => {
              const Icon = system.icon;
              return (
                <div key={index} className="flex flex-col items-center p-4 hover-up transition-all duration-300">
                  <div className="mb-3 h-14 w-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/5">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-200 text-center">{system.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild
            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all duration-300 hover-up"
          >
            <a href="https://wa.me/5511973413045" target="_blank" rel="noreferrer">
              Quero crescer meu negócio
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-all duration-300"
          >
            <a href="#nossa-historia">
              Conheça nossa história
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SystemBenefits;
