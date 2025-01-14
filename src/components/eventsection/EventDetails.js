import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();

  const events = {
    1: {
      title: 'DEEPOTSAV CELEBRATION',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      description: 'A grand celebration of lights and culture.',
    },
    2: {
      title: 'SPIC MACAY',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      description: 'A mesmerizing cultural experience featuring classical music and dance.',
    },
    3: {
      title: 'YUVA SANSAD',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      description: 'An engaging platform for youth to discuss national issues and policies.',
    },
    4: {
      title: 'ANNUAL ATHLETIC MEET',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      description: 'A celebration of sportsmanship and athletic excellence.',
    },
    5: {
      title: 'INDEPENDENCE DAY',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      description: 'Honoring the spirit of freedom with patriotic fervor.',
    },
    6: {
      title: 'FOUNDERS DAY',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      description: 'Commemorating the visionaries who built our institution.',
    },
  };

  const event = events[id];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{event.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {event.images.map((img, index) => (
          <img key={index} src={img} alt={event.title} className="rounded-lg" />
        ))}
      </div>
      <p className="text-lg text-gray-700">{event.description}</p>
    </div>
  );
};

export default EventDetails;
