import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import CardGrid from '../components/Speakers/speakerGrid'; // Keep CardGrid import here

const SpeakersPage: React.FC = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let VANTA: any;

        if (!vantaEffect && typeof window !== 'undefined') {
            (async () => {
                // @ts-ignore: Suppressing type error for the Vanta module
                const module = await import('vanta/src/vanta.birds');
                VANTA = module.default;
                setVantaEffect(
                    VANTA({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        scale: 1.0,
                        scaleMobile: 1.0,
                        color1: 0xcc1212,
                        color2: 0x391619,
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
        <div ref={vantaRef} style={{ minHeight: '100vh', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h1 style={{ textAlign: 'center', color: 'white' }}>Speakers</h1>
                <CardGrid /> {/* Keep CardGrid rendering as it is */}
            </div>
        </div>
    );
};

// Disable SSR for the component to avoid issues with Vanta.js
export default dynamic(() => Promise.resolve(SpeakersPage), { ssr: false });
