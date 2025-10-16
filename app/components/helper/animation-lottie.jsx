"use client"; // <── WAJIB agar dijalankan di browser, bukan di server

import dynamic from "next/dynamic";

// Import lottie-react secara dinamis (hanya di client)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: { width },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;