import React from 'react';
import { Building2, Home, Users, BookOpen, HandshakeIcon, Globe } from 'lucide-react';

const FeatureCard = ({ icon: Icon, text, bgColor = "bg-black" }) => {
  return (
    <div
      className={`${bgColor} text-white p-6 rounded-lg flex items-center gap-4 shadow-lg hover:bg-cyan-500 transition-colors duration-300`}
    >
      <Icon size={32} className="flex-shrink-0" />
      <p className="text-lg">{text}</p>
    </div>
  );
};


const WhyTAS = () => {
  const features = [
    {
      icon: Building2,
      text: "16-acre campus, 'Asian Acres' in tranquil and verdant environs.",
      bgColor: "bg-black"
    },
    {
      icon: Globe,
      text: "Outstanding Academics with Record-Breaking Results",
      bgColor: "bg-black"
    },
    {
      icon: BookOpen,
      text: "Promoting Innovative, Experiential Learning Practices",
      bgColor: "bg-black"
    },
    {
      icon: Home,
      text: "Spacious Comfortable Home-like Boarding Houses",
      bgColor: "bg-black"
    },
    {
      icon: Users,
      text: "The Faculty of The Asian School is a highly respected.",
      bgColor: "bg-black"
    },
    {
      icon: HandshakeIcon,
      text: "Extremely Friendly and Approachable Management",
      bgColor: "bg-black"
    },
  ];
  

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gray-100">
      {/* Static background with subtle fade effect */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg")', // Replace with your image URL
          opacity: 0.5, // Set the constant opacity for the background image
          backgroundPosition: 'center center', // Ensure the image is centered
          backgroundSize: 'cover',// Ensure the background image stays behind the content
        }}
      ></div>

      {/* Snowflake decorations */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-gray-300"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: 'scale(1.2)',
          }}
        ></div>
      ))}

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#003366]">
          Why EGS?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              text={feature.text}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTAS;
