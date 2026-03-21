
// ========================= FAQ DATA ============================

const faqItems = [
  {
    question: "How old are you?",
    answer: "Answer only for close friends"
  },
  {
    question: "Where are you from?",
    answer: "Brazil"
  },
  {
    question: "What are your hobbies?",
    answer: "Drawing anime, playing games, and studying astronomy"
  },
  {
    question: "What do you enjoy doing the most?",
    answer: "Sleeping"
  },
  {
    question: "What's your favorite game?",
    answer: "War Thunder"
  },
  {
    question: "What's your favorite anime?",
    answer: "Yofukashi no Uta"
  },
  {
    question: "What's your favorite manga?",
    answer: "Berserk"
  },
  {
    question: "Who's your favorite character?",
    answer: "Loona"
  },
  {
    question: "What's your favorite music genre?",
    answer: "Rock"
  },
  {
    question: "Do you draw / edit / code?",
    answer: "Yes, yes, and yes"
  },
  {
    question: "What social media do you use?",
    answer: "Mostly Discord, YouTube, and Instagram"
  },
  {
    question: "Can I DM you?",
    answer: "Yes"
  },
  {
    question: "Do you reply fast?",
    answer: "Usually, yes"
  },
  {
    question: "Are you open to friendship?",
    answer: "Yes"
  },
  {
    question: "Are you single?",
    answer: "Yes"
  },
  {
    question: "Do you do calls?",
    answer: "Only with close friends"
  },
  {
    question: "Do you like furry stuff?",
    answer: "Yes"
  },
  {
    question: "Do you do commissions or art?",
    answer: "No commissions, but yes to art"
  },
  {
    question: "Do you bite?",
    answer: "Yes"
  },
  {
    question: "Do you judge ugly profiles?",
    answer: "No"
  },
  {
    question: "Do you like weird people?",
    answer: "Heavily depends"
  },
  {
    question: "What makes you lose interest?",
    answer: "The red flags mentioned above"
  },
  {
    question: "What catches your attention in someone?",
    answer: "Style"
  },
  {
    question: "What's your favorite red flag?",
    answer: "What kind of question is that?"
  },
  {
    question: "What's your favorite green flag?",
    answer: "Honesty"
  },
  {
    question: "Are you more affectionate or more reserved?",
    answer: "Reserved"
  },
  {
    question: "Do you sleep?",
    answer: "A little"
  },
  {
    question: "Do you go outside?",
    answer: "Also a little"
  },
  {
    question: "Are you intimidating to talk to?",
    answer: "No, I'm chill"
  },
  {
    question: "What's your aesthetic?",
    answer: "Soft gothic"
  },
  {
    question: "Is black your personality?",
    answer: "For clothing, yes"
  },
  {
    question: "What attracts you the most in someone?",
    answer: "Style and personality"
  },
  {
    question: "What's your comfort anime?",
    answer: "Yofukashi no Uta"
  },
  {
    question: "What's your favorite franchise?",
    answer: "Forza Horizon"
  },
  {
    question: "What should I know before talking to you?",
    answer: "Nothing"
  },
  {
    question: "Is there any topic you hate?",
    answer: "Bad stuff in general"
  },
  {
    question: "What should never be sent in DMs?",
    answer: "NSFW"
  },
  {
    question: "What makes you reply?",
    answer: "Pretty much anything"
  },
  {
    question: "What makes you ignore someone?",
    answer: "Nothing, unless I forget"
  },
  {
    question: "Do you prefer direct or slow conversations?",
    answer: "Direct"
  },
  {
    question: "Are you looking for friendship, dating, or just conversation?",
    answer: "Open to friendship / chat only"
  },
  {
    question: "Can I be your girlfriend/boyfriend?",
    answer: "No"
  },
  {
    question: "What is your gender?",
    answer: "Only close friends get that answer"
  },
  {
    question: "Are you a furry?",
    answer: "Kinda"
  },
  {
    question: "What kind of games do you dislike?",
    answer: "Overly competitive ones"
  },
  {
    question: "How would you describe yourself in 3 words?",
    answer: "Chill, lazy, and cozy"
  },
  {
    question: "Are you more calm or intense?",
    answer: "Calm"
  },
  {
    question: "Are you more observant or talkative?",
    answer: "Observant"
  },
  {
    question: "Do you show interest or hide it?",
    answer: "30 / 70"
  },
  {
    question: "Do you get attached easily?",
    answer: "No"
  },
  {
    question: "Do you forgive easily?",
    answer: "Yes"
  },
  {
    question: "Do you like attention?",
    answer: "Just the right amount"
  },
  {
    question: "What's your favorite hour of the day?",
    answer: "21:00"
  },
  {
    question: "Do you prefer the night or the morning?",
    answer: "Night"
  },
  {
    question: "What season do you like the most?",
    answer: "Winter"
  },
  {
    question: "What kind of weather do you like the most?",
    answer: "Rainy"
  },
  {
    question: "What's your favorite drink?",
    answer: "Monster Energy, specifically Pacific Punch"
  },
  {
    question: "What movie or show never gets old to you?",
    answer: "Cars"
  },
  {
    question: "Do you like persistent people?",
    answer: "Hate it"
  },
  {
    question: "Do you like dumb memes?",
    answer: "No"
  },
  {
    question: "Do you use emojis ironically or seriously?",
    answer: "Ironically"
  },
  {
    question: "Do you judge people's spelling?",
    answer: "No"
  },
  {
    question: "Do you care about profile aesthetics?",
    answer: "Absolutely"
  },
  {
    question: "Do you disappear out of nowhere?",
    answer: "Sometimes"
  },
  {
    question: "Do you ghost people?",
    answer: "Not on purpose... I swear"
  },
  {
    question: "Do you like tattoos or piercings?",
    answer: "Absolutely"
  },
  {
    question: "Do you trust people easily?",
    answer: "No"
  },
  {
    question: "Do you prefer closeness or space?",
    answer: "Space"
  },
  {
    question: "Do you open up easily?",
    answer: "Used to"
  },
  {
    question: "Do you keep a lot to yourself?",
    answer: "Yes"
  },
  {
    question: "Do you prefer listening or talking?",
    answer: "Listening"
  },
  {
    question: "Do you like it when someone insists, or does that annoy you?",
    answer: "It annoys the fuck outta me"
  },
  {
    question: "Are you more rational or emotional?",
    answer: "Rational"
  },
  {
    question: "Do you miss people easily?",
    answer: "No"
  },
  {
    question: "Do you prefer taking care of someone or being taken care of?",
    answer: "Being taken care of"
  },
  {
    question: "What is your favorite TV show?",
      answer: "Supernatural and The Flash"
  },
  {
    question: "What languages do you speak?",
      answer: "Portuguese, English and a bit of Spanish"
  },
  {
    question: "What’s your zodiac sign?",
      answer: "Scorpio"
  },
  {
    question: "What course are you taking?",
      answer: "Mechanical Engineering (crazy stuff i know)"
  },
  {
    question: "What’s your favorite celestial body?",
      answer: "Black Holes"
  },
  {
    question: "Do you get bored easily?",
      answer: "Yes"
  },
  {
    question: "Do you overthink?",
      answer: "All day"
  },
  {
    question: "Are you okay?",
      answer: "I think and hope so"
  }
];

// =========================================================
// FAQ LOGIC
// Ordem aleatória sem repetir até acabar todas
// Setas permitem voltar e avançar
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const questionEl = document.getElementById("faq-question");
  const answerEl = document.getElementById("faq-answer");
  const prevBtn = document.getElementById("faq-prev");
  const nextBtn = document.getElementById("faq-next");

  // Se a seção não existir, para tudo sem quebrar o site
  if (!questionEl || !answerEl || !prevBtn || !nextBtn) return;

  // Se não tiver perguntas cadastradas
  if (!faqItems.length) {
    questionEl.textContent = "No questions added yet.";
    answerEl.textContent = "Add your FAQ items inside faq.js.";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  // Embaralha sem repetir
  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function animateFaqArrow(button) {
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 120);
  }

  // Ordem aleatória única da rodada atual
  let shuffledFaq = shuffleArray(faqItems);
  let currentIndex = 0;

  function renderFaq(index) {
    const item = shuffledFaq[index];
    questionEl.textContent = item.question;
    answerEl.textContent = item.answer;
  }

  prevBtn.addEventListener("click", () => {
    animateFaqArrow(prevBtn);

    currentIndex--;

    // Se voltar antes do começo, vai pro último
    if (currentIndex < 0) {
      currentIndex = shuffledFaq.length - 1;
    }

    renderFaq(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    animateFaqArrow(nextBtn);

    currentIndex++;

    // Quando acabar todas, embaralha tudo de novo sem repetir dentro da nova rodada
    if (currentIndex >= shuffledFaq.length) {
      shuffledFaq = shuffleArray(faqItems);
      currentIndex = 0;
    }

    renderFaq(currentIndex);
  });

  // Primeira renderização
  renderFaq(currentIndex);
});
