const music = document.getElementById("bg-music");

const openPlayerBtn = document.getElementById("music-btn");
const prevMusicBtn = document.getElementById("prev-music-btn");
const nextMusicBtn = document.getElementById("next-music-btn");

const miniPlayer = document.getElementById("mini-player");
const miniPlayerClose = document.getElementById("mini-player-close");
const miniPlayerThumb = document.getElementById("mini-player-thumb");
const miniPlayerTitle = document.getElementById("mini-player-title");
const miniPlayerLink = document.getElementById("mini-player-link");
const miniPlayerVolume = document.getElementById("mini-player-volume");
const miniPlayerPlayPause = document.getElementById("mini-player-playpause");
const miniPlayerProgress = document.getElementById("mini-player-progress");
const miniPlayerCurrent = document.getElementById("mini-player-current");
const miniPlayerDuration = document.getElementById("mini-player-duration");
const miniPlayerVolumeBtn = document.getElementById("mini-player-volume-btn");
const miniPlayerVolumePopup = document.getElementById("mini-player-volume-popup");
const miniPlayerBg = document.querySelector(".mini-player-bg");
const miniPlayerBgNext = document.querySelector(".mini-player-bg-next");

const musicList = [
  {
    name: "good for you x one of the girls (lyrics) (tiktok mashup) | Selena Gomez x The Weeknd",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/good%20for%20you%20x%20one%20of%20the%20girls%20(lyrics)%20(tiktok%20mashup)%20Selena%20Gomez%20x%20The%20Weeknd.mp3",
    thumbnail: "https://i.ytimg.com/vi/R1gDHm4LS4Y/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCGrdWWc-elibZs8YRwGXfI73KZGQ",
    youtube: "https://www.youtube.com/watch?v=R1gDHm4LS4Y&list=RDR1gDHm4LS4Y&start_radio=1",
    background: "https://i.imgur.com/YEhz3qz.png"
  },
  {
    name: "Noah Cyrus - Again (Official Music Video) ft. XXXTENTACION",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/AGAIN.mp3",
    thumbnail: "https://i.imgur.com/3eVvYqD.png",
    youtube: "https://www.youtube.com/watch?v=G_SjnHwxWMU",
    background: "https://i.ytimg.com/vi/G_SjnHwxWMU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCY9nh3vTVCku318725OgRIz7Ns8A"
  },
  {
    name: "Matt Maltese - As the World Caves In [Official Audio]",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/As%20the%20world%20caves%20in.mp3",
    thumbnail: "https://i.ytimg.com/vi/yS2KyK3pqj4/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGH8gEygXMA8=&rs=AOn4CLBdwmoa96RZrdtIJHKRtsLYZKwRbA",
    youtube: "https://www.youtube.com/watch?v=yS2KyK3pqj4",
    background: "https://i.imgur.com/Sxx7E7j.png"
  },
  {
    name: "Jace June - Come Home (Sped Up)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Come%20home.mp3",
    thumbnail: "https://i.ytimg.com/vi/h48jMCUM-Zk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBMb2gCV3OpxBwkuD786hwOzMpjJQ",
    youtube: "https://www.youtube.com/watch?v=h48jMCUM-Zk",
    background: "https://i.imgur.com/dc723lR.png"
  },
  {
    name: "Conan Gray - Yours (Official Lyric Video)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Conan%20Gray%20Yours.mp3",
    thumbnail: "https://i.ytimg.com/vi/W5vz8kMxx4A/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBCrDwaR3PuCRl_twn1XGS1w8zcAg",
    youtube: "https://www.youtube.com/watch?v=W5vz8kMxx4A",
    background: "https://i.imgur.com/hndwwqX.png"
  },
  {
    name: "Basement - 'Covet' (Official Visualizer)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Covet.mp3",
    thumbnail: "https://i.ytimg.com/vi/GMqlmMDJxJQ/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGH8gRSgTMA8=&rs=AOn4CLAwNAM44n4Yg7JLEMen9cLtApc7Tg",
    youtube: "https://www.youtube.com/watch?v=GMqlmMDJxJQ",
    background: "https://i.imgur.com/xNdZ3CA.jpeg"
  },
  {
    name: "Exit Music (For A Film)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Exit%20music.mp3",
    thumbnail: "https://i.ytimg.com/vi/Bf01riuiJWA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCv28MbVywr3pjg201Vxcu1czVHJA",
    youtube: "https://www.youtube.com/watch?v=Bf01riuiJWA",
    background: "https://i.imgur.com/ep9OwHL.png"
  },
  {
    name: "Aloboi - Give Me More (Just Rawer)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Give%20me%20More.mp3",
    thumbnail: "https://i.ytimg.com/vi/aKOB-vT45HM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBFDgZ4gU5IQ8X5ouIp43TeGicHkg",
    youtube: "https://www.youtube.com/watch?v=aKOB-vT45HM",
    background: "https://i.imgur.com/sM6DJaP.png"
  },
  {
    name: "Michael Jackson - Heaven Can Wait (Official Audio)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Heaven%20can%20wait.mp3",
    thumbnail: "https://i.ytimg.com/vi/TDVlDUAIz5k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDLJpivyrbz55DZ69rYlH-I7gArgA",
    youtube: "https://www.youtube.com/watch?v=TDVlDUAIz5k",
    background: "https://i.imgur.com/spOsci1.png"
  },
  {
    name: "Cowboy Malfoy - How I'd Kill (Official Video)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/How%20id%20kill.mp3",
    thumbnail: "https://i.ytimg.com/vi/_4eP9__5AGs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKtAJe0zoPGMeYiDGQbcOanLj10Q",
    youtube: "https://www.youtube.com/watch?v=_4eP9__5AGs",
    background: "https://i.imgur.com/6gRGtLI.png"
  },
  {
    name: "I love you, love you too",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/I%20love%20you,%20love%20you%20too.mp3",
    thumbnail: "https://i.ytimg.com/vi/cnlpwbkKrpM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB9QN25pRIIdo50r56H20u2tTAOqA",
    youtube: "https://www.youtube.com/watch?v=cnlpwbkKrpM",
    background: "https://i.ytimg.com/vi/cnlpwbkKrpM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB9QN25pRIIdo50r56H20u2tTAOqA"
  },
  {
    name: "Like Him",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Like%20him.mp3",
    thumbnail: "https://i.ytimg.com/vi/Z0CQf3JDKAY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDMW_BRY-ZhKwiVEsdnGgSFqMXfCg",
    youtube: "https://www.youtube.com/watch?v=Z0CQf3JDKAY",
    background: "https://i.imgur.com/onhsicR.png"
  },
  {
    name: "John Michael Howell - Magic [OFFICIAL LYRIC VIDEO]",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/MAGIC.mp3",
    thumbnail: "https://i.ytimg.com/vi/h4s4VLU2RTs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAI_2KtR4Y-ruF1lst6FkjN7fDIXQ",
    youtube: "https://www.youtube.com/watch?v=h4s4VLU2RTs",
    background: "https://i.ytimg.com/vi/h4s4VLU2RTs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAI_2KtR4Y-ruF1lst6FkjN7fDIXQ"
  },
  {
    name: "Melanie Martinez - Cake (Official Audio)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Melanie%20Martinez%20Crybaby.mp3",
    thumbnail: "https://i.ytimg.com/vi/0s77yLAG8a8/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEUgUihyMA8=&rs=AOn4CLAwkiFHGCyCbFHwWw09B2EGyNqVJw",
    youtube: "https://www.youtube.com/watch?v=0s77yLAG8a8",
    background: "https://i.imgur.com/1U4uplT.png"
  },
  {
    name: "Mitski - My Love Mine All Mine (Official Lyric Video)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Mitski%20-%20My%20Love%20Mine%20All%20Mine%20(Official%20Lyric%20Video).mp3",
    thumbnail: "https://i.ytimg.com/vi/CwGbMYLjIpQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCLabXQ6l4rtkIvkUMsLRZ_pOjPkw",
    youtube: "https://www.youtube.com/watch?v=CwGbMYLjIpQ",
    background: "https://i.imgur.com/ZZXHTUx.png"
  },
  {
    name: "Jim Croce - Time In A Bottle",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Time%20in%20a%20Bottle.mp3",
    thumbnail: "https://i.ytimg.com/vi/Q29sOLG8xGE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDODtNgQ5lbqZzQY1Gu7pV3lRCV5w",
    youtube: "https://www.youtube.com/watch?v=Q29sOLG8xGE",
    background: "https://i.imgur.com/WfMgB6p.png"
  },
  {
    name: "Suki Waterhouse - Good Looking [OFFICIAL LYRIC VIDEO]",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Suki%20Waterhouse%20-%20Good%20Looking%20(Official%20Video).mp3",
    thumbnail: "https://i.ytimg.com/vi/rexeYSFj6Fg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCrTp_tUnNY3QVu5idR9SRhudV5HA",
    youtube: "https://www.youtube.com/watch?v=rexeYSFj6Fg",
    background: "https://i.imgur.com/9pgN0R3.png"
  },
  {
    name: "Lana Del Rey - Young and Beautiful",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Lana%20Del%20Rey%20-%20Young%20and%20Beautiful.mp3",
    thumbnail: "https://i.ytimg.com/vi/o_1aF54DO60/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf3MubMt6_sMkrlICm62v9Hj7bng",
    youtube: "https://www.youtube.com/watch?v=o_1aF54DO60",
    background: "https://i.imgur.com/dhuaP4R.png"
  },
  {
    name: "Alessia Cara - Here",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Alessia%20Cara%20-%20Here.mp3",
    thumbnail: "https://i.ytimg.com/vi/UKp2CrfmVfw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBpw_XsAq1KIuXa0i6dUjUA498hbg",
    youtube: "https://www.youtube.com/watch?v=UKp2CrfmVfw",
    background: "https://i.imgur.com/lPc0CiA.png"
  },
  {
    name: "Kikuo - Love me Love me Love me (Aishite, Aishite, Aishite)",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Kikuo%20-%20%E6%84%9B%E3%81%97%E3%81%A6%E6%84%9B%E3%81%97%E3%81%A6%E6%84%9B%E3%81%97%E3%81%A6.mp3",
    thumbnail: "https://i.imgur.com/7WEBrOS.png",
    youtube: "https://www.youtube.com/watch?v=NTrm_idbhUk",
    background: "https://i.imgur.com/ixlb5YJ.png"
  },
  {
    name: "Best Junkie You Adore",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/junkie.mp3",
    thumbnail: "https://i.imgur.com/RDmjyIc.png",
    youtube: "https://www.youtube.com/watch?v=t5pi_Hy7V54",
    background: "https://i.imgur.com/HtN2Bmc.png"
  },
  {
    name: "Glass Animals - The Other Side Of Paradise",
    src: "https://github.com/Doudks/test/raw/refs/heads/main/Workingsongs/Side%20of%20Paradise.mp3",
    thumbnail: "https://i.imgur.com/VGQEFYI.jpeg",
    youtube: "https://www.youtube.com/watch?v=cpJ5JIscnLs",
    background: "https://i.imgur.com/DyJ3zOL.jpeg"
  },
  
];

/* {
    name: "placeholder",
    src: "placeholder",
    thumbnail: "placeholder",
    youtube: "placeholder",
    background: "placeholder" 
  } */
  
let currentMusicIndex = 0;
let playerOpened = false;

if (
  music &&
  openPlayerBtn &&
  prevMusicBtn &&
  nextMusicBtn &&
  miniPlayer &&
  miniPlayerVolume &&
  miniPlayerClose &&
  miniPlayerThumb &&
  miniPlayerTitle &&
  miniPlayerLink &&
  miniPlayerPlayPause &&
  miniPlayerProgress &&
  miniPlayerCurrent &&
  miniPlayerVolume &&
  miniPlayerVolumeBtn &&
  miniPlayerBg &&
miniPlayerBgNext &&
  miniPlayerVolumePopup &&
  miniPlayerDuration
) {
  music.volume = 0.16;
  
  const preloadedTracks = new Map();
let fullPlaylistPreloaded = false;
let fullPlaylistPreloading = false;
let playerImagesPreloaded = false;

async function preloadTrack(index) {
  const track = musicList[index];
  if (!track || preloadedTracks.has(track.src)) return;

  try {
    const response = await fetch(track.src);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    preloadedTracks.set(track.src, blobUrl);
  } catch (err) {
    console.error("Erro ao preloadar faixa:", track.name, err);
  }
}

async function preloadAllTracks() {
  if (fullPlaylistPreloaded || fullPlaylistPreloading) return;

  fullPlaylistPreloading = true;

  try {
    await Promise.all(
      musicList.map((_, index) => preloadTrack(index))
    );

    fullPlaylistPreloaded = true;
    console.log("Todas as músicas foram preloadadas.");
  } catch (err) {
    console.error("Erro no preload completo da playlist:", err);
  } finally {
    fullPlaylistPreloading = false;
  }
}


function preloadPlayerTracks() {
  preloadTrack(currentMusicIndex);
  preloadTrack((currentMusicIndex + 1) % musicList.length);
  preloadTrack((currentMusicIndex + 2) % musicList.length);
}
  
miniPlayerVolume.value = music.volume * 100;

miniPlayerVolume.addEventListener("input", () => {
  music.volume = miniPlayerVolume.value / 100;
  updateVolumeIcon();
});

miniPlayerVolumeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  miniPlayerVolumePopup.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  const clickedInsideVolume =
    miniPlayerVolumePopup.contains(e.target) ||
    miniPlayerVolumeBtn.contains(e.target);

  if (!clickedInsideVolume) {
    miniPlayerVolumePopup.classList.remove("show");
  }
});

function updateVolumeIcon() {
  const vol = music.volume;

  if (vol === 0) {
    miniPlayerVolumeBtn.textContent = "🔇";
  } else if (vol <= 0.5) {
    miniPlayerVolumeBtn.textContent = "🔉";
  } else {
    miniPlayerVolumeBtn.textContent = "🔊";
  }
}

function preloadPlayerImages() {
  if (playerImagesPreloaded) return;

  playerImagesPreloaded = true;

  musicList.forEach(track => {
    if (track.thumbnail) {
      const thumbImg = new Image();
      thumbImg.src = track.thumbnail;
    }

    if (track.background) {
      const bgImg = new Image();
      bgImg.src = track.background;
    }
  });
}

  function formatTime(seconds) {
    if (!isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }
  
  function setupTitleMarquee() {
  const titleWrap = document.querySelector(".mini-player-title-wrap");
  if (!titleWrap || !miniPlayerTitle) return;

  miniPlayerTitle.classList.remove("is-overflowing");
  miniPlayerTitle.style.removeProperty("--marquee-distance");
  miniPlayerTitle.style.removeProperty("--marquee-duration");
  miniPlayerTitle.style.transform = "translateX(0)";

  requestAnimationFrame(() => {
    const wrapWidth = titleWrap.clientWidth;
    const textWidth = miniPlayerTitle.scrollWidth;

    if (textWidth > wrapWidth) {
      const distance = textWidth - wrapWidth + 24;
      const duration = Math.max(6, distance / 35);

      miniPlayerTitle.classList.add("is-overflowing");
      miniPlayerTitle.style.setProperty("--marquee-distance", `${distance}px`);
      miniPlayerTitle.style.setProperty("--marquee-duration", `${duration}s`);
    }
  });
}

function updateTrackUI() {
  const track = musicList[currentMusicIndex];

  const nextBg = track.background || track.thumbnail || "";
  const currentBg = miniPlayerBg.dataset.currentBg || "";

  if (!currentBg) {
    miniPlayerBg.style.backgroundImage = nextBg ? `url("${nextBg}")` : "none";
    miniPlayerBg.dataset.currentBg = nextBg;
  } else if (currentBg !== nextBg) {
    miniPlayerBgNext.style.transition = "none";
    miniPlayerBgNext.style.opacity = "0";
    miniPlayerBgNext.style.backgroundImage = nextBg ? `url("${nextBg}")` : "none";

    miniPlayerBgNext.offsetHeight;

    miniPlayerBgNext.style.transition = "opacity 0.35s linear";
    miniPlayerBgNext.style.opacity = "1";

    const handleFade = (e) => {
      if (e.propertyName !== "opacity") return;

      miniPlayerBg.style.backgroundImage = nextBg ? `url("${nextBg}")` : "none";
      miniPlayerBg.dataset.currentBg = nextBg;

      miniPlayerBgNext.style.transition = "none";
      miniPlayerBgNext.style.opacity = "0";

      miniPlayerBgNext.removeEventListener("transitionend", handleFade);
    };

    miniPlayerBgNext.addEventListener("transitionend", handleFade);
  }

  miniPlayerTitle.textContent = track.name;
  miniPlayerThumb.src = track.thumbnail;
  miniPlayerLink.href = track.youtube;

  setupTitleMarquee();

  if (music.paused) {
    miniPlayerPlayPause.textContent = "play";
    miniPlayerPlayPause.classList.remove("playing");
  } else {
    miniPlayerPlayPause.textContent = "pause";
    miniPlayerPlayPause.classList.add("playing");
  }
}

  function loadMusic(index) {
  currentMusicIndex = index;

  const track = musicList[currentMusicIndex];
  const preloadedUrl = preloadedTracks.get(track.src);

  music.src = preloadedUrl || track.src;
  music.load();
  updateTrackUI();
}

  async function playCurrentMusic() {
    try {
      await music.play();
      updateTrackUI();
    } catch (err) {
      console.error("Erro ao tocar música:", err);
    }
  }

  function pauseCurrentMusic() {
    music.pause();
    updateTrackUI();
  }
  
function openMiniPlayer() {
  miniPlayer.classList.add("show");
  playerOpened = true;
  updateTrackUI();
  preloadPlayerImages();
  preloadAllTracks();
}

function closeMiniPlayer() {
  miniPlayer.classList.remove("show");
}

  openPlayerBtn.addEventListener("click", () => {
    openMiniPlayer();
  });

  miniPlayerClose.addEventListener("click", () => {
    closeMiniPlayer();
  });

  miniPlayerPlayPause.addEventListener("click", async () => {
    if (music.paused) {
      await playCurrentMusic();
    } else {
      pauseCurrentMusic();
    }
  });

  prevMusicBtn.addEventListener("click", async () => {
    const wasPlaying = !music.paused;

    currentMusicIndex =
      (currentMusicIndex - 1 + musicList.length) % musicList.length;

    loadMusic(currentMusicIndex);

    if (wasPlaying) {
      await playCurrentMusic();
    }
  });

  nextMusicBtn.addEventListener("click", async () => {
    const wasPlaying = !music.paused;

    currentMusicIndex =
      (currentMusicIndex + 1) % musicList.length;

    loadMusic(currentMusicIndex);

    if (wasPlaying) {
      await playCurrentMusic();
    }
  });

  music.addEventListener("loadedmetadata", () => {
    miniPlayerDuration.textContent = formatTime(music.duration);
    miniPlayerProgress.value = 0;
  });

  music.addEventListener("timeupdate", () => {
  if (!isFinite(music.duration) || music.duration <= 0) return;

  const progress = (music.currentTime / music.duration) * 100;
  miniPlayerProgress.value = progress;
  miniPlayerCurrent.textContent = formatTime(music.currentTime);
  miniPlayerDuration.textContent = formatTime(music.duration);
});

  miniPlayerProgress.addEventListener("input", () => {
    if (!isFinite(music.duration) || music.duration <= 0) return;

    const newTime = (miniPlayerProgress.value / 100) * music.duration;
    music.currentTime = newTime;
  });

  music.addEventListener("ended", async () => {
    currentMusicIndex =
      (currentMusicIndex + 1) % musicList.length;

    loadMusic(currentMusicIndex);

    if (playerOpened) {
      await playCurrentMusic();
    }
  });
  loadMusic(currentMusicIndex);
}
