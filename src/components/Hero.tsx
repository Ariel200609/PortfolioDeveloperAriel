import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Instagram, Mail, MessageCircle } from 'lucide-react';
import InteractiveLaptop from './InteractiveLaptop';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Transformando ideas en soluciones con código.';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
          {/* Profile Image/Logo */}
          <motion.div
            initial={{ 
              scale: 0, 
              rotateY: -180,
              rotateX: -90,
              opacity: 0 
            }}
            animate={{ 
              scale: 1, 
              rotateY: 0,
              rotateX: 0,
              opacity: 1 
            }}
            transition={{ 
              delay: 0.2, 
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.1,
              rotateY: 10,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
            className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-8 glow perspective-1000"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 0 30px rgba(62, 144, 235, 0.4), 0 0 60px rgba(62, 144, 235, 0.2)'
            }}
          >
            <motion.span 
              className="text-4xl font-bold text-white"
              initial={{ 
                rotateY: -180,
                scale: 0.5,
                opacity: 0
              }}
              animate={{ 
                rotateY: 0,
                scale: 1,
                opacity: 1
              }}
              transition={{ 
                delay: 0.8,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              &lt;/&gt;
            </motion.span>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Ariel Montoya
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 font-medium"
            >
              Desarrollador en formación | Amante del código y la innovación
            </motion.h2>
          </div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="min-h-[2rem] flex items-center justify-center"
          >
            <span className="text-xl md:text-2xl text-primary-500 font-mono">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 glow"
              >
                Ver Proyectos
              </motion.button>
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                Contáctame
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex justify-center lg:justify-start space-x-6 pt-8"
          >
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
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

                 {/* Right Column - 3D Laptop */}
         <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="flex justify-center lg:justify-end mt-8 lg:mt-0"
         >
           <InteractiveLaptop />
         </motion.div>
      </div>
    </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary-500"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 