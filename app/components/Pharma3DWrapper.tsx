"use client";

import dynamic from "next/dynamic";

// 👇 Disable SSR (VERY IMPORTANT)
const Pharma3D = dynamic(() => import("./Pharma3D"), {
  ssr: false,
});

export default function Pharma3DWrapper() {
  return <Pharma3D />;
}