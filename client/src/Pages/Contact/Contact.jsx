import { useState } from "react";

const tabs = [
  { label: "Team & Others", key: "team" },
];

const content = {
  team: `
    We're a bunch of plant geeks, tech builders, designers, and content creators.
    What binds us is a passion for nature and a belief in mindful growth. 
    Alongside our community moderators and gardener partners, we strive to make every digital leaf a source of life.
  `,
};

const teamMembers = [
  {
    name: "Tajuddin Green",
    role: "Founder & Chief Gardener",
    email: "tajuddin80.cse.dev@gmail.com",
    phone: "+880 1303-187780",
  },
  {
    name: "Taj uddin",
    role: "Community Manager",
    email: "cmtajuddinchowdhury@gmail.com",
    phone: "+880 0184-5072525",
  },
  {
    name: "Rafiq Bin Basil",
    role: "Lead Botanist",
    email: "rafiq.basil@plantbook.io",
    phone: "+880 1985-334455",
  },
  {
    name: "Nadia Leaf",
    role: "UX Designer",
    email: "nadia.leaf@plantbook.io",
    phone: "+880 1620-778899",
  },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState("team");

  return (
    <section
      data-aos="fade-left"
      className="w-full mx-auto px-4 py-12 text-base-content"
    >
      <h2 className="text-4xl font-bold text-primary mb-4">📞 Contact Our Team</h2>
      <p className="text-base-content/70 mb-8 text-lg max-w-2xl">
        Whether you're curious about plant tips, partnerships, or joining our team — feel free to connect with any of our core members.
      </p>

      {/* Tabs */}
      <div className="border-b border-base-content/20 mb-4">
        <div className="flex flex-wrap gap-4 md:gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`pb-2 text-sm md:text-base font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab.key
                  ? "text-primary border-primary"
                  : "border-transparent text-base-content/70 hover:text-primary"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Description */}
      <div className="mt-6 mb-10 text-base md:text-lg leading-relaxed text-base-content">
        {content[activeTab]
          .trim()
          .split("\n")
          .map((para, idx) => (
            <p key={idx} className="mb-4">
              {para.trim()}
            </p>
          ))}
      </div>

      {/* Team Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="border border-base-content/10 bg-base-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-base-content/80 mb-2">{member.role}</p>
            <p className="text-sm">
              📧{" "}
              <a
                href={`mailto:${member.email}`}
                className="text-primary hover:underline"
              >
                {member.email}
              </a>
            </p>
            <p className="text-sm">📞 {member.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
