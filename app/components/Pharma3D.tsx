"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import type { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const { scene } = useGLTF("https://modelviewer.dev/shared-assets/models/Astronaut.glb");
  const ref = useRef<Group | null>(null);

  // Auto rotation (subtle movement)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  // Scroll-based rotation (Apple-style)
  useEffect(() => {
    if (!ref.current) return;

    const animation = gsap.to(ref.current.rotation, {
      y: Math.PI * 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".three-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={3.5}
      position={[0, -1.2, 0]}
    />
  );
}

export default function Pharma3D() {
  return (
    <section className="three-section h-[200vh] bg-black">
      
      {/* Sticky container (Apple effect) */}
      <div className="sticky top-0 h-screen">
        
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          
          {/* Lighting setup */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <directionalLight position={[-5, -5, -5]} intensity={1} />

          <Suspense fallback={null}>
            <Model />
          </Suspense>

        </Canvas>

      </div>
    </section>
  );
}