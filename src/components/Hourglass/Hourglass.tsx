import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export default function Hourglass() {
  const hourglassRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (hourglassRef.current) {
      hourglassRef.current.rotation.y += delta * 0.9;
    }
  });

  return (
    <mesh ref={hourglassRef}>
      <cylinderGeometry args={[0.5, 0.5, 2, 32, 6, true]} />
      <meshStandardMaterial color="#ff0000" wireframe />
    </mesh>
  );
}
