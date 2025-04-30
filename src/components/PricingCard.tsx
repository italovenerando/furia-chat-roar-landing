
import React from 'react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  recommended?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  recommended = false 
}) => {
  return (
    <div className={`furia-card relative ${recommended ? 'border-2 border-furia-green' : ''}`}>
      {recommended && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-furia-green text-furia-black font-bold text-sm rounded">
          RECOMENDADO
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Gratuito' && <span className="text-gray-400">/mês</span>}
        </div>
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <span className={`mr-2 text-xl ${feature.included ? 'text-furia-green' : 'text-gray-500'}`}>
                {feature.included ? '✓' : '×'}
              </span>
              <span className={feature.included ? 'text-white' : 'text-gray-500'}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        <button className={recommended ? "furia-btn w-full" : "furia-btn-outline w-full"}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
