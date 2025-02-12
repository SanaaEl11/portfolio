
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaLaravel, FaDatabase } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className="p-6 bg-black min-h-screen flex items-center justify-center">
    <div className="w-full max-w-4xl rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
        {/* Frontend Skills */}
        <div className="bg-black p-6 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Frontend Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            
            {/* HTML */}
            <div className="flex flex-col items-center text-orange-500 text-8xl transform hover:scale-110 transition-all duration-200 text-center">
              <FaHtml5 />
              <span className="text-white text-xl font-medium mt-2">HTML</span>
            </div>
  
            {/* CSS */}
            <div className="flex flex-col items-center text-blue-500 text-8xl transform hover:scale-110 transition-all duration-200 text-center">
              <FaCss3Alt />
              <span className="text-white text-xl font-medium mt-2">CSS</span>
            </div>
  
            {/* React */}
            <div className="flex flex-col items-center text-cyan-500 text-8xl transform hover:scale-110 transition-all duration-200 text-center">
              <FaReact />
              <span className="text-white text-xl font-medium mt-2">React.js</span>
            </div>
  
            {/* JavaScript */}
            <div className="flex flex-col items-center text-yellow-400 text-8xl transform hover:scale-110 transition-all duration-200 text-center">
              <FaJs />
              <span className="text-white text-xl font-medium mt-2">JavaScript</span>
            </div>
          </div>
        </div>
  
        {/* Backend Skills */}
        <div className="bg-black p-6 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Backend Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            
            {/* Laravel */}
            <div className="flex flex-col items-center text-red-600 text-8xl transform hover:scale-110 transition-all duration-200 text-center">
              <FaLaravel />
              <span className="text-white text-xl font-medium mt-2">Laravel</span>
            </div>
  
            {/* MySQL */}
            <div className="flex flex-col items-center text-gray-500 text-8xl transform hover:scale-110  transition-all duration-200 text-center">
              <FaDatabase />
              <span className="text-white text-xl font-medium mt-2">MySQL</span>
            </div>
  
            {/* MongoDB */}
            <div className="flex flex-col items-center text-green-700 text-8xl transform hover:scale-110 transition-all duration-200 text-center">
              <SiMongodb />
              <span className="text-white text-xl font-medium mt-2">MongoDB</span>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
  
  );
};

export default Skills;
