import { motion } from "motion/react";
import React from "react";

export function GoogleForm() {
  return (
    <section className="py-16 px-4 pb-24">
      <div className="mx-auto">
        <motion.h2
          className="text-[4.5rem] sm:text-[4.5rem] text-center text-white mb-8"
          style={{ fontFamily: "LudvigVanBethoveen", lineHeight: "1" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Анкета
        </motion.h2>

        <motion.div
          className="rounded-3xl shadow-xl p-3 sm:p-6 border border-[#f5c6d6]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="w-full overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfLaFy0ABegrNk5HhMFcPgOW-6n3bYUqj2MNCzG6Fczsi1esg/viewform?embedded=true"
              title="Анкета гостей"
              className="w-full rounded-2xl border-0"
              style={{ minHeight: "850px" }}
              loading="lazy"
            >
              Загрузка…
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
