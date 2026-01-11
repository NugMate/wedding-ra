import { motion } from "motion/react";
import React from "react";

export function OvernightInfo() {
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
          Ночлег
        </motion.h2>
        
        <motion.div 
          className="bg-white/90 rounded-3xl shadow-lg p-8 sm:p-12 border border-[#f5c6d6]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <p className="text-base sm:text-lg text-[#4a4a4a] leading-relaxed mb-6">
            Дорогие гости! Мы рады предоставить вам возможность переночевать. Будем счастливы, если вы останетесь!
          </p>
          <p className="text-base sm:text-lg text-[#4a4a4a] leading-relaxed mb-6">
            Пожалуйста, возьмите с собой все необходимые средства для личной гигиены, полотенце и сменную одежду.
          </p>
          <p className="text-base sm:text-lg text-[#4a4a4a] leading-relaxed">
            На утро следующего дня, в 11:30 нас будет ждать трансфер, который отвезёт обратно.
          </p>
        </motion.div>
      </div>
    </section>
  );
}