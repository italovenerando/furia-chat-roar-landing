
interface FuriaTeamData {
  nextMatch?: {
    opponent: string;
    time: string;
    tournament: string;
  };
  captain?: string;
  recentResults?: {
    opponent: string;
    result: string;
  }[];
}

// This is a mock implementation since we can't directly access the BetsAPI without an API key
// In a real implementation, you would make actual API calls
export const fetchFuriaData = async (): Promise<FuriaTeamData> => {
  try {
    // In a real implementation, this would be a fetch to the actual API endpoint
    // const response = await fetch('https://api.betsapi.com/v1/team/251055', {
    //   headers: { 'X-API-KEY': 'your_api_key_here' }
    // });
    // const data = await response.json();
    
    // For now, we'll return mock data that simulates what we might get from the API
    return {
      nextMatch: {
        opponent: "Team Liquid",
        time: new Date(Date.now() + 86400000).toLocaleDateString(), // Tomorrow
        tournament: "ESL Pro League"
      },
      captain: "arT (Andrei Piovezan)",
      recentResults: [
        { opponent: "MIBR", result: "Win (16-12)" },
        { opponent: "Natus Vincere", result: "Loss (9-16)" },
        { opponent: "Astralis", result: "Win (16-10)" }
      ]
    };
  } catch (error) {
    console.error("Error fetching FURIA data:", error);
    return {};
  }
};

// Function to help format responses for specific questions about FURIA
export const getFuriaResponse = async (query: string): Promise<string> => {
  const normalizedQuery = query.toLowerCase().trim();
  const furiaData = await fetchFuriaData();
  
  // Check for match information queries
  if (normalizedQuery.includes("próximo jogo") || 
      normalizedQuery.includes("quando") || 
      normalizedQuery.includes("próxima partida")) {
    if (furiaData.nextMatch) {
      return `O próximo jogo da FURIA será ${furiaData.nextMatch.time} contra ${furiaData.nextMatch.opponent} na ${furiaData.nextMatch.tournament}!`;
    }
    return "Desculpe, não consegui encontrar informações sobre o próximo jogo da FURIA.";
  }
  
  // Check for captain queries
  if (normalizedQuery.includes("capitão") || 
      normalizedQuery.includes("líder") ||
      normalizedQuery.includes("captain")) {
    if (furiaData.captain) {
      return `${furiaData.captain} é o capitão da FURIA CS:GO. Ele é conhecido por seu estilo agressivo e liderança dinâmica!`;
    }
    return "Desculpe, não consegui encontrar informações sobre o capitão da FURIA.";
  }
  
  // Check for recent results
  if (normalizedQuery.includes("resultado") || 
      normalizedQuery.includes("últimos jogos") ||
      normalizedQuery.includes("como foi")) {
    if (furiaData.recentResults && furiaData.recentResults.length > 0) {
      const results = furiaData.recentResults.map(r => `${r.opponent}: ${r.result}`).join(", ");
      return `Resultados recentes da FURIA: ${results}`;
    }
    return "Desculpe, não consegui encontrar informações sobre resultados recentes da FURIA.";
  }
  
  // Check for team enthusiasm
  if (normalizedQuery.includes("furia") && 
     (normalizedQuery.includes("!!!") || normalizedQuery.length < 10)) {
    return "🔥🔥🔥 VAMOS FURIA!!! 🔥🔥🔥 A torcida está com vocês! #DIADEFURIA";
  }
  
  // Default response
  return "Eu posso te informar sobre o próximo jogo da FURIA, o capitão do time, resultados recentes, e muito mais. O que você gostaria de saber?";
};
