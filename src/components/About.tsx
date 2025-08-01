import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Globe, Smartphone, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 85, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'C++', level: 75, icon: Code, color: 'from-blue-600 to-blue-800' },
    { name: 'SQL', level: 80, icon: Database, color: 'from-orange-500 to-red-500' },
    { name: 'React', level: 70, icon: Globe, color: 'from-cyan-500 to-blue-500' },
    { name: 'HTML/CSS', level: 90, icon: Globe, color: 'from-orange-500 to-pink-500' },
    { name: 'TypeScript', level: 65, icon: Code, color: 'from-blue-600 to-blue-700' },
    { name: 'JavaScript', level: 75, icon: Code, color: 'from-yellow-500 to-orange-500' },
    { name: 'GitHub', level: 80, icon: Code, color: 'from-gray-700 to-gray-900' },
  ];

  const education = [
    {
      title: 'Tecnicatura Universitaria en Programación',
      institution: 'Universidad Nacional del Sur - Bahía Blanca',
      period: '2023 - Presente',
      description: 'Formación en desarrollo de software, algoritmos y programación orientada a objetos.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
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
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Smartphone className="h-6 w-6 text-primary-500 mr-3" />
                Habilidades Técnicas
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="h-5 w-5 text-primary-500" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-primary-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-400 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="h-6 w-6 text-primary-500 mr-3" />
                Herramientas & Tecnologías
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-300">PyMongo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-300">VSCode</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-300">Git</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-300">TSX</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 