function getSiteLang() {
  return window.getSiteLanguage ? window.getSiteLanguage() : "en";
}

function getLangText(value) {
  if (typeof value === "string") return value;
  const lang = getSiteLang();
  return value?.[lang] || value?.en || "";
}

// ========================= FAQ DATA ============================

const faqItems = [
  {
    question: { en: "How old are you?", pt: "Quantos anos você tem?" },
    answer: { en: "Answer only for close friends", pt: "Só respondo isso para amigos próximos" }
  },
  {
    question: { en: "Where are you from?", pt: "De onde você é?" },
    answer: { en: "Brazil", pt: "Brasil" }
  },
  {
    question: { en: "What are your hobbies?", pt: "Quais são seus hobbies?" },
    answer: { en: "Drawing anime, playing games, and studying astronomy", pt: "Desenhar anime, jogar e estudar astronomia" }
  },
  {
    question: { en: "What do you enjoy doing the most?", pt: "Do que você mais gosta?" },
    answer: { en: "Sleeping", pt: "Dormir" }
  },
  {
    question: { en: "What's your favorite game?", pt: "Qual é seu jogo favorito?" },
    answer: { en: "War Thunder", pt: "War Thunder" }
  },
  {
    question: { en: "What's your favorite anime?", pt: "Qual é seu anime favorito?" },
    answer: { en: "Yofukashi no Uta", pt: "Yofukashi no Uta" }
  },
  {
    question: { en: "What's your favorite manga?", pt: "Qual é seu mangá favorito?" },
    answer: { en: "Berserk", pt: "Berserk" }
  },
  {
    question: { en: "Who's your favorite character?", pt: "Quem é seu personagem favorito?" },
    answer: { en: "Loona", pt: "Loona" }
  },
  {
    question: { en: "What's your favorite music genre?", pt: "Qual é seu gênero musical favorito?" },
    answer: { en: "Rock", pt: "Rock" }
  },
  {
    question: { en: "Do you draw / edit / code?", pt: "Você desenha / edita / programa?" },
    answer: { en: "Yes, yes, and yes", pt: "Sim, sim e sim" }
  },
  {
    question: { en: "What social media do you use?", pt: "Quais redes sociais você usa?" },
    answer: { en: "Mostly Discord, YouTube, and Instagram", pt: "Principalmente Discord, YouTube e Instagram" }
  },
  {
    question: { en: "Can I DM you?", pt: "Posso te chamar na DM?" },
    answer: { en: "Yes", pt: "Sim" }
  },
  {
    question: { en: "Do you reply fast?", pt: "Você responde rápido?" },
    answer: { en: "Usually, yes", pt: "Normalmente, sim" }
  },
  {
    question: { en: "Are you open to friendship?", pt: "Você está aberto a amizade?" },
    answer: { en: "Yes", pt: "Sim" }
  },
  {
    question: { en: "Are you single?", pt: "Você é solteiro?" },
    answer: { en: "Yes", pt: "Sim" }
  },
  {
    question: { en: "Do you do calls?", pt: "Você faz call?" },
    answer: { en: "Only with close friends", pt: "Só com amigos próximos" }
  },
  {
    question: { en: "Do you like furry stuff?", pt: "Você gosta de coisas furry?" },
    answer: { en: "Yes", pt: "Sim" }
  },
  {
    question: { en: "Do you do commissions or art?", pt: "Você faz commissions ou arte?" },
    answer: { en: "No commissions, but yes to art", pt: "Commissions não, mas arte sim" }
  },
  {
    question: { en: "Do you bite?", pt: "Você morde?" },
    answer: { en: "Yes", pt: "Sim" }
  },
  {
    question: { en: "Do you judge ugly profiles?", pt: "Você julga perfis feios?" },
    answer: { en: "No", pt: "Não" }
  },
  {
    question: { en: "Do you like weird people?", pt: "Você gosta de pessoas estranhas?" },
    answer: { en: "Heavily depends", pt: "Depende muito" }
  },
  {
    question: { en: "What makes you lose interest?", pt: "O que faz você perder o interesse?" },
    answer: { en: "The red flags mentioned above", pt: "As red flags mencionadas acima" }
  },
  {
    question: { en: "What catches your attention in someone?", pt: "O que chama sua atenção em alguém?" },
    answer: { en: "Style", pt: "Estilo" }
  },
  {
    question: { en: "What's your favorite red flag?", pt: "Qual é sua red flag favorita?" },
    answer: { en: "What kind of question is that?", pt: "Que tipo de pergunta é essa?" }
  },
  {
    question: { en: "What's your favorite green flag?", pt: "Qual é sua green flag favorita?" },
    answer: { en: "Honesty", pt: "Honestidade" }
  },
  {
    question: { en: "Are you more affectionate or more reserved?", pt: "Você é mais carinhoso ou mais reservado?" },
    answer: { en: "Reserved", pt: "Reservado" }
  },
  {
    question: { en: "Do you sleep?", pt: "Você dorme?" },
    answer: { en: "A little", pt: "Um pouco" }
  },
  {
    question: { en: "Do you go outside?", pt: "Você sai de casa?" },
    answer: { en: "Also a little", pt: "Também um pouco" }
  },
  {
    question: { en: "Are you intimidating to talk to?", pt: "Você intimida pra conversar?" },
    answer: { en: "No, I'm chill", pt: "Não, sou de boa" }
  },
  {
    question: { en: "What's your aesthetic?", pt: "Qual é sua estética?" },
    answer: { en: "Soft gothic", pt: "Gótico suave" }
  },
  {
    question: { en: "Is black your personality?", pt: "Preto é sua personalidade?" },
    answer: { en: "For clothing, yes", pt: "Pra roupa, sim" }
  },
  {
    question: { en: "What attracts you the most in someone?", pt: "O que mais te atrai em alguém?" },
    answer: { en: "Style and personality", pt: "Estilo e personalidade" }
  },
  {
    question: { en: "What's your comfort anime?", pt: "Qual é seu anime conforto?" },
    answer: { en: "Yofukashi no Uta", pt: "Yofukashi no Uta" }
  },
  {
    question: { en: "What's your favorite franchise?", pt: "Qual é sua franquia favorita?" },
    answer: { en: "Forza Horizon", pt: "Forza Horizon" }
  },
  {
    question: { en: "What should I know before talking to you?", pt: "O que eu deveria saber antes de falar com você?" },
    answer: { en: "Do not be insistent", pt: "Não seja insistente" }
  },
  {
    question: { en: "Is there any topic you hate?", pt: "Tem algum assunto que você odeia?" },
    answer: { en: "Bad stuff in general", pt: "Coisas ruins no geral" }
  },
  {
    question: { en: "What should never be sent in DMs?", pt: "O que nunca deveria ser mandado na DM?" },
    answer: { en: "NSFW", pt: "NSFW" }
  },
  {
    question: { en: "What makes you reply?", pt: "O que faz você responder?" },
    answer: { en: "Pretty much anything", pt: "Praticamente qualquer coisa" }
  },
  {
    question: { en: "What makes you ignore someone?", pt: "O que faz você ignorar alguém?" },
    answer: { en: "Nothing, unless I forget", pt: "Nada, a menos que eu esqueça" }
  },
  {
    question: { en: "Do you prefer direct or slow conversations?", pt: "Você prefere conversas diretas ou lentas?" },
    answer: { en: "Direct", pt: "Diretas" }
  },
  {
    question: { en: "Are you looking for friendship, dating, or just conversation?", pt: "Você procura amizade, namoro ou só conversa?" },
    answer: { en: "Open to friendship / chat only", pt: "Aberto a amizade / só conversa" }
  },
  {
    question: { en: "Can I be your girlfriend/boyfriend?", pt: "Posso ser sua namorada/seu namorado?" },
    answer: { en: "No", pt: "Não" }
  },
  {
    question: { en: "What is your gender?", pt: "Qual é seu gênero?" },
    answer: { en: "Only close friends get that answer", pt: "Só amigos próximos recebem essa resposta" }
  },
  {
    question: { en: "Are you a furry?", pt: "Você é furry?" },
    answer: { en: "Kinda", pt: "Mais ou menos" }
  },
  {
    question: { en: "What kind of games do you dislike?", pt: "Que tipo de jogo você não gosta?" },
    answer: { en: "Overly competitive ones", pt: "Os competitivos demais" }
  },
  {
    question: { en: "How would you describe yourself in 3 words?", pt: "Como você se descreveria em 3 palavras?" },
    answer: { en: "Chill, lazy, and cozy", pt: "De boa, preguiçoso e confortável" }
  },
  {
    question: { en: "Are you more calm or intense?", pt: "Você é mais calmo ou intenso?" },
    answer: { en: "Calm", pt: "Calmo" }
  },
  {
    question: { en: "Are you more observant or talkative?", pt: "Você é mais observador ou falante?" },
    answer: { en: "Observant", pt: "Observador" }
  },
  {
    question: { en: "Do you show interest or hide it?", pt: "Você demonstra interesse ou esconde?" },
    answer: { en: "30 / 70", pt: "30 / 70" }
  },
  {
    question: { en: "Do you get attached easily?", pt: "Você se apega fácil?" },
    answer: { en: "No", pt: "Não" }
  },
  {
    question: { en: "Do you forgive easily?", pt: "Você perdoa fácil?" },
    answer: { en: "Yes", pt: "Sim" }
  },
  {
    question: { en: "Do you like attention?", pt: "Você gosta de atenção?" },
    answer: { en: "Just the right amount", pt: "Na medida certa" }
  },
  {
    question: { en: "What's your favorite hour of the day?", pt: "Qual é sua hora favorita do dia?" },
    answer: { en: "21:00", pt: "21:00" }
  },
  {
    question: { en: "Do you prefer the night or the morning?", pt: "Você prefere noite ou manhã?" },
    answer: { en: "Night", pt: "Noite" }
  },
  {
    question: { en: "What season do you like the most?", pt: "Qual estação você mais gosta?" },
    answer: { en: "Winter", pt: "Inverno" }
  },
  {
    question: { en: "What kind of weather do you like the most?", pt: "Que tipo de clima você mais gosta?" },
    answer: { en: "Rainy", pt: "Chuvoso" }
  },
  {
    question: { en: "What's your favorite drink?", pt: "Qual é sua bebida favorita?" },
    answer: { en: "Monster Energy, specifically Pacific Punch", pt: "Monster Energy, especificamente Pacific Punch" }
  },
  {
    question: { en: "What movie or show never gets old to you?", pt: "Que filme ou série nunca envelhece pra você?" },
    answer: { en: "Cars", pt: "Carros" }
  },
  {
    question: { en: "Do you like persistent people?", pt: "Você gosta de pessoas persistentes?" },
    answer: { en: "Hate it", pt: "Odeio" }
  },
  {
    question: { en: "Do you like dumb memes?", pt: "Você gosta de memes idiotas?" },
    answer: { en: "No", pt: "Não" }
  },
  {
    question: { en: "Do you use emojis ironically or seriously?", pt: "Você usa emoji ironicamente ou sério?" },
    answer: { en: "Ironically", pt: "Ironicamente" }
  },
  {
    question: { en: "Do you judge people's spelling?", pt: "Você julga a ortografia das pessoas?" },
    answer: { en: "No", pt: "Não" }
  },
  {
    question: { en: "Do you care about profile aesthetics?", pt: "Você liga pra estética do perfil?" },
    answer: { en: "Absolutely", pt: "Com certeza" }
  },
  {
    question: { en: "Do you disappear out of nowhere?", pt: "Você some do nada?" },
    answer: { en: "Sometimes", pt: "Às vezes" }
  },
  {
    question: { en: "Do you ghost people?", pt: "Você dá ghost nas pessoas?" },
    answer: { en: "Not on purpose... I swear", pt: "Não de propósito... eu juro" }
  },
  {
    question: { en: "Do you like tattoos or piercings?", pt: "Você gosta de tatuagens ou piercings?" },
    answer: { en: "Absolutely", pt: "Com certeza" }
  },
  {
    question: { en: "Do you trust people easily?", pt: "Você confia fácil nas pessoas?" },
    answer: { en: "No", pt: "Não" }
  },
  {
    question: { en: "Do you prefer closeness or space?", pt: "Você prefere proximidade ou espaço?" },
    answer: { en: "Space", pt: "Espaço" }
  },
  {
    question: { en: "Do you open up easily?", pt: "Você se abre fácil?" },
    answer: { en: "Used to", pt: "Antigamente sim" }
  },
  {
    question: { en: "Do you keep a lot to yourself?", pt: "Você guarda muita coisa pra si?" },
    answer: { en: "Yes", pt: "Sim" }
  },
  {
    question: { en: "Do you prefer listening or talking?", pt: "Você prefere ouvir ou falar?" },
    answer: { en: "Listening", pt: "Ouvir" }
  },
  {
    question: { en: "Do you like it when someone insists, or does that annoy you?", pt: "Você gosta quando alguém insiste ou isso te irrita?" },
    answer: { en: "It annoys the ***** outta me", pt: "Isso me irrita pra krl" }
  },
  {
    question: { en: "Are you more rational or emotional?", pt: "Você é mais racional ou emocional?" },
    answer: { en: "Rational", pt: "Racional" }
  },
  {
    question: { en: "Do you miss people easily?", pt: "Você sente saudade fácil?" },
    answer: { en: "No", pt: "Não" }
  },
  {
    question: { en: "Do you prefer taking care of someone or being taken care of?", pt: "Você prefere cuidar de alguém ou ser cuidado?" },
    answer: { en: "Being taken care of", pt: "Ser cuidado" }
  },
  {
    question: { en: "What is your favorite TV show?", pt: "Qual é sua série favorita?" },
    answer: { en: "Supernatural and The Flash", pt: "Supernatural e The Flash" }
  },
  {
    question: { en: "What languages do you speak?", pt: "Quais idiomas você fala?" },
    answer: { en: "Portuguese, English and a bit of Spanish", pt: "Português, inglês e um pouco de espanhol" }
  },
  {
    question: { en: "What’s your zodiac sign?", pt: "Qual é seu signo?" },
    answer: { en: "Scorpio", pt: "Escorpião" }
  },
  {
    question: { en: "What course are you taking?", pt: "Que curso você faz?" },
    answer: { en: "Mechanical Engineering (crazy stuff i know)", pt: "Engenharia Mecânica (bagulho maluco eu sei)" }
  },
  {
    question: { en: "What’s your favorite celestial body?", pt: "Qual é seu corpo celeste favorito?" },
    answer: { en: "Black Holes", pt: "Buracos negros" }
  },
  {
    question: { en: "Do you get bored easily?", pt: "Você fica entediado fácil?" },
    answer: { en: "Yes.", pt: "Sim." }
  },
  {
    question: { en: "Do you overthink?", pt: "Você pensa demais?" },
    answer: { en: "All day.", pt: "O dia todo." }
  },
  {
    question: { en: "Are you okay?", pt: "Você tá bem?" },
    answer: { en: "I think and hope so.", pt: "Acho e espero que sim." }
  },
  {
    question: { en: "What is your biggest fear", pt: "Qual é seu maior medo?" },
    answer: { en: "Fear of loss, and roaches.", pt: "Medo de perda e de baratas." }
  },
  {
    question: { en: "You like being alone?", pt: "Você gosta de ficar sozinho?" },
    answer: { en: "Yes.", pt: "Sim." }
  },
  {
    question: { en: "Do you have a life?", pt: "Você tem uma vida?" },
    answer: { en: "Debatable.", pt: "Debatível." }
  },
  {
    question: { en: "Do you touch grass", pt: "Você toca grama?" },
    answer: { en: "Nah.", pt: "Não." }
  },
  {
    question: { en: "Are you cold?", pt: "Você é frio?" },
    answer: { en: "Some people say i am.", pt: "Algumas pessoas dizem que sim." }
  },
  {
    question: { en: "If i message you, you will answer?", pt: "Se eu te mandar mensagem, você responde?" },
    answer: { en: "Yes.", pt: "Sim." }
  },
  {
    question: { en: "Favorite feeling?", pt: "Sensação favorita?" },
    answer: { en: "Peace.", pt: "Paz." }
  },
  {
    question: { en: "What country would you like to travel to", pt: "Pra que país você gostaria de viajar?" },
    answer: { en: "Canada, Japan, France, and Switzerland.", pt: "Canadá, *****ão, França e Suíça." }
  },
  {
    question: { en: "What is your favorite album?", pt: "Qual é seu álbum favorito?" },
    answer: { en: "K-12 and Hades from Melanie Martinez.", pt: "K-12 e Hades da Melanie Martinez." }
  },
  {
    question: { en: "Do you shower?", pt: "Você toma banho?" },
    answer: { en: "For God's sake, yes.", pt: "Pelo amor de Deus, sim." }
  },
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

  if (!questionEl || !answerEl || !prevBtn || !nextBtn) return;

  if (!faqItems.length) {
    questionEl.textContent = getSiteLang() === "pt" ? "Nenhuma pergunta adicionada ainda." : "No questions added yet.";
    answerEl.textContent = getSiteLang() === "pt" ? "Adicione seus itens no faq.js." : "Add your FAQ items inside faq.js.";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

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

  let shuffledFaq = shuffleArray(faqItems);
  let currentIndex = 0;
  let isFaqEnded = false;

  function renderFaq(index) {
    const item = shuffledFaq[index];

    const questionLine = questionEl.parentElement;
    const answerLine = answerEl.parentElement;

    questionLine.classList.remove("faq-end-message");
    answerLine.style.display = "";

    questionEl.textContent = getLangText(item.question);
    answerEl.textContent = getLangText(item.answer);

    updateFaqButtons();
  }

  function renderFaqEnd() {
    const questionLine = questionEl.parentElement;
    const answerLine = answerEl.parentElement;

    questionLine.classList.add("faq-end-message");
    answerLine.style.display = "none";

    questionEl.textContent = getSiteLang() === "pt" ? "Você chegou ao final" : "You reached the end";

    updateFaqButtons();
  }

  function updateFaqButtons() {
    prevBtn.disabled = currentIndex === 0 && !isFaqEnded;
    nextBtn.disabled = isFaqEnded;
  }

  prevBtn.addEventListener("click", () => {
    animateFaqArrow(prevBtn);

    if (isFaqEnded) {
      isFaqEnded = false;
      renderFaq(currentIndex);
      return;
    }

    if (currentIndex > 0) {
      currentIndex--;
      renderFaq(currentIndex);
    }
  });

  nextBtn.addEventListener("click", () => {
    animateFaqArrow(nextBtn);

    if (isFaqEnded) return;

    if (currentIndex >= shuffledFaq.length - 1) {
      isFaqEnded = true;
      renderFaqEnd();
      return;
    }

    currentIndex++;
    renderFaq(currentIndex);
  });

  document.addEventListener("site-language-changed", () => {
    if (isFaqEnded) {
      renderFaqEnd();
    } else {
      renderFaq(currentIndex);
    }
  });

  renderFaq(currentIndex);
  updateFaqButtons();
});
