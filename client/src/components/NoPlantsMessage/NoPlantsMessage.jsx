import React from "react";
import leafIcon from "../../assets/extra-section/leaf animation.gif";
import { useNavigate } from "react-router";

const NoPlantsMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-base-100 min-h-screen flex items-center justify-center px-4 text-base-content">
      <style>
        {`
          @keyframes jump {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .jump-animation {
            animation: jump 1.5s infinite;
          }
        `}
      </style>

      <div className="text-center max-w-md">
        {/* Animated Leaf Icon */}
        <img
          src={leafIcon}
          alt="Leaf Icon"
          className="mx-auto w-16 h-16 jump-animation mb-6"
        />

        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
          Oops! No Plants Added Yet
        </h2>
        <p className="text-base-content opacity-80 mb-6">
          Looks like you haven’t added any plants yet. Start your plant care
          journey by adding your first plant now!
        </p>

        {/* Button with DaisyUI theming */}
        <button
          onClick={() => navigate("/sharetip")}
          className="btn btn-primary"
        >
          Add a Plant 🌱
        </button>
      </div>
    </div>
  );
};

export default NoPlantsMessage;
