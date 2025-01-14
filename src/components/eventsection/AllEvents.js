import React from 'react';

const AllEvents = () => {
  const events = [
    {
      id: 1,
      title: 'DEEPOTSAV CELEBRATION',
      image: '/api/placeholder/400/300',
      description: 'A grand celebration of lights and culture.',
    },
    {
      id: 2,
      title: 'SPIC MACAY',
      image: '/api/placeholder/400/300',
      description: 'A mesmerizing cultural experience featuring classical music and dance.',
    },
    {
      id: 3,
      title: 'YUVA SANSAD',
      image: '/api/placeholder/400/300',
      description: 'An engaging platform for youth to discuss national issues and policies.',
    },
    {
      id: 4,
      title: 'ANNUAL ATHLETIC MEET',
      image: '/api/placeholder/400/300',
      description: 'A celebration of sportsmanship and athletic excellence.',
    },
    {
      id: 5,
      title: 'INDEPENDENCE DAY',
      image: '/api/placeholder/400/300',
      description: 'Honoring the spirit of freedom with patriotic fervor.',
    },
    {
      id: 6,
      title: 'FOUNDERS DAY',
      image: '/api/placeholder/400/300',
      description: 'Commemorating the visionaries who built our institution.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="cursor-pointer border p-4 rounded-lg hover:shadow-lg"
            onClick={() =>
              window.open(
                `/event/${event.id}?noheader=true&description=${encodeURIComponent(event.description)}`,
                '_blank'
              )
            }
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold">{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
