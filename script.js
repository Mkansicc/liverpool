/* =========================
   CONFIG
========================= */
const DEFAULT_ADMIN_PASSWORD = "wsladmin";

// Optional: Live Score API (example placeholders)
// Many public APIs require RapidAPI keys, paid plans, and do not include local leagues.
const LIVE_API = {
  enabled: false,              // set true if you add a real API
  url: "https://example.com/live", // replace with your provider endpoint
  headers: {
    // "X-RapidAPI-Key": "YOUR_KEY",
    // "X-RapidAPI-Host": "YOUR_HOST"
  }
};

/* =========================
   DEFAULT DATA (Week 1 from your image)
========================= */
const DEFAULT_DATA = {
  weeks: ["Week 1"],
  streams: ["streamB", "streamA"],

  fixtures: {
    streamA: {
      "Week 1": [
        "FC Wonderous vs Royal Tigers",
        "Fast Eleven vs Crusaders",
        "Highlanders vs Eastern Rangers",
        "Movers vs Morning Stars"
      ]
    },
    streamB: {
      "Week 1": [
        "Liverpool vs Junior Pirates",
        "Labamba vs City Pillars",
        "Welverdiend Masters vs Xihuhuri",
        "Real Rangers vs Bhubhezi"
      ]
    }
  },

  results: {
    streamA: {
      "Week 1": [
        "FC Wonderous 0 - 2 Royal Tigers (W/O)",
        "Fast 11 0 - 2 Crusaders",
        "Highlanders 2 - 1 Eastern Rangers",
        "Movers 0 - 4 Morning Stars"
      ]
    },
    streamB: {
      "Week 1": [
        "Liverpool 2 - 0 Junior Pirates",
        "Labamba 7 - 1 City Pillars",
        "Welverdiend Masters 3 - 4 Xihuhuri",
        "Real Rangers 0 - 4 Bhubhezi"
      ]
    }
  },

  logs: {
    streamA: {
      "Week 1": [
        { pos: 1, team: "Morning Stars FC", p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 0, gd: 4, pts: 3 },
        { pos: 2, team: "Crusaders FC",     p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3 },
        { pos: 3, team: "Royal Tigers FC",  p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3 },
        { pos: 4, team: "Highlanders FC",   p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 1, gd: 1, pts: 3 },
        { pos: 5, team: "Eastern Rangers FC",p:1,w:0,d:0,l:1,gf:1,ga:2,gd:-1,pts:0 },
        { pos: 6, team: "Fast Eleven FC",   p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0 },
        { pos: 7, team: "FC Wonderous",     p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0 },
        { pos: 8, team: "Movers FC",        p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 4, gd: -4, pts: 0 }
      ]
    },
    streamB: {
      "Week 1": [
        { pos: 1, team: "Labamba FC",          p: 1, w: 1, d: 0, l: 0, gf: 7, ga: 1, gd: 6,  pts: 3 },
        { pos: 2, team: "Bhubhezi FC",         p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 0, gd: 4,  pts: 3 },
        { pos: 3, team: "Liverpool FC",        p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2,  pts: 3 },
        { pos: 4, team: "Xihuhuri FC",         p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 3, gd: 1,  pts: 3 },
        { pos: 5, team: "Welverdiend Masters", p: 1, w: 0, d: 0, l: 1, gf: 3, ga: 4, gd: -1, pts: 0 },
        { pos: 6, team: "Junior Pirates FC",   p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0 },
        { pos: 7, team: "Real Rangers",        p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 4, gd: -4, pts: 0 },
        { pos: 8, team: "City Pillars FC",     p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 7, gd: -6, pts: 0 }
      ]
    }
  },

  settings: {
    donateLink: "https://paypal.me/yourclub",     // replace
    sponsorLink: "https://wa.me/27XXXXXXXXX",     // replace
    sponsorWhatsapp: "+27XXXXXXXXX",
    sponsorEmail: "your@email.com"
  },

  liveManual: {
    status: "OFF",
    match: "",
    score: "",
    updatedAt: null
  }
};

/* =========================
   STORAGE HELPERS
========================= */
const KEY_DATA = "wsl_site_data_v1";
const KEY_UNLOCK = "wsl_admin_unlocked_v1";

function loadData() {
  const raw = localStorage.getItem(KEY_DATA);
  if (!raw) return structuredClone(DEFAULT_DATA);
  try { return JSON.parse(raw); } catch { return structuredClone(DEFAULT_DATA); }
}
function saveData(data) {
  localStorage.setItem(KEY_DATA, JSON.stringify(data, null, 2));
}
function resetData() {
  saveData(structuredClone(DEFAULT_DATA));
  return loadData();
}
function isUnlocked() {
  return localStorage.getItem(KEY_UNLOCK) === "true";
}
function setUnlocked(v) {
  localStorage.setItem(KEY_UNLOCK, v ? "true" : "false");
}

/* =========================
   UI STATE
========================= */
let data = loadData();
let activeStream = "streamB";
let activeWeek = data.weeks?.[0] || "Week 1";

/* =========================
   HERO SLIDESHOW
========================= */
const slides = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let slideIndex = 0;

function setHeroBg() {
  const heroBg = document.getElementById("heroBg");
  if (!heroBg) return;
  heroBg.style.backgroundImage = `url('${slides[slideIndex]}')`;
  slideIndex = (slideIndex + 1) % slides.length;
}
setHeroBg();
setInterval(setHeroBg, 4500);

/* =========================
   WEEK SELECT
========================= */
function buildWeekSelect() {
  const sel = document.getElementById("weekSelect");
  if (!sel) return;
  sel.innerHTML = "";
  (data.weeks || []).forEach(w => {
    const opt = document.createElement("option");
    opt.value = w;
    opt.textContent = w;
    sel.appendChild(opt);
  });
  sel.value = activeWeek;
}

/* =========================
   RENDER FUNCTIONS
========================= */
function renderLog() {
  const title = document.getElementById("logTitle");
  const table = document.getElementById("logTable");
  if (!title || !table) return;

  const streamName = activeStream === "streamA" ? "Stream A" : "Stream B";
  title.textContent = `${streamName} • ${activeWeek}`;

  const rows = data.logs?.[activeStream]?.[activeWeek] || [];
  const thead = `
    <thead>
      <tr>
        <th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th>
        <th>GF</th><th>GA</th><th>GD</th><th>Pts</th>
      </tr>
    </thead>
  `;

  const tbody = rows.map(r => {
    const highlight = (r.team || "").toLowerCase().includes("liverpool") ? " class='highlight'" : "";
    return `
      <tr${highlight}>
        <td>${r.pos}</td><td><b>${r.team}</b></td>
        <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td>
        <td>${r.gf}</td><td>${r.ga}</td><td>${r.gd}</td><td><b>${r.pts}</b></td>
      </tr>
    `;
  }).join("");

  table.innerHTML = thead + `<tbody>${tbody}</tbody>`;
}

function renderResults() {
  const title = document.getElementById("resultsTitle");
  const list = document.getElementById("resultsList");
  const history = document.getElementById("historyBox");
  if (!title || !list || !history) return;

  const streamName = activeStream === "streamA" ? "Stream A" : "Stream B";
  title.textContent = `${streamName} • ${activeWeek}`;

  const items = data.results?.[activeStream]?.[activeWeek] || [];
  list.innerHTML = items.map(x => `<li>${x}</li>`).join("") || `<li class="muted">No results yet.</li>`;

  // Build simple historical list across weeks (for this stream)
  const allWeeks = data.weeks || [];
  const histHtml = allWeeks.map(w => {
    const rs = data.results?.[activeStream]?.[w] || [];
    const lines = rs.map(r => `• ${r}`).join("<br>");
    return `<div style="margin-bottom:12px"><b>${w}</b><div class="muted">${lines || "No results"}</div></div>`;
  }).join("");

  history.innerHTML = histHtml || `<div class="muted">No history yet.</div>`;
}

function renderFixtures() {
  const title = document.getElementById("fixturesTitle");
  const list = document.getElementById("fixturesList");
  if (!title || !list) return;

  const streamName = activeStream === "streamA" ? "Stream A" : "Stream B";
  title.textContent = `${streamName} • ${activeWeek}`;

  const items = data.fixtures?.[activeStream]?.[activeWeek] || [];
  list.innerHTML = items.map(x => `<li>${x}</li>`).join("") || `<li class="muted">No fixtures yet.</li>`;
}

function renderSettings() {
  const donateLink = document.getElementById("donateLink");
  const sponsorLink = document.getElementById("sponsorLink");
  const sponsorWhatsapp = document.getElementById("sponsorWhatsapp");
  const sponsorEmail = document.getElementById("sponsorEmail");

  donateLink.href = data.settings?.donateLink || "#";
  sponsorLink.href = data.settings?.sponsorLink || "#";
  sponsorWhatsapp.textContent = data.settings?.sponsorWhatsapp || "+27XXXXXXXXX";
  sponsorEmail.textContent = data.settings?.sponsorEmail || "your@email.com";
}

function renderManualLive() {
  const box = document.getElementById("manualLiveBox");
  const updated = document.getElementById("liveUpdated");
  if (!box || !updated) return;

  const live = data.liveManual || DEFAULT_DATA.liveManual;
  const ts = live.updatedAt ? new Date(live.updatedAt) : null;

  updated.textContent = ts ? ts.toLocaleString() : "—";

  if (live.status === "OFF") {
    box.innerHTML = `<b>No live match</b><div class="muted">Check back later.</div>`;
    return;
  }

  box.innerHTML = `
    <div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <div>
        <div class="muted small">Status</div>
        <div style="font-weight:900;font-size:18px">${live.status}</div>
      </div>
      <div>
        <div class="muted small">Match</div>
        <div style="font-weight:900;font-size:18px">${live.match || "—"}</div>
      </div>
      <div>
        <div class="muted small">Score</div>
        <div style="font-weight:900;font-size:18px">${live.score || "—"}</div>
      </div>
    </div>
  `;
}

function renderAll() {
  buildWeekSelect();
  renderLog();
  renderResults();
  renderFixtures();
  renderSettings();
  renderManualLive();
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* =========================
   TABS + FILTERS
========================= */
function setActiveStream(stream) {
  activeStream = stream;
  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("active", b.dataset.tab === stream));
  renderAll();
}

function applySearchFilter() {
  const q = (document.getElementById("searchInput").value || "").toLowerCase().trim();
  if (!q) {
    renderAll();
    return;
  }

  // Filter fixtures/results/log for display only (does not change stored data)
  const fixtures = (data.fixtures?.[activeStream]?.[activeWeek] || []).filter(x => x.toLowerCase().includes(q));
  const results = (data.results?.[activeStream]?.[activeWeek] || []).filter(x => x.toLowerCase().includes(q));
  const logs = (data.logs?.[activeStream]?.[activeWeek] || []).filter(r => (r.team || "").toLowerCase().includes(q));

  // Render filtered fixtures
  const fl = document.getElementById("fixturesList");
  fl.innerHTML = fixtures.map(x => `<li>${x}</li>`).join("") || `<li class="muted">No matches found.</li>`;

  // Render filtered results
  const rl = document.getElementById("resultsList");
  rl.innerHTML = results.map(x => `<li>${x}</li>`).join("") || `<li class="muted">No results found.</li>`;

  // Render filtered log
  const table = document.getElementById("logTable");
  const thead = `
    <thead>
      <tr>
        <th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th>
        <th>GF</th><th>GA</th><th>GD</th><th>Pts</th>
      </tr>
    </thead>
  `;
  const tbody = logs.map(r => `
    <tr class="${(r.team || "").toLowerCase().includes("liverpool") ? "highlight" : ""}">
      <td>${r.pos}</td><td><b>${r.team}</b></td>
      <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td>
      <td>${r.gf}</td><td>${r.ga}</td><td>${r.gd}</td><td><b>${r.pts}</b></td>
    </tr>
  `).join("");

  table.innerHTML = thead + `<tbody>${tbody || ""}</tbody>`;
}

/* =========================
   SHARE BUTTONS
========================= */
function shareText() {
  const streamName = activeStream === "streamA" ? "Stream A" : "Stream B";
  return `WSL ${activeWeek} • ${streamName}\nCheck Welverdiend Liverpool FC updates: ${location.href}`;
}
function openWhatsApp() {
  const url = `https://wa.me/?text=${encodeURIComponent(shareText())}`;
  window.open(url, "_blank");
}
function openFacebook() {
  // FB share uses URL
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`;
  window.open(url, "_blank");
}

/* =========================
   ADMIN PANEL (localStorage)
========================= */
function setAdminMessage(msg) {
  const el = document.getElementById("adminMsg");
  if (el) el.textContent = msg;
}

function lockAdmin() {
  setUnlocked(false);
  setAdminMessage("Locked.");
}
function unlockAdmin(pass) {
  if (pass === DEFAULT_ADMIN_PASSWORD) {
    setUnlocked(true);
    setAdminMessage("Unlocked ✅");
  } else {
    setAdminMessage("Wrong password ❌");
  }
}

function refreshAdminUI() {
  const unlocked = isUnlocked();
  const editor = document.getElementById("dataEditor");
  const donateInput = document.getElementById("donateInput");
  const sponsorInput = document.getElementById("sponsorInput");
  const whatsappInput = document.getElementById("whatsappInput");
  const emailInput = document.getElementById("emailInput");

  [editor, donateInput, sponsorInput, whatsappInput, emailInput].forEach(x => {
    if (x) x.disabled = !unlocked;
  });

  if (donateInput) donateInput.value = data.settings?.donateLink || "";
  if (sponsorInput) sponsorInput.value = data.settings?.sponsorLink || "";
  if (whatsappInput) whatsappInput.value = data.settings?.sponsorWhatsapp || "";
  if (emailInput) emailInput.value = data.settings?.sponsorEmail || "";
}

function loadEditor() {
  const editor = document.getElementById("dataEditor");
  if (!editor) return;
  editor.value = JSON.stringify(data, null, 2);
}
function saveEditor() {
  const editor = document.getElementById("dataEditor");
  if (!editor) return;
  try {
    const parsed = JSON.parse(editor.value);
    data = parsed;
    saveData(data);
    activeWeek = data.weeks?.[0] || activeWeek;
    renderAll();
    refreshAdminUI();
    setAdminMessage("Data saved ✅");
  } catch (e) {
    setAdminMessage("Invalid JSON ❌");
  }
}

/* =========================
   LIVE API FETCH (optional)
========================= */
async function fetchLiveApi() {
  const status = document.getElementById("apiStatus");
  const out = document.getElementById("apiOutput");

  if (!LIVE_API.enabled) {
    status.textContent = "API: Not configured";
    out.textContent = "Set LIVE_API.enabled=true and add your url + headers in script.js";
    return;
  }

  status.textContent = "API: Fetching...";
  try {
    const res = await fetch(LIVE_API.url, { headers: LIVE_API.headers });
    const json = await res.json();
    status.textContent = "API: OK";
    out.textContent = JSON.stringify(json, null, 2);
  } catch (err) {
    status.textContent = "API: Error";
    out.textContent = String(err);
  }
}

/* =========================
   EVENTS
========================= */
document.addEventListener("click", (e) => {
  const t = e.target;

  // Tabs
  if (t.classList?.contains("tab")) setActiveStream(t.dataset.tab);

  // Share
  if (t.id === "whatsappShare") openWhatsApp();
  if (t.id === "facebookShare") openFacebook();
  if (t.id === "shareBtn") {
    if (navigator.share) {
      navigator.share({ title: "WSL Updates", text: shareText(), url: location.href }).catch(()=>{});
    } else {
      openWhatsApp();
    }
  }

  // Live refresh
  if (t.id === "refreshLiveBtn") {
    data = loadData();
    renderManualLive();
  }

  // API fetch
  if (t.id === "fetchApiBtn") fetchLiveApi();

  // Admin login/lock
  if (t.id === "adminLoginBtn") unlockAdmin(document.getElementById("adminPass").value || "");
  if (t.id === "adminLockBtn") lockAdmin();

  // Admin editor load/save/reset
  if (t.id === "loadDataBtn") loadEditor();
  if (t.id === "saveDataBtn") saveEditor();
  if (t.id === "resetDataBtn") { data = resetData(); renderAll(); refreshAdminUI(); setAdminMessage("Reset ✅"); }

  // Save settings links
  if (t.id === "saveLinksBtn") {
    if (!isUnlocked()) return setAdminMessage("Locked.");
    data.settings.donateLink = document.getElementById("donateInput").value.trim();
    data.settings.sponsorLink = document.getElementById("sponsorInput").value.trim();
    data.settings.sponsorWhatsapp = document.getElementById("whatsappInput").value.trim();
    data.settings.sponsorEmail = document.getElementById("emailInput").value.trim();
    saveData(data);
    renderSettings();
    setAdminMessage("Settings saved ✅");
  }

  // Save manual live match
  if (t.id === "saveLiveBtn") {
    if (!isUnlocked()) return setAdminMessage("Locked.");
    data.liveManual.status = document.getElementById("liveStatus").value;
    data.liveManual.match = document.getElementById("liveMatch").value.trim();
    data.liveManual.score = document.getElementById("liveScore").value.trim();
    data.liveManual.updatedAt = Date.now();
    saveData(data);
    renderManualLive();
    setAdminMessage("Live match saved ✅");
  }
});

document.addEventListener("input", (e) => {
  if (e.target?.id === "searchInput") applySearchFilter();
});

document.addEventListener("change", (e) => {
  if (e.target?.id === "weekSelect") {
    activeWeek = e.target.value;
    renderAll();
  }
});

// Initial render
renderAll();
refreshAdminUI();
if (LIVE_API.enabled) document.getElementById("apiStatus").textContent = "API: Configured";
