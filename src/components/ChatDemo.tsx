
import React, { useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Eu sou o Furia Chat Bot. Como posso ajudar você hoje?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  
  const [input, setInput] = useState('');
  const [demoMode, setDemoMode] = useState(false);

  // Demo conversation flow
  const demoConversation = [
    { text: "Quando é o próximo jogo?", sender: 'user' as const },
    { text: "O próximo jogo da FURIA será amanhã às 19h contra Team Liquid na ESL Pro League!", sender: 'bot' as const },
    { text: "Quem é o capitão?", sender: 'user' as const },
    { text: "arT (Andrei Piovezan) é o capitão da FURIA CS:GO. Ele é conhecido por seu estilo agressivo e liderança dinâmica!", sender: 'bot' as const },
    { text: "FURIA!!!", sender: 'user' as const },
    { text: "🔥🔥🔥 VAMOS FURIA!!! 🔥🔥🔥 A torcida está com vocês! #DIADEFURIA", sender: 'bot' as const }
  ];

  useEffect(() => {
    if (demoMode) {
      let index = 0;
      
      const interval = setInterval(() => {
        if (index < demoConversation.length) {
          const newMessage = {
            id: messages.length + index + 1,
            text: demoConversation[index].text,
            sender: demoConversation[index].sender,
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, newMessage]);
          index++;
        } else {
          clearInterval(interval);
          setDemoMode(false);
        }
      }, 1500);
      
      return () => clearInterval(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [demoMode]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: input,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setInput('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: "Isso é apenas uma demonstração. O Furia Chat Bot real responderia sua pergunta!",
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const startDemo = () => {
    setMessages([{
      id: 1,
      text: "Olá! Eu sou o Furia Chat Bot. Como posso ajudar você hoje?",
      sender: 'bot',
      timestamp: new Date()
    }]);
    setDemoMode(true);
  };

  return (
    <div className="border-2 border-furia-green rounded-lg overflow-hidden flex flex-col bg-[#111] h-[500px]">
      <div className="bg-[#111] p-4 border-b border-furia-green">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-furia-green mr-2 animate-pulse"></div>
          <h3 className="font-bold">FURIA CHAT BOT</h3>
          <button 
            onClick={startDemo} 
            className="ml-auto text-xs bg-furia-green text-black px-2 py-1 rounded"
          >
            Ver Demonstração
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.sender === 'user' 
                  ? 'bg-furia-green text-black' 
                  : 'bg-[#222] text-white border border-furia-green/30'
              }`}
            >
              <p>{message.text}</p>
              <div 
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-black/60' : 'text-gray-400'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-furia-green/30 bg-[#111]">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-[#222] border border-furia-green/30 rounded-l px-4 py-2 focus:outline-none focus:border-furia-green"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            className="bg-furia-green text-black px-4 py-2 rounded-r font-medium"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;
