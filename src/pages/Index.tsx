
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import PricingCard from '../components/PricingCard';
import FaqItem from '../components/FaqItem';
import ChatDemo from '../components/ChatDemo';
import { Calendar, Activity, User, MessageCircle } from 'lucide-react';

const Index: React.FC = () => {
  // Add public/images folder with necessary images
  useEffect(() => {
    const injectCSS = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        .hero-section {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-bg.jpg');
          background-size: cover;
          background-position: center;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            background-position: 30% center;
          }
        }
      `;
      document.head.appendChild(style);
    };

    injectCSS();
  }, []);
  
  return (
    <div className="min-h-screen bg-furia-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Logo className="mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              🔥 Conecte-se com o time da FURIA como nunca antes
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Receba status ao vivo, grite com a torcida, conheça os jogadores e fique por dentro de tudo com o Furia Chat Bot.
            </p>
            <a href="#features" className="furia-btn text-lg">
              Experimente Agora
            </a>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="furia-container">
        <h2 className="section-title">Tudo o que o torcedor precisa, direto no seu chat.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Calendar />}
            title="Agenda de Partidas"
            description="Veja os próximos jogos e receba alertas."
          />
          <FeatureCard 
            icon={<Activity />}
            title="Status Ao Vivo" 
            description="Acompanhe rodadas em tempo real."
          />
          <FeatureCard 
            icon={<User />}
            title="Perfil dos Jogadores" 
            description="Conheça suas lendas da FURIA."
          />
          <FeatureCard 
            icon={<MessageCircle />}
            title="Grito de Torcida" 
            description="Interaja com mensagens personalizadas."
          />
        </div>
      </section>
      
      {/* Interactive Demo */}
      <section id="demo" className="furia-container bg-[#050505]">
        <h2 className="section-title">Experimente o Chat</h2>
        <div className="max-w-2xl mx-auto">
          <ChatDemo />
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="furia-container">
        <h2 className="section-title">O que os fãs estão dizendo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Melhor forma de acompanhar meu time favorito. Parece que estou na arena!"
            author="João V."
            avatar="/images/avatar1.jpg"
          />
          <TestimonialCard 
            quote="Amei a interação em tempo real durante o jogo."
            author="Letícia F."
            avatar="/images/avatar2.jpg"
          />
          <TestimonialCard 
            quote="Gritei FURIA no ônibus e o bot respondeu. Perfeito!"
            author="Marco D."
            avatar="/images/avatar3.jpg"
          />
        </div>
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="furia-container bg-[#050505]">
        <h2 className="section-title">Planos para todos os torcedores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard 
            title="Gratuito" 
            price="Gratuito" 
            description="Perfeito para os novos torcedores"
            features={[
              { text: "Acesso à agenda de jogos", included: true },
              { text: "Perfil dos jogadores", included: true },
              { text: "Notícias básicas", included: true },
              { text: "Atualizações ao vivo", included: false },
              { text: "Notificações personalizadas", included: false },
              { text: "Comandos exclusivos", included: false }
            ]}
            buttonText="Comece Gratuitamente"
          />
          <PricingCard 
            title="FURIA PRO" 
            price="R$9,90" 
            description="Para o torcedor raiz de verdade"
            features={[
              { text: "Acesso à agenda de jogos", included: true },
              { text: "Perfil dos jogadores", included: true },
              { text: "Notícias básicas", included: true },
              { text: "Atualizações ao vivo", included: true },
              { text: "Notificações personalizadas", included: true },
              { text: "Comandos exclusivos", included: true }
            ]}
            buttonText="Assinar Agora"
            recommended={true}
          />
        </div>
        <div className="text-center mt-10">
          <a href="#demo" className="furia-btn">Comece com o plano gratuito</a>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="furia-container">
        <h2 className="section-title">Dúvidas Frequentes</h2>
        <div className="max-w-3xl mx-auto bg-[#111] border border-furia-green rounded-lg overflow-hidden">
          <FaqItem 
            question="Como funciona o chat?" 
            answer="O Furia Chat Bot é um assistente conversacional que você pode acessar via Telegram, Discord, ou WhatsApp. Simplesmente inicie uma conversa com o bot e comece a interagir para receber informações sobre o time, jogos e mais."
          />
          <FaqItem 
            question="Preciso instalar algo?" 
            answer="Não é necessário instalar nenhum aplicativo específico. O Furia Chat Bot funciona através de plataformas de mensagens que você provavelmente já usa, como WhatsApp, Telegram ou Discord."
          />
          <FaqItem 
            question="O plano PRO vale a pena?" 
            answer="Se você é um torcedor assíduo da FURIA e quer ter acesso a todas as funcionalidades, como atualizações em tempo real durante as partidas, notificações personalizadas e comandos exclusivos, o plano PRO oferece uma experiência muito mais completa por um valor acessível."
          />
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="furia-container bg-[#050505]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Receba novidades direto da base da FURIA 🐾</h2>
          <form className="mt-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text"
                placeholder="Seu nome"
                className="furia-input flex-1"
              />
              <input 
                type="email"
                placeholder="Seu email"
                className="furia-input flex-1"
              />
              <button type="button" className="furia-btn whitespace-nowrap">
                Quero Receber
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#050505] border-t border-furia-green/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Logo />
              <p className="text-gray-400 mt-2">Furia Chat Bot – Viva o jogo</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
              <a href="#" className="text-gray-300 hover:text-furia-green transition-colors">
                Termos de uso
              </a>
              <a href="#" className="text-gray-300 hover:text-furia-green transition-colors">
                Política de privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-furia-green transition-colors">
                Contato
              </a>
            </div>
            
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-furia-green transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-furia-green transition-colors">
                X
              </a>
              <a href="#" className="text-gray-300 hover:text-furia-green transition-colors">
                Discord
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-400">
            <p>Copyright © 2025 FURIA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
