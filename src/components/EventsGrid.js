import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventsGrid = () => {
  const navigate = useNavigate();

  const events = [
    { id: 1, title: 'DEEPOTSAV CELEBRATION', image: '/api/placeholder/400/300' },
    { id: 2, title: 'SPIC MACAY', image: '/api/placeholder/400/300' },
    { id: 3, title: 'YUVA SANSAD', image: '/api/placeholder/400/300' },
    { id: 4, title: 'ANNUAL ATHLETIC MEET', image: '/api/placeholder/400/300' },
    { id: 5, title: 'INDEPENDENCE DAY', image: '/api/placeholder/400/300' },
    { id: 6, title: 'FOUNDERS DAY', image: '/api/placeholder/400/300' },
  ];

  // Simple Card component
  const Card = ({ children, onClick, className }) => (
    <div
      className={`border rounded-md shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  // Simple CardContent component
  const CardContent = ({ children, className }) => (
    <div className={`p-4 ${className}`}>{children}</div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Events</h1>
        <div className="w-32 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => navigate(`/event/${event.id}`)} // Navigate to EventDetails
          >
            <div className="relative h-64">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <CardContent className="w-full text-white p-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 flex items-center gap-2 mx-auto"
          onClick={() => navigate('/events')} // Navigate to all events page
        >
          View All
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EventsGrid;
