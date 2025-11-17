// ---- GAME DATA (no images) ----
const GAMES = [
  {
    title: "Stardew Valley",
    description: "Relaxing farming sim with exploration, relationships, and cozy vibes.",
    genres: ["Simulation", "RPG"],
    platforms: ["PC", "Switch", "PlayStation", "Xbox"],
    moods: ["Chill"],
    minSession: 20,
    maxSession: 180,
    isMultiplayer: true,
    storeUrl: "https://www.stardewvalley.net/"
  },
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
    title: "Valorant",
    description: "Tactical 5v5 shooter focused on teamwork, aim, and abilities.",
    genres: ["Action", "Multiplayer"],
    platforms: ["PC"],
    moods: ["Competitive", "Party"],
    minSession: 30,
    maxSession: 120,
    isMultiplayer: true,
    storeUrl: "https://playvalorant.com/"
  },
  {
    title: "Among Us",
    description: "Social deduction game about lying, accusing friends, and finding the impostor.",
    genres: ["Multiplayer", "Party"],
    platforms: ["PC", "Mobile", "Switch"],
    moods: ["Party"],
    minSession: 15,
    maxSession: 60,
    isMultiplayer: true,
    storeUrl: "https://www.innersloth.com/games/among-us/"
  },
  {
    title: "The Witcher 3: Wild Hunt",
    description: "Huge open-world RPG with deep storytelling and exploration.",
    genres: ["RPG", "Story-rich"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    moods: ["Story"],
    minSession: 60,
    maxSession: 240,
    isMultiplayer: false,
    storeUrl: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
  },
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
    title: "Rocket League",
    description: "Fast-paced car soccer game with crazy physics and competitive ranked matches.",
    genres: ["Action", "Multiplayer"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    moods: ["Competitive", "Party"],
    minSession: 15,
    maxSession: 90,
    isMultiplayer: true,
    storeUrl: "https://www.rocketleague.com/"
  },
  {
    title: "Celeste",
    description: "Challenging platformer about climbing a mountain and dealing with inner struggles.",
    genres: ["Action", "Story-rich"],
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    moods: ["Story", "Competitive"],
    minSession: 20,
    maxSession: 90,
    isMultiplayer: false,
    storeUrl: "https://store.steampowered.com/app/504230/Celeste/"
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
  }
];

// ---- RECOMMENDATION LOGIC ----
function scoreGame(game, answers) {
  let score = 0;

  if (game.platforms.includes(answers.platform)) score += 3;
  if (game.genres.includes(answers.genre)) score += 3;
  if (game.moods.includes(answers.mood)) score += 2;

  if (
    answers.sessionLength >= game.minSession &&
    answers.sessionLength <= game.maxSession
  ) {
    score += 2;
  }

  if (answers.multiplayer === "multi" && game.isMultiplayer) score += 2;
  if (answers.multiplayer === "single" && !game.isMultiplayer) score += 2;
  if (answers.multiplayer === "either") score += 1;

  return score;
}

function getRecommendations(answers) {
  const scored = GAMES.map((game) => ({
    game,
    score: scoreGame(game, answers)
  }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const TOP_N = 5;
  const top = scored.slice(0, TOP_N);
  return shuffleArray(top).slice(0, 3); // show 3 in random order
}

// Simple shuffle helper
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ---- DOM ELEMENTS ----
const quizForm = document.getElementById("quiz-form");
const quizSection = document.getElementById("quiz-section");
const resultsSection = document.getElementById("results-section");
const resultsContainer = document.getElementById("results-container");
const resultsMessage = document.getElementById("results-message");
const retakeBtn = document.getElementById("retake-btn");
const shuffleBtn = document.getElementById("shuffle-btn");

// Favorites DOM
const favoritesContainer = document.getElementById("favorites-container");
const favoritesMessage = document.getElementById("favorites-message");
const clearFavoritesBtn = document.getElementById("clear-favorites-btn");
const favoritesCountSpan = document.getElementById("favorites-count");

// All games DOM
const allGamesContainer = document.getElementById("all-games-container");
const allGamesMessage = document.getElementById("all-games-message");
const searchInput = document.getElementById("search-input");
const platformFilter = document.getElementById("platform-filter");

// ---- FAVORITES / LOCALSTORAGE ----
const FAVORITES_KEY = "gameRecommenderFavorites";
let favorites = []; // array of game titles

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) {
      favorites = [];
      return;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      favorites = parsed;
    } else {
      favorites = [];
    }
  } catch (err) {
    console.error("Error loading favorites from localStorage:", err);
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
  renderAllGames(); // update buttons in all-games section too

  if (lastAnswers) {
    showResults(lastAnswers, false); // don't switch view, just update cards
  }
}

function clearFavorites() {
  favorites = [];
  saveFavorites();
  renderFavorites();
  renderAllGames();
}

// ---- RENDER FAVORITES ----
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

    const name = document.createElement("h3");
    name.textContent = game.title;

    const desc = document.createElement("p");
    desc.textContent = game.description;

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

    const why = document.createElement("small");
    why.textContent = "Saved as one of your favorites.";

    const link = document.createElement("a");
    link.href = game.storeUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "secondary-btn small-btn";
    link.textContent = "View game page";

    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(tagsDiv);
    card.appendChild(why);
    card.appendChild(link);

    favoritesContainer.appendChild(card);
  });
}

// ---- RENDER ALL GAMES WITH SEARCH/FILTER ----
function renderAllGames() {
  const searchText = searchInput.value.trim().toLowerCase();
  const platformValue = platformFilter.value;

  let filtered = GAMES;

  if (searchText) {
    filtered = filtered.filter((game) =>
      game.title.toLowerCase().includes(searchText)
    );
  }

  if (platformValue) {
    filtered = filtered.filter((game) =>
      game.platforms.includes(platformValue)
    );
  }

  allGamesContainer.innerHTML = "";

  if (filtered.length === 0) {
    allGamesMessage.textContent = "No games match your search/filter.";
    return;
  } else {
    allGamesMessage.textContent =
      "Use search or filters to explore all available games.";
  }

  filtered.forEach((game) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = game.title;

    const desc = document.createElement("p");
    desc.textContent = game.description;

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

    const favBtn = document.createElement("button");
    favBtn.className = "favorite-btn secondary-btn small-btn";
    favBtn.textContent = isFavorite(game) ? "★ Favorited" : "☆ Add to favorites";
    favBtn.addEventListener("click", () => toggleFavorite(game));

    const link = document.createElement("a");
    link.href = game.storeUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "secondary-btn small-btn";
    link.textContent = "View game page";

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tagsDiv);
    card.appendChild(favBtn);
    card.appendChild(link);

    allGamesContainer.appendChild(card);
  });
}

// ---- RESULTS RENDERING ----
let lastAnswers = null;

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const platform = document.getElementById("platform").value;
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;
  const session = document.querySelector('input[name="session"]:checked').value;
  const multiplayer = document.querySelector('input[name="multiplayer"]:checked').value;

  const answers = {
    platform,
    genre,
    mood,
    sessionLength: Number(session),
    multiplayer
  };

  lastAnswers = answers;
  showResults(answers, true);
});

// showResults: switchView = should we hide quiz/show results
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

    const title = document.createElement("h3");
    title.textContent = game.title;

    const desc = document.createElement("p");
    desc.textContent = game.description;

    const tagsDiv = document.createElement("div");
    tagsDiv.className = "tags";

    const genreTag = document.createElement("span");
    genreTag.className = "tag";
    genreTag.textContent = game.genres.join(", ");

    const platformTag = document.createElement("span");
    platformTag.className = "tag";
    platformTag.textContent = game.platforms.join(", ");

    const moodTag = document.createElement("span");
    moodTag.className = "tag";
    moodTag.textContent = "Mood: " + game.moods.join(", ");

    tagsDiv.appendChild(genreTag);
    tagsDiv.appendChild(platformTag);
    tagsDiv.appendChild(moodTag);

    const why = document.createElement("small");
    why.textContent = `Matched your mood (${answers.mood}), platform (${answers.platform}), and playtime preference.`;

    const favBtn = document.createElement("button");
    favBtn.className = "favorite-btn secondary-btn small-btn";
    favBtn.textContent = isFavorite(game) ? "★ Favorited" : "☆ Add to favorites";
    favBtn.addEventListener("click", () => toggleFavorite(game));

    const link = document.createElement("a");
    link.href = game.storeUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "secondary-btn small-btn";
    link.textContent = "View game page";

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tagsDiv);
    card.appendChild(why);
    card.appendChild(favBtn);
    card.appendChild(link);

    resultsContainer.appendChild(card);
  });
}

// ---- BUTTON HANDLERS ----
retakeBtn.addEventListener("click", () => {
  resultsSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
});

shuffleBtn.addEventListener("click", () => {
  if (!lastAnswers) return;
  showResults(lastAnswers, false);
});

clearFavoritesBtn.addEventListener("click", () => {
  clearFavorites();
});

// Search/filter events for all games
searchInput.addEventListener("input", () => {
  renderAllGames();
});

platformFilter.addEventListener("change", () => {
  renderAllGames();
});

// ---- INITIALIZE ON PAGE LOAD ----
loadFavorites();
renderFavorites();
renderAllGames();
