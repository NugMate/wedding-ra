import { motion } from "motion/react";
import React from "react";

export function LocationMap() {
  // Coordinates for Заволжский район, деревня Вершинино
  // Update these with the exact coordinates if needed
  const latitude = 57.5; // Replace with actual latitude
  const longitude = 42.2; // Replace with actual longitude
  
  // Yandex Maps static map URL
  const staticMapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=12&l=map&size=600,400&pt=${longitude},${latitude},pm2rdm`;
  
  // Yandex Maps link for redirect
  const yandexMapUrl = `https://yandex.ru/maps/?ll=${longitude},${latitude}&z=12&pt=${longitude},${latitude}`;

  return (
    <section className="py-16 px-4 pb-24">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl text-center text-white mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Место проведения
        </motion.h2>
        
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 border border-[#f5c6d6]/30 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <a 
            href={yandexMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img 
              src={staticMapUrl}
              alt="Карта места проведения"
              className="w-full h-auto rounded-2xl"
            />
          </a>
          <p className="text-base sm:text-lg text-[#111111] text-center mt-4 leading-relaxed">
            Заволжский район, деревня Вершинино
          </p>
          <p className="text-sm text-[#111111] text-center mt-2">
            Нажмите на карту, чтобы открыть в Яндекс.Картах
          </p>
        </motion.div>
      </div>
    </section>
  );
}
