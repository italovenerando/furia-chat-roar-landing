
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, avatar }) => {
  return (
    <div className="furia-card flex flex-col items-center text-center">
      <div className="mb-4 relative">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-furia-green">
          <img 
            src={avatar} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className="mb-4 text-gray-300">"{quote}"</p>
      <p className="font-bold text-furia-green">– {author}</p>
    </div>
  );
};

export default TestimonialCard;
