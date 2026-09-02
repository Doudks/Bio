(function () {
  "use strict";

  if (document.querySelector(".moonlit-sidebar")) return;

  const body = document.body;
  const banner = document.querySelector(".banner");
  const profile = document.querySelector(".profile-wrapper");
  const content = document.querySelector("main.content");
  const bgParallax = document.getElementById("bg-parallax");
  const bgVideo = document.getElementById("bg-video");

  if (!profile || !content) return;

  body.classList.add("vertical-redesign");

  const sidebar = document.createElement("aside");
  sidebar.className = "moonlit-sidebar";
  sidebar.id = "moonlit-sidebar";
  sidebar.setAttribute("aria-label", "Profile and navigation");
  sidebar.innerHTML = `
    <div class="sidebar-profile-slot"></div>

    <div class="sidebar-brand" aria-label="moonlit">
      <span class="sidebar-moon" aria-hidden="true">☾</span>
      <span class="sidebar-word">.moonlit</span>
      <span class="sidebar-tagline">stay quiet, chase speed</span>
    </div>

    <nav class="sidebar-nav" aria-label="Main navigation">
      <a class="active" href="#moonlit-home"><span aria-hidden="true">⌂</span><b>home</b></a>
      <a href="#about-me-heading"><span aria-hidden="true">▣</span><b>about</b></a>
      <a href="#favorites-heading"><span aria-hidden="true">▦</span><b>stuff</b></a>
      <a href="#social-heading"><span aria-hidden="true">◎</span><b>socials</b></a>
      <a href="#faq-heading"><span aria-hidden="true">?</span><b>notes</b></a>
      <a href="#community-heading"><span aria-hidden="true">✎</span><b>guestbook</b></a>
      <button class="sidebar-terminal" type="button"><span aria-hidden="true">›_</span><b>terminal</b></button>
    </nav>

    <div class="sidebar-tools" aria-label="Player and settings"></div>

    <div class="sidebar-spacer"></div>

    <div class="sidebar-whisper">
      <div class="sidebar-whisper-idle" aria-hidden="true">
        <span class="whisper-star">✦</span>
        <em>the night listens.<br>so do i.</em>
        <span class="whisper-moon">☾</span>
      </div>

      <div class="sidebar-mini-player" aria-label="Mini music player">
        <img class="sidebar-mini-cover" alt="Current song cover">
        <div class="sidebar-mini-shade"></div>
        <div class="sidebar-mini-meta">
          <span class="sidebar-mini-title">Current song</span>
          <div class="sidebar-mini-controls">
            <button class="sidebar-mini-prev" type="button" aria-label="Previous song">‹</button>
            <button class="sidebar-mini-toggle" type="button" aria-label="Pause song">Ⅱ</button>
            <button class="sidebar-mini-next" type="button" aria-label="Next song">›</button>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar-footer">
      <span>v2.3.0</span><span>make it count</span><i></i>
    </div>`;

  sidebar.querySelector(".sidebar-profile-slot").appendChild(profile);

  const sidebarTools = sidebar.querySelector(".sidebar-tools");
  const musicButton = document.getElementById("music-btn");
  const settingsButton = document.getElementById("settings-btn");

  if (musicButton) {
    musicButton.setAttribute("aria-label", "Open music player");
    sidebarTools.appendChild(musicButton);
    musicButton.addEventListener("click", () => {
      if (document.getElementById("mini-player")?.classList.contains("show")) {
        handleSidebarPlayerClose();
      }
      if (window.innerWidth <= 760) closeSidebar();
    });
  }

  if (settingsButton) {
    settingsButton.setAttribute("aria-label", "Open settings");
    sidebarTools.appendChild(settingsButton);
    settingsButton.addEventListener("click", () => {
      if (window.innerWidth <= 760) closeSidebar();
    });
  }

  if (!sidebarTools.children.length) sidebarTools.remove();

  const sidebarPlayerStyles = document.createElement("style");
  sidebarPlayerStyles.textContent = `
    .sidebar-whisper {
      transition: flex-basis .28s ease, border-color .22s ease, box-shadow .22s ease;
    }

    .sidebar-whisper-idle {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      transition: opacity .24s ease, transform .28s ease;
    }

    .sidebar-whisper-idle em {
      font: italic 14px/1.55 Georgia, serif;
    }

    .sidebar-mini-player {
      position: absolute;
      inset: 0;
      opacity: 0;
      pointer-events: none;
      transform: scale(1.025);
      transition: opacity .28s ease, transform .32s ease;
    }

    .sidebar-whisper.sidebar-player-active {
      flex-basis: 164px;
      border-color: color-mix(in srgb, var(--accent) 48%, var(--sidebar-border));
      box-shadow: 0 0 22px color-mix(in srgb, var(--accent) 10%, transparent);
      background: #05070b !important;
    }

    .sidebar-whisper.sidebar-player-active .sidebar-whisper-idle {
      opacity: 0;
      pointer-events: none;
      transform: scale(.96);
    }

    .sidebar-whisper.sidebar-player-active .sidebar-mini-player {
      opacity: 1;
      pointer-events: auto;
      transform: scale(1);
    }

    body.vertical-redesign .moonlit-sidebar .sidebar-whisper:not(.sidebar-player-active) .sidebar-whisper-idle {
      opacity: 1 !important;
      pointer-events: auto !important;
      transform: scale(1) !important;
    }

    body.vertical-redesign .moonlit-sidebar .sidebar-whisper:not(.sidebar-player-active) .sidebar-mini-player {
      opacity: 0 !important;
      pointer-events: none !important;
      transform: scale(1.025) !important;
    }

    body.vertical-redesign .moonlit-sidebar .sidebar-whisper.sidebar-player-active .sidebar-whisper-idle {
      opacity: 0 !important;
      pointer-events: none !important;
      transform: scale(.96) !important;
    }

    body.vertical-redesign .moonlit-sidebar .sidebar-whisper.sidebar-player-active .sidebar-mini-player {
      opacity: 1 !important;
      pointer-events: auto !important;
      transform: scale(1) !important;
    }

    .sidebar-mini-cover {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      background: #080b12;
    }

    .sidebar-mini-shade {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 24%, rgba(3,5,9,.22) 48%, rgba(3,5,9,.96) 100%);
    }

    .sidebar-mini-meta {
      position: absolute;
      inset: auto 0 0;
      z-index: 2;
      padding: 24px 10px 9px;
    }

    .sidebar-mini-title {
      display: block;
      width: 100%;
      margin-bottom: 6px;
      overflow: hidden;
      color: #f4f1f7;
      font: 600 10px/1.2 "Quicksand", sans-serif;
      text-align: center;
      text-overflow: ellipsis;
      text-shadow: 0 1px 5px #000;
      white-space: nowrap;
    }

    .sidebar-mini-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .sidebar-mini-controls button {
      width: 31px;
      height: 28px;
      padding: 0;
      display: inline-grid;
      place-items: center;
      border: 1px solid rgba(255,255,255,.18);
      border-radius: 9px;
      color: #f5f1f7;
      background: rgba(5,7,12,.64);
      box-shadow: 0 4px 12px rgba(0,0,0,.26);
      font: 600 20px/1 Arial, sans-serif;
      cursor: pointer;
      backdrop-filter: blur(7px);
      transition: transform .16s ease, border-color .16s ease, background .16s ease;
    }

    .sidebar-mini-controls button:hover {
      transform: translateY(-1px);
      border-color: var(--accent-soft);
      background: color-mix(in srgb, var(--accent) 26%, rgba(5,7,12,.72));
    }

    .sidebar-mini-controls button:active { transform: scale(.92); }

    .sidebar-mini-controls .sidebar-mini-toggle {
      width: 38px;
      height: 32px;
      border-color: color-mix(in srgb, var(--accent) 70%, white 18%);
      color: white;
      background: color-mix(in srgb, var(--accent) 42%, rgba(5,7,12,.76));
      font-size: 13px;
    }

    body.low-quality-mode .sidebar-mini-controls button { backdrop-filter: none; }

    @media (min-width: 1200px) {
      .vertical-stage {
        padding-left: calc(28px + var(--open-drawer-width, 0px));
        padding-right: 28px;
        transition: padding-left .3s cubic-bezier(.2,.72,.25,1);
      }

      .vertical-topbar,
      .vertical-hero {
        width: min(clamp(920px, 70vw, 1240px), 100%);
      }

      .vertical-hero {
        min-height: clamp(380px, 27vw, 480px);
        margin-bottom: 34px;
      }

      .hero-copy {
        width: min(760px, 72%);
        min-height: clamp(380px, 27vw, 480px);
        padding: 46px 52px;
      }

      .hero-loader {
        width: min(390px, 100%);
        grid-template-columns: 1fr 42px;
        gap: 9px;
        font-size: 11px;
      }

      .hero-loader div { height: 7px; }

      .hero-copy p {
        margin: 30px 0 18px;
        font-size: clamp(38px, 3vw, 54px);
      }

      .hero-copy > span { font-size: 15px; }
      .hero-arrow { bottom: 12px; font-size: 21px; }

      body.vertical-redesign main.content {
        width: min(clamp(860px, 66vw, 1160px), 100%);
        max-width: 1160px;
      }
    }
  `;
  document.head.appendChild(sidebarPlayerStyles);

  const sidebarWhisper = sidebar.querySelector(".sidebar-whisper");
  const sidebarMiniCover = sidebar.querySelector(".sidebar-mini-cover");
  const sidebarMiniTitle = sidebar.querySelector(".sidebar-mini-title");
  const sidebarMiniPrev = sidebar.querySelector(".sidebar-mini-prev");
  const sidebarMiniToggle = sidebar.querySelector(".sidebar-mini-toggle");
  const sidebarMiniNext = sidebar.querySelector(".sidebar-mini-next");
  const siteAudio = document.getElementById("bg-music");
  const fullPlayerCover = document.getElementById("mini-player-thumb");
  const fullPlayerTitle = document.getElementById("mini-player-title");
  const fullPlayerToggle = document.getElementById("mini-player-playpause");
  const fullPlayerPrev = document.getElementById("prev-music-btn");
  const fullPlayerNext = document.getElementById("next-music-btn");
  let sidebarPlayerActivated = false;

  function handleSidebarPlayerClose() {
    if (!siteAudio || !sidebarWhisper) return;

    if (!siteAudio.paused) {
      sidebarPlayerActivated = true;
      syncSidebarMiniPlayer();
      return;
    }

    sidebarPlayerActivated = false;
    syncSidebarMiniPlayer();
  }

  function syncSidebarMiniPlayer() {
    if (!siteAudio || !sidebarWhisper) return;

    sidebarWhisper.classList.toggle("sidebar-player-active", sidebarPlayerActivated);

    if (fullPlayerCover?.src && sidebarMiniCover.src !== fullPlayerCover.src) {
      sidebarMiniCover.src = fullPlayerCover.src;
    }

    if (fullPlayerTitle?.textContent) {
      sidebarMiniTitle.textContent = fullPlayerTitle.textContent;
    }

    const paused = siteAudio.paused;
    sidebarMiniToggle.textContent = paused ? "▶" : "Ⅱ";
    sidebarMiniToggle.setAttribute("aria-label", paused ? "Play song" : "Pause song");
  }

  siteAudio?.addEventListener("play", () => {
    sidebarPlayerActivated = true;
    syncSidebarMiniPlayer();
  });
  siteAudio?.addEventListener("pause", syncSidebarMiniPlayer);
  siteAudio?.addEventListener("loadedmetadata", syncSidebarMiniPlayer);
  siteAudio?.addEventListener("ended", syncSidebarMiniPlayer);

  if (fullPlayerCover) {
    new MutationObserver(syncSidebarMiniPlayer).observe(fullPlayerCover, {
      attributes: true,
      attributeFilter: ["src"]
    });
  }

  if (fullPlayerTitle) {
    new MutationObserver(syncSidebarMiniPlayer).observe(fullPlayerTitle, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  sidebarMiniPrev?.addEventListener("click", () => fullPlayerPrev?.click());
  sidebarMiniToggle?.addEventListener("click", () => fullPlayerToggle?.click());
  sidebarMiniNext?.addEventListener("click", () => fullPlayerNext?.click());

  document.addEventListener("click", (event) => {
    if (event.target.closest("#mini-player-close, .music-library-close")) {
      handleSidebarPlayerClose();
    }
  });

  const drawerOrder = [];
  const playerDrawer = document.getElementById("mini-player");
  const settingsDrawer = document.getElementById("settings-panel");
  const drawers = [playerDrawer, settingsDrawer].filter(Boolean);

  function isDrawerOpen(drawer) {
    return drawer.classList.contains("show");
  }

  function getSidebarWidth() {
    return window.innerWidth <= 760
      ? 0
      : parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sidebar-width")) || 282;
  }

  function syncDrawerLayout() {
    const openDrawers = drawerOrder.filter(isDrawerOpen);
    drawerOrder.splice(0, drawerOrder.length, ...openDrawers);

    let left = getSidebarWidth();
    let occupiedWidth = 0;
    openDrawers.forEach((drawer, index) => {
      drawer.style.setProperty("--drawer-left", `${left}px`);
      drawer.style.setProperty("--drawer-order", String(index));
      drawer.classList.toggle("drawer-secondary", index > 0);
      const drawerWidth = drawer.getBoundingClientRect().width;
      left += drawerWidth;
      occupiedWidth += drawerWidth;
    });

    const maxStageOffset = Math.max(0, window.innerWidth - getSidebarWidth() - 760);
    const stageOffset = window.innerWidth >= 1200
      ? Math.min(occupiedWidth, maxStageOffset)
      : 0;
    document.documentElement.style.setProperty("--open-drawer-width", `${stageOffset}px`);
  }

  function observeDrawer(drawer) {
    let wasOpen = isDrawerOpen(drawer);

    new MutationObserver(() => {
      const open = isDrawerOpen(drawer);
      if (open && !wasOpen) {
        const existingIndex = drawerOrder.indexOf(drawer);
        if (existingIndex !== -1) drawerOrder.splice(existingIndex, 1);
        drawerOrder.push(drawer);
      }
      wasOpen = open;
      requestAnimationFrame(syncDrawerLayout);
    }).observe(drawer, { attributes: true, attributeFilter: ["class"] });
  }

  drawers.forEach(observeDrawer);

  function prepareDrawerPosition(drawer) {
    if (!drawer || isDrawerOpen(drawer) || window.innerWidth <= 760) return;

    const openDrawers = drawerOrder.filter(isDrawerOpen);
    const left = openDrawers.reduce(
      (position, openDrawer) => position + openDrawer.getBoundingClientRect().width,
      getSidebarWidth()
    );
    drawer.style.setProperty("--drawer-left", `${left}px`);
    drawer.style.setProperty("--drawer-order", String(openDrawers.length));
  }

  musicButton?.addEventListener("click", () => prepareDrawerPosition(playerDrawer), true);
  settingsButton?.addEventListener("click", () => prepareDrawerPosition(settingsDrawer), true);

  if (window.ResizeObserver) {
    const drawerResizeObserver = new ResizeObserver(() => requestAnimationFrame(syncDrawerLayout));
    drawers.forEach((drawer) => drawerResizeObserver.observe(drawer));
  }

  const mobileToggle = document.createElement("button");
  mobileToggle.className = "sidebar-mobile-toggle";
  mobileToggle.type = "button";
  mobileToggle.setAttribute("aria-label", "Open sidebar");
  mobileToggle.setAttribute("aria-expanded", "false");
  mobileToggle.innerHTML = "<span></span><span></span><span></span>";

  const mobileBackdrop = document.createElement("div");
  mobileBackdrop.className = "sidebar-mobile-backdrop";

  const stage = document.createElement("div");
  stage.className = "vertical-stage";

  const topbar = document.createElement("div");
  topbar.className = "vertical-topbar";
  topbar.innerHTML = `<span>☾</span><strong>bio.site</strong><small>/ personal dashboard</small>`;

  const hero = document.createElement("section");
  hero.className = "vertical-hero";
  hero.id = "moonlit-home";
  hero.innerHTML = `
    <div class="hero-media"></div>
    <div class="hero-shade"></div>
    <div class="hero-copy">
      <div class="hero-loader">
        <strong>ϟ Loading soul.exe</strong>
        <div><i></i></div>
        <small>100%</small>
      </div>
      <p>The moon doesn’t compete,<br>yet it outshines the night.</p>
      <span>thanks for stopping by.</span>
    </div>
    <span class="hero-arrow" aria-hidden="true">⌄</span>`;

  const heroMedia = hero.querySelector(".hero-media");
  if (bgParallax) heroMedia.appendChild(bgParallax);
  if (bgVideo) heroMedia.appendChild(bgVideo);

  stage.append(topbar, hero, content);
  body.prepend(mobileBackdrop);
  body.prepend(mobileToggle);
  body.prepend(sidebar);
  body.appendChild(stage);
  requestAnimationFrame(syncDrawerLayout);

  if (banner) banner.classList.add("original-banner-empty");

  function closeSidebar() {
    sidebar.classList.remove("is-open");
    mobileBackdrop.classList.remove("is-open");
    mobileToggle.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileToggle.setAttribute("aria-label", "Open sidebar");
  }

  function toggleSidebar() {
    const opening = !sidebar.classList.contains("is-open");
    sidebar.classList.toggle("is-open", opening);
    mobileBackdrop.classList.toggle("is-open", opening);
    mobileToggle.classList.toggle("is-open", opening);
    mobileToggle.setAttribute("aria-expanded", String(opening));
    mobileToggle.setAttribute("aria-label", opening ? "Close sidebar" : "Open sidebar");
  }

  mobileToggle.addEventListener("click", toggleSidebar);
  mobileBackdrop.addEventListener("click", closeSidebar);

  const nav = sidebar.querySelector(".sidebar-nav");
  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    nav.querySelectorAll("a").forEach((item) => item.classList.toggle("active", item === link));
    closeSidebar();
  });

  sidebar.querySelector(".sidebar-terminal").addEventListener("click", () => {
    document.getElementById("open-terminal-btn")?.click();
    closeSidebar();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeSidebar();
    requestAnimationFrame(syncDrawerLayout);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (document.getElementById("mini-player")?.classList.contains("show")) {
      document.getElementById("mini-player-close")?.click();
    }
    if (document.getElementById("settings-panel")?.classList.contains("show")) {
      document.getElementById("settings-close-btn")?.click();
    }
  });
})();
