import React from 'react';
import { motion } from 'framer-motion';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div 
      className="h-screen flex items-center justify-center px-8 py-8 min-w-[1200px] overflow-hidden relative"
      style={{
        backgroundImage: 'url(/k2-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay premium con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-white/60 to-slate-800/20 backdrop-blur-[1px]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl font-bold mb-6 tracking-tight"
        >
          <span className="text-[#FF6B35] drop-shadow-sm">Auto-diagnóstico</span>{' '}
          <span className="text-[#1E40AF] drop-shadow-sm">VUCA</span>{' '}
          <span className="text-slate-700">de tu</span>{' '}
          <span className="text-[#FF6B35] drop-shadow-sm">Cadena de Suministro</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Evalúa el nivel de adaptabilidad y resiliencia de tu cadena frente a la{' '}
          <strong className="text-slate-800 font-semibold">volatilidad</strong> y la{' '}
          <strong className="text-slate-800 font-semibold">incertidumbre</strong>.
        </motion.p>

        {/* Instrucciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 p-8 mb-10 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-8 text-center">Instrucciones importantes</h3>
          
          <div className="space-y-6 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex items-start space-x-4"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-slate-800 text-lg">Tiempo estimado:</span>
                <span className="text-slate-600 ml-2 text-lg">10 minutos aprox.</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-start space-x-4"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-slate-800 text-lg">Puntuación:</span>
                <span className="text-slate-600 ml-2 text-lg">Cada respuesta suma de 1 a 10 puntos.</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-start space-x-4"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-slate-800 text-lg">Recomendaciones:</span>
                <span className="text-slate-600 ml-2 text-lg">Solo si el puntaje total o alguna respuesta ≤ 7.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Botón CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(255, 107, 53, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#E55A2B] hover:to-[#E67A35] text-white font-semibold text-xl px-16 py-5 rounded-2xl shadow-2xl transition-all duration-500 border border-white/20"
        >
          Comenzar auto-diagnóstico
        </motion.button>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 text-sm text-slate-500 font-light"
        >
          <p>Herramienta de evaluación desarrollada para profesionales de cadena de suministro</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroScreen;
