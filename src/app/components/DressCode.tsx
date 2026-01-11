import { motion } from "motion/react";
import React from "react";

export function DressCode() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl text-center text-white mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Дресс-код
        </motion.h2>
        
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 sm:p-12 border border-[#f5c6d6]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-base sm:text-lg text-[#4a4a4a] text-center leading-relaxed">
            Нам будет приятно видеть джентльменов в костюмах, а дам — в платьях пастельных оттенков.
          </p>
          
          {/* Color palette suggestion */}
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#ffd6e5] border-2 border-white shadow-md"></div>
              <span className="text-xs text-[#6a6a6a]">Розовый</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#e8d5f2] border-2 border-white shadow-md"></div>
              <span className="text-xs text-[#6a6a6a]">Лавандовый</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#d4e5f7] border-2 border-white shadow-md"></div>
              <span className="text-xs text-[#6a6a6a]">Голубой</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#ffebd6] border-2 border-white shadow-md"></div>
              <span className="text-xs text-[#6a6a6a]">Персиковый</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#d4f2e5] border-2 border-white shadow-md"></div>
              <span className="text-xs text-[#6a6a6a]">Мятный</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}