import { useState } from "react";
import { FaLeaf, FaSeedling, FaSun } from "react-icons/fa";

const tabs = [
  { label: "Story", key: "story", icon: <FaLeaf className="text-primary" /> },
  { label: "Mission", key: "mission", icon: <FaSeedling className="text-primary" /> },
  { label: "Success", key: "success", icon: <FaSun className="text-primary" /> },
];

const content = {
  story: `
    We started with a simple promise — to make plant care delightful and accessible for everyone.
    Over the years, our commitment to eco-friendly tips, expert advice, and a vibrant community
    has made PlantBook a trusted green companion. Whether you're nurturing your first succulent or
    managing a blooming balcony jungle, we're here to help you thrive.
  `,
  mission: `
    Our mission is to grow greener homes through education and inspiration. We aim to empower plant
    lovers with the right knowledge, personalized care routines, and community support. Through PlantBook,
    we make sustainable living not just a choice — but a joy.
  `,
  success: `
    From a humble blog to a thriving community of thousands, we've helped users across the globe
    revive their plants, learn organically, and discover joy in greenery. With top-rated guides,
    community-driven tips, and expert-backed resources, our success grows with each new leaf turned.
  `,
};

export default function Support() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section
      data-aos="zoom-in-up"
      className="w-full mx-auto px-4 py-16 text-base-content"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Why PlantBook
        </h2>
        <p className="max-w-2xl mx-auto text-base-content/70 text-lg">
          Discover our roots, mission, and impact — all grown with love and community.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-base-content/20 mb-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`flex items-center gap-2 pb-2 text-sm md:text-base font-semibold transition-all duration-300 border-b-2 ${
                activeTab === tab.key
                  ? "text-primary border-primary"
                  : "border-transparent text-base-content/60 hover:text-primary"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div
        className="relative bg-base-100 rounded-xl shadow-md p-6 md:p-10 transition-all duration-500"
        data-aos="fade-up"
      >
        <div className="space-y-5 text-base md:text-lg leading-relaxed">
          {content[activeTab]
            .trim()
            .split("\n")
            .map((para, idx) => (
              <p key={idx}>{para.trim()}</p>
            ))}
        </div>
      </div>
    </section>
  );
}
