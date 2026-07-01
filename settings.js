document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const languageToggleBtn = document.getElementById('language-toggle-btn');
  const bgVideoToggleBtn = document.getElementById('bg-video-toggle-btn');
  const lowQualityToggleBtn = document.getElementById('low-quality-toggle-btn');
  const flavorOptionBtns = document.querySelectorAll('.flavor-option-btn');
  const settingsFlavorTitle = document.getElementById('settings-flavor-title');
  const settingsBtn = document.getElementById('settings-btn');
  const settingsPanel = document.getElementById('settings-panel');
  const settingsCloseBtn = document.getElementById('settings-close-btn');
  const settingsPanelTitle = document.getElementById('settings-panel-title');
  const settingsTabButtons = document.querySelectorAll('.settings-tab-btn');
  const settingsViews = document.querySelectorAll('.settings-view');
  const bannerImg = document.querySelector('.banner');
  const bgParallax = document.getElementById('bg-parallax');
  const bgVideo = document.getElementById('bg-video');

  const translations = {
    en: {
    settingsTitle: 'Settings',
    settingsFlavorTitle: 'Site flavor',
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
    lowQualityOn: 'Low quality mode: On',
    lowQualityOff: 'Low quality mode: Off',
    settingsOthersTab: 'Others',
    settingsUpdateLog: 'Update log',
    settingsNotesTitle: 'Notes',
    settingsNotesText1: 'This is a personal project made for the sole purpose to entertain and inform',
    settingsNotesText2: 'There are a bunch of easter eggs around the website👀.',
    settingsCreditsTitle: 'Credits',
    settingsCreditsText: "The website's concept, design and updates are made by me. Code assisted by AI and some ideas coming from my friends.",
    moonbitePlaceholder: 'Enter code',
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
        'Windows > linux and you wont change my mind',
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
    settingsFlavorTitle: 'Flavor do site',
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
    lowQualityOn: 'Modo leve: Ligado',
    lowQualityOff: 'Modo leve: Desligado',
    settingsOthersTab: 'Outros',
    settingsUpdateLog: 'Registro de atualizações',
    settingsNotesTitle: 'Notas',
    settingsNotesText1: 'Este é um projeto pessoal feito com o único propósito de entreter e informar.',
    settingsNotesText2: 'Existem vários easter eggs espalhados pelo site👀.',
    settingsCreditsTitle: 'Créditos',
    settingsCreditsText: 'O conceito, design e atualizações do site foram feitos por mim. Código auxiliado por IA e algumas ideias vieram dos meus amigos.',
    moonbiteHint: 'Duas palavras, coloque elas juntas.',
    moonbitePlaceholder: 'Digite o código',
    moonbiteButton: 'OK',
    moonbiteAccepted: 'Aceito.',
    moonbiteWrong: 'Nada aconteceu.',
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

const validFlavors = ['vanilla', 'blueberry', 'lime', 'peach', 'coconut', 'cherry', 'strawberry'];

function getCurrentFlavor() {
  const savedFlavor = localStorage.getItem('site-flavor');

  if (validFlavors.includes(savedFlavor)) {
    return savedFlavor;
  }

  const bodyFlavor = document.body.dataset.flavor;

  if (validFlavors.includes(bodyFlavor)) {
    return bodyFlavor;
  }

  return 'vanilla';
}

let flavorChangeTimeout = null;
let themeChangeTimeout = null;
let themeVisualTimeout = null;
let flavorAssetRunId = 0;

function preloadImage(url) {
  return new Promise((resolve) => {
    if (!url) {
      resolve();
      return;
    }

    const img = new Image();

    img.onload = () => resolve();
    img.onerror = () => resolve();

    img.src = url;
  });
}

function waitForVideoReady(video, timeout = 1800) {
  return new Promise((resolve) => {
    if (!video) {
      resolve();
      return;
    }

    if (video.readyState >= 2) {
      resolve();
      return;
    }

    let done = false;

    const finish = () => {
      if (done) return;
      done = true;

      video.removeEventListener("loadeddata", finish);
      video.removeEventListener("canplay", finish);

      resolve();
    };

    video.addEventListener("loadeddata", finish, { once: true });
    video.addEventListener("canplay", finish, { once: true });

    setTimeout(finish, timeout);
  });
}

function setElementBackground(element, imageUrl, options = {}) {
  if (!element || !imageUrl) return;

  const {
    important = false,
    backgroundPosition = "center",
    backgroundSize = "cover"
  } = options;

  const priority = important ? "important" : "";

  element.style.setProperty("background-image", `url("${imageUrl}")`, priority);
  element.style.setProperty("background-size", backgroundSize, priority);
  element.style.setProperty("background-position", backgroundPosition, priority);
  element.style.setProperty("background-repeat", "no-repeat", priority);
  element.style.setProperty("background-blend-mode", "normal", priority);
}

async function applyFlavorAssets(flavor, options = {}) {
  const runId = ++flavorAssetRunId;
  const assets = flavorAssets[flavor] || flavorAssets.vanilla;

  const {
    preserveCurrentVideo = false
  } = options;

  if (!assets) return;

  await Promise.all([
    preloadImage(assets.banner),
    preloadImage(assets.background)
  ]);

  if (runId !== flavorAssetRunId) return;

  if (bannerImg && assets.banner) {
    setElementBackground(bannerImg, assets.banner, {
      backgroundPosition: assets.bannerPosition || "center",
      backgroundSize: "cover"
    });
  }

  if (bgParallax && assets.background) {
    setElementBackground(bgParallax, assets.background, {
      important: true,
      backgroundPosition: assets.backgroundPosition || "center",
      backgroundSize: "cover"
    });

    bgParallax.style.setProperty("opacity", "1", "important");
    bgParallax.style.setProperty("visibility", "visible", "important");
    bgParallax.style.setProperty("filter", "none", "important");
  }

  const hasAnimatedWallpaper = Boolean(assets.video);

  const shouldUseVideo =
    hasAnimatedWallpaper &&
    getBackgroundVideoEnabled() &&
    !document.body.classList.contains("low-quality-mode");

  document.body.classList.toggle("flavor-static-bg", !shouldUseVideo);
  document.body.classList.toggle("flavor-animated-bg", shouldUseVideo);

  if (!bgVideo) {
    flavorAssetsAlreadyApplied = true;
    return;
  }

  const source = bgVideo.querySelector("source");

  bgVideo.muted = true;
  bgVideo.loop = true;
  bgVideo.playsInline = true;

  bgVideo.style.setProperty("display", "block", "important");
  bgVideo.style.setProperty("visibility", "visible", "important");
  bgVideo.style.setProperty("pointer-events", "none", "important");

  if (!shouldUseVideo) {
    bgVideo.style.setProperty("opacity", "0", "important");

    setTimeout(() => {
      const stillShouldNotUseVideo =
        !getBackgroundVideoEnabled() ||
        document.body.classList.contains("low-quality-mode") ||
        document.body.classList.contains("flavor-static-bg");

      if (stillShouldNotUseVideo) {
        bgVideo.pause();
      }
    }, 900);

    flavorAssetsAlreadyApplied = true;
    return;
  }

  const currentSource = source
    ? source.getAttribute("src")
    : bgVideo.getAttribute("src");

  const needsNewVideo =
    bgVideo.dataset.currentVideo !== assets.video ||
    currentSource !== assets.video;

  /*
    Tema mudando:
    se é o mesmo vídeo, NÃO baixa a opacidade.
    Isso impede o flash da imagem parada.
  */
  if (preserveCurrentVideo && !needsNewVideo) {
    bgVideo.style.setProperty("opacity", "1", "important");
    bgVideo.play().catch(() => {});
    flavorAssetsAlreadyApplied = true;
    return;
  }

  /*
    Só faz fade out quando realmente vai trocar o arquivo do vídeo.
  */
  if (needsNewVideo) {
    bgVideo.style.setProperty("opacity", "0", "important");

    await new Promise(resolve => setTimeout(resolve, 420));

    if (runId !== flavorAssetRunId) return;

    if (source) {
      source.src = assets.video;
      source.type = "video/mp4";
    } else {
      bgVideo.src = assets.video;
    }

    bgVideo.dataset.currentVideo = assets.video;
    bgVideo.load();
  } else if (bgVideo.readyState < 2) {
    bgVideo.load();
  }

  await waitForVideoReady(bgVideo, 2200);

  if (runId !== flavorAssetRunId) return;

  const stillShouldUseVideo =
    Boolean(assets.video) &&
    getBackgroundVideoEnabled() &&
    !document.body.classList.contains("low-quality-mode");

  if (!stillShouldUseVideo) return;

  bgVideo.play().catch(() => {});

  requestAnimationFrame(() => {
    bgVideo.style.setProperty("opacity", "1", "important");
  });

  flavorAssetsAlreadyApplied = true;
}

function applyFlavor(flavor, instant = false) {
  const safeFlavor = validFlavors.includes(flavor) ? flavor : "vanilla";
  const isFirstApply = !flavorAssetsAlreadyApplied;

  const applyChanges = () => {
    document.body.dataset.flavor = safeFlavor;
    localStorage.setItem("site-flavor", safeFlavor);
    updateFlavorButtons();
    applyFlavorAssets(safeFlavor);

    document.dispatchEvent(new CustomEvent("site-flavor-changed", {
      detail: { flavor: safeFlavor }
    }));
  };

  clearTimeout(flavorChangeTimeout);

  if (isFirstApply || instant) {
    applyChanges();
    return;
  }

  flavorChangeTimeout = setTimeout(applyChanges, 1500);
}

function applyTheme(theme, instant = false) {
  const safeTheme = theme === "light" ? "light" : "dark";

  clearTimeout(themeChangeTimeout);
  clearTimeout(themeVisualTimeout);

  document.body.classList.add("theme-transitioning");

  document.body.classList.remove("light-theme");

  if (safeTheme === "light") {
    document.body.classList.add("light-theme");
  }

  localStorage.setItem("site-theme", safeTheme);
  updateThemeButtonText();

  applyFlavorAssets(getCurrentFlavor(), {
    preserveCurrentVideo: true
  });

  document.dispatchEvent(new CustomEvent("site-theme-changed", {
    detail: { theme: safeTheme }
  }));

  themeVisualTimeout = setTimeout(() => {
    document.body.classList.remove("theme-transitioning");
  }, 2100);
}

let flavorAssetsAlreadyApplied = false;

const flavorAssets = {

  vanilla: {
    banner: "https://i.imgur.com/5JaJwBk.png",
    background: "https://i.imgur.com/xtzaH3v.png",
    video: "https://github.com/Doudks/test/raw/refs/heads/main/mp4file/starry-sky-moon-clouds-moewalls-com%20(1).mp4",
    bannerPosition: "center 84%",
    backgroundPosition: "center"
  },

  lime: {
    banner: "https://cdn.imgchest.com/files/f7ec7b053ccf.jpg",
    background: "https://i.imgur.com/WIFPjhW.jpeg",
    bannerPosition: "center 50%",
    backgroundPosition: "center"
},

  blueberry: {
    banner: "https://i.imgur.com/nEqpaah.png",
    background: "https://i.imgur.com/uEXSvCU.jpeg",
    video: "https://github.com/Doudks/test/raw/refs/heads/main/mp4file/nightcitywallpaper.mp4",
    bannerPosition: "center",
    backgroundPosition: "center"
  },

  peach: {
    banner: "https://cdn.imgchest.com/files/5c9c51da4a40.jpg",
    background: "https://i.imgur.com/lhlYz0L.jpeg",
    bannerPosition: "center 15%",
    backgroundPosition: "center"
  },

  coconut: {
    banner: "https://i.imgur.com/4Sa3cjg.jpeg",
    background: "https://i.imgur.com/zIT7S6f.jpeg",
    bannerPosition: "center 35%",
    backgroundPosition: "center"
  },

  cherry: {
    banner: "https://cdn.imgchest.com/files/008cd4c739ea.jpg",
    background: "https://i.imgur.com/GJb1KAo.jpeg",
    bannerPosition: "center 23%",
    backgroundPosition: "center"
  },

  strawberry: {
    banner: "https://i.imgur.com/vuJ9RxI.jpeg",
    background: "https://i.imgur.com/qV65bIs.jpeg",
    video: "",
    bannerPosition: "center 24%",
    backgroundPosition: "center"
  }

};

/* =========================================================
  LAZY PRELOAD FLAVOR MEDIA
  Só começa quando clicar em algum botão de flavor
========================================================= */

let flavorMediaPreloadStarted = false;

const flavorPreloadCache = {
  images: [],
  audios: [],
  videos: []
};

function isValidPreloadUrl(url) {
  return (
    typeof url === "string" &&
    url.trim() !== "" &&
    !url.includes("COLOCA_AQUI")
  );
}

function preloadFlavorImage(url) {
  if (!isValidPreloadUrl(url)) return;

  const img = new Image();
  img.src = url;

  flavorPreloadCache.images.push(img);
}

function preloadFlavorAudio(url) {
  if (!isValidPreloadUrl(url)) return;

  const audio = new Audio();
  audio.preload = "auto";
  audio.src = url;
  audio.load();

  flavorPreloadCache.audios.push(audio);
}

function preloadFlavorVideo(url) {
  if (!isValidPreloadUrl(url)) return;

  const video = document.createElement("video");

  video.preload = "auto";
  video.muted = true;
  video.playsInline = true;
  video.src = url;
  video.load();

  flavorPreloadCache.videos.push(video);
}

function preloadAllFlavorMediaOnce() {
  if (flavorMediaPreloadStarted) return;

  flavorMediaPreloadStarted = true;

  Object.values(flavorAssets).forEach((assets) => {
    preloadFlavorImage(assets.banner);
    preloadFlavorImage(assets.background);
    preloadFlavorVideo(assets.video);
  });

  Object.values(window.flavorSounds || {}).forEach((sounds) => {
    preloadFlavorAudio(sounds.click);
    preloadFlavorAudio(sounds.profileHover);
  });

  console.log("Flavor media preload iniciado.");
}

/* preload só quando clicar na área dos flavors */
document.addEventListener(
  "click",
  (event) => {
    const clickedFlavorArea = event.target.closest(
      ".settings-flavor-card, .flavor-option-btn"
    );

    if (!clickedFlavorArea) return;

    preloadAllFlavorMediaOnce();
  },
  { capture: true }
);

function updateFlavorButtons() {
  const currentFlavor = getCurrentFlavor();

  flavorOptionBtns.forEach((button) => {
    const isActive = button.dataset.flavor === currentFlavor;

    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
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
  applyFlavorAssets(getCurrentFlavor());
}

function updateBackgroundVideoButtonText() {
  if (!bgVideoToggleBtn) return;

  const label = bgVideoToggleBtn.querySelector('.settings-row-label');
  const enabled = getBackgroundVideoEnabled();

  if (label) {
    label.textContent = getCurrentLanguage() === 'pt'
      ? 'Fundo animado'
      : 'Animated background';
  }

  bgVideoToggleBtn.classList.toggle('is-on', enabled);
}

function getLowQualityModeEnabled() {
  return localStorage.getItem('site-low-quality') === 'on';
}

function applyLowQualityMode(enabled) {
  const bgVideo = document.getElementById('bg-video');
  const miniPlayerBgVideo = document.getElementById('mini-player-bg-video');

  if (enabled) {
    document.body.classList.add('low-quality-mode');
    localStorage.setItem('site-low-quality', 'on');

    if (bgVideo) {
      bgVideo.pause();
    }

    if (miniPlayerBgVideo) {
      miniPlayerBgVideo.pause();
    }
  } else {
    document.body.classList.remove('low-quality-mode');
    localStorage.setItem('site-low-quality', 'off');

    if (bgVideo && getBackgroundVideoEnabled()) {
      bgVideo.play().catch(() => {});
    }
  }

  updateLowQualityButtonText();
  applyFlavorAssets(getCurrentFlavor());
}

function updateLowQualityButtonText() {
  if (!lowQualityToggleBtn) return;

  const label = lowQualityToggleBtn.querySelector('.settings-row-label');
  const enabled = getLowQualityModeEnabled();

  if (label) {
    label.textContent = getCurrentLanguage() === 'pt'
      ? 'Modo leve'
      : 'Low quality mode';
  }

  lowQualityToggleBtn.classList.toggle('is-on', enabled);
}

  function getText() {
    return translations[getCurrentLanguage()];
  }

  window.getSiteLanguage = getCurrentLanguage;
  window.getSiteText = getText;



  function updateThemeButtonText() {
  if (!themeToggleBtn) return;

  const label = themeToggleBtn.querySelector('.settings-row-label');
  const isLight = getCurrentTheme() === 'light';

  if (label) {
    label.textContent = getCurrentLanguage() === 'pt'
      ? 'Modo claro'
      : 'Light mode';
  }

  themeToggleBtn.classList.toggle('is-on', isLight);
}

  function updateLanguageButtonText() {
  if (!languageToggleBtn) return;

  const label = languageToggleBtn.querySelector('.settings-row-label');
  const isPortuguese = getCurrentLanguage() === 'pt';

  if (label) {
    label.textContent = isPortuguese
      ? 'Idioma: Português'
      : 'Language: English';
  }

  languageToggleBtn.classList.toggle('is-on', isPortuguese);
}

  function applyStaticTranslations() {
    const t = getText();
    const settingsFlavorTitle = document.getElementById('settings-flavor-title');
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
    const settingsUpdateLogTitle = document.getElementById('settings-update-log-title');
    const settingsNotesTitle = document.getElementById('settings-notes-title');
    const settingsNotesText1 = document.getElementById('settings-notes-text-1');
    const settingsNotesText2 = document.getElementById('settings-notes-text-2');
    const settingsCreditsTitle = document.getElementById('settings-credits-title');
    const settingsCreditsText = document.getElementById('settings-credits-text');

    if (settingsFlavorTitle) settingsFlavorTitle.textContent = t.settingsFlavorTitle;
    if (settingsPanelTitle) settingsPanelTitle.textContent = t.settingsTitle;
        const settingsOthersTab = document.getElementById('settings-others-tab');
    if (settingsOthersTab) settingsOthersTab.textContent = t.settingsOthersTab;
    if (aboutHeading) aboutHeading.textContent = t.aboutMe;
    if (favoritesHeading) favoritesHeading.textContent = t.favoriteStuff;
    if (socialHeading) socialHeading.textContent = t.socialMedia;
    if (faqHeading) faqHeading.textContent = t.faqHeading;
    if (settingsUpdateLogTitle) settingsUpdateLogTitle.textContent = t.settingsUpdateLog;
    if (settingsNotesTitle) settingsNotesTitle.textContent = t.settingsNotesTitle;
    if (settingsNotesText1) settingsNotesText1.textContent = t.settingsNotesText1;
    if (settingsNotesText2) settingsNotesText2.textContent = t.settingsNotesText2;
    if (settingsCreditsTitle) settingsCreditsTitle.textContent = t.settingsCreditsTitle;
    if (settingsCreditsText) settingsCreditsText.textContent = t.settingsCreditsText;
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
    updateLowQualityButtonText();
    document.dispatchEvent(new CustomEvent('site-language-changed', {
      detail: { language }
    }));
  }

  function openSettingsPanel() {
  if (!settingsPanel) return;

  settingsPanel.classList.remove('hidden');
  settingsPanel.setAttribute('aria-hidden', 'false');

  requestAnimationFrame(() => {
    settingsPanel.classList.add('show');
  });
}

function closeSettingsPanel() {
  if (!settingsPanel) return;

  settingsPanel.classList.remove('show');
  settingsPanel.setAttribute('aria-hidden', 'true');

  setTimeout(() => {
    settingsPanel.classList.add('hidden');
  }, 220);
}

  function toggleSettingsPanel() {
    if (!settingsPanel) return;
    settingsPanel.classList.contains('show') ? closeSettingsPanel() : openSettingsPanel();
  }

function switchSettingsView(viewName) {
  settingsTabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.settingsView === viewName);
  });

  settingsViews.forEach((view) => {
    view.classList.toggle('show', view.id === `settings-view-${viewName}`);
  });
}

applyTheme(getCurrentTheme(), true);
applyLanguage(getCurrentLanguage());
applyBackgroundVideo(getBackgroundVideoEnabled());
applyLowQualityMode(getLowQualityModeEnabled());
applyFlavor(getCurrentFlavor(), true);

settingsTabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    switchSettingsView(button.dataset.settingsView);
  });
});

const updateLogMainBtn = document.querySelector('.update-log-main-btn');
const updateLogList = document.querySelector('.update-log-list');

if (updateLogMainBtn && updateLogList) {
  updateLogMainBtn.addEventListener('click', () => {
    updateLogMainBtn.classList.toggle('open');
    updateLogList.classList.toggle('show');
    updateLogList.classList.toggle('update-log-list-hidden');
  });
}

  settingsBtn?.addEventListener('click', (e) => {
  e.stopPropagation();

  window.playFlavorSound?.("click");

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

  lowQualityToggleBtn?.addEventListener('click', () => {
  applyLowQualityMode(!getLowQualityModeEnabled());
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
  flavorOptionBtns.forEach((button) => {
  button.addEventListener('click', () => {
    applyFlavor(button.dataset.flavor);
   });
  });
});
