import { motion } from "motion/react";
import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import initialsImg from "@/assets/RA2.png?url";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col px-4 py-20">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-8">
          
          {/* Names */}
          <motion.h1 
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Роман & Анастасия
          </motion.h1>
          
          {/* Date */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <p 
              className="text-6xl sm:text-4xl md:text-5xl text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              26.06.2026
            </p>
          </motion.div>
          
        </div>
      </div>
      
      {/* Initials Image at the bottom */}
      <motion.div 
        className="flex justify-center pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
      >
        <ImageWithFallback 
          src={initialsImg}
          alt="Initials Р & А" 
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain drop-shadow-lg"
        />
      </motion.div>
    </section>
  );
}