document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-terminal-btn");
  const modal = document.getElementById("cmd-terminal-modal");
  const closeBtn = document.getElementById("cmd-close-btn");
  const backdrop = document.querySelector(".cmd-terminal-backdrop");
  const screen = document.getElementById("cmd-screen");
  const output = document.getElementById("cmd-output");
  const form = document.getElementById("cmd-form");
  const input = document.getElementById("cmd-input");

  const cmdWindow = document.querySelector(".cmd-window");
  const titlebar = document.querySelector(".cmd-titlebar");
  const resizeHandle = document.getElementById("cmd-resize-handle");

  const minimizeBtn = document.getElementById("cmd-minimize-btn");
  const maximizeBtn = document.getElementById("cmd-maximize-btn");
  const minimizedIcon = document.getElementById("cmd-minimized-icon");

  const moonbiteModal = document.getElementById("moonbite-secret-modal");

  if (
    !openBtn ||
    !modal ||
    !closeBtn ||
    !screen ||
    !output ||
    !form ||
    !input ||
    !cmdWindow ||
    !titlebar ||
    !minimizeBtn ||
    !maximizeBtn ||
    !minimizedIcon ||
    !resizeHandle
  ) return;

  const username = "Doldie";
  const windowsPromptText = `C:\\Users\\${username}>`;
  const mintPromptText = "doldie@linuxmint:~$";

  const promptEl = document.getElementById("cmd-prompt");
  const iconEl = document.querySelector(".cmd-icon");
  const titleEl = document.querySelector(".cmd-title-left span:not(.cmd-icon)");
  const minimizedSymbol = document.querySelector(".cmd-minimized-icon-symbol");
  const minimizedText = document.querySelector(".cmd-minimized-icon-text");

  function isLimeTerminal() {
    return document.body.dataset.flavor === "lime";
  }

  function getPromptText() {
    return isLimeTerminal() ? mintPromptText : windowsPromptText;
  }

  function syncTerminalFlavorText() {
    const isLime = isLimeTerminal();

    if (promptEl) promptEl.textContent = isLime ? mintPromptText : windowsPromptText;
    if (iconEl) iconEl.textContent = isLime ? "" : "C:\\";
    if (titleEl) titleEl.textContent = isLime ? "doldie@linuxmint: ~" : "Command Prompt";
    if (minimizedSymbol) minimizedSymbol.textContent = isLime ? "▣" : "C:\\";
    if (minimizedText) minimizedText.textContent = isLime ? "Terminal" : "Command Prompt";
  }

  function bootMintTerminal() {
    output.innerHTML = `
      <div class="mint-text-output">
        <div class="mint-user">doldie@linuxmint</div>
        <div class="mint-separator">----------------</div>

        <div><span class="mint-key">OS:</span> Linux Mint 20.1 x86_64</div>
        <div><span class="mint-key">Host:</span> Bio Site</div>
        <div><span class="mint-key">Kernel:</span> 5.8.0-flavor</div>
        <div><span class="mint-key">Uptime:</span> a long time</div>
        <div><span class="mint-key">Packages:</span> flavors.css, terminal.js</div>
        <div><span class="mint-key">Shell:</span> bash 5.0.17</div>
        <div><span class="mint-key">Resolution:</span> 1920x1080</div>
        <div><span class="mint-key">DE:</span> Cinnamon</div>
        <div><span class="mint-key">WM:</span> Muffin</div>
        <div><span class="mint-key">Theme:</span> Mint-Y-Dark</div>
        <div><span class="mint-key">Icons:</span> Mint-Y</div>
        <div><span class="mint-key">Terminal:</span> gnome-terminal</div>
        <div><span class="mint-key">CPU:</span> Doldie inside</div>
        <div><span class="mint-key">Memory:</span> 4877MiB / 16014MiB</div>

        <div class="mint-color-row">
          <span class="mint-color mint-c1"></span>
          <span class="mint-color mint-c2"></span>
          <span class="mint-color mint-c3"></span>
          <span class="mint-color mint-c4"></span>
          <span class="mint-color mint-c5"></span>
          <span class="mint-color mint-c6"></span>
          <span class="mint-color mint-c7"></span>
          <span class="mint-color mint-c8"></span>
        </div>
      </div>
    `;
    screen.scrollTop = screen.scrollHeight;
  }

  let terminalBooted = false;
  let isTerminalMinimized = false;
  let isTerminalMaximized = false;
  let savedWindowState = null;

  const publicCommands = {
    help: [
      "Available commands:",
      "",
      "help        Shows this command list.",
      "about       Shows user information.",
      "status      Shows current website status.",
      "time        Shows current time.",
      "date        Shows current date.",
      "clear       Clears the terminal.",
      "cls         Clears the terminal.",
      "exit        Closes the terminal."
    ],

    about: [
      "What is the point of this command anyways. Find about me in the website duh"
    ],

    status: () => {
      const discordStatus = document.getElementById("discord-status");
      const statusClass = discordStatus
        ? [...discordStatus.classList].find(cls =>
            ["online", "idle", "dnd", "offline"].includes(cls)
          )
        : "unknown";

      return [
        "Website status:",
        `Discord presence: ${statusClass || "unknown"}`,
        `Theme: ${document.body.classList.contains("light-theme") ? "light" : "dark"}`,
        `Low quality mode: ${document.body.classList.contains("low-quality-mode") ? "on" : "off"}`
      ];
    },

    time: () => [new Date().toLocaleTimeString()],

    date: () => [new Date().toLocaleDateString()],

    exit: () => {
      closeTerminal();
      return [];
    },

    clear: () => {
      clearTerminal();
      return [];
    },

    cls: () => {
      clearTerminal();
      return [];
    }
  };

  const secretCommands = {
    moonbite: () => {
      closeTerminal();
      setTimeout(openMoonbiteSecretFromTerminal, 120);
      return [];
    },

    loona: () => {
      closeTerminal();

      setTimeout(() => {
        alert("LOONA file accessed.");
      }, 120);

      return [];
    },

    zr1: () => {
      closeTerminal();

      setTimeout(() => {
        alert("The ZR1 is just faster.");
      }, 120);

      return [];
    }
  };

  function addLine(text = "", className = "") {
    const line = document.createElement("div");
    line.className = `cmd-line ${className}`.trim();
    line.textContent = text;
    output.appendChild(line);
    screen.scrollTop = screen.scrollHeight;
  }

  function addLines(lines, className = "") {
    lines.forEach(line => addLine(line, className));
  }

  function clearTerminal() {
    output.innerHTML = "";
  }

  function bootTerminal() {
    clearTerminal();
    syncTerminalFlavorText();

    if (isLimeTerminal()) {
      bootMintTerminal();
      return;
    }

    addLine("Microsoft Windows [Version 10.0.19045.4046]");
    addLine("(c) Microsoft Corporation. All rights reserved.");
    addLine("");
    addLine("Type \"help\" for a list of commands.");
    addLine("");
  }

  function centerTerminalWindow() {
    const width = Math.min(820, window.innerWidth - 20);
    const height = Math.min(520, window.innerHeight - 20);

    cmdWindow.style.width = `${width}px`;
    cmdWindow.style.height = `${height}px`;
    cmdWindow.style.left = `${Math.max(10, (window.innerWidth - width) / 2)}px`;
    cmdWindow.style.top = `${Math.max(10, (window.innerHeight - height) / 2)}px`;
  }

  function openTerminal() {
  syncTerminalFlavorText();

  if (isTerminalMinimized) {
    restoreMinimizedTerminal();
    return;
  }

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (!terminalBooted) {
    centerTerminalWindow();
    bootTerminal();
    terminalBooted = true;
  }

  setTimeout(() => {
    input.focus();
  }, 30);
}

function closeTerminal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  minimizedIcon.classList.add("hidden");

  document.body.style.overflow = "";

  isTerminalMinimized = false;
  resetFullscreenState();

  terminalBooted = false;
  clearTerminal();
}

function getWindowState() {
  const rect = cmdWindow.getBoundingClientRect();

  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height
  };
}

function applyWindowState(state) {
  if (!state) return;

  cmdWindow.style.left = `${state.left}px`;
  cmdWindow.style.top = `${state.top}px`;
  cmdWindow.style.width = `${state.width}px`;
  cmdWindow.style.height = `${state.height}px`;
}

function resetFullscreenState() {
  isTerminalMaximized = false;
  savedWindowState = null;

  cmdWindow.classList.remove("is-maximized");
  maximizeBtn.textContent = "□";
  maximizeBtn.setAttribute("aria-label", "Maximize");
}

function enterFullscreenTerminal() {
  if (isTerminalMaximized) return;

  savedWindowState = getWindowState();
  isTerminalMaximized = true;

  cmdWindow.classList.add("is-maximized");
  maximizeBtn.textContent = "❐";
  maximizeBtn.setAttribute("aria-label", "Restore");
}

function exitFullscreenTerminal() {
  if (!isTerminalMaximized) return;

  cmdWindow.classList.remove("is-maximized");

  applyWindowState(savedWindowState);

  isTerminalMaximized = false;
  savedWindowState = null;

  maximizeBtn.textContent = "□";
  maximizeBtn.setAttribute("aria-label", "Maximize");

  clampTerminalToViewport();
}

function toggleFullscreenTerminal() {
  if (isTerminalMaximized) {
    exitFullscreenTerminal();
  } else {
    enterFullscreenTerminal();
  }

  setTimeout(() => {
    input.focus();
  }, 30);
}

function minimizeTerminal() {
  if (modal.classList.contains("hidden")) return;

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");

  minimizedIcon.classList.remove("hidden");

  document.body.style.overflow = "";
  isTerminalMinimized = true;
}

function restoreMinimizedTerminal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  minimizedIcon.classList.add("hidden");

  document.body.style.overflow = "hidden";
  isTerminalMinimized = false;

  setTimeout(() => {
    input.focus();
    screen.scrollTop = screen.scrollHeight;
  }, 30);
}

  function openMoonbiteSecretFromTerminal() {
    if (!moonbiteModal) return;

    moonbiteModal.classList.remove("hidden");

    requestAnimationFrame(() => {
      moonbiteModal.classList.add("show");
    });

    document.body.style.overflow = "hidden";
  }

  function closeMoonbiteSecretFromTerminal() {
    if (!moonbiteModal) return;

    moonbiteModal.classList.remove("show");

    setTimeout(() => {
      moonbiteModal.classList.add("hidden");
      document.body.style.overflow = "";
    }, 350);
  }

  function runCommand(rawCommand) {
    const command = rawCommand.trim();
    const normalized = command.toLowerCase();

    addLine(`${getPromptText()}${command}`, "command");

    if (!normalized) {
      addLine("");
      return;
    }

    const publicResponse = publicCommands[normalized];

    if (publicResponse) {
      const result = typeof publicResponse === "function"
        ? publicResponse()
        : publicResponse;

      if (Array.isArray(result) && result.length) {
        addLines(result, "success");
        addLine("");
      }

      return;
    }

    const secretResponse = secretCommands[normalized];

    if (secretResponse) {
      secretResponse();
      return;
    }

    addLine(`'${command}' is not recognized as an internal or external command,`, "error");
    addLine("operable program or batch file.", "error");
    addLine("");
  }

  let isDraggingTerminal = false;
  let isResizingTerminal = false;

  let dragOffsetX = 0;
  let dragOffsetY = 0;

  let resizeStartX = 0;
  let resizeStartY = 0;
  let resizeStartWidth = 0;
  let resizeStartHeight = 0;

  function clampTerminalToViewport() {
    const padding = 6;
    const rect = cmdWindow.getBoundingClientRect();

    let left = rect.left;
    let top = rect.top;

    const maxLeft = window.innerWidth - rect.width - padding;
    const maxTop = window.innerHeight - rect.height - padding;

    left = Math.max(padding, Math.min(left, maxLeft));
    top = Math.max(padding, Math.min(top, maxTop));

    cmdWindow.style.left = `${left}px`;
    cmdWindow.style.top = `${top}px`;
  }

  function startTerminalDrag(e) {
    if (e.target.closest(".cmd-window-controls")) return;

    const rect = cmdWindow.getBoundingClientRect();

    isDraggingTerminal = true;
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;

    titlebar.style.cursor = "grabbing";

    e.preventDefault();
  }

  function moveTerminalDrag(e) {
    if (!isDraggingTerminal) return;

    const rect = cmdWindow.getBoundingClientRect();
    const padding = 6;

    let left = e.clientX - dragOffsetX;
    let top = e.clientY - dragOffsetY;

    left = Math.max(padding, Math.min(left, window.innerWidth - rect.width - padding));
    top = Math.max(padding, Math.min(top, window.innerHeight - rect.height - padding));

    cmdWindow.style.left = `${left}px`;
    cmdWindow.style.top = `${top}px`;

    e.preventDefault();
  }

  function stopTerminalDrag() {
    if (!isDraggingTerminal) return;

    isDraggingTerminal = false;
    titlebar.style.cursor = "move";
  }

  function startTerminalResize(e) {
    const rect = cmdWindow.getBoundingClientRect();

    isResizingTerminal = true;
    resizeStartX = e.clientX;
    resizeStartY = e.clientY;
    resizeStartWidth = rect.width;
    resizeStartHeight = rect.height;

    e.preventDefault();
  }

  function moveTerminalResize(e) {
    if (!isResizingTerminal) return;

    const rect = cmdWindow.getBoundingClientRect();

    const minWidth = window.innerWidth <= 560 ? 260 : 360;
    const minHeight = 220;

    const maxWidth = window.innerWidth - rect.left - 6;
    const maxHeight = window.innerHeight - rect.top - 6;

    let newWidth = resizeStartWidth + (e.clientX - resizeStartX);
    let newHeight = resizeStartHeight + (e.clientY - resizeStartY);

    newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
    newHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));

    cmdWindow.style.width = `${newWidth}px`;
    cmdWindow.style.height = `${newHeight}px`;

    e.preventDefault();
  }

  function stopTerminalResize() {
    isResizingTerminal = false;
  }

  openBtn.addEventListener("click", openTerminal);
  closeBtn.addEventListener("click", closeTerminal);
  backdrop?.addEventListener("click", closeTerminal);

  titlebar.addEventListener("pointerdown", startTerminalDrag);
  resizeHandle.addEventListener("pointerdown", startTerminalResize);

  document.addEventListener("pointermove", (e) => {
    moveTerminalDrag(e);
    moveTerminalResize(e);
  });

  document.addEventListener("pointerup", () => {
    stopTerminalDrag();
    stopTerminalResize();
  });

  window.addEventListener("resize", () => {
    if (!isTerminalMaximized) {
      clampTerminalToViewport();
    }
  });

  screen.addEventListener("click", () => {
    input.focus();
  });

  screen.addEventListener("touchstart", () => {
    input.focus();
  }, { passive: true });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const command = input.value;
    input.value = "";

    runCommand(command);
  });

  minimizeBtn.addEventListener("click", minimizeTerminal);
  maximizeBtn.addEventListener("click", toggleFullscreenTerminal);
  minimizedIcon.addEventListener("click", restoreMinimizedTerminal);

  document.addEventListener("site-flavor-changed", () => {
    syncTerminalFlavorText();

    if (!modal.classList.contains("hidden")) {
      terminalBooted = false;
      bootTerminal();
      terminalBooted = true;
    }
  });

  titlebar.addEventListener("dblclick", (e) => {
    if (e.target.closest(".cmd-window-controls")) return;
    toggleFullscreenTerminal();
  });

  moonbiteModal?.addEventListener("click", closeMoonbiteSecretFromTerminal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (moonbiteModal?.classList.contains("show")) {
        closeMoonbiteSecretFromTerminal();
        return;
      }

      if (!modal.classList.contains("hidden")) {
        closeTerminal();
      }
    }
  });
  syncTerminalFlavorText();
});
