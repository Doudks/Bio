const DISCORD_ID = "634505467183235085";

async function fetchDiscordProfile() {
  const statusEl = document.getElementById("discord-status");
  const usernameEl = document.getElementById("discord-username");
  const avatarEl = document.getElementById("avatar-img");

  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
    const json = await res.json();

    console.log("Lanyard:", json);

    if (!json.success || !json.data) {
      if (statusEl) {
        statusEl.className = "discord-status-indicator offline";
      }
      return;
    }

    const data = json.data;
    const user = data.discord_user;

    if (avatarEl && user?.avatar) {
      const ext = user.avatar.startsWith("a_") ? "gif" : "png";
      avatarEl.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=256`;
    }

    if (usernameEl) {
      usernameEl.textContent = user?.global_name || user?.username || "Discord User";
    }

    if (statusEl) {
      const validStatuses = ["online", "idle", "dnd", "offline"];
      const currentStatus = validStatuses.includes(data.discord_status)
        ? data.discord_status
        : "offline";

      statusEl.className = `discord-status-indicator ${currentStatus}`;
    }
  } catch (err) {
    console.error("Erro ao buscar Lanyard:", err);

    if (statusEl) {
      statusEl.className = "discord-status-indicator offline";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchDiscordProfile();
  setInterval(fetchDiscordProfile, 15000);
});
