import React from "react";

const extracurricularActivities = [
  {
    name: "Music & Dance",
    description:
      "Students can explore their musical talents in various instruments, vocals, and dance forms. We offer training in classical, contemporary, and folk dance and music.",
    icon: "🎶",
  },
  {
    name: "Drama & Theatre",
    description:
      "The Drama & Theatre club offers a platform for students to explore acting, scriptwriting, and stage management. They participate in school plays and performances.",
    icon: "🎭",
  },
  {
    name: "Arts & Craft",
    description:
      "Our Arts & Craft club encourages creativity through drawing, painting, sculpture, and other forms of visual art. Students display their work in exhibitions.",
    icon: "🎨",
  },
  {
    name: "Debate & Public Speaking",
    description:
      "The Debate club helps students improve their oratory skills and critical thinking by participating in debates, discussions, and Model United Nations (MUN).",
    icon: "🗣️",
  },
  {
    name: "Yoga & Meditation",
    description:
      "Our Yoga and Meditation classes promote mental well-being, focus, and physical health. These activities help students develop self-discipline and stress management techniques.",
    icon: "🧘",
  },
  {
    name: "Community Service",
    description:
      "Students actively participate in community development activities such as environmental clean-ups, charity events, and social outreach programs.",
    icon: "🤝",
  },
  {
    name: "Leadership & Clubs",
    description:
      "We offer leadership programs where students learn teamwork, responsibility, and how to manage clubs like the Student Council, Environmental Club, and more.",
    icon: "🏅",
  },
  {
    name: "Coding & Robotics",
    description:
      "The Coding and Robotics club teaches students the basics of programming, robotics, and how to build simple machines. They compete in school-wide tech challenges.",
    icon: "🤖",
  },
  {
    name: "Cultural Activities",
    description:
      "Students can participate in various cultural activities like festivals, cultural fests, and talent shows to showcase their diverse skills and traditions.",
    icon: "🌍",
  },
];

const Extracurricular = () => {
  return (
    <div className="bg-cyan-500 min-h-screen py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Extracurricular Activities</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extracurricularActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-white text-cyan-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl text-center mb-4">{activity.icon}</div>
              <h2 className="text-2xl font-semibold text-center mb-2">{activity.name}</h2>
              <p className="text-lg text-center">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extracurricular;
