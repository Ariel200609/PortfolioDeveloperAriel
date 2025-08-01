import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, sistema de pagos y panel de administración.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Ariel200609',
      live: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con drag & drop, categorías y sistema de notificaciones.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Ariel200609',
      live: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con datos en tiempo real, gráficos interactivos y pronósticos detallados.',
      technologies: ['Python', 'Flask', 'Chart.js', 'OpenWeather API'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Ariel200609',
      live: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'Sitio web personal con diseño moderno, animaciones fluidas y experiencia de usuario optimizada.',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Ariel200609',
      live: '#',
      featured: false,
    },
    {
      title: 'Chat Application',
      description: 'Aplicación de chat en tiempo real con autenticación, mensajes privados y notificaciones.',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Ariel200609',
      live: '#',
      featured: false,
    },
    {
      title: 'Data Visualization Tool',
      description: 'Herramienta de visualización de datos con múltiples tipos de gráficos y exportación de reportes.',
      technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/Ariel200609',
      live: '#',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Una colección de proyectos que demuestran mi pasión por el desarrollo y la innovación tecnológica.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Proyectos <span className="gradient-text">Destacados</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-dark-300/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                    <Code className="h-16 w-16 text-primary-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors duration-300"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors duration-300"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Todos los <span className="gradient-text">Proyectos</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-dark-300/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  <Code className="h-12 w-12 text-primary-500" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-primary-500 transition-colors duration-300 text-sm"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-primary-500 transition-colors duration-300 text-sm"
                    >
                      <Globe className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Ariel200609"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 glow"
          >
            <Github className="h-5 w-5" />
            <span>Ver Más en GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 