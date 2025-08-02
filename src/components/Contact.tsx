import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Instagram, Send, User, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mblkalaz', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'arielmontoya200609@gmail.com',
      link: 'mailto:arielmontoya200609@gmail.com',
      color: 'hover:text-blue-400',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+54 2923 659973',
      link: 'https://wa.me/2923659973',
      color: 'hover:text-green-400',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/Ariel200609',
      link: 'https://github.com/Ariel200609',
      color: 'hover:text-gray-400',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@developerariel_',
      link: 'https://instagram.com/developerariel_',
      color: 'hover:text-pink-400',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 text-primary-500 mr-3" />
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-dark-400/30 rounded-lg hover:bg-dark-400/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors duration-300">
                      <info.icon className={`h-6 w-6 text-primary-500 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                ¿Por qué trabajar conmigo?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Comunicación clara:</span> Mantengo una comunicación constante y transparente durante todo el proyecto.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Código limpio:</span> Escribo código mantenible, bien documentado y siguiendo las mejores prácticas.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Aprendizaje continuo:</span> Me mantengo actualizado con las últimas tecnologías y tendencias.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="h-6 w-6 text-primary-500 mr-3" />
                Envíame un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nombre
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-dark-400/50 border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-400/50 border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                  >
                    <p className="text-green-400 text-center">¡Mensaje enviado exitosamente! Te responderé pronto.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                  >
                    <p className="text-red-400 text-center">Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 