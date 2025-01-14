import React, { useState, useEffect } from 'react';

const sportsData = [
  {
    name: 'CRICKET',
    description: `Welcome to Asian Cricket Academy, the cricket education department of 
      The Asian School. We believe that cricket is not just a sport, but a way of life that teaches 
      discipline, perseverance, and teamwork. At Asian Cricket Academy, we offer a comprehensive 
      and integrated growth program designed to provide a well-characterized and moving roadmap 
      for our students.`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Cricket_picture.jpg',
  },
  {
    name: 'TABLE TENNIS',
    description: `Table Tennis is a fast-paced game requiring quick reflexes and strategic 
      thinking. Our academy provides top-notch training facilities and experienced coaches 
      to help students excel in this exciting sport.`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg',
  },
  {
    name: 'KHO KHO',
    description: `Kho Kho is a traditional Indian sport that emphasizes teamwork, strategy, 
      and agility. Our academy introduces students to the rich history and modern techniques of 
      this vibrant game.`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Glipmse_of_India_vs_Iran_Match_during_4th_Asian_Kho_Kho_Championship.jpg',
  },
  {
    name: 'KABADDI',
    description: `Kabaddi is a thrilling contact sport that combines strength, agility, and 
      strategy. At our academy, students learn the fundamentals and advanced skills of this 
      exhilarating game.`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sadugudu_sadugude.jpg',
  },
];

const SportsSection = () => {
  const [currentSportIndex, setCurrentSportIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSportIndex((prevIndex) => (prevIndex + 1) % sportsData.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSport = sportsData[currentSportIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-4">Sports</h2>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>

      {/* Slideshow Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Sport Image */}
        <div className="lg:col-span-2">
          <img
            src={currentSport.image}
            alt={currentSport.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Sport Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{currentSport.name}</h3>
          <div className="w-16 h-1 bg-cyan-500"></div>
          <p className="text-gray-700">{currentSport.description}</p>
        </div>
      </div>

      {/* Static Grid of All Sports */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sportsData.map((sport, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img
              src={sport.image}
              alt={sport.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-4">{sport.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsSection;
