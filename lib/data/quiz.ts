export interface QuizQuestion {
  id: string;
  question: string;
  options: { label: string; value: string; icon: string }[];
}

export interface QuizResult {
  slug: string;
  reason: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "light",
    question: "How much natural light does your space get?",
    options: [
      { label: "Very little — mostly artificial light", value: "low", icon: "🌑" },
      { label: "Some light — indirect or filtered", value: "medium", icon: "🌤️" },
      { label: "Bright — near a window most of the day", value: "bright", icon: "☀️" },
      { label: "Full sun — south-facing windows", value: "full", icon: "🌞" },
    ],
  },
  {
    id: "watering",
    question: "How often do you remember to water plants?",
    options: [
      { label: "Rarely — I forget often", value: "rarely", icon: "😅" },
      { label: "Sometimes — every few weeks feels right", value: "sometimes", icon: "🙂" },
      { label: "Regularly — I check in weekly", value: "regular", icon: "✅" },
      { label: "Lovingly — I enjoy the ritual", value: "devoted", icon: "💚" },
    ],
  },
  {
    id: "space",
    question: "How much space do you have for a plant?",
    options: [
      { label: "Small — desk, shelf, or windowsill", value: "small", icon: "📦" },
      { label: "Medium — side table or floor corner", value: "medium", icon: "🪑" },
      { label: "Large — floor statement plant", value: "large", icon: "🏠" },
      { label: "Hanging — I want something cascading", value: "hanging", icon: "⬇️" },
    ],
  },
  {
    id: "pets",
    question: "Do you have pets or small children?",
    options: [
      { label: "Yes — safety is a priority", value: "yes", icon: "🐾" },
      { label: "No — toxicity isn't a concern", value: "no", icon: "🌿" },
    ],
  },
  {
    id: "goal",
    question: "What's your main goal with this plant?",
    options: [
      { label: "Purify the air", value: "air", icon: "💨" },
      { label: "Create a dramatic visual statement", value: "statement", icon: "🎨" },
      { label: "Just want something easy and alive", value: "easy", icon: "😊" },
      { label: "Something unusual and conversation-starting", value: "unique", icon: "✨" },
    ],
  },
];

export function calculateResult(answers: Record<string, string>): QuizResult {
  const { light, watering, space, pets, goal } = answers;

  // Pet safe priority
  if (pets === "yes") {
    if (goal === "air") return { slug: "spider-plant", reason: "Pet-safe and one of NASA's top air purifiers." };
    if (light === "low") return { slug: "spider-plant", reason: "Completely pet-safe and thrives in lower light." };
    return { slug: "spider-plant", reason: "The Spider Plant is one of the safest and most resilient pet-friendly plants available." };
  }

  // Low light profiles
  if (light === "low") {
    if (watering === "rarely") return { slug: "zz-plant", reason: "Stores water in its rhizomes and thrives in near-darkness — designed for your lifestyle." };
    if (watering === "sometimes") return { slug: "snake-plant", reason: "Thrives in low light, purifies air while you sleep, and waters every 2-4 weeks." };
    if (goal === "air") return { slug: "peace-lily", reason: "One of NASA's best-rated air purifiers that actually flowers in low light." };
    return { slug: "pothos", reason: "The most forgiving trailing plant in existence — grows in any light, forgives irregular watering." };
  }

  // Bright light profiles
  if (light === "full" || light === "bright") {
    if (space === "large" && goal === "statement") return { slug: "fiddle-leaf-fig", reason: "The ultimate designer statement plant — dramatic, architectural, and worth the effort with your bright light." };
    if (space === "large") return { slug: "bird-of-paradise", reason: "Bright light + space = the tropical drama of Bird of Paradise at its finest." };
    if (space === "hanging" || space === "small") return { slug: "string-of-pearls", reason: "A sunlit hanging spot is exactly what String of Pearls needs to cascade beautifully." };
    if (goal === "unique") return { slug: "aloe-vera", reason: "Thrives in your bright light, looks stunning, and is genuinely useful as a first-aid plant." };
  }

  // Medium light profiles
  if (light === "medium") {
    if (goal === "statement" && space === "large") return { slug: "monstera-deliciosa", reason: "Monstera's dramatic split leaves are the statement plant for medium to bright indirect light." };
    if (goal === "air") return { slug: "peace-lily", reason: "Exceptional air purifier that blooms beautifully in medium indirect light." };
    if (watering === "devoted") return { slug: "boston-fern", reason: "Rewards your attentive care with the most lush, billowing foliage imaginable." };
    if (space === "hanging") return { slug: "pothos", reason: "The classic trailing plant that cascades beautifully and tolerates your light conditions perfectly." };
  }

  // Default fallbacks
  if (watering === "rarely") return { slug: "zz-plant", reason: "The ZZ Plant stores water for months and tolerates neglect better than any other houseplant." };
  if (goal === "statement") return { slug: "monstera-deliciosa", reason: "Monstera is the iconic statement plant of our generation — bold, beautiful, and forgiving." };

  return { slug: "pothos", reason: "Pothos is one of the most versatile and forgiving houseplants — perfect for any home." };
}
