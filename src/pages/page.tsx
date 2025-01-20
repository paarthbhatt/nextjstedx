"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import Hourglass from "@/components/Hourglass/Hourglass";

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 gap-6 md:gap-8 justify-center items-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center text-center p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10"
        >
          <div className="text-4xl md:text-6xl font-bold text-white">
            {value}
          </div>
          <span className="uppercase text-sm md:text-base tracking-widest text-red-600 font-semibold">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const themeContentRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  const hourglassYPosition = useTransform(smoothProgress, [0, 0.7], [1, 3]);
  const hourglassScale = useTransform(smoothProgress, [0, 0.4], [1, 0.5]);
  const transformProgress = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);

  const eventDate = new Date(Date.now() + 42 * 24 * 60 * 60 * 1000);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[300vh] overflow-hidden bg-black"
    >
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(45deg, transparent 40%, #ff0000 40%, #ff0000 60%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, #ff0000 40%, #ff0000 60%, transparent 60%)
          `,
        }}
      />

      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full h-full">
          <div className="flex flex-col justify-center items-center p-12 bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-sm">
            <div className="max-w-xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
                  TEDx
                </h2>
                <div className="text-xl md:text-2xl text-red-600 font-bold tracking-wider">
                  INVERSO CLESSIDRA
                </div>
              </div>
              <CountdownTimer targetDate={eventDate} />
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <Environment preset="studio" />
              <motion.group
                position-y={hourglassYPosition}
                scale={hourglassScale}
              >
                <Hourglass transformProgress={transformProgress} />
              </motion.group>
            </Canvas>
          </div>
        </div>
      </div>

      <div
        ref={themeContentRef}
        className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 p-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Our Theme
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Inverso Clessidra represents the reversal of time, challenging our
            perceptions and encouraging us to think differently about the past,
            present, and future.
          </p>
        </div>
      </div>
    </div>
  );
}
