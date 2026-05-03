const updateLogData = [
  {
    version: { en: "Beta", pt: "Beta" },
    date: "2026-01-04",
    changes: [
      ["creation", { en: "Website created.", pt: "Site criado." }],
      ["added", { en: "Main profile.", pt: "Perfil principal." }],
      ["added", { en: "About me section.", pt: "Seção sobre mim." }],
      ["added", { en: "Social Media section.", pt: "Seção de redes sociais." }],
      ["added", { en: "Minor decorations.", pt: "Pequenas decorações." }]
    ]
  },

  {
    version: { en: "Version 0.1", pt: "Versão 0.1" },
    date: "2026-01-20",
    changes: [
      ["improved", { en: "Main profile layout (Added the profile picture decoration).", pt: "Layout do perfil principal (adicionada a decoração da foto de perfil)." }],
      ["added", { en: "Dreams section.", pt: "Seção de sonhos." }],
      ["added", { en: "Friends section.", pt: "Seção de amigos." }],
      ["added", { en: "JS and CSS files to reduce Index file size.", pt: "Arquivos JS e CSS para reduzir o tamanho do Index." }],
      ["improved", { en: "Website layout.", pt: "Layout do site." }],
      ["added", { en: "Shuffle facts button.", pt: "Botão de embaralhar fatos." }]
    ]
  },

  {
    version: { en: "Version 0.2", pt: "Versão 0.2" },
    date: "2026-04-04",
    changes: [
      ["improved", { en: "Main profile layout (VFX and SFX on mouse hovering).", pt: "Layout do perfil principal (VFX e SFX ao passar o mouse)." }],
      ["added", { en: "Click sound effects.", pt: "Efeitos sonoros de clique." }],
      ["added", { en: "Animated neon gradient background.", pt: "Fundo animado com gradiente neon." }],
      ["improved", { en: "Background brightness and contrast balancing.", pt: "Balanceamento de brilho e contraste do fundo." }],
      ["improved", { en: "Overall readability and visual depth.", pt: "Leitura geral e profundidade visual." }],
      ["improved", { en: "Loading screen.", pt: "Tela de carregamento." }]
    ]
  },

  {
    version: { en: "Version 0.3", pt: "Versão 0.3" },
    date: "2026-04-11",
    changes: [
      ["improved", { en: "Main website layout.", pt: "Layout principal do site." }],
      ["added", { en: "API to automatically update profile picture and profile status.", pt: "API para atualizar automaticamente a foto e o status do perfil." }],
      ["added", { en: "Vintage music player.", pt: "Player de música vintage." }],
      ["added", { en: "1 Total song.", pt: "1 música no total." }],
      ["added", { en: "Responsive layout improvements for smaller screens.", pt: "Melhorias de responsividade para telas menores." }],
      ["improved", { en: "Styles and loading screen functionality.", pt: "Estilos e funcionalidade da tela de carregamento." }],
      ["added", { en: "Honorable mentions section.", pt: "Seção de menções honrosas." }]
    ]
  },

  {
    version: { en: "Version 0.4", pt: "Versão 0.4" },
    date: "2026-04-15",
    changes: [
      ["improved", { en: "Main website layout.", pt: "Layout principal do site." }],
      ["improved", { en: "Music player now with images and more songs.", pt: "Player de música agora com imagens e mais músicas." }],
      ["added", { en: "5 Total songs.", pt: "5 músicas no total." }],
      ["added", { en: "FAQ section.", pt: "Seção de FAQ." }],
      ["added", { en: "Friends mini profiles.", pt: "Mini perfis dos amigos." }],
      ["added", { en: "Multiple background images on loading screen.", pt: "Várias imagens de fundo na tela de carregamento." }]
    ]
  },

  {
    version: { en: "Version 0.5", pt: "Versão 0.5" },
    date: "2026-04-15",
    changes: [
      ["improved", { en: "Complete website layout overhaul.", pt: "Reformulação completa do layout do site." }],
      ["added", { en: "Easter eggs.", pt: "Easter eggs." }],
      ["added", { en: "Friends mini profile backgrounds.", pt: "Fundos nos mini perfis dos amigos." }],
      ["added", { en: "Loading screen skip interaction.", pt: "Interação para pular a tela de carregamento." }],
      ["added", { en: "Mouse hovering in background image makes the website structure semi transparent.", pt: "Passar o mouse no fundo deixa a estrutura do site semitransparente." }],
      ["fixed", { en: "Music player flickering loop bug after video ends.", pt: "Bug do player de música piscando em loop após o vídeo terminar." }],
      ["improved", { en: "Cleaner FAQ layout.", pt: "Layout mais limpo no FAQ." }],
      ["improved", { en: "Better spacing and text readability.", pt: "Melhor espaçamento e leitura dos textos." }],
      ["improved", { en: "Smoother navigation flow.", pt: "Navegação mais fluida." }],
      ["fixed", { en: "Instant jump-to-end navigation bug.", pt: "Bug de pulo instantâneo para o final." }],
      ["fixed", { en: "FAQ theme color inconsistencies.", pt: "Inconsistências de cor no tema do FAQ." }],
      ["added", { en: "Favorite stuff section with Games, Animes and Manga.", pt: "Seção de favoritos com jogos, animes e mangás." }]
    ]
  },

  {
    version: { en: "Version 0.6", pt: "Versão 0.6" },
    date: "2026-04-28",
    changes: [
      ["added", { en: "Settings panel.", pt: "Painel de configurações." }],
      ["added", { en: "Favorite cars.", pt: "Carros favoritos." }],
      ["added", { en: "More facts and FAQ.", pt: "Mais fatos e perguntas no FAQ." }],
      ["added", { en: "More songs (23 songs total).", pt: "Mais músicas (23 músicas no total)." }],
      ["added", { en: "One more easter egg.", pt: "Mais um easter egg." }],
      ["added", { en: "Light mode and animated background toggle.", pt: "Modo claro e botão para alternar o fundo animado." }],
      ["improved", { en: "Settings panel opening animation.", pt: "Animação de abertura do painel de configurações." }],
      ["added", { en: "Music player moving functionality.", pt: "Função de mover o player de música." }]
    ]
  },

  {
    version: { en: "Version 0.7", pt: "Versão 0.7" },
    date: "2026-04-29",
    changes: [
      ["improved", { en: "Main website layout.", pt: "Layout principal do site." }],
      ["improved", { en: "Light mode adjustments (reduced brightness / less eye strain).", pt: "Ajustes no modo claro (menos brilho / menos cansaço visual)." }],
      ["improved", { en: "Dark mode refinements.", pt: "Refinamentos no modo escuro." }],
      ["fixed", { en: "Buttons not updating correctly in light mode.", pt: "Botões não atualizavam corretamente no modo claro." }],
      ["fixed", { en: "UI elements with incorrect color states.", pt: "Elementos da interface com estados de cor incorretos." }],
      ["fixed", { en: "FAQ section not matching theme.", pt: "Seção FAQ não combinava com o tema." }]
    ]
  },

  {
    version: { en: "Version 0.8", pt: "Versão 0.8" },
    date: "2026-04-30",
    changes: [
      ["added", { en: "Update log.", pt: "Registro de atualizações." }],
      ["added", { en: "Switch-style settings layout.", pt: "Layout das configurações em estilo switch." }],
      ["added", { en: "Others tab with credits and update log.", pt: "Aba Outros com créditos e registro de atualizações." }],
      ["fixed", { en: "FAQ background highlight behavior.", pt: "Comportamento do destaque de fundo do FAQ." }]
    ]
  },

  {
    version: { en: "Version 0.9", pt: "Versão 0.9" },
    date: "2026-05-01",
    changes: [
      ["added", { en: "Low Quality Mode option.", pt: "Opção de modo leve." }],
      ["added", { en: "Language control inside the Settings panel.", pt: "Controle de idioma dentro do painel de configurações." }],
      ["added", { en: "Light/dark theme control inside the Settings panel.", pt: "Controle de tema claro/escuro dentro do painel de configurações." }],
      ["added", { en: "On/Off animated background option.", pt: "Opção de ligar/desligar o fundo animado." }]
    ]
  },

  {
    version: { en: "Version 1.0", pt: "Versão 1.0" },
    date: "2026-05-02",
    changes: [
      ["added", { en: "Settings panel opened through the gear button.", pt: "Painel de configurações aberto pelo botão de engrenagem." }],
      ["added", { en: "Settings tab inside the panel.", pt: "Aba de configurações dentro do painel." }],
      ["added", { en: "Others tab next to Settings.", pt: "Aba Outros ao lado de Configurações." }],
      ["added", { en: "Screen-switching system between Settings and Others.", pt: "Sistema de troca de tela entre Configurações e Outros." }],
      ["added", { en: "Notes section inside the Others tab.", pt: "Seção de notas dentro da aba Outros." }],
      ["added", { en: "Scroll support inside the Settings/Others panel.", pt: "Suporte a scroll dentro do painel de Configurações/Outros." }],
      ["improved", { en: "Cleaner settings-card layout for the configuration options.", pt: "Layout mais limpo dos cards de configurações." }],
      ["added", { en: "Low Quality Mode option.", pt: "Opção de modo leve." }],
      ["added", { en: "Language control inside the Settings panel.", pt: "Controle de idioma dentro do painel de configurações." }],
      ["added", { en: "Light/dark theme control inside the Settings panel.", pt: "Controle de tema claro/escuro dentro do painel de configurações." }]
    ]
  },

  {
    version: { en: "Version 1.1", pt: "Versão 1.1" },
    date: "2026-05-03",
    changes: [
      ["improved", { en: "Settings panel layout to better match the reference design.", pt: "Layout do painel de configurações ajustado para combinar melhor com a referência." }],
      ["improved", { en: "Visual organization of the settings.", pt: "Organização visual das configurações." }],
      ["improved", { en: "Tab navigation inside the panel.", pt: "Navegação por abas dentro do painel." }],
      ["improved", { en: "Update Log structure.", pt: "Estrutura do registro de atualizações." }],
      ["fixed", { en: "Log list escaping outside the screen.", pt: "Lista do log escapando para fora da tela." }],
      ["fixed", { en: "Stacked transparent backgrounds accumulating across versions.", pt: "Fundos transparentes acumulando entre versões." }],
      ["added", { en: "2 New easter eggs.", pt: "2 novos easter eggs." }]
    ]
  }
];

function getUpdateLogLang() {
  return window.getSiteLanguage ? window.getSiteLanguage() : "en";
}

function getUpdateLogText(value) {
  const lang = getUpdateLogLang();
  if (typeof value === "string") return value;
  return value?.[lang] || value?.en || "";
}

function getUpdateLogType(type) {
  const lang = getUpdateLogLang();

  const labels = {
    en: {
      creation: "Creation",
      added: "Added",
      improved: "Improved",
      fixed: "Fixed",
      date: "Date"
    },
    pt: {
      creation: "Criação",
      added: "Adicionado",
      improved: "Melhorado",
      fixed: "Corrigido",
      date: "Data"
    }
  };

  return labels[lang]?.[type] || labels.en[type] || type;
}

function renderUpdateLog() {
  const updateLogRoot = document.getElementById("update-log-root");
  if (!updateLogRoot) return;

  updateLogRoot.innerHTML = updateLogData.map((entry) => `
    <button class="update-log-version" type="button">
      <span>${getUpdateLogText(entry.version)}</span>
      <span class="update-log-arrow">›</span>
    </button>

    <div class="update-log-content">
      ${entry.changes.map(([type, text]) => `
        <p><strong>${getUpdateLogType(type)}:</strong> ${getUpdateLogText(text)}</p>
      `).join("")}

      <p><strong>${getUpdateLogType("date")}:</strong> ${entry.date}.</p>
    </div>
  `).join("");

  document.querySelectorAll(".update-log-version").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      if (!content || !content.classList.contains("update-log-content")) return;

      button.classList.toggle("open");
      content.classList.toggle("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderUpdateLog);
document.addEventListener("site-language-changed", renderUpdateLog);
