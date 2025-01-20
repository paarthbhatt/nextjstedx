import React, { useEffect } from "react";
import AboutPage from "@/components/Team.tsx/teamMembers";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("data-who", "💎 Made with naker.io 💎");
    script.src = "https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js";
    script.dataset.option = JSON.stringify({
      environment: {
        gradient: "horizontal",
        sensitivity: 0.8,
        colorStart: [14, 1, 1, 1],
        colorEnd: [0, 0, 0, 1],
      },
      particle: {
        life: 5,
        power: 0.01,
        texture:
          "https://res.cloudinary.com/naker-io/image/upload/v1566560053/star_07.png",
        number: 392,
        colorStart: [74, 72, 53, 1],
        colorEnd: [235, 0, 40, 1],
        sizeStart: 1.13,
        sizeEnd: 2.26,
        direction1: { x: 100, y: 100, z: 100 },
        direction2: { x: -100, y: -100, z: -100 },
      },
      waterMark: false,
    });
    document.getElementById("naker-container")?.appendChild(script);

    return () => {
      document.getElementById("naker-container")?.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Effect */}
      <div className="h-[85vh] bg-black flex items-center justify-center text-center relative">
        <div id="naker-container" className="absolute inset-0 z-0"></div>
        <div className="z-10">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="w-full max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                TEDx<span className="text-[#FF3A3A]">Team</span>
              </motion.h1>
              <motion.p
                className="text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Meet the passionate individuals behind our TEDx event.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/90 text-white text-lg px-8 py-3">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* About Page */}
      <AboutPage />
    </div>
  );
};

export default About;
