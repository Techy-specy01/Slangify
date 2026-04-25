/**
 * ╔═══════════════════════════════════════════════╗
 * ║   SLANGIFY — script.js                        ║
 * ║   Decoding the internet, one word at a time.  ║
 * ╚═══════════════════════════════════════════════╝
 */

'use strict';

/* ═══════════════════════════════════════════════════
   DATASET — Local slang dictionary (fallback + default)
   Extend this with your own words or API integration.
═══════════════════════════════════════════════════ */
const SLANG_DATA = [
  {
    word: "rizz",
    meaning: "Magnetic charm or ability to effortlessly attract romantic interest. Often described as a natural, smooth charisma that makes people fall for you without trying hard.",
    example: "Bro walked in and had the whole room looking — he's got unspoken rizz fr.",
    category: "Dating",
    emoji: "✨",
    tags: ["dating", "personality", "viral"]
  },
  {
    word: "slay",
    meaning: "To perform exceptionally well, look incredible, or absolutely dominate something. A high-energy compliment that means you totally crushed it.",
    example: "She walked into the interview in that fit and absolutely slayed. Got the job same day.",
    category: "Compliment",
    emoji: "💅",
    tags: ["hype", "fashion", "compliment"]
  },
  {
    word: "delulu",
    meaning: "Short for 'delusional'. Describes someone living in their own fantasy world, often about unrealistic hopes — but used affectionately in Gen Z culture.",
    example: "I'm fully delulu thinking my situationship is gonna confess his feelings this weekend.",
    category: "Mindset",
    emoji: "🌸",
    tags: ["mindset", "humor", "dating"]
  },
  {
    word: "bussin",
    meaning: "Something that is absolutely amazing, especially food. Originally from AAVE, now used widely to describe anything that's top-tier good.",
    example: "These birria tacos are bussin no cap, I had three plates.",
    category: "Food & Vibes",
    emoji: "🔥",
    tags: ["food", "hype", "AAVE"]
  },
  {
    word: "no cap",
    meaning: "For real, I'm being completely honest. 'Cap' means a lie, so 'no cap' = no lie = this is 100% the truth.",
    example: "That was the best movie I've seen all year, no cap.",
    category: "Expression",
    emoji: "🧢",
    tags: ["expression", "honesty", "AAVE"]
  },
  {
    word: "understood the assignment",
    meaning: "When someone perfectly delivered what was expected — they got the brief, executed flawlessly, and then some.",
    example: "Zendaya at the Met Gala literally understood the assignment every single year.",
    category: "Compliment",
    emoji: "📋",
    tags: ["compliment", "fashion", "performance"]
  },
  {
    word: "main character",
    meaning: "Acting as if you're the protagonist of your own story — often dramatic, confident, and living in your moment without caring about others' opinions.",
    example: "She walked out of that toxic job on her lunch break. Full main character behavior.",
    category: "Personality",
    emoji: "🎬",
    tags: ["personality", "confidence", "TikTok"]
  },
  {
    word: "lowkey",
    meaning: "Subtly, secretly, or to a mild degree. Used to admit something you're not fully ready to broadcast loudly.",
    example: "I lowkey have a crush on my coworker but it's fine everything is fine.",
    category: "Expression",
    emoji: "🤫",
    tags: ["expression", "casual", "feeling"]
  },
  {
    word: "highkey",
    meaning: "The opposite of lowkey — openly and obviously. Very much, without trying to hide it at all.",
    example: "I am highkey obsessed with this new show, I watched 8 episodes today.",
    category: "Expression",
    emoji: "📢",
    tags: ["expression", "enthusiasm"]
  },
  {
    word: "situationship",
    meaning: "A romantic relationship that doesn't have a clear label — more than friends, but not officially dating. Basically relationship limbo.",
    example: "We've been texting every day for 6 months but are we dating? No, we're in a situationship.",
    category: "Dating",
    emoji: "💀",
    tags: ["dating", "relationships", "Gen Z"]
  },
  {
    word: "rent free",
    meaning: "When someone or something lives in your head constantly without being invited — you can't stop thinking about it.",
    example: "That song from the commercial lives in my head rent free. I wake up humming it.",
    category: "Mental",
    emoji: "🏠",
    tags: ["mental", "humor", "obsession"]
  },
  {
    word: "caught in 4K",
    meaning: "Being caught doing something red-handed with irrefutable evidence, in crystal clear quality. No denying it.",
    example: "He said he was home sick, then someone tweeted a photo of him at the concert. Caught in 4K.",
    category: "Callout",
    emoji: "📷",
    tags: ["callout", "drama", "evidence"]
  },
  {
    word: "vibe check",
    meaning: "A spontaneous assessment of someone's energy or mood. Can be positive (they pass) or an intervention (they fail).",
    example: "He failed the vibe check the second he walked in complaining about everything.",
    category: "Social",
    emoji: "🔍",
    tags: ["social", "energy", "assessment"]
  },
  {
    word: "era",
    meaning: "A specific phase or period of someone's life or aesthetic. Popularised by Taylor Swift's 'Eras Tour', now used for any personal chapter.",
    example: "I'm fully in my reading-every-day-and-going-to-bed-at-9pm era and I love it.",
    category: "Lifestyle",
    emoji: "⏳",
    tags: ["lifestyle", "phase", "Taylor Swift"]
  },
  {
    word: "touch grass",
    meaning: "A (sometimes rude) suggestion to someone to go outside and experience the real world, rather than being online all day.",
    example: "You've been arguing about pixels in a video game for 4 hours. Touch grass.",
    category: "Callout",
    emoji: "🌿",
    tags: ["internet", "callout", "humor"]
  },
  {
    word: "NPC",
    meaning: "Non-Player Character — someone who moves through life mindlessly, without their own thoughts or personality, like background characters in video games.",
    example: "The way he just agreed with everything she said. Bro is an NPC.",
    category: "Gaming",
    emoji: "🎮",
    tags: ["gaming", "insult", "personality"]
  },
  {
    word: "snatched",
    meaning: "Looking incredibly attractive, especially regarding a slim or well-defined figure. Also used to mean someone looked amazing in general.",
    example: "She showed up to the reunion snatched. Whatever she's doing, it's working.",
    category: "Appearance",
    emoji: "💃",
    tags: ["appearance", "compliment", "fashion"]
  },
  {
    word: "it's giving",
    meaning: "It reminds me of, or it's giving off the energy of... Used to describe the vibe or aesthetic something is channeling.",
    example: "This café is giving Paris apartment, I'm obsessed with it in here.",
    category: "Expression",
    emoji: "✦",
    tags: ["expression", "aesthetic", "vibe"]
  },
  {
    word: "ate",
    meaning: "Absolutely nailed it. Did something so well there's nothing left — ate it up and left no crumbs behind.",
    example: "Her performance in that last scene? She ate and left no crumbs. Iconic.",
    category: "Compliment",
    emoji: "🍽️",
    tags: ["compliment", "performance", "AAVE"]
  },
  {
    word: "based",
    meaning: "Confidently being yourself without caring what others think. Sharing unpopular opinions proudly. Originally from Lil B, now used to praise authenticity.",
    example: "He told his boss he wouldn't work weekends and then left early. Incredibly based.",
    category: "Personality",
    emoji: "🗿",
    tags: ["internet", "personality", "meme"]
  },
  {
    word: "glazing",
    meaning: "Excessive, over-the-top praising of someone to the point of embarrassment. Brown-nosing taken to an extreme.",
    example: "Everyone in that fan page is glazing him so hard. He could do anything and they'd call it genius.",
    category: "Behavior",
    emoji: "🍩",
    tags: ["behavior", "humor", "fan culture"]
  },
  {
    word: "ick",
    meaning: "A sudden, inexplicable feeling of repulsion toward someone you previously found attractive. Often triggered by a small, specific behavior.",
    example: "He was perfect until I saw him chew with his mouth open. Instant ick, I can't explain it.",
    category: "Dating",
    emoji: "🤢",
    tags: ["dating", "repulsion", "TikTok"]
  },
  {
    word: "down bad",
    meaning: "Desperately yearning for someone, in an embarrassing or pitiable way. Being reduced to a lovesick, desperate state over a crush.",
    example: "I refreshed his Instagram story 12 times to see if he watched mine. I am so down bad.",
    category: "Dating",
    emoji: "😔",
    tags: ["dating", "crush", "feelings"]
  },
  {
    word: "fire",
    meaning: "Something that is really hot, cool, or amazing. High quality across the board.",
    example: "That new album dropped yesterday and every single track is fire.",
    category: "Compliment",
    emoji: "🔥",
    tags: ["compliment", "hype", "quality"]
  },
  {
    word: "ratio",
    meaning: "When a reply gets more likes or engagement than the original post — implying the original was wrong or bad. A brutal social media callout.",
    example: "His take was so bad it got ratioed 10 to 1. The replies absolutely cooked him.",
    category: "Internet",
    emoji: "📊",
    tags: ["twitter", "internet", "callout"]
  }
];

/* ═══════════════════════════════════════════════════
   CATEGORY DATA
═══════════════════════════════════════════════════ */
const CATEGORIES = [
  { name: "Dating",     emoji: "💕", filter: "dating"    },
  { name: "Gaming",     emoji: "🎮", filter: "gaming"    },
  { name: "Internet",   emoji: "🌐", filter: "internet"  },
  { name: "Compliment", emoji: "✨", filter: "compliment"},
  { name: "Humor",      emoji: "😂", filter: "humor"     },
  { name: "Fashion",    emoji: "👗", filter: "fashion"   },
  { name: "Mindset",    emoji: "🧠", filter: "mindset"   },
  { name: "AAVE",       emoji: "💬", filter: "AAVE"      },
];

/* ═══════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════ */
let favorites   = JSON.parse(localStorage.getItem('slangify_favs') || '[]');
let currentPage = 'home';
let wotdWord    = null;

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  renderWOTD();
  renderTrending();
  renderCategories();
  updateFavCount();
});

/* ═══════════════════════════════════════════════════
   THEME
═══════════════════════════════════════════════════ */
function loadTheme() {
  const saved = localStorage.getItem('slangify_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeToggle').querySelector('.theme-icon').textContent =
    saved === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('slangify_theme', next);
  document.getElementById('themeToggle').querySelector('.theme-icon').textContent =
    next === 'dark' ? '☀️' : '🌙';
  showToast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on');
}

/* ═══════════════════════════════════════════════════
   PAGES
═══════════════════════════════════════════════════ */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) {
    page.classList.add('active');
    page.style.animation = 'none';
    requestAnimationFrame(() => { page.style.animation = ''; });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  currentPage = pageId;
}

function showHome() {
  showPage('homePage');
  clearSearch();
}

function showFavorites() {
  renderFavorites();
  showPage('favoritesPage');
}

/* ═══════════════════════════════════════════════════
   SEARCH
═══════════════════════════════════════════════════ */
function handleSearchInput(val) {
  const clearBtn = document.getElementById('searchClear');
  clearBtn.style.display = val.length > 0 ? 'flex' : 'none';

  if (val.length >= 1) {
    showAutocomplete(val);
  } else {
    hideAutocomplete();
  }
}

function handleSearchKeydown(e) {
  const dropdown = document.getElementById('autocompleteDropdown');
  const items    = dropdown.querySelectorAll('.autocomplete-item');
  let   active   = dropdown.querySelector('.autocomplete-item.active');

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (!active) {
      items[0]?.classList.add('active');
    } else {
      active.classList.remove('active');
      const next = active.nextElementSibling;
      if (next) next.classList.add('active');
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (active) {
      active.classList.remove('active');
      const prev = active.previousElementSibling;
      if (prev) prev.classList.add('active');
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (active) {
      const word = active.querySelector('.ai-word')?.textContent;
      if (word) submitSearch(word);
    } else {
      submitSearch();
    }
  } else if (e.key === 'Escape') {
    hideAutocomplete();
  }
}

function showAutocomplete(query) {
  const q        = query.toLowerCase();
  const matches  = SLANG_DATA
    .filter(s => s.word.toLowerCase().startsWith(q) || s.word.toLowerCase().includes(q))
    .slice(0, 6);

  const dropdown = document.getElementById('autocompleteDropdown');

  if (!matches.length) { hideAutocomplete(); return; }

  dropdown.innerHTML = matches.map(s => `
    <div class="autocomplete-item" onclick="submitSearch('${escapeHtml(s.word)}')">
      <span class="ai-emoji">${s.emoji}</span>
      <span class="ai-word">${highlightMatch(s.word, q)}</span>
      <span class="ai-hint">${s.category}</span>
    </div>
  `).join('');

  dropdown.classList.add('open');
}

function hideAutocomplete() {
  document.getElementById('autocompleteDropdown').classList.remove('open');
}

function highlightMatch(word, query) {
  const idx = word.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return escapeHtml(word);
  return escapeHtml(word.slice(0, idx)) +
    `<mark style="background:transparent;color:var(--accent);font-weight:800">${escapeHtml(word.slice(idx, idx + query.length))}</mark>` +
    escapeHtml(word.slice(idx + query.length));
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = '';
  document.getElementById('searchClear').style.display = 'none';
  hideAutocomplete();
  input.focus();
}

function submitSearch(word) {
  const query = (word || document.getElementById('searchInput').value).trim();
  if (!query) return;

  hideAutocomplete();
  document.getElementById('searchInput').value = query;

  const result = findSlang(query);
  if (result) {
    renderResultPage(result);
  } else {
    // Attempt Urban Dictionary API
    fetchFromUrbanDictionary(query);
  }
}

/* ═══════════════════════════════════════════════════
   LOOKUP
═══════════════════════════════════════════════════ */
function findSlang(query) {
  const q = query.toLowerCase().trim();
  return SLANG_DATA.find(s =>
    s.word.toLowerCase() === q ||
    s.word.toLowerCase().replace(/ /g, '') === q.replace(/ /g, '')
  ) || SLANG_DATA.find(s => s.word.toLowerCase().includes(q));
}

/* ═══════════════════════════════════════════════════
   URBAN DICTIONARY API
   (CORS-proxied — works in browser environments that support it)
═══════════════════════════════════════════════════ */
async function fetchFromUrbanDictionary(query) {
  // Show loading state on result page
  showPage('resultPage');
  document.getElementById('resultCard').innerHTML = buildLoadingSkeleton();
  document.getElementById('relatedSection').innerHTML = '';

  try {
    // Using a public CORS proxy to reach the UD API
    const url = `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const json = await res.json();

    if (json.list && json.list.length > 0) {
      const entry = json.list[0];
      const slang = {
        word:     entry.word,
        meaning:  cleanUDText(entry.definition),
        example:  cleanUDText(entry.example) || `"${entry.word}" — Urban Dictionary`,
        category: "Internet",
        emoji:    "🌐"
      };
      renderResultPage(slang, true);
    } else {
      showNotFound(query);
    }
  } catch (err) {
    console.warn('Urban Dictionary API failed:', err);
    showNotFound(query);
  }
}

/** Clean Urban Dictionary's [bracket] notation */
function cleanUDText(text) {
  return (text || '').replace(/\[|\]/g, '').trim();
}

/* ═══════════════════════════════════════════════════
   RENDER RESULT PAGE
═══════════════════════════════════════════════════ */
function renderResultPage(slang, fromAPI = false) {
  const isSaved = favorites.includes(slang.word.toLowerCase());

  document.getElementById('resultCard').innerHTML = `
    <div class="result-top">
      <div class="result-emoji-box">${slang.emoji || '✦'}</div>
      <div class="result-meta">
        <h1 class="result-word">${escapeHtml(slang.word)}</h1>
        <span class="result-category">${escapeHtml(slang.category || 'Slang')}</span>
        ${fromAPI ? '<span style="margin-left:.5rem;font-size:.7rem;color:var(--text-muted)">via Urban Dictionary</span>' : ''}
      </div>
    </div>

    <div class="result-divider"></div>

    <p class="result-section-label">📖 What it means</p>
    <p class="result-meaning">${escapeHtml(slang.meaning)}</p>

    <p class="result-section-label">💬 Example</p>
    <div class="result-example">"${escapeHtml(slang.example)}"</div>

    <div class="result-actions">
      <button class="btn-pill primary" onclick="submitSearch('${escapeHtml(slang.word)}')">
        🔍 Search again
      </button>
      <button class="btn-pill ghost ${isSaved ? 'saved' : ''}" id="resultFavBtn"
        onclick="toggleFavorite('${escapeHtml(slang.word)}', this)">
        ${isSaved ? '💾 Saved' : '🤍 Save'}
      </button>
      <button class="btn-pill ghost" onclick="shareWord('${escapeHtml(slang.word)}')">
        🔗 Share
      </button>
    </div>
  `;

  // Related words
  const related = getRelated(slang);
  if (related.length) {
    document.getElementById('relatedSection').innerHTML = `
      <h3>More slang you should know 👇</h3>
      <div class="trending-grid">
        ${related.map(s => buildSlangCard(s)).join('')}
      </div>
    `;
  } else {
    document.getElementById('relatedSection').innerHTML = '';
  }

  showPage('resultPage');
}

function showNotFound(query) {
  document.getElementById('resultCard').innerHTML = `
    <div class="not-found">
      <div class="nf-icon">🤔</div>
      <h2>Word not found</h2>
      <p>We don't have "<strong>${escapeHtml(query)}</strong>" in our dictionary yet.<br />
         Maybe you invented a new word? No cap, that's lowkey based.</p>
      <button class="btn-pill primary" onclick="showHome()">← Go Back</button>
    </div>
  `;
  document.getElementById('relatedSection').innerHTML = '';
}

function buildLoadingSkeleton() {
  return `
    <div class="result-top">
      <div class="skeleton" style="width:80px;height:80px;border-radius:var(--radius)"></div>
      <div style="flex:1">
        <div class="skeleton" style="width:60%;height:48px;margin-bottom:.75rem"></div>
        <div class="skeleton" style="width:30%;height:24px"></div>
      </div>
    </div>
    <div class="result-divider"></div>
    <div class="skeleton" style="width:100%;height:72px;margin-bottom:1rem"></div>
    <div class="skeleton" style="width:100%;height:56px"></div>
  `;
}

/* ═══════════════════════════════════════════════════
   WORD OF THE DAY
═══════════════════════════════════════════════════ */
function renderWOTD() {
  // Seed by date so it changes daily
  const today  = new Date();
  const seed   = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const idx    = seed % SLANG_DATA.length;
  wotdWord     = SLANG_DATA[idx];
  const isSaved = favorites.includes(wotdWord.word.toLowerCase());

  document.getElementById('wotdCard').innerHTML = `
    <div class="wotd-inner">
      <div class="wotd-emoji-wrap">${wotdWord.emoji}</div>
      <div class="wotd-body">
        <div class="wotd-label">✦ Word of the Day</div>
        <div class="wotd-word">${escapeHtml(wotdWord.word)}</div>
        <span class="wotd-category">${escapeHtml(wotdWord.category)}</span>
        <p class="wotd-meaning">${escapeHtml(wotdWord.meaning)}</p>
        <p class="wotd-example">"${escapeHtml(wotdWord.example)}"</p>
        <div class="wotd-actions">
          <button class="btn-pill primary" onclick="submitSearch('${escapeHtml(wotdWord.word)}')">
            See Full Definition
          </button>
          <button class="btn-pill ghost ${isSaved ? 'saved' : ''}" id="wotdFavBtn"
            onclick="toggleFavorite('${escapeHtml(wotdWord.word)}', this)">
            ${isSaved ? '💾 Saved' : '🤍 Save'}
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════
   TRENDING GRID
═══════════════════════════════════════════════════ */
let trendingStart = 0;

function renderTrending() {
  const shuffled = [...SLANG_DATA].sort(() => Math.random() - 0.5).slice(0, 8);
  document.getElementById('trendingGrid').innerHTML = shuffled
    .map((s, i) => buildSlangCard(s, i * 50))
    .join('');
}

function shuffleTrending() {
  renderTrending();
  showToast('🔀 Shuffled!');
}

function buildSlangCard(slang, animDelay = 0) {
  const isSaved = favorites.includes(slang.word.toLowerCase());
  return `
    <div class="slang-card" style="animation-delay:${animDelay}ms" onclick="submitSearch('${escapeHtml(slang.word)}')">
      <div class="card-emoji">${slang.emoji || '✦'}</div>
      <div class="card-word">${escapeHtml(slang.word)}</div>
      <div class="card-meaning">${escapeHtml(slang.meaning)}</div>
      <div class="card-footer">
        <span class="card-category">${escapeHtml(slang.category || 'Slang')}</span>
        <button class="card-fav-btn ${isSaved ? 'active' : ''}"
          onclick="event.stopPropagation(); toggleFavorite('${escapeHtml(slang.word)}', this)"
          title="${isSaved ? 'Unsave' : 'Save'}">
          ${isSaved ? '💾' : '🤍'}
        </button>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════
   CATEGORIES
═══════════════════════════════════════════════════ */
function renderCategories() {
  document.getElementById('categoryPills').innerHTML = CATEGORIES.map(cat => `
    <button class="category-pill" onclick="filterByCategory('${cat.filter}')">
      <span>${cat.emoji}</span> ${cat.name}
    </button>
  `).join('');
}

function filterByCategory(filter) {
  const filtered = SLANG_DATA.filter(s =>
    s.tags?.includes(filter) || s.category.toLowerCase().includes(filter)
  );
  if (!filtered.length) { showToast('No words in this category yet!'); return; }

  document.getElementById('trendingGrid').innerHTML = filtered
    .map((s, i) => buildSlangCard(s, i * 40))
    .join('');

  // Scroll to trending section
  document.getElementById('trendingGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
  showToast(`Showing ${filtered.length} ${filter} words 🔍`);
}

/* ═══════════════════════════════════════════════════
   RELATED WORDS
═══════════════════════════════════════════════════ */
function getRelated(slang) {
  return SLANG_DATA
    .filter(s =>
      s.word !== slang.word && (
        s.category === slang.category ||
        s.tags?.some(t => slang.tags?.includes(t))
      )
    )
    .slice(0, 4);
}

/* ═══════════════════════════════════════════════════
   FAVORITES
═══════════════════════════════════════════════════ */
function toggleFavorite(word, btn) {
  const key = word.toLowerCase();
  if (favorites.includes(key)) {
    favorites = favorites.filter(f => f !== key);
    if (btn) { btn.textContent = '🤍 Save'; btn.classList.remove('saved'); }
    showToast(`Removed "${word}" from saved`);
  } else {
    favorites.push(key);
    if (btn) { btn.textContent = '💾 Saved'; btn.classList.add('saved'); }
    showToast(`💾 Saved "${word}"!`);
  }
  localStorage.setItem('slangify_favs', JSON.stringify(favorites));
  updateFavCount();

  // Sync all matching buttons on the page
  syncFavButtons(key);
}

function syncFavButtons(key) {
  // Update any card fav buttons showing this word
  document.querySelectorAll('.card-fav-btn').forEach(btn => {
    const card = btn.closest('.slang-card');
    if (card) {
      const wordEl = card.querySelector('.card-word');
      if (wordEl && wordEl.textContent.toLowerCase() === key) {
        const isSaved = favorites.includes(key);
        btn.textContent  = isSaved ? '💾' : '🤍';
        btn.classList.toggle('active', isSaved);
      }
    }
  });
}

function updateFavCount() {
  document.getElementById('favCount').textContent = favorites.length;
}

function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  if (!favorites.length) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">💾</div>
        <p>No saved words yet.<br/>Hit 🤍 on any word to save it here.</p>
      </div>`;
    return;
  }

  const savedWords = SLANG_DATA.filter(s => favorites.includes(s.word.toLowerCase()));
  // Also create stubs for words saved from UD API that aren't in local data
  const missingKeys = favorites.filter(k => !SLANG_DATA.find(s => s.word.toLowerCase() === k));

  grid.innerHTML = [
    ...savedWords.map((s, i) => buildSlangCard(s, i * 40)),
    ...missingKeys.map(k => `
      <div class="slang-card" onclick="submitSearch('${escapeHtml(k)}')">
        <div class="card-emoji">🌐</div>
        <div class="card-word">${escapeHtml(k)}</div>
        <div class="card-meaning">Tap to look up this word again.</div>
        <div class="card-footer">
          <span class="card-category">Internet</span>
          <button class="card-fav-btn active"
            onclick="event.stopPropagation(); toggleFavorite('${escapeHtml(k)}', this)">💾</button>
        </div>
      </div>
    `)
  ].join('');
}

/* ═══════════════════════════════════════════════════
   SHARE
═══════════════════════════════════════════════════ */
function shareWord(word) {
  const url = `${location.origin}${location.pathname}?word=${encodeURIComponent(word)}`;
  if (navigator.share) {
    navigator.share({ title: `Slangify: ${word}`, url })
      .catch(() => copyToClipboard(url));
  } else {
    copyToClipboard(url);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => showToast('🔗 Link copied!'))
    .catch(() => showToast('Copy failed — try manually'));
}

/* ═══════════════════════════════════════════════════
   DEEP LINK (handle ?word= in URL on load)
═══════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  const params = new URLSearchParams(location.search);
  const word   = params.get('word');
  if (word) submitSearch(word);
});

/* ═══════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════ */
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ═══════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════ */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#039;');
}
