import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaShip, FaArrowRight } from "react-icons/fa";
import logo from '@/assets/logo.png'

import bg4 from '@/assets/bg4.jpeg'
import Image from "next/image";

export default function HeroSection() {
  const [wavePosition, setWavePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWavePosition((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.70)]" id="home">
      {/* Background Animation */}
      
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/ocean-waves.png')",
          backgroundPosition: `0px ${wavePosition}px`,
          transition: "background-position 0.1s linear",
        }}
      />
      <Image className="absolute z-[-1] top-0 left-0 w-full h-screen object-cover" src={bg4} alt='BMA'/>
      <div className="text-center px-4 md:px-12 lg:pt-64 pt-48 absolute top-0 left-0 w-full h-full">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl text-white md:text-6xl font-bold pt-56"
        >
          Level Up Your <div>
          <span className="leading-snug text-blue-600">Marine Engineering</span> Career
          </div>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-2 text-base md:text-lg text-white"
        >
          Your journey to becoming a top-tier marine engineer starts here! 
        </motion.p>
      </div>
    </section>
  );
}
