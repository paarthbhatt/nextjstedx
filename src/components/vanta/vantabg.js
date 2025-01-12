import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Required for Vanta.js
import CLOUDS from "vanta/dist/vanta.clouds.min"; // Import the Clouds effect

const VantaClouds = ({ children }) => {
  const vantaRef = useRef(null); // Ref for the Vanta container
  const vantaEffect = useRef(null); // Ref for the Vanta instance

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = CLOUDS({
        el: vantaRef.current, // The element to apply the background
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        skyColor: 0xc191e, // Customize these colors as needed
        cloudColor: 0x171d28,
        cloudShadowColor: 0xaa1e1e,
        sunColor: 0xff0000,
        sunGlareColor: 0xfe3d00,
        sunlightColor: 0xf40707,
      });
    }

    // Cleanup to prevent memory leaks
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} style={{ height: "100vh", width: "100vw" }}>
      {children}
    </div>
  );
};

export default VantaClouds;
