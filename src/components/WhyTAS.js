import React from 'react';
import { Wifi, Building2, Home, Users, BookOpen, Trophy, TrendingUp, HandshakeIcon, Globe } from 'lucide-react';

const FeatureCard = ({ icon: Icon, text, bgColor = "bg-black" }) => {
  return (
    <div className={`${bgColor} text-white p-6 rounded-lg flex items-center gap-4 shadow-lg`}>
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
      bgColor: "bg-cyan-500"
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
    {
      icon: Wifi,
      text: "Wi-Fi, Smart Classrooms, Camera Monitored and Secure Campus",
      bgColor: "bg-black"
    },
    {
      icon: TrendingUp,
      text: "Career Information and Guidance Department at TAS",
      bgColor: "bg-black"
    },
    {
      icon: Trophy,
      text: "10+ Olympic Sports including Gymnastics, Skating etc.",
      bgColor: "bg-black"
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gray-100">
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
        >
          ❄
        </div>
      ))}
      
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#003366]">
          Why TAS?
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