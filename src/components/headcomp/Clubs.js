import React from "react";

const clubs = [
  {
    name: "Science Club",
    description:
      "The Science Club encourages young minds to explore, experiment, and innovate through hands-on activities, science fairs, and exciting experiments.",
    icon: "🔬",
  },
  {
    name: "Art & Craft Club",
    description:
      "The Art & Craft Club fosters creativity by engaging students in drawing, painting, sculpture, and various other artistic endeavors.",
    icon: "🎨",
  },
  {
    name: "Book Lovers Club",
    description:
      "The Book Lovers Club nurtures a love for reading through storytelling sessions, book exchanges, and fun literature-based games.",
    icon: "📚",
  },
  {
    name: "Eco Club",
    description:
      "Students in the Eco Club participate in activities promoting environmental awareness, such as tree plantation drives, recycling projects, and clean-up campaigns.",
    icon: "🌱",
  },
  {
    name: "Math Club",
    description:
      "The Math Club introduces students to the wonders of mathematics through puzzles, games, and real-life applications.",
    icon: "➗",
  },
  {
    name: "Drama & Theatre Club",
    description:
      "This club enhances confidence and creativity by offering opportunities for acting, scriptwriting, and stage management in school plays and performances.",
    icon: "🎭",
  },
  {
    name: "Robotics Club",
    description:
      "The Robotics Club introduces coding and robotics through simple yet exciting projects, fostering problem-solving and innovation.",
    icon: "🤖",
  },
  {
    name: "Music & Choir Club",
    description:
      "Students in the Music Club can explore their musical talents through singing, instrumental training, and choir performances.",
    icon: "🎶",
  },
  {
    name: "Cooking Club",
    description:
      "The Cooking Club teaches basic culinary skills through fun and safe cooking sessions, focusing on nutrition and creativity.",
    icon: "🍳",
  },
  {
    name: "Cultural Heritage Club",
    description:
      "This club introduces students to India's rich cultural heritage through activities like folk art, traditional dances, and history projects.",
    icon: "🌍",
  },
];

const Clubs = () => {
  return (
    <div className="bg-cyan-500 min-h-screen py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our School Clubs</h1>
        <p className="text-center mb-8 text-lg">
          At our school, we believe in holistic education. Our clubs are designed to nurture creativity, leadership, and teamwork in students, helping them discover their interests and talents.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-white text-cyan-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl text-center mb-4">{club.icon}</div>
              <h2 className="text-2xl font-semibold text-center mb-2">{club.name}</h2>
              <p className="text-lg text-center">{club.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
