const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="text-2xl font-bold gradient-text mb-4">
              Vibe<span className="text-white">Sys</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Desenvolvendo sistemas personalizados que fazem sentido para pequenos negócios e profissionais liberais.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/5511973413045" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">WhatsApp</span>
                
              </a>

              <a href="mailto:contato@vibesys.com.br" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Controle de Tarefas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gestão de Clientes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Controle de Estoque</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Agendamento</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Financeiro</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#quem-somos" className="hover:text-primary transition-colors">Quem Somos</a></li>
              <li><a href="#nossa-historia" className="hover:text-primary transition-colors">Nossa História</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp: <a href="https://wa.me/5511973413045" className="text-primary hover:underline">+55 11 97341-3045</a></li>
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} VibeSys. Todos os direitos reservados.</p>
          <p className="mt-2 italic">"Com tecnologia, todo negócio pode crescer — com Vibe, todo sistema faz sentido."</p>
        </div>
      </div>
    </footer>;
};
export default Footer;