import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import CardGrid from "../components/Speakers/speakerGrid"; // Keep CardGrid import here

const SpeakersPage: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let VANTA: any;

    if (!vantaEffect && typeof window !== "undefined") {
      (async () => {
        // @ts-ignore: Suppressing type error for the Vanta module
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
                baseColor: 0x1e0e0e,
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
      {/* Vanta Effect Section */}
      <div
        ref={vantaRef}
        style={{
          minHeight: "80vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        {/* Add Beautiful Typography */}
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
            marginBottom: "1rem",
          }}
        >
          Our Esteemed Speakers
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: "#ccc",
            maxWidth: "800px",
            lineHeight: "1.8",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Meet the inspiring thought leaders and innovators from various fields
          who are set to share their valuable insights and experiences.
        </p>
      </div>

      {/* Speakers Cards Section */}
        <div
        style={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "#0a0a0a", // Black background for cards section
            color: "white",
            paddingTop: "1rem", // Reduced space above cards
            paddingBottom: "3rem", // Added space below the last card
        }}
    >
  <CardGrid />
</div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SpeakersPage), { ssr: false });
