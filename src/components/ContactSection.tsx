
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,174,219,0.1)_0,rgba(0,0,0,0)_60%)]"></div>
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 opacity-60"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos tirar seu projeto do papel?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Respostas rápidas, sem burocracia. Converse diretamente com quem vai desenvolver sua solução.
            </p>
            
            <div className="flex justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover-up group vibrant-shadow"
              >
                <a href="https://wa.me/5511973413045" target="_blank" rel="noreferrer">
                  Conversar pelo WhatsApp
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-gray-400">
              Normalmente respondemos em até 2 horas durante dias úteis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
