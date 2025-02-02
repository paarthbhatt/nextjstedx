import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TeamMemberX } from "../TeamMemberX/TeamMemberX";

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
  description?: string;
  longDescription: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  title,
  image,
  description,
  longDescription,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative">
      {/* Card */}
      <motion.div
        className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-black shadow-lg cursor-pointer h-96 w-[90%] transform transition-transform"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        onClick={toggleExpand}
      >
        {/* Decorative X */}
        <div className="absolute inset-0 top-[-96px] bg-slate-800 opacity-40 z-0">
          <svg className="w-full h-full scale-125" viewBox="0 0 100 100">
            <clipPath id="halfXClip">
              <rect x="0" y="0" width="50" height="100" />
            </clipPath>
            <path
              d="M20 20 L80 80 M80 20 L20 80"
              stroke="currentColor"
              strokeWidth="15"
              clipPath="url(#halfXClip)"
            />
          </svg>
        </div>
        {/* Image Above */}
        <div className="relative w-full h-[75%] grayscale group-hover:grayscale-0 transition-all duration-200">
          {/* Faster grayscale transition */}
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-t-lg"
          />
        </div>
        {/* Name and Details at Bottom */}
        <div className="p-4 h-[30%] flex flex-col justify-start items-center text-center bg-black">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-red-600">{title}</p>
        </div>
        {/* Hover Effect */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-10" />
        {/* Faster hover line transition */}
      </motion.div>

      {/* Expanded View */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-90"
            onClick={toggleExpand}
          >
            <div className="relative w-full h-[85%] max-w-[900px]">
              {/* Fullscreen Image */}
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                height={900}
                width={900}
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />

              <div className="absolute inset-0 z-[-10] transform scale-x-[1.75] scale-y-[1.75]">
                <TeamMemberX className="text-red-600" />{" "}
                {/* Apply text color to the TeamMemberX component */}
              </div>

              {/* Gradient Overlay and Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-6xl font-bold mb-2">{name}</h2>
                  <p className="text-2xl text-red-600 mb-4">{title}</p>
                  <p className="text-lg leading-relaxed max-w-6xl">
                    {longDescription}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpeakerCard;
