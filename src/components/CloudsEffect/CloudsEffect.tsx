import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const CloudsEffect = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let VANTA_CLOUDS: any;

    const loadVanta = async () => {
      if (vantaRef.current && !vantaEffect) {
        const Vanta = await import("vanta/dist/vanta.clouds.min");
        const THREE = await import("three");

        VANTA_CLOUDS = Vanta.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x0c191e,
          cloudColor: 0x171d28,
          cloudShadowColor: 0xaa1e1e,
          sunColor: 0xff0000,
          sunGlareColor: 0xfe3d00,
          sunlightColor: 0xf40707,
          THREE,
        });

        setVantaEffect(VANTA_CLOUDS);
      }
    };

    loadVanta();

    return () => {
      if (VANTA_CLOUDS) VANTA_CLOUDS.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="s-page-1 s-section-1 s-section h-screen"
    ></div>
  );
};

export default CloudsEffect;
