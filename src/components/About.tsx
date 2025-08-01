import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Smartphone, Zap } from 'lucide-react';
import { 
  SiPython, 
  SiCplusplus, 
  SiMysql, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiTypescript, 
  SiJavascript,
  SiGithub,
  SiVsco,
  SiGit,
  SiPostman
} from 'react-icons/si';

const About: React.FC = () => {
  const skills = [
    { 
      name: 'Python', 
      icon: SiPython, 
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Lenguaje de programación versátil'
    },
    { 
      name: 'C++', 
      icon: SiCplusplus, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/30',
      description: 'Programación orientada a objetos'
    },
    { 
      name: 'SQL', 
      icon: SiMysql, 
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      description: 'Gestión de bases de datos'
    },
    { 
      name: 'React', 
      icon: SiReact, 
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      description: 'Desarrollo frontend moderno'
    },
    { 
      name: 'HTML', 
      icon: SiHtml5, 
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      description: 'Estructura web'
    },
    { 
      name: 'CSS', 
      icon: SiCss3, 
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Estilos web'
    },
    { 
      name: 'TypeScript', 
      icon: SiTypescript, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/30',
      description: 'JavaScript tipado'
    },
    { 
      name: 'JavaScript', 
      icon: SiJavascript, 
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      description: 'Lenguaje web dinámico'
    },
  ];

  const education = [
    {
      title: 'Tecnicatura Universitaria en Programación',
      institution: 'Universidad Tecnológica Nacional - Bahía Blanca',
      period: '2025 - Presente',
      description: 'Formación en desarrollo de software, algoritmos y programación orientada a objetos.',
    },
  ];

  const tools = [
    { 
      name: 'GitHub', 
      icon: SiGithub, 
      color: 'text-gray-800',
      bgColor: 'bg-gray-700/10',
      borderColor: 'border-gray-700/30',
      description: 'Control de versiones'
    },
    { 
      name: 'VSCode', 
      icon: SiVsco, 
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Editor de código'
    },
    { 
      name: 'Git', 
      icon: SiGit, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      description: 'Sistema de control'
    },
    { 
      name: 'Postman', 
      icon: SiPostman, 
      color: 'text-orange-500',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30',
      description: 'Testing de APIs'
    },
  ];

  return (
         <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-primary-500 mr-3" />
                Mi Historia
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Soy Ariel Montoya, estudiante de la Tecnicatura Universitaria en Programación en Bahía Blanca.
                Me apasiona crear proyectos funcionales, con diseño moderno, interacción fluida y lógica optimizada.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                Me encanta trabajar tanto en frontend como backend, y estoy en constante aprendizaje.
                Cada línea de código es una oportunidad para innovar y crear soluciones que impacten positivamente.
              </p>
            </div>

            {/* Education */}
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="h-6 w-6 text-primary-500 mr-3" />
                Educación
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
                  <p className="text-primary-500 font-medium">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
                         <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                 <Smartphone className="h-6 w-6 text-primary-500 mr-3" />
                 Habilidades Técnicas
               </h3>
               <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: window.innerWidth > 768 ? 5 : 0,
                      rotateX: window.innerWidth > 768 ? 5 : 0,
                      z: 20
                    }}
                    className="relative group cursor-pointer p-4 transition-all duration-300 hover:bg-primary-500/10 hover:border-primary-500/30 rounded-xl border border-transparent overflow-hidden"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                                                                   <div className="flex flex-col items-center text-center space-y-2">
                        <motion.div
                          whileHover={{ 
                            scale: window.innerWidth > 768 ? 1.2 : 1.1,
                            rotateY: window.innerWidth > 768 ? 10 : 0,
                            rotateX: window.innerWidth > 768 ? 10 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ transformStyle: 'preserve-3d' }}
                                                                          >
                           {React.createElement(skill.icon as any, { className: `h-10 w-10 ${skill.color} group-hover:text-primary-400 group-hover:drop-shadow-lg group-hover:drop-shadow-primary-400/50 transition-all duration-300` })}
                         </motion.div>
                       <div>
                         <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 group-hover:text-primary-400 transition-all duration-300">
                           {skill.description}
                         </p>
                       </div>
                     </div>
                    
                    
                  </motion.div>
                ))}
              </div>
            </div>

                                                   {/* Tools */}
              <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
                                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                   <Smartphone className="h-6 w-6 text-primary-500 mr-3" />
                   Herramientas & Tecnologías
                 </h3>
                <div className="grid grid-cols-2 gap-4">
                 {tools.map((tool, index) => (
                   <motion.div
                     key={tool.name}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     whileHover={{ 
                       scale: 1.05,
                       rotateY: window.innerWidth > 768 ? 5 : 0,
                       rotateX: window.innerWidth > 768 ? 5 : 0,
                       z: 20
                     }}
                     className="relative group cursor-pointer p-4 transition-all duration-300 hover:bg-primary-500/10 hover:border-primary-500/30 rounded-xl border border-transparent overflow-hidden"
                     style={{
                       transformStyle: 'preserve-3d',
                       perspective: '1000px'
                     }}
                   >
                                                                                       <div className="flex flex-col items-center text-center space-y-2">
                         <motion.div
                           whileHover={{ 
                             scale: window.innerWidth > 768 ? 1.2 : 1.1,
                             rotateY: window.innerWidth > 768 ? 10 : 0,
                             rotateX: window.innerWidth > 768 ? 10 : 0
                           }}
                           transition={{ duration: 0.3 }}
                           style={{ transformStyle: 'preserve-3d' }}
                                                                             >
                            {React.createElement(tool.icon as any, { className: `h-10 w-10 ${tool.color} group-hover:text-primary-400 group-hover:drop-shadow-lg group-hover:drop-shadow-primary-400/50 transition-all duration-300` })}
                          </motion.div>
                        <div>
                          <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 group-hover:text-primary-400 transition-all duration-300">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                     
                     
                   </motion.div>
                 ))}
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 