document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const languageToggleBtn = document.getElementById('language-toggle-btn');
  const bgVideoToggleBtn = document.getElementById('bg-video-toggle-btn');
  const settingsBtn = document.getElementById('settings-btn');
  const settingsPanel = document.getElementById('settings-panel');
  const settingsCloseBtn = document.getElementById('settings-close-btn');
  const settingsPanelTitle = document.getElementById('settings-panel-title');

  const translations = {
    en: {
    settingsTitle: 'Settings',
    languageLabel: 'Language: English',
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
    openPlayer: 'Open player',
    shuffleFacts: 'Shuffle Facts',
    aboutMe: 'About Me',
    favoriteStuff: 'Favorite Stuff',
    socialMedia: 'Social Media',
    faqHeading: 'Not so FAQ / Fun Facts',
    likes: 'Things I Love',
    dislikes: "Things I Don’t Like",
    whoIAm: 'Who I Am',
    obsessions: 'Things I Get Obsessed With',
    dreams: 'Dreams',
    friends: 'Friends',
    friendsMainTitle: 'My dear friends:',
    loadingQuestion: 'Loading question...',
    loadingAnswer: 'Loading answer...',
    honorableMentions: 'Honorable mentions',
    bgVideoOn: 'Animated background: On',
    bgVideoOff: 'Animated background: Off',
      aboutContent: {
        likes: `
          <ul class="love-list">
            <li>Cars that push the limits...</li>
            <li>Fighter jets, especially the Mirage 2000-5F</li>
            <li>Games: War Thunder, Phantom Forces, Phasmophobia</li>
            <li>Subtle gothic aesthetics: black clothes, eyeliner, fishnets...</li>
            <li>Anime like Yofukashi no Uta, Berserk, Chainsaw Man, Made in Abyss...</li>
            <li>Loona. Yes, Loona, from Helluva Boss</li>
            <li>Cheetahs. Fast, graceful, cute.</li>
            <li>Quiet nights, soft music, moments to just… exist.</li>
          </ul>
        `,
        dislikes: `
          <ul class="hate-list">
            <li>People who ignore obvious truths</li>
            <li>People who play the victim</li>
            <li>People who use manipulation</li>
            <li>People that don’t admit that they’re wrong</li>
            <li>People who keep bitching on the internet</li>
            <li>Waking up early</li>
            <li>Insects in general</li>
            <li>Brainrot</li>
            <li>Hypocrisy</li>
            <li>Untruth</li>
            <li>Sports, except for E-sports, and specially football</li>
          </ul>
        `,
        about: `
          <div class="text-block"><p>Myself. Who'd you expect me to be?</p></div>
        `,
        obsessions: `
          <div class="text-block"><p>I am obsessed with Loona, speed, horror movies, gambling, cars, jets, tanks, games, drawing...</p></div>
        `,
        dreams: `
          <div class="text-block"><p>Become a professional pilot</p></div>
          <div class="text-block"><p>Become a professional digital artist</p></div>
          <div class="text-block"><p>Become a professional programmer</p></div>
        `,
        friendsFooterTitle: 'Honorable mentions'
      },
      funFactsPool: [
        'I have two cats that chill with me while I game.',
        'My favorite anime is Yofukashi no Uta.',
        'I can name almost every Mirage 2000 variant.',
        'I track crazy car 0-400 km/h times for fun.',
        'War Thunder is life',
        'I’m obsessed with cars like the Corvette C8 and Koenigsegg Jesko.',
        'I enjoy drawing characters late at night.',
        'I can spend hours comparing aircraft designs just for fun.',
        'My fav color is Rose red',
        'The Challenger 2 British MBT is my fav tank',
        'I’m obsessed with jet engine sounds.',
        'I draw better at 2 AM than during the day.',
        'I once played War Thunder for 12 hours straight.',
        'I can identify fighter jets just by silhouette.',
        'My fav song is exit music (for a film) by Radiohead',
        'My fav artist is Melanie Martinez',
        'My fav food is savory pie',
        'Cheetahs are my fav animal',
        "I have more than 3000 hours of Sol's RNG",
        'France is my fav nation',
        'Tomboys over femboys',
        '1+1 = 2',
        'Loona? perfection',
        '🥀',
        'Amd > Intel',
        'Reshiram best pokemon.',
        'Cats > dogs.',
        "I'm lazy asf 💔",
        'V8 > V12.',
        'Lamborghini Murcielago best sounding car ever made.',
        'Unpopular opinion, Sousou no Frieren is Mid.',
        'Monster energy is great.',
        'Kiwi my fav fruit.',
        'Wannabe extrovert.',
        "Yaps a lot about things i'm obsessed with.",
        'Passionfruit the best to make juice with.',
        'I like to argue about something irrelevant all day.',
        'I enjoy being alone.',
        'I spend nights awake just thinking.',
        'Music hits different at night.',
        'There is a music player on the site with my fav songs.',
        "I'm gonna tell you that I'm fine even when I'm not.",
        'I love furries, but I dont consider myself one.',
        "I will hate you if you're an insistent person.",
        'I think 5 times before doing something, and still do it wrong.',
        'Do not ask me how much money and time I spend making avatars in Roblox monthly',
        'JOJO',
        'あなたの時間を無駄にしてしまいました。',
        'You can change the website theme and language',
      ]
    },

       pt: {
    settingsTitle: 'Configurações',
    languageLabel: 'Idioma: Português',
    themeDark: 'Modo escuro',
    themeLight: 'Modo claro',
    openPlayer: 'Abrir player',
    shuffleFacts: 'Embaralhar fatos',
    aboutMe: 'Sobre Mim',
    favoriteStuff: 'Coisas Favoritas',
    socialMedia: 'Redes Sociais',
    faqHeading: 'Perguntas não tão perguntadas / Curiosidades',
    likes: 'Coisas que eu amo',
    dislikes: 'Coisas que eu não gosto',
    whoIAm: 'Quem eu sou',
    obsessions: 'Coisas com que eu fico obcecado',
    dreams: 'Sonhos',
    friends: 'Amigos',
    friendsMainTitle: 'Meus queridos amigos:',
    loadingQuestion: 'Carregando pergunta...',
    loadingAnswer: 'Carregando resposta...',
    honorableMentions: 'Menções honrosas',
    bgVideoOn: 'Fundo animado: Ligado',
    bgVideoOff: 'Fundo animado: Desligado',
      aboutContent: {
        likes: `
          <ul class="love-list">
            <li>Carros que levam o limite ao extremo...</li>
            <li>Caças, principalmente o Mirage 2000-5F</li>
            <li>Jogos: War Thunder, Phantom Forces, Phasmophobia</li>
            <li>Estética gótica sutil: roupas pretas, delineado, meia arrastão...</li>
            <li>Animes como Yofukashi no Uta, Berserk, Chainsaw Man, Made in Abyss...</li>
            <li>Loona. Sim, a Loona de Helluva Boss</li>
            <li>Guepardos. Rápidos, graciosos e fofos.</li>
            <li>Noites calmas, música suave e momentos pra só... existir.</li>
          </ul>
        `,
        dislikes: `
          <ul class="hate-list">
            <li>Pessoas que ignoram verdades óbvias</li>
            <li>Pessoas que bancam a vítima</li>
            <li>Pessoas manipuladoras</li>
            <li>Pessoas que não admitem quando estão erradas</li>
            <li>Pessoas que ficam choramingando na internet</li>
            <li>Acordar cedo</li>
            <li>Insetos no geral</li>
            <li>Brainrot</li>
            <li>Hipocrisia</li>
            <li>Mentira</li>
            <li>Esportes, exceto E-sports, e principalmente futebol</li>
          </ul>
        `,
        about: `
          <div class="text-block"><p>Eu mesmo. Quem mais tu esperava que eu fosse?</p></div>
        `,
        obsessions: `
          <div class="text-block"><p>Eu sou obcecado por Loona, velocidade, filmes de terror, apostas, carros, jatos, tanques, jogos, desenho...</p></div>
        `,
        dreams: `
          <div class="text-block"><p>Virar piloto profissional</p></div>
          <div class="text-block"><p>Virar artista digital profissional</p></div>
          <div class="text-block"><p>Virar programador profissional</p></div>
        `,
        friendsFooterTitle: 'Menções honrosas'
      },
      funFactsPool: [
        'Tenho dois gatos que ficam comigo enquanto eu jogo.',
        'Meu anime favorito é Yofukashi no Uta.',
        'Eu consigo nomear quase todas as variantes do Mirage 2000.',
        'Eu acompanho tempos absurdos de 0-400 km/h de carro por diversão.',
        'War Thunder é vida',
        'Sou obcecado por carros como Corvette C8 e Koenigsegg Jesko.',
        'Gosto de desenhar personagens tarde da noite.',
        'Consigo passar horas comparando designs de aeronaves só por diversão.',
        'Minha cor favorita é rose red',
        'O Challenger 2 britânico é meu tanque favorito',
        'Sou obcecado por som de motor a jato.',
        'Eu desenho melhor às 2 da manhã do que de dia.',
        'Já joguei War Thunder por 12 horas seguidas.',
        'Consigo identificar caças só pela silhueta.',
        'Minha música favorita é Exit Music (For a Film) do Radiohead',
        'Minha artista favorita é Melanie Martinez',
        'Minha comida favorita é torta salgada',
        'Guepardos são meu animal favorito',
        'Tenho mais de 3000 horas em Sol’s RNG',
        'França é minha nação favorita',
        'Tomboys acima de femboys',
        '1+1 = 2',
        'Loona? perfeição',
        '🥀',
        'AMD > Intel',
        'Reshiram é o melhor pokémon.',
        'Gatos > cachorros.',
        'Sou preguiçoso pra krl 💔',
        'V8 > V12.',
        'Lamborghini Murciélago é o carro com melhor som já feito.',
        'Opinião impopular: Sousou no Frieren é mid.',
        'Monster energy é foda.',
        'Kiwi é minha fruta favorita.',
        'Extrovertido wannabe.',
        'Falo pra krl sobre as coisas pelas quais sou obcecado.',
        'Maracujá é a melhor fruta pra fazer suco.',
        'Consigo discutir sobre coisa irrelevante o dia inteiro.',
        'Eu gosto de ficar sozinho.',
        'Passo noites acordado só pensando.',
        'Música bate diferente de noite.',
        'Tem um player de música no site com minhas músicas favoritas.',
        'Vou te dizer que tô bem mesmo quando não tô.',
        'Eu amo furries, mas não me considero um.',
        'Eu vou te odiar se tu for insistente.',
        'Penso 5 vezes antes de fazer algo e ainda faço errado.',
        'Não me pergunte quanto dinheiro e tempo eu gasto fazendo avatar no Roblox por mês',
        'JOJO',
        'あなたの時間を無駄にしてしまいました。'
      ]
    }
  };

  function getCurrentTheme() {
    return localStorage.getItem('site-theme') || 'dark';
  }

  function getCurrentLanguage() {
    return localStorage.getItem('site-language') || 'en';
  }

  function getBackgroundVideoEnabled() {
  return localStorage.getItem('site-bg-video') !== 'off';
}

function applyBackgroundVideo(enabled) {
  if (enabled) {
    document.body.classList.remove('video-bg-disabled');
    localStorage.setItem('site-bg-video', 'on');
  } else {
    document.body.classList.add('video-bg-disabled');
    localStorage.setItem('site-bg-video', 'off');
  }

  updateBackgroundVideoButtonText();
}

function updateBackgroundVideoButtonText() {
  if (!bgVideoToggleBtn) return;
  const t = getText();
  bgVideoToggleBtn.textContent = getBackgroundVideoEnabled()
    ? t.bgVideoOn
    : t.bgVideoOff;
}

  function getText() {
    return translations[getCurrentLanguage()];
  }

  window.getSiteLanguage = getCurrentLanguage;
  window.getSiteText = getText;

  function applyTheme(theme) {
    document.body.classList.remove('light-theme');

    if (theme === 'light') {
      document.body.classList.add('light-theme');
    }

    localStorage.setItem('site-theme', theme);
    updateThemeButtonText();
    document.dispatchEvent(new CustomEvent('site-theme-changed', {
      detail: { theme }
    }));
  }

  function updateThemeButtonText() {
    if (!themeToggleBtn) return;
    const t = getText();
    themeToggleBtn.textContent = getCurrentTheme() === 'light' ? t.themeLight : t.themeDark;
  }

  function updateLanguageButtonText() {
    if (!languageToggleBtn) return;
    languageToggleBtn.textContent = getText().languageLabel;
  }

  function applyStaticTranslations() {
    const t = getText();

    const aboutHeading = document.getElementById('about-me-heading');
    const favoritesHeading = document.getElementById('favorites-heading');
    const socialHeading = document.getElementById('social-heading');
    const faqHeading = document.getElementById('faq-heading');
    const btnLikes = document.getElementById('btn-likes');
    const btnDislikes = document.getElementById('btn-dislikes');
    const btnAbout = document.getElementById('btn-about');
    const btnObsessions = document.getElementById('btn-obsessions');
    const btnDreams = document.getElementById('btn-dreams');
    const btnFriends = document.getElementById('btn-friends');
    const musicBtn = document.getElementById('music-btn');
    const shuffleBtn = document.getElementById('shuffle-facts-btn');
    const likes = document.getElementById('likes');
    const dislikes = document.getElementById('dislikes');
    const about = document.getElementById('about');
    const obsessions = document.getElementById('obsessions');
    const dreams = document.getElementById('dreams');
    const question = document.getElementById('faq-question');
    const answer = document.getElementById('faq-answer');
    const friendsMainTitle = document.getElementById('friends-main-title');
    const friendsHonorableTitle = document.getElementById('friends-honorable-title');

    if (settingsPanelTitle) settingsPanelTitle.textContent = t.settingsTitle;
    if (aboutHeading) aboutHeading.textContent = t.aboutMe;
    if (favoritesHeading) favoritesHeading.textContent = t.favoriteStuff;
    if (socialHeading) socialHeading.textContent = t.socialMedia;
    if (faqHeading) faqHeading.textContent = t.faqHeading;

    if (btnLikes) btnLikes.textContent = t.likes;
    if (btnDislikes) btnDislikes.textContent = t.dislikes;
    if (btnAbout) btnAbout.textContent = t.whoIAm;
    if (btnObsessions) btnObsessions.textContent = t.obsessions;
    if (btnDreams) btnDreams.textContent = t.dreams;
    if (btnFriends) btnFriends.textContent = t.friends;

    if (musicBtn) musicBtn.textContent = t.openPlayer;
    if (shuffleBtn) shuffleBtn.textContent = t.shuffleFacts;
    if (friendsMainTitle) friendsMainTitle.textContent = t.friendsMainTitle;
    if (friendsHonorableTitle) friendsHonorableTitle.textContent = t.honorableMentions;

    if (likes) likes.innerHTML = t.aboutContent.likes;
    if (dislikes) dislikes.innerHTML = t.aboutContent.dislikes;
    if (about) about.innerHTML = t.aboutContent.about;
    if (obsessions) obsessions.innerHTML = t.aboutContent.obsessions;
    if (dreams) dreams.innerHTML = t.aboutContent.dreams;

    if (question && question.textContent.trim() === 'Loading question...') {
      question.textContent = t.loadingQuestion;
    }

    if (answer && answer.textContent.trim() === 'Loading answer...') {
      answer.textContent = t.loadingAnswer;
    }
  }

  function applyLanguage(language) {
    localStorage.setItem('site-language', language);
    applyStaticTranslations();
    updateThemeButtonText();
    updateLanguageButtonText();
    updateBackgroundVideoButtonText();

    document.dispatchEvent(new CustomEvent('site-language-changed', {
      detail: { language }
    }));
  }

  function openSettingsPanel() {
    if (!settingsPanel) return;
    settingsPanel.classList.remove('hidden');
    settingsPanel.classList.add('show');
    settingsPanel.setAttribute('aria-hidden', 'false');
  }

  function closeSettingsPanel() {
    if (!settingsPanel) return;
    settingsPanel.classList.remove('show');
    settingsPanel.classList.add('hidden');
    settingsPanel.setAttribute('aria-hidden', 'true');
  }

  function toggleSettingsPanel() {
    if (!settingsPanel) return;
    settingsPanel.classList.contains('show') ? closeSettingsPanel() : openSettingsPanel();
  }

  applyTheme(getCurrentTheme());
  applyLanguage(getCurrentLanguage());
  applyBackgroundVideo(getBackgroundVideoEnabled());

  settingsBtn?.addEventListener('click', (e) => {
  e.stopPropagation();

  const clickSound = document.getElementById('btn-click-sound');
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
  }

  toggleSettingsPanel();
});

  settingsCloseBtn?.addEventListener('click', closeSettingsPanel);

  themeToggleBtn?.addEventListener('click', () => {
    const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  languageToggleBtn?.addEventListener('click', () => {
    const nextLanguage = getCurrentLanguage() === 'en' ? 'pt' : 'en';
    applyLanguage(nextLanguage);
  });

  bgVideoToggleBtn?.addEventListener('click', () => {
  applyBackgroundVideo(!getBackgroundVideoEnabled());
});

  document.addEventListener('click', (e) => {
    if (!settingsPanel || !settingsBtn) return;

    const clickedInsidePanel = settingsPanel.contains(e.target);
    const clickedSettingsButton = settingsBtn.contains(e.target);

    if (!clickedInsidePanel && !clickedSettingsButton) {
      closeSettingsPanel();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSettingsPanel();
  });
});
