import React, { useEffect, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type IntroSplashProps = {
  isVisible: boolean;
  onFinish: () => void;
};

// Utility to generate a set of spark coordinates that look good on mobile and desktop
function useSparkPositions(count: number) {
  return useMemo(() => {
    const positions: Array<{ x: number; y: number; delay: number }> = [];
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 40 + (i % 3) * 12; // concentric rings
      positions.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        delay: 0.6 + (i % 6) * 0.05,
      });
    }
    return positions;
  }, [count]);
}

const IntroSplash: React.FC<IntroSplashProps> = ({ isVisible, onFinish }) => {
  const reducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const finishedRef = useRef(false);

  useEffect(() => {
    if (isVisible) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    // Fallback to force finish in case onAnimationComplete is missed
    const totalMs = reducedMotion ? 600 : 2600;
    const timeout = setTimeout(() => {
      if (!finishedRef.current) {
        finishedRef.current = true;
        onFinish();
      }
    }, totalMs);
    return () => clearTimeout(timeout);
  }, [isVisible, reducedMotion, onFinish]);

  const sparks = useSparkPositions(16);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background:
              'radial-gradient(1200px 600px at 50% 50%, rgba(62,144,235,0.18), rgba(10,10,10,0.92))',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Split curtains for WOW exit */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: reducedMotion ? '-100%' : ['0%', '-8%', '-100%'] }}
            transition={{ duration: reducedMotion ? 0.5 : 1.2, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0.2 : 1.4 }}
            onAnimationComplete={() => {
              if (!finishedRef.current) {
                finishedRef.current = true;
                onFinish();
              }
            }}
            className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-dark-200 via-dark-300 to-dark-400 border-r border-primary-500/10"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: reducedMotion ? '100%' : ['0%', '8%', '100%'] }}
            transition={{ duration: reducedMotion ? 0.5 : 1.2, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0.2 : 1.4 }}
            className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-tl from-dark-200 via-dark-300 to-dark-400 border-l border-primary-500/10"
          />

          {/* Central emblem */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            {/* Bloom ring */}
            {!reducedMotion && (
              <motion.div
                initial={{ scale: 0.3, opacity: 0.0 }}
                animate={{ scale: [0.3, 1.1, 1.0], opacity: [0.0, 0.6, 0.0] }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(62,144,235,0.55) 0%, rgba(62,144,235,0.0) 60%)',
                  filter: 'blur(12px)',
                }}
              />
            )}

            <motion.div
              initial={{ scale: 0.6, rotateX: -35, rotateY: 35, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 shadow-[0_0_40px_rgba(62,144,235,0.45)] flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.7, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                className="text-3xl sm:text-4xl font-bold text-white select-none"
              >
                &lt;/&gt;
              </motion.span>
            </motion.div>

            {/* Name + role with letter-stagger */}
            <div className="mt-6 sm:mt-7">
              <div className="flex justify-center gap-1 sm:gap-1.5 text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Zen Dots, cursive' }}>
                {Array.from('Ariel Montoya').map((char, index) => (
                  <motion.span
                    key={`n-${index}-${char}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.55 + index * 0.03, duration: 0.4, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
              <div className="mt-2 text-sm sm:text-base text-gray-300">
                {Array.from('Frontend Developer • UX-Driven').map((char, index) => (
                  <motion.span
                    key={`r-${index}-${char}`}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.015, duration: 0.32, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Sparks */}
            {!reducedMotion && (
              <div className="absolute inset-0 pointer-events-none">
                {sparks.map((s, i) => (
                  <motion.span
                    key={`spark-${i}`}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                    animate={{ x: s.x, y: s.y, opacity: [0, 1, 0], scale: [0.5, 1, 0.8] }}
                    transition={{ duration: 1.0, delay: s.delay, ease: 'easeOut' }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(112,181,255,0.85) 60%, rgba(62,144,235,0.0) 100%)',
                      boxShadow: '0 0 10px rgba(112,181,255,0.6)',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSplash;

