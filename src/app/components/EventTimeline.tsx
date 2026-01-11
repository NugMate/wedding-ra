import { motion } from "motion/react";
import React from "react";

export function EventTimeline() {
  const events = [
    {
      time: "13:00",
      title: "Трансфер",
      description: "Микрорайон Рождественский, дом 4, подъезд 2 → Заволжский район, деревня Вершинино"
    },
    {
      time: "16:00",
      title: "Торжественная церемония",
      description: ""
    },
    {
      time: "17:00",
      title: "Банкет",
      description: ""
    },
    {
      time: "23:00",
      title: "Финал",
      description: ""
    }
  ];

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
          Программа дня
        </motion.h2>
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              className="bg-white/90 rounded-2xl shadow-md p-6 sm:p-8 border border-[#f5c6d6]/30 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <span 
                    className="inline-block text-3xl sm:text-4xl text-[#c48fa5] min-w-[100px]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {event.time}
                  </span>
                </div>
                <div className="flex-1 sm:border-l-2 sm:border-[#f5c6d6]/40 sm:pl-6">
                  <h3 className="text-xl sm:text-2xl text-[#4a4a4a] mb-2" style={{ fontWeight: 500 }}>
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="text-base text-[#6a6a6a] leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}