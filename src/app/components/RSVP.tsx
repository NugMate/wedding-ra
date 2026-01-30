import { motion } from "motion/react";
import React from "react";
import { GoogleForm } from "./GoogleForm";

export function RSVP() {
  return (
    <section className="py-16 px-4 pb-24">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-[4.5rem] sm:text-[4.5rem] text-center text-white mb-12"
          style={{ fontFamily: "LudvigVanBethoveen", lineHeight: "1" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Подтверждение присутствия
        </motion.h2>
        
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-[#f5c6d6]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-base sm:text-lg text-[#000000] leading-relaxed mb-6">
            Пожалуйста, подтвердите Ваше присутствие на нашем празднике до <strong>1 мая 2026 года</strong> лично или телефонным звонком / любым удобным для Вас способом.
          </p>
          <p className="text-base sm:text-lg text-[#000000] leading-relaxed">
            Мы организуем транспорт для гостей. Пожалуйста, сообщите нам, планируете ли вы воспользоваться трансфером.
          </p>
        </motion.div>
        
        {/* <GoogleForm /> */}
        {/* Final heading */}
        <section className="py-16 px-4 pb-24">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-[4rem] sm:text-[4.5rem] md:text-[5rem] text-center text-white"
              style={{ fontFamily: "LudvigVanBethoveen", lineHeight: "1" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Будем рады видеть Вас!
              <br />
              С любовью, 
              <br />
              Роман и Анастасия
            </motion.h2>
          </div>
        </section>
        
        {/* Decorative footer element */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20 Q20 10 30 20 T50 20 T70 20" stroke="#f5c6d6" strokeWidth="2" fill="none" opacity="0.5"/>
            <circle cx="20" cy="15" r="2" fill="#f5c6d6" opacity="0.6"/>
            <circle cx="40" cy="15" r="2" fill="#f5c6d6" opacity="0.6"/>
            <circle cx="60" cy="15" r="2" fill="#f5c6d6" opacity="0.6"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}