import { motion } from "motion/react";
import React from "react";

export function InvitationText() {
  return (
    <section className="py-16 px-4">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-[#f5c6d6]/30">
          <p className="text-base sm:text-lg text-[#111111] text-center leading-relaxed">
            Дорогие гости! Мы с огромным удовольствием приглашаем Вас 26.06.2026 на торжественную церемонию нашего бракосочетания и праздничный банкет, посвященный нашей свадьбе.
          </p>
          <p className="text-base sm:text-lg text-[#111111] text-center leading-relaxed mt-6">
            В этот день мы хотим быть в окружении самых близких и дорогих нам людей.
          </p>
        </div>
      </motion.div>
    </section>
  );
}