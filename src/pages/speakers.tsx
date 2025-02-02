import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";;
import CardSpeaker from "@/components/speakersGrid/speakersGrid";

const SpeakersPage: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let VANTA: any;

    if (!vantaEffect && typeof window !== "undefined") {
      (async () => {
        // @ts-ignore:
        const module = await import("vanta/src/vanta.fog");
        VANTA = module.default;
        setVantaEffect(
          VANTA({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xff0000,
            midtoneColor: 0x4b160e,
            lowlightColor: 0x660808,
            baseColor: 0x552727,
          })
        );
      })();
    }

    // Cleanup on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div
        className="md:min-h-[80vh] min-h-[70vh] align-items-center flex flex-col"
        ref={vantaRef}
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1
          className="md:text-7xl text-5xl font-bold mb-4 text-white mt-14 md:mt-0"
          style={{
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
            marginBottom: "1rem",
          }}
        >
          Our Esteemed Speakers
        </h1>
        <p
          className="text-lg md:text-2xl max-w-800 text-gray-300 mb-4"
          style={{
            lineHeight: "1.8",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Meet the inspiring thought leaders and innovators from various fields
          who are set to share their valuable insights and experiences.
        </p>
      </div>
      <div className="relative z-10 bg-black">
        <CardSpeaker />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SpeakersPage), { ssr: false });
