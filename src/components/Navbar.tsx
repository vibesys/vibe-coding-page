
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Por que ter um Sistema?', href: '#por-que-sistema' },
    { name: 'Nossa História', href: '#nossa-historia' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold gradient-text">
            Vibe<span className="text-white">Sys</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://wa.me/5511973413045"
            target="_blank"
            rel="noreferrer"
            className="bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute w-full py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/5511973413045"
              target="_blank"
              rel="noreferrer"
              className="bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded-md transition-colors duration-200 text-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
