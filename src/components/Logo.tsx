
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" 
        alt="FURIA Logo" 
        className="w-10 h-10 object-contain"
      />
      <span className="font-orbitron font-bold text-xl text-white">FURIA CHAT</span>
    </div>
  );
};

export default Logo;
