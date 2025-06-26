import React from "react";
import animationDataUrl from "../../assets/extra-section/animation.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <Lottie
       animationData={animationDataUrl} 
       loop={true}
        autoplay
        style={{ width: 200, height: 200 }}
      />

      <p className="text-xl font-semibold mt-4">Loading...</p>
    </div>
  );
};

export default Loader;
