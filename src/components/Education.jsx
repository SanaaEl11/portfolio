// Education.jsx
import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Digital Development (Fullstack Option)",
      institution: "ISTA",
      years: "2023 – 2025",
      location: "Khémisset, Morocco",
    },
    {
      degree: "Fundamental License in English Studies (Linguistics Option)",
      institution: "Ibn Tofail University",
      years: "2019 – 2022",
      location: "Kenitra, Morocco",
    },
    {
      degree: "Baccalaureate in Physical Sciences",
      institution: "El Ouazzane High School",
      years: "2018 – 2019",
      location: "Khémisset, Morocco",
    },
  ];

  return (
    <section className="py-20 bg-black text-white border-t border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6" id="education">
        {/* Heading - exact same style as "My Skills" / "About Me" */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent tracking-tight">
          Education
        </h2>

        {/* Timeline container - professional vertical timeline matching dark theme */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line with gradient (matches hero gradient accents) */}
          <div className="absolute left-10 top-6 bottom-6 w-1 bg-gradient-to-b from-orange-400 via-pink-500 to-orange-400 rounded-full"></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative flex items-start gap-12 mb-16 last:mb-0 group"
            >
              {/* Icon circle with animation - matches the colored skill icons and hero bear circle */}
              <div className="flex-shrink-0 z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl flex items-center justify-center shadow-xl shadow-pink-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-5xl drop-shadow-md">🎓</span>
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 pt-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="inline-flex items-center px-6 py-2 text-sm font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-3xl text-orange-400 transition-all">
                    {edu.years}
                  </span>
                </div>

                <p className="text-xl text-zinc-300 mt-1">{edu.institution}</p>
                <p className="text-zinc-400 text-lg">{edu.location}</p>

                {/* Subtle animation line under each entry */}
                <div className="h-px w-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent mt-6 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;