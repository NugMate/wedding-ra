import { motion } from "motion/react";
import React from "react";

export function OvernightInfo() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-[4.5rem] sm:text-[4.5rem] text-center text-white mb-12"
          style={{ fontFamily: "LudvigVanBethoveen", lineHeight: "1" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ночёвка
        </motion.h2>
        
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-[#f5c6d6]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-base sm:text-lg text-[#000000] leading-relaxed mb-6">
            Дорогие гости! Мы рады предоставить Вам возможность переночевать. Будем счастливы, если Вы останетесь!
          </p>
          <p className="text-base sm:text-lg text-[#000000] leading-relaxed mb-6">
            Пожалуйста, возьмите с собой все необходимые средства для личной гигиены, полотенце и сменную одежду.
          </p>
          <p className="text-base sm:text-lg text-[#000000] leading-relaxed">
            На следующий день, в <b>9:00</b>, будет подан завтрак.
          </p>
          <p className="text-base sm:text-lg text-[#000000] leading-relaxed">
            В <b>12:00</b> для нас будет организован трансфер, который отвезёт обратно.
          </p>
        </motion.div>
      </div>
    </section>
  );
}