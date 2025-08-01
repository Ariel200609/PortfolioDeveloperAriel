import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Code, Monitor, Cpu, Zap } from 'lucide-react';

const InteractiveLaptop: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for rotation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to rotation
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  // Smooth spring animations
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative w-64 h-48 md:w-80 md:h-64 cursor-pointer"
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
        animate={{
          scale: isHovered ? 1.05 : 1,
          z: isHovered ? 20 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
                 {/* Laptop Base */}
         <motion.div
           className="absolute bottom-0 w-56 h-32 md:w-72 md:h-40 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg border border-gray-700"
           style={{
             transform: 'translateZ(-10px)',
             boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
           }}
         >
                     {/* Keyboard */}
           <div className="absolute top-2 left-2 right-2 h-16 md:top-4 md:left-4 md:right-4 md:h-20 bg-gray-900 rounded-md border border-gray-600">
             <div className="grid grid-cols-8 md:grid-cols-12 gap-1 p-1 md:p-2">
               {Array.from({ length: 32 }).map((_, i) => (
                 <div
                   key={i}
                   className="w-1 h-1 md:w-2 md:h-2 bg-gray-700 rounded-sm"
                 />
               ))}
             </div>
           </div>
           
           {/* Trackpad */}
           <div className="absolute bottom-2 left-4 right-4 h-6 md:bottom-4 md:left-8 md:right-8 md:h-8 bg-gray-800 rounded-md border border-gray-600" />
        </motion.div>

                 {/* Laptop Screen */}
         <motion.div
           className="absolute top-0 w-56 h-36 md:w-72 md:h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border-2 border-gray-600"
           style={{
             transform: 'rotateX(-15deg) translateZ(5px)',
             transformOrigin: 'bottom',
             boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
           }}
         >
                     {/* Screen Content */}
           <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-md p-2 md:p-4">
             {/* Code Editor Mockup */}
             <div className="space-y-1 md:space-y-2">
               <div className="flex items-center space-x-1 md:space-x-2 mb-2 md:mb-3">
                 <div className="flex space-x-1">
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full" />
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full" />
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full" />
                 </div>
                 <span className="text-xs text-gray-400">portfolio.tsx</span>
               </div>
              
                             <div className="space-y-1">
                 <div className="flex items-center space-x-1 md:space-x-2">
                   <span className="text-xs text-blue-400">1</span>
                   <span className="text-xs text-purple-400">const</span>
                   <span className="text-xs text-white">Portfolio</span>
                   <span className="text-xs text-white">=</span>
                   <span className="text-xs text-yellow-400">()</span>
                   <span className="text-xs text-purple-400">=&gt;</span>
                   <span className="text-xs text-yellow-400">{'{'}</span>
                 </div>
                 <div className="flex items-center space-x-1 md:space-x-2">
                   <span className="text-xs text-blue-400">2</span>
                   <span className="text-xs text-purple-400">return</span>
                   <span className="text-xs text-white">(</span>
                 </div>
                 <div className="flex items-center space-x-1 md:space-x-2">
                   <span className="text-xs text-blue-400">3</span>
                   <span className="text-xs text-gray-400">&lt;</span>
                   <span className="text-xs text-green-400">div</span>
                   <span className="text-xs text-gray-400">&gt;</span>
                 </div>
                 <div className="flex items-center space-x-1 md:space-x-2">
                   <span className="text-xs text-blue-400">4</span>
                   <span className="text-xs text-gray-400">&lt;</span>
                   <span className="text-xs text-green-400">h1</span>
                   <span className="text-xs text-gray-400">&gt;</span>
                   <span className="text-xs text-white">Ariel</span>
                   <span className="text-xs text-gray-400">&lt;/</span>
                   <span className="text-xs text-green-400">h1</span>
                   <span className="text-xs text-gray-400">&gt;</span>
                 </div>
                 <div className="flex items-center space-x-1 md:space-x-2">
                   <span className="text-xs text-blue-400">5</span>
                   <span className="text-xs text-gray-400">&lt;/</span>
                   <span className="text-xs text-green-400">div</span>
                   <span className="text-xs text-gray-400">&gt;</span>
                 </div>
                 <div className="flex items-center space-x-1 md:space-x-2">
                   <span className="text-xs text-blue-400">6</span>
                   <span className="text-xs text-yellow-400">{'}'}</span>
                   <span className="text-xs text-white">;</span>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

                 {/* Floating Elements */}
         <motion.div
           className="absolute -top-6 -right-3 md:-top-8 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center"
           animate={{
             y: [0, -10, 0],
             rotate: [0, 5, -5, 0],
           }}
           transition={{
             duration: 4,
             repeat: Infinity,
             ease: "easeInOut"
           }}
           style={{ transform: 'translateZ(20px)' }}
         >
           <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />
         </motion.div>

                 <motion.div
           className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center"
           animate={{
             y: [0, 8, 0],
             rotate: [0, -3, 3, 0],
           }}
           transition={{
             duration: 3,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 1
           }}
           style={{ transform: 'translateZ(15px)' }}
         >
           <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />
         </motion.div>

         <motion.div
           className="absolute top-1/2 -left-4 md:-left-6 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center"
           animate={{
             x: [0, -5, 0],
             rotate: [0, 10, -10, 0],
           }}
           transition={{
             duration: 5,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 2
           }}
           style={{ transform: 'translateZ(25px)' }}
         >
           <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
         </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: isHovered 
              ? '0 0 50px rgba(62, 144, 235, 0.3), 0 0 100px rgba(62, 144, 235, 0.1)' 
              : '0 0 20px rgba(62, 144, 235, 0.1)'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default InteractiveLaptop; 