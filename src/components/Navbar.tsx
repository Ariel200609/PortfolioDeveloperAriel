import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Home, User, FolderOpen, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', to: 'home', icon: Home },
    { name: 'Sobre Mí', to: 'about', icon: User },
    { name: 'Proyectos', to: 'projects', icon: FolderOpen },
    { name: 'Contacto', to: 'contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-200/80 backdrop-blur-md border-b border-primary-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center relative group cursor-pointer"
          >
            <div className="flex items-center bg-transparent rounded-lg px-3 py-2 transition-all duration-300 overflow-hidden">
              <span className="text-xl font-bold text-primary-500 group-hover:scale-110 transition-transform duration-200">
                &lt;
              </span>
              <div className="overflow-hidden mx-2 w-0 group-hover:w-auto transition-all duration-300">
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 text-primary-500 font-medium text-sm transition-opacity duration-300">
                  byAriel
                </span>
              </div>
              <span className="text-xl font-bold text-primary-500 group-hover:scale-110 transition-transform duration-200">
              /&gt;
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
                         <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                                 <div
                   key={item.name}
                   className="relative group"
                 >
                   <Link
                     to={item.to}
                     spy={true}
                     smooth={true}
                     offset={-80}
                     duration={500}
                     className="text-gray-300 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500 ease-out cursor-pointer flex items-center hover:bg-primary-500/10"
                     activeClass="text-primary-500"
                   >
                     <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-500 ease-out" />
                     <div className="overflow-hidden ml-2">
                       <span className="whitespace-nowrap transform transition-all duration-500 ease-out group-hover:translate-x-0 translate-x-[-100%] opacity-0 group-hover:opacity-100">
                         {item.name}
                       </span>
                     </div>
                   </Link>
                 </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary-500 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        className="md:hidden bg-dark-200/95 backdrop-blur-md border-t border-primary-500/20"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-gray-300 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer flex items-center justify-center space-x-2"
              activeClass="text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 