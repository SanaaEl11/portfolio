// Certification.jsx
import React from "react";

const Certification = () => {
  const certificationsData = [
    {
      title: "JavaScript Essentials 1 & 2",
      issuer: "Networking Academy CISCO",
    },
    {
      title: "Programming Essentials in Python",
      issuer: "Networking Academy CISCO",
    },
    {
      title: "Computer Hardware Basics",
      issuer: "Networking Academy CISCO",
    },
    {
      title: "Microsoft Office",
      issuer: "Centre Culturel ESSALAM",
    },
  ];

  return (
    <section className="py-20 bg-black text-white border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading - exact same style as "My Skills" / "About Me" */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent tracking-tight">
          Certifications
        </h2>

        {/* Grid of certification cards - matches the clean grid style of Skills section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-400 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6"
            >
              {/* Icon - professional certificate style with gradient, matches skill icon colors */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 transition-all duration-500 group-hover:rotate-12">
                <span className="text-4xl drop-shadow-sm">📜</span>
              </div>

              {/* Text content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-orange-300 mt-2 text-lg font-medium">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle note to match the "passionate about improving skills" tone from hero */}
        <p className="text-center text-zinc-400 mt-12 text-sm max-w-md mx-auto">
          Continuously building expertise through industry-recognized programs
        </p>
      </div>
    </section>
  );
};

export default Certification;