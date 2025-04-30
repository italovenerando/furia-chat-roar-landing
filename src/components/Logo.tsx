
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="furia-gradient w-10 h-10 rounded-full p-0.5 animate-pulse-glow">
          <div className="bg-furia-black w-full h-full rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-furia-green">F</span>
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 bg-white w-4 h-4 rounded-full flex items-center justify-center">
          <div className="bg-furia-green w-3 h-3 rounded-full"></div>
        </div>
      </div>
      <span className="font-orbitron font-bold text-xl furia-gradient-text">FURIA CHAT</span>
    </div>
  );
};

export default Logo;
