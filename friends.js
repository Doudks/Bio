// | friends data |
const friendsData = {
  clear: {
    name: "Clear",
    avatar: "https://i.imgur.com/JnjU9hO.png",
    desc: "An 18y Brazilian, better known as Clear, or as Charthool by some people. I like to see the people they love happy and sometimes takes things too seriously.",
    status: "online"
  },

  thedragonplayer: {
    name: "thedragonplayer",
    avatar: "https://i.imgur.com/1YJoXTY.jpeg",
    desc: "The Dragon Galaxy, Dragon894, The Dragon Player! Enfim, me chame de Dragon. Gosto de jogos de rpg, estratégia, ação e puzzle (alguns). Minha música favorita é sky full of stars de coldplay. Gosto de ver artes fofas como furries e kemonomimis. Franquia favorita: Assassins Creed",
    status: "dnd"
  },

  Drakkoo: {
    name: "Drakkoo",
    avatar: "https://i.imgur.com/gJBo5It.png",
    desc: "Pessoa mais reservada e direta, mas que se empolga fácil falando do que gosta. Nascido em Natal/RN 🇧🇷 (Cidade do Sol), valorizo respeito, boas conversas e pequenos gestos. Tenho investido mais em mim, estudando e explorando novos hobbies. Curto jogos, desenho, natação e surf, por enquanto no bodyboard, mas a prancha vem aí 🌊",
    status: "dnd"
  },

  Fakezalem: {
    name: "Fakezalem",
    avatar: "https://i.imgur.com/jUiuNSr.png",
    desc: "Universum totum duobus tantum numeris servare possumus... SAPERE AUDE!!! Eu gosto de matemática, física, e tecnologia, de mexer em eletrônicos , computadores e reparar-los, minha meta é fazer faculdade de engenharia da computação",
    status: "dnd"
  },

  matheusbleck21: {
    name: "matheusbleck21",
    avatar: "https://i.imgur.com/BxjILM7.png",
    desc: "as vozes não param",
    status: "dnd"
  },

  Nikko: {
    name: "Nikko",
    avatar: "https://i.imgur.com/AAhjYkX.png",
    desc: "Gosto de conversar sobre assuntos militares e de guerra em geral. Aposentado do war thunder 🧑‍🦯 , jogo world of tanks, hoi4, roblox e pretendo jogar DCS no futuro",
    status: "dnd"
  },

  nitidez: {
    name: "nitidez",
    avatar: "https://i.imgur.com/sdQOetg.jpeg",
    desc: "Eu sou Nitidez, sigma e propreier em jogos, curto anime/série/filme/mangá/manhwa/fanfic /dorama/seu rabo e sou desenvolvedor nas horas vagas. (Bolinha bolão uwu) 🥴",
    status: "dnd"
  },

  Yingloomy: {
    name: "Yingloomy",
    avatar: "https://i.imgur.com/10DtG0n.png",
    desc: "Meu nome é Yingloomy, muitos estranhamente não gostam de mim (por que será), mas eu gosto da interação e de todos em geral. Você pode me chamar de Ying também. Eu gosto de jogos de Estratégia em Tempo Real (RTS), FPS e principalmente jogos sandbox, normalmente a pessoa com jogos desconhecidos ou muito desvalorizados, além de gostar das matérias envolvendo história e geografia.",
    status: "dnd"
  },

  yoserius: {
    name: "yoserius",
    avatar: "https://cdn.imgchest.com/files/8524d3e0e4eb.png",
    desc: "O ser humano quase perfeito",
    status: "dnd"
  },

  Zilirian: {
    name: "Zilirian",
    avatar: "https://i.imgur.com/3R7sQVb.png",
    desc: "Undecided",
    status: "dnd"
  },

  jpxwf12: {
    name: "jpxwf12",
    avatar: "https://i.imgur.com/Qc9S9bX.png",
    desc: "Maníaco por carros, estudante de programação, introvertido,hetero,apreciador de asiáticas",
    status: "dnd"
  },

  jann: {
    name: "jann",
    avatar: "https://i.imgur.com/2wfpG1n.png",
    desc: "Meu nome é Janderson, porém sou conhecido como Jamilson ou Jamal. Tenho 17 anos, gosto de praticar esportes, ler mangás, assistir anime e estudar.",
    status: "dnd"
  }
};

// | friends cards order |
const friendsOrder = [
  "clear",
  "thedragonplayer",
  "Drakkoo",
  "Fakezalem",
  "matheusbleck21",
  "Nikko",
  "nitidez",
  "Yingloomy",
  "yoserius",
  "Zilirian",
  "jpxwf12",
  "jann"
];

// | render friends cards |
function renderFriendsCards() {
  const grid = document.getElementById("friends-grid");
  if (!grid) return;

  grid.innerHTML = friendsOrder
    .map((id) => {
      const friend = friendsData[id];
      const label = friend?.name || id;

      return `<div class="friend-card" data-id="${id}">${label}</div>`;
    })
    .join("");
}

// | mini profile logic |
function setupFriendsMiniProfile() {
  const mini = document.getElementById("mini-profile");
  const miniAvatar = document.getElementById("mini-avatar");
  const miniName = document.getElementById("mini-name");
  const miniDesc = document.getElementById("mini-desc");

  if (!mini || !miniAvatar || !miniName || !miniDesc) return;

  let holdTimeout = null;
  let hideTimeout = null;
  let activeCard = null;

  document.querySelectorAll(".friend-card").forEach((card) => {
    const id = card.dataset.id;

    const show = (x, y) => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }

      activeCard = card;

      const data = friendsData[id] || {};
      miniAvatar.src = data.avatar || "https://cdn.discordapp.com/embed/avatars/5.png";
      miniName.textContent = data.name || card.textContent.trim();
      miniDesc.textContent = data.desc || "Friend";

      mini.classList.remove("hidden");
      mini.style.visibility = "hidden";

      requestAnimationFrame(() => {
        mini.classList.add("show");

        const padding = 12;
        const miniRect = mini.getBoundingClientRect();
        const viewportW = window.innerWidth;
        const viewportH = window.innerHeight;

        let left = x + 15;
        let top = y + 15;

        if (left + miniRect.width > viewportW - padding) {
          left = x - miniRect.width - 15;
        }

        if (top + miniRect.height > viewportH - padding) {
          top = y - miniRect.height - 15;
        }

        left = Math.max(padding, left);
        top = Math.max(padding, top);

        mini.style.left = left + "px";
        mini.style.top = top + "px";
        mini.style.visibility = "visible";
      });
    };

    const hide = () => {
      hideTimeout = setTimeout(() => {
        mini.classList.remove("show");
        setTimeout(() => mini.classList.add("hidden"), 120);
        activeCard = null;
      }, 40);
    };

    // | desktop |
    card.addEventListener("mouseenter", (e) => {
      show(e.clientX, e.clientY);
    });

    card.addEventListener("mousemove", (e) => {
      if (activeCard !== card) return;
      show(e.clientX, e.clientY);
    });

    card.addEventListener("mouseleave", hide);

    // | mobile |
    card.addEventListener("touchstart", (e) => {
      const t = e.touches[0];

      holdTimeout = setTimeout(() => {
        show(t.clientX, t.clientY);
      }, 300);
    });

    card.addEventListener("touchend", () => {
      clearTimeout(holdTimeout);
      hide();
    });
  });
}

// | init |
document.addEventListener("DOMContentLoaded", () => {
  renderFriendsCards();
  setupFriendsMiniProfile();
});
