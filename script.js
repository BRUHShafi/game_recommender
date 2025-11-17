// =====================================================
// 1. GAME DATA (all in this file, no games.js)
// =====================================================

const GAMES = [
  // Cozy / Simulation
  {
    title: "Stardew Valley",
    description: "Relaxing farming sim with exploration, relationships, and cozy vibes.",
    genres: ["Simulation", "RPG"],
    platforms: ["PC", "Switch", "PlayStation", "Xbox", "Mobile"],
    moods: ["Chill"],
    minSession: 20,
    maxSession: 180,
    isMultiplayer: true,
    storeUrl: "https://www.stardewvalley.net/"
  },
  {
    title: "Animal Crossing: New Horizons",
    description: "Decorate your island, befriend villagers, and play at your own pace.",
    genres: ["Simulation"],
    platforms: ["Switch"],
    moods: ["Chill"],
    minSession: 20,
    maxSession: 240,
    isMultiplayer: true,
    storeUrl: "https://www.animal-crossing.com/new-horizons/"
  },
  {
    title: "The Sims 4",
    description: "Create Sims, build houses, and control their lives in a sandbox world.",
    genres: ["Simulation"],
    platforms: ["PC", "PlayStation", "Xbox"],
    moods: ["Chill"],
    minSession: 30,
    maxSession: 180,
    isMultiplayer: false,
    storeUrl: "https://www.ea.com/games/the-sims/the-sims-4"
  },

  // Action / Roguelike / Platformers
  {
    title: "Hades",
    description: "Fast-paced action roguelike with an amazing story and combat.",
    genres: ["Action", "RPG"],
    platforms: ["PC", "Switch", "PlayStation", "Xbox"],
    moods: ["Story", "Competitive"],
    minSession: 30,
    maxSession: 90,
    isMultiplayer: false,
    storeUrl: "https://www.supergiantgames.com/games/hades/"
  },
  {
    title: "Dead Cells",
    description: "Challenging 2D action roguelike with tight controls and fast runs.",
    genres: ["Action"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch", "Mobile"],
    moods: ["Competitive"],
    minSession: 20,
    maxSession: 60,
    isMultiplayer: false,
    storeUrl: "https://store.steampowered.com/app/588650/Dead_Cells/"
  },
  {
    title: "Hollow Knight",
    description: "Atmospheric action platformer with deep exploration and tough bosses.",
    genres: ["Action"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    moods: ["Story", "Competitive"],
    minSession: 30,
    maxSession: 120,
    isMultiplayer: false,
    storeUrl: "https://hollowknight.com/"
  },
  {
    title: "Celeste",
    description: "Challenging platformer about climbing a mountain and inner struggles.",
    genres: ["Action", "Story-rich"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    moods: ["Story", "Competitive"],
    minSession: 20,
    maxSession: 90,
    isMultiplayer: false,
    storeUrl: "https://store.steampowered.com/app/504230/Celeste/"
  },

  // Story-rich / Single-player
  {
    title: "The Witcher 3: Wild Hunt",
    description: "Huge open-world RPG with deep storytelling and meaningful choices.",
    genres: ["RPG", "Story-rich"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    moods: ["Story"],
    minSession: 60,
    maxSession: 240,
    isMultiplayer: false,
    storeUrl: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
  },
  {
    title: "God of War (2018)",
    description: "Narrative-driven action game about Kratos and his son in Norse myth.",
    genres: ["Action", "Story-rich"],
    platforms: ["PC", "PlayStation"],
    moods: ["Story"],
    minSession: 60,
    maxSession: 180,
    isMultiplayer: false,
    storeUrl: "https://www.playstation.com/en-us/games/god-of-war/"
  },

  // Multiplayer / Competitive
  {
    title: "Valorant",
    description: "Tactical 5v5 shooter focused on teamwork, aim, and unique agent abilities.",
    genres: ["Action", "Multiplayer"],
    platforms: ["PC"],
    moods: ["Competitive", "Party"],
    minSession: 30,
    maxSession: 120,
    isMultiplayer: true,
    storeUrl: "https://playvalorant.com/"
  },
  {
    title: "Fortnite",
    description: "Battle royale shooter with building, cosmetics, and frequent events.",
    genres: ["Action", "Multiplayer"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch", "Mobile"],
    moods: ["Competitive", "Party"],
    minSession: 20,
    maxSession: 120,
    isMultiplayer: true,
    storeUrl: "https://www.fortnite.com/"
  },
  {
    title: "Rocket League",
    description: "Fast-paced car soccer game with crazy physics and ranked play.",
    genres: ["Action", "Multiplayer"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    moods: ["Competitive", "Party"],
    minSession: 15,
    maxSession: 90,
    isMultiplayer: true,
    storeUrl: "https://www.rocketleague.com/"
  },
  {
    title: "Apex Legends",
    description: "Hero-based battle royale with squads and fluid movement.",
    genres: ["Action", "Multiplayer"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    moods: ["Competitive", "Party"],
    minSession: 20,
    maxSession: 90,
    isMultiplayer: true,
    storeUrl: "https://www.ea.com/games/apex-legends"
  },

  // Party / Social
  {
    title: "Among Us",
    description: "Social deduction game about lying, accusing friends, and finding the impostor.",
    genres: ["Multiplayer", "Party"],
    platforms: ["PC", "Mobile", "Switch", "PlayStation", "Xbox"],
    moods: ["Party"],
    minSession: 15,
    maxSession: 60,
    isMultiplayer: true,
    storeUrl: "https://www.innersloth.com/games/among-us/"
  },
  {
    title: "Fall Guys",
    description: "Wacky obstacle course battle royale with colorful bean characters.",
    genres: ["Multiplayer", "Party"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    moods: ["Party"],
    minSession: 15,
    maxSession: 60,
    isMultiplayer: true,
    storeUrl: "https://www.fallguys.com/"
  },

  // Sandbox / Creative
  {
    title: "Minecraft",
    description: "Sandbox game about building, mining, and surviving. Play solo or with friends.",
    genres: ["Simulation", "Multiplayer"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch", "Mobile"],
    moods: ["Chill", "Party"],
    minSession: 20,
    maxSession: 240,
    isMultiplayer: true,
    storeUrl: "https://www.minecraft.net/"
  },
  {
    title: "Terraria",
    description: "2D sandbox adventure with building, mining, bosses, and loot.",
    genres: ["Action", "Simulation"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch", "Mobile"],
    moods: ["Chill", "Competitive"],
    minSession: 30,
    maxSession: 180,
    isMultiplayer: true,
    storeUrl: "https://store.steampowered.com/app/105600/Terraria/"
  },

  // Puzzle / Chill
  {
    title: "Portal 2",
    description: "First-person puzzle game using portals, with a witty story.",
    genres: ["Puzzle", "Story-rich"],
    platforms: ["PC", "PlayStation", "Xbox"],
    moods: ["Story"],
    minSession: 30,
    maxSession: 120,
    isMultiplayer: true,
    storeUrl: "https://store.steampowered.com/app/620/Portal_2/"
  },
  {
    title: "Baba Is You",
    description: "Mind-bending puzzle game where you rewrite the rules of the world.",
    genres: ["Puzzle"],
    platforms: ["PC", "Switch", "Mobile"],
    moods: ["Chill"],
    minSession: 15,
    maxSession: 60,
    isMultiplayer: false,
    storeUrl: "https://hempuli.com/baba/"
  },

  // Horror
  {
    title: "Resident Evil Village",
    description: "First-person horror game with intense atmosphere and action.",
    genres: ["Horror", "Action"],
    platforms: ["PC", "PlayStation", "Xbox"],
    moods: ["Scary"],
    minSession: 45,
    maxSession: 120,
    isMultiplayer: false,
    storeUrl: "https://www.residentevil.com/village/us/"
  },
  {
    title: "Phasmophobia",
    description: "Co-op ghost hunting game with voice recognition and spooky houses.",
    genres: ["Horror", "Multiplayer"],
    platforms: ["PC"],
    moods: ["Scary", "Party"],
    minSession: 20,
    maxSession: 120,
    isMultiplayer: true,
    storeUrl: "https://store.steampowered.com/app/739630/Phasmophobia/"
  }
];

// =====================================================
// 2. RECOMMENDATION LOGIC
// =====================================================

function scoreGame(game, answers) {
  let score = 0;

  if (game.platforms.includes(answers.platform)) score += 3;
  if (game.genres.includes(answers.genre)) score += 3;
  if (game.moods.includes(answers.mood)) score += 2;

  const fitsTime =
    answers.sessionLength >= game.minSession &&
    answers.sessionLength <= game.maxSession;
  if (fitsTime) score += 2;

  if (answers.multiplayer === "multi" && game.isMultiplayer) score += 2;
  if (answers.multiplayer === "single" && !game.isMultiplayer) score += 2;
  if (answers.multiplayer === "either") score += 1;

  return score;
}

function getRecommendations(answers) {
  const scored = GAMES
    .map((game) => ({
      game,
      score: scoreGame(game, answers)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const TOP_N = 5;
  const top = scored.slice(0, TOP_N);
  return shuffleArray(top).slice(0, 3);
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// =====================================================
// 3. DOM REFERENCES & STATE
// =====================================================

// Quiz & results
const quizForm = document.getElementById("quiz-form");
const quizSection = document.getElementById("quiz-section");
const resultsSection = document.getElementById("results-section");
const resultsContainer = document.getElementById("results-container");
const resultsMessage = document.getElementById("results-message");
const retakeBtn = document.getElementById("retake-btn");
const shuffleBtn = document.getElementById("shuffle-btn");

// Favorites
const favoritesContainer = document.getElementById("favorites-container");
const favoritesMessage = document.getElementById("favorites-message");
const clearFavoritesBtn = document.getElementById("clear-favorites-btn");
const favoritesCountSpan = document.getElementById("favorites-count");

// Browse all games
const allGamesContainer = document.getElementById("all-games-container");
const allGamesMessage = document.getElementById("all-games-message");
const searchInput = document.getElementById("search-input");
const platformFilter = document.getElementById("platform-filter");
const genreFilter = document.getElementById("genre-filter");

// Favorites state
const FAVORITES_KEY = "gameRecommenderFavorites";
let favorites = [];
let lastAnswers = null;

// =====================================================
// 4. FAVORITES: LOAD/SAVE/HELPERS
// =====================================================

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) {
      favorites = [];
      return;
    }
    const parsed = JSON.parse(raw);
    favorites = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Error loading favorites from localStorage:", error);
    favorites = [];
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function isFavorite(game) {
  return favorites.includes(game.title);
}

function toggleFavorite(game) {
  if (isFavorite(game)) {
    favorites = favorites.filter((title) => title !== game.title);
  } else {
    favorites.push(game.title);
  }

  saveFavorites();
  renderFavorites();
  renderAllGames();

  if (lastAnswers) {
    showResults(lastAnswers, false);
  }
}

function clearFavorites() {
  favorites = [];
  saveFavorites();
  renderFavorites();
  renderAllGames();
}

// =====================================================
// 5. RENDER FUNCTIONS
// =====================================================

function renderFavorites() {
  favoritesContainer.innerHTML = "";

  if (favorites.length === 0) {
    if (favoritesCountSpan) favoritesCountSpan.textContent = "";
    favoritesMessage.textContent = "You haven't saved any favorites yet.";
    return;
  }

  if (favoritesCountSpan) {
    favoritesCountSpan.textContent = `(${favorites.length})`;
  }

  favoritesMessage.textContent = "These are the games you've saved so far:";

  favorites.forEach((title) => {
    const game = GAMES.find((g) => g.title === title);
    if (!game) return;

    const card = document.createElement("div");
    card.className = "card";

    const nameEl = document.createElement("h3");
    nameEl.textContent = game.title;

    const descEl = document.createElement("p");
    descEl.textContent = game.description;

    const tagsEl = createTagsElement(game);

    const infoEl = document.createElement("small");
    infoEl.textContent = "Saved as one of your favorites.";

    const linkEl = createStoreLink(game);

    card.appendChild(nameEl);
    card.appendChild(descEl);
    card.appendChild(tagsEl);
    card.appendChild(infoEl);
    card.appendChild(linkEl);

    favoritesContainer.appendChild(card);
  });
}

function renderAllGames() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedPlatform = platformFilter.value;
  const selectedGenre = genreFilter.value;

  let filtered = GAMES;

  if (searchText) {
    filtered = filtered.filter((game) =>
      game.title.toLowerCase().includes(searchText)
    );
  }

  if (selectedPlatform) {
    filtered = filtered.filter((game) =>
      game.platforms.includes(selectedPlatform)
    );
  }

  if (selectedGenre) {
    filtered = filtered.filter((game) =>
      game.genres.includes(selectedGenre)
    );
  }

  allGamesContainer.innerHTML = "";

  if (filtered.length === 0) {
    allGamesMessage.textContent = "No games match your search/filter.";
    return;
  }

  allGamesMessage.textContent =
    "Use search or filters to explore all available games.";

  filtered.forEach((game) => {
    const card = document.createElement("div");
    card.className = "card";

    const titleEl = document.createElement("h3");
    titleEl.textContent = game.title;

    const descEl = document.createElement("p");
    descEl.textContent = game.description;

    const tagsEl = createTagsElement(game);

    const favBtn = document.createElement("button");
    favBtn.className = "favorite-btn secondary-btn small-btn";
    favBtn.textContent = isFavorite(game) ? "★ Favorited" : "☆ Add to favorites";
    favBtn.addEventListener("click", () => toggleFavorite(game));

    const linkEl = createStoreLink(game);

    card.appendChild(titleEl);
    card.appendChild(descEl);
    card.appendChild(tagsEl);
    card.appendChild(favBtn);
    card.appendChild(linkEl);

    allGamesContainer.appendChild(card);
  });
}

function showResults(answers, switchView = true) {
  const recommendations = getRecommendations(answers);

  if (switchView) {
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
  }

  if (recommendations.length === 0) {
    resultsMessage.textContent =
      "Hmm... I couldn't find a perfect match. Try changing your answers a bit!";
    resultsContainer.innerHTML = "";
    return;
  }

  resultsMessage.textContent =
    "Here are some games that match what you're looking for:";

  resultsContainer.innerHTML = "";

  recommendations.forEach((item) => {
    const game = item.game;

    const card = document.createElement("div");
    card.className = "card";

    const titleEl = document.createElement("h3");
    titleEl.textContent = game.title;

    const descEl = document.createElement("p");
    descEl.textContent = game.description;

    const tagsEl = createTagsElement(game);

    const whyEl = document.createElement("small");
    whyEl.textContent = `Matched your mood (${answers.mood}), platform (${answers.platform}), and playtime preference.`;

    const favBtn = document.createElement("button");
    favBtn.className = "favorite-btn secondary-btn small-btn";
    favBtn.textContent = isFavorite(game) ? "★ Favorited" : "☆ Add to favorites";
    favBtn.addEventListener("click", () => toggleFavorite(game));

    const linkEl = createStoreLink(game);

    card.appendChild(titleEl);
    card.appendChild(descEl);
    card.appendChild(tagsEl);
    card.appendChild(whyEl);
    card.appendChild(favBtn);
    card.appendChild(linkEl);

    resultsContainer.appendChild(card);
  });
}

// =====================================================
// 6. SMALL HELPERS
// =====================================================

function createTagsElement(game) {
  const tagsDiv = document.createElement("div");
  tagsDiv.className = "tags";

  const genreTag = document.createElement("span");
  genreTag.className = "tag";
  genreTag.textContent = game.genres.join(", ");

  const platformTag = document.createElement("span");
  platformTag.className = "tag";
  platformTag.textContent = game.platforms.join(", ");

  tagsDiv.appendChild(genreTag);
  tagsDiv.appendChild(platformTag);

  return tagsDiv;
}

function createStoreLink(game) {
  const link = document.createElement("a");
  link.href = game.storeUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "secondary-btn small-btn";
  link.textContent = "View game page";
  return link;
}

// =====================================================
// 7. EVENTS & INITIALIZE
// =====================================================

// Quiz submit
quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const platform = document.getElementById("platform").value;
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;
  const sessionValue = document.querySelector('input[name="session"]:checked').value;
  const multiplayer = document.querySelector('input[name="multiplayer"]:checked').value;

  const answers = {
    platform,
    genre,
    mood,
    sessionLength: Number(sessionValue),
    multiplayer
  };

  lastAnswers = answers;
  showResults(answers, true);
});

// Results buttons
retakeBtn.addEventListener("click", () => {
  resultsSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
});

shuffleBtn.addEventListener("click", () => {
  if (!lastAnswers) return;
  showResults(lastAnswers, false);
});

// Favorites actions
clearFavoritesBtn.addEventListener("click", () => {
  clearFavorites();
});

// Browse filters
searchInput.addEventListener("input", renderAllGames);
platformFilter.addEventListener("change", renderAllGames);
genreFilter.addEventListener("change", renderAllGames);

// Initial render
loadFavorites();
renderFavorites();
renderAllGames();
