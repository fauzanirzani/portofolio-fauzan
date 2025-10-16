"use client";

import Lottie from "lottie-react";

export default function AnimationLottie({ animationPath, width = "95%" }) {
  if (!animationPath) return null; // ✅ mencegah error saat data belum siap

  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width }}
    />
  );
}