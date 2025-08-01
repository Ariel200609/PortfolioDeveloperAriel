import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Mail, MessageCircle, Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ariel200609',
      icon: Github,
      color: 'hover:text-gray-400',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/developerariel_',
      icon: Instagram,
      color: 'hover:text-pink-400',
    },
    {
      name: 'Email',
      url: 'mailto:arielmontoya200609@gmail.com',
      icon: Mail,
      color: 'hover:text-blue-400',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/2923659973',
      icon: MessageCircle,
      color: 'hover:text-green-400',
    },
  ];

  return (
    <footer className="bg-dark-200/50 backdrop-blur-sm border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold gradient-text">
                &lt;byAriel/&gt;
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Desarrollador en formación apasionado por crear soluciones innovadoras y experiencias digitales únicas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-500 transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-primary-500">Email:</span> arielmontoya200609@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="text-primary-500">WhatsApp:</span> +54 2923 659973
              </p>
              <p className="text-gray-300">
                <span className="text-primary-500">Ubicación:</span> Bahía Blanca, Argentina
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-500/20 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Ariel Montoya. Hecho con</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>y mucho código.</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desarrollado con React, TypeScript y Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 