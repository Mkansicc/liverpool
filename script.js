/* =========================
   CONFIG
========================= */
const DEFAULT_ADMIN_PASSWORD = "wsladmin";

// Optional Live Score API placeholder
const LIVE_API = {
  enabled: false,
  url: "https://example.com/live",
  headers: {}
};

/* =========================
   DEFAULT DATA
   - Fixtures: Stream A & B Week 1–8 (from your attached fixture sheets)
   - Results/Logs: Week 1 (from your log image)
   - You can add Week 9–14 in Admin later
========================= */
const DEFAULT_DATA = {
  weeks: ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7","Week 8"],
  streams: ["streamB","streamA"],

  fixtures: {
    streamA: {
      "Week 1": [
        "FC Wondrous - Royal Tigers",
        "Fast 11 - Crusaders",
        "Highlanders - Eastern Rangers",
        "Movers FC - Morning Stars"
      ],
      "Week 2": [
        "Crusaders - FC Wondrous",
        "Royal Tigers - Eastern Rangers",
        "Morning Stars - Fast 11",
        "Movers FC - Highlanders"
      ],
      "Week 3": [
        "Eastern Rangers - FC Wondrous",
        "Crusaders - Morning Stars",
        "Royal Tigers - Movers",
        "Highlanders - Fast 11"
      ],
      "Week 4": [
        "FC Wondrous - Morning Stars",
        "Movers - Eastern Rangers",
        "Highlanders - Crusaders",
        "Fast 11 - Royal Tigers"
      ],
      "Week 5": [
        "FC Wondrous - Movers",
        "Morning Stars - Highlanders",
        "Eastern Rangers - Fast 11",
        "Royal Tigers - Crusaders"
      ],
      "Week 6": [
        "Highlanders - FC Wondrous",
        "Movers - Fast 11",
        "Morning Stars - Royal Tigers",
        "Crusaders - Eastern Rangers"
      ],
      "Week 7": [
        "Fast 11 - FC Wondrous",
        "Royal Tigers - Highlanders",
        "Movers - Crusaders",
        "Eastern Rangers - Morning Stars"
      ],
      "Week 8": [
        "Royal Tigers - FC Wondrous",
        "Crusaders - Fast 11",
        "Eastern Rangers - Highlanders",
        "Morning Stars - Movers"
      ]
    },

    streamB: {
      "Week 1": [
        "Liverpool FC - Junior Pirates FC",
        "Labamba FC - City Pillars FC",
        "W/Masters FC - Xihuhuri FC",
        "Real Rangers FC - Bhubhezi FC"
      ],
      "Week 2": [
        "City Pillars - Liverpool",
        "Junior Pirates - Xihuhuri",
        "Bhubhezi - Labamba",
        "Real Rangers - W/Masters"
      ],
      "Week 3": [
        "Xihuhuri - Liverpool",
        "City Pillars - Bhubhezi",
        "Real Rangers - Junior Pirates",
        "W/Masters - Labamba"
      ],
      "Week 4": [
        "Liverpool - Bhubhezi",
        "Xihuhuri - Real Rangers",
        "City Pillars - W/Masters",
        "Labamba - Junior Pirates"
      ],
      "Week 5": [
        "Real Rangers - Liverpool",
        "Bhubhezi - W/Masters",
        "Xihuhuri - Labamba",
        "Junior Pirates - City Pillars"
      ],
      "Week 6": [
        "W/Masters - Liverpool",
        "Labamba - Real Rangers",
        "Bhubhezi - Junior Pirates",
        "City Pillars - Xihuhuri"
      ],
      "Week 7": [
        "Liverpool - Labamba",
        "Junior Pirates - W/Masters",
        "Real Rangers - City Pillars",
        "Xihuhuri - Bhubhezi"
      ],
      "Week 8": [
        "Junior Pirates - Liverpool",
        "City Pillars - Labamba",
        "Xihuhuri - W/Masters",
        "Bhubhezi - Real Rangers"
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
        { pos: 2, team: "Crusaders FC", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3 },
        { pos: 3, team: "Royal Tigers FC", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3 },
        { pos: 4, team: "Highlanders FC", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 1, gd: 1, pts: 3 },
        { pos: 5, team: "Eastern Rangers FC", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 2, gd: -1, pts: 0 },
        { pos: 6, team: "Fast Eleven FC", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0 },
        { pos: 7, team: "FC Wonderous", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0 },
        { pos: 8, team: "Movers FC", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 4, gd: -4, pts: 0 }
      ]
    },
    streamB: {
      "Week 1": [
        { pos: 1, team: "Labamba FC", p: 1, w: 1, d: 0, l: 0, gf: 7, ga: 1, gd: 6, pts: 3 },
        { pos: 2, team: "Bhubhezi FC", p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 0, gd: 4, pts: 3 },
        { pos: 3, team: "Liverpool FC", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: 2, pts: 3 },
        { pos: 4, team: "Xihuhuri FC", p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 3, gd: 1, pts: 3 },
        { pos: 5, team: "Welverdiend Masters", p: 1, w: 0, d: 0, l: 1, gf: 3, ga: 4, gd: -1, pts: 0 },
        { pos: 6, team: "Junior Pirates FC", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, gd: -2, pts: 0 },
        { pos: 7, team: "Real Rangers", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 4, gd: -4, pts: 0 },
        { pos: 8, team: "City Pillars FC", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 7, gd: -6, pts: 0 }
      ]
    }
  },

  settings: {
    donateLink: "https://paypal.me/yourclub",
    sponsorLink: "https://wa.me/27XXXXXXXXX",
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
const KEY_DATA = "wsl_site_data_v2";
const KEY_UNLOCK = "wsl_admin_unlocked_v2";

function loadData() {
  const raw = localStorage.getItem(KEY_DATA);
  if (!raw) return structuredClone(DEFAULT_DATA);
  try { return JSON.parse(raw); } catch { return structuredClone(DEFAULT_DATA); }
}
function saveData(d) { localStorage.setItem(KEY_DATA, JSON.stringify(d, null, 2)); }
function resetData() { saveData(structuredClone(DEFAULT_DATA)); return loadData(); }
function isUnlocked() { return localStorage.getItem(KEY_UNLOCK) === "true"; }
function setUnlocked(v) { localStorage.setItem(KEY_UNLOCK, v ? "true" : "false"); }

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
   WEEK BUTTONS
========================= */
function buildWeekButtons() {
  const wrap = document.getElementById("weekButtons");
  if (!wrap) return;

  wrap.innerHTML = "";
  (data.weeks || []).forEach(w => {
    const btn = document.createElement("button");
    btn.className = "week-btn" + (w === activeWeek ? " active" : "");
    btn.type = "button";
    btn.textContent = w;
    btn.dataset.week = w;
    wrap.appendChild(btn);
  });
}

/* =========================
   RENDER
========================= */
function streamLabel() {
  return activeStream === "streamA" ? "Stream A" : "Stream B";
}

function renderLog() {
  const title = document.getElementById("logTitle");
  const table = document.getElementById("logTable");
  if (!title || !table) return;

  title.textContent = `${streamLabel()} • ${activeWeek}`;

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
    const hi = (r.team || "").toLowerCase().includes("liverpool") ? " class='highlight'" : "";
    return `
      <tr${hi}>
        <td>${r.pos}</td><td><b>${r.team}</b></td>
        <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td>
        <td>${r.gf}</td><td>${r.ga}</td><td>${r.gd}</td><td><b>${r.pts}</b></td>
      </tr>
    `;
  }).join("");

  table.innerHTML = thead + `<tbody>${tbody || ""}</tbody>`;
  if (!rows.length) {
    table.innerHTML = thead + `<tbody><tr><td colspan="10" class="muted">No log table for this week yet (add it in Admin).</td></tr></tbody>`;
  }
}

function renderResults() {
  const title = document.getElementById("resultsTitle");
  const list = document.getElementById("resultsList");
  const history = document.getElementById("historyBox");
  if (!title || !list || !history) return;

  title.textContent = `${streamLabel()} • ${activeWeek}`;

  const items = data.results?.[activeStream]?.[activeWeek] || [];
  list.innerHTML = items.map(x => `<li>${x}</li>`).join("") || `<li class="muted">No results yet for this week (add in Admin).</li>`;

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

  title.textContent = `${streamLabel()} • ${activeWeek}`;

  const items = data.fixtures?.[activeStream]?.[activeWeek] || [];
  list.innerHTML = items.map(x => `<li>${x}</li>`).join("") || `<li class="muted">No fixtures yet for this week.</li>`;
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
      <div><div class="muted small">Status</div><div style="font-weight:900;font-size:18px">${live.status}</div></div>
      <div><div class="muted small">Match</div><div style="font-weight:900;font-size:18px">${live.match || "—"}</div></div>
      <div><div class="muted small">Score</div><div style="font-weight:900;font-size:18px">${live.score || "—"}</div></div>
    </div>
  `;
}

function renderAll() {
  buildWeekButtons();
  renderLog();
  renderResults();
  renderFixtures();
  renderSettings();
  renderManualLive();
  document.getElementById("year").textContent = new Date().getFullYear();
}

function setActiveStream(stream) {
  activeStream = stream;
  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("active", b.dataset.tab === stream));
  renderAll();
}

function setActiveWeek(w) {
  activeWeek = w;
  document.querySelectorAll(".week-btn").forEach(b => b.classList.toggle("active", b.dataset.week === w));
  renderAll();
}

/* =========================
   SEARCH FILTER (DISPLAY ONLY)
========================= */
function applySearchFilter() {
  const q = (document.getElementById("searchInput").value || "").toLowerCase().trim();
  if (!q) return renderAll();

  const fixtures = (data.fixtures?.[activeStream]?.[activeWeek] || []).filter(x => x.toLowerCase().includes(q));
  const results = (data.results?.[activeStream]?.[activeWeek] || []).filter(x => x.toLowerCase().includes(q));
  const logs = (data.logs?.[activeStream]?.[activeWeek] || []).filter(r => (r.team || "").toLowerCase().includes(q));

  document.getElementById("fixturesList").innerHTML =
    fixtures.map(x => `<li>${x}</li>`).join("") || `<li class="muted">No matches found.</li>`;

  document.getElementById("resultsList").innerHTML =
    results.map(x => `<li>${x}</li>`).join("") || `<li class="muted">No results found.</li>`;

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
  return `WSL ${activeWeek} • ${streamLabel()}\nWelverdiend Liverpool FC updates: ${location.href}`;
}
function openWhatsApp() {
  window.open(`https://wa.me/?text=${encodeURIComponent(shareText())}`, "_blank");
}
function openFacebook() {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, "_blank");
}

/* =========================
   ADMIN
========================= */
function setAdminMessage(msg) {
  const el = document.getElementById("adminMsg");
  if (el) el.textContent = msg;
}
function lockAdmin() { setUnlocked(false); setAdminMessage("Locked."); refreshAdminUI(); }
function unlockAdmin(pass) {
  if (pass === DEFAULT_ADMIN_PASSWORD) { setUnlocked(true); setAdminMessage("Unlocked ✅"); }
  else { setAdminMessage("Wrong password ❌"); }
  refreshAdminUI();
}
function refreshAdminUI() {
  const unlocked = isUnlocked();
  const editor = document.getElementById("dataEditor");
  const donateInput = document.getElementById("donateInput");
  const sponsorInput = document.getElementById("sponsorInput");
  const whatsappInput = document.getElementById("whatsappInput");
  const emailInput = document.getElementById("emailInput");

  [editor, donateInput, sponsorInput, whatsappInput, emailInput].forEach(x => { if (x) x.disabled = !unlocked; });

  if (donateInput) donateInput.value = data.settings?.donateLink || "";
  if (sponsorInput) sponsorInput.value = data.settings?.sponsorLink || "";
  if (whatsappInput) whatsappInput.value = data.settings?.sponsorWhatsapp || "";
  if (emailInput) emailInput.value = data.settings?.sponsorEmail || "";
}
function loadEditor() {
  const editor = document.getElementById("dataEditor");
  if (editor) editor.value = JSON.stringify(data, null, 2);
}
function saveEditor() {
  const editor = document.getElementById("dataEditor");
  if (!editor) return;
  try {
    const parsed = JSON.parse(editor.value);
    data = parsed;
    saveData(data);

    // keep activeWeek valid
    if (!data.weeks.includes(activeWeek)) activeWeek = data.weeks[0] || "Week 1";

    renderAll();
    refreshAdminUI();
    setAdminMessage("Data saved ✅");
  } catch {
    setAdminMessage("Invalid JSON ❌");
  }
}

/* =========================
   LIVE API (OPTIONAL)
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

  if (t.classList?.contains("tab")) setActiveStream(t.dataset.tab);
  if (t.classList?.contains("week-btn")) setActiveWeek(t.dataset.week);

  if (t.id === "whatsappShare") openWhatsApp();
  if (t.id === "facebookShare") openFacebook();

  if (t.id === "shareBtn") {
    if (navigator.share) navigator.share({ title: "WSL Updates", text: shareText(), url: location.href }).catch(()=>{});
    else openWhatsApp();
  }

  if (t.id === "refreshLiveBtn") { data = loadData(); renderManualLive(); }
  if (t.id === "fetchApiBtn") fetchLiveApi();

  if (t.id === "resetBtn") {
    document.getElementById("searchInput").value = "";
    renderAll();
  }

  if (t.id === "adminLoginBtn") unlockAdmin(document.getElementById("adminPass").value || "");
  if (t.id === "adminLockBtn") lockAdmin();

  if (t.id === "loadDataBtn") loadEditor();
  if (t.id === "saveDataBtn") saveEditor();
  if (t.id === "resetDataBtn") { data = resetData(); renderAll(); refreshAdminUI(); setAdminMessage("Reset ✅"); }

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

// Initial render
renderAll();
refreshAdminUI();
if (LIVE_API.enabled) document.getElementById("apiStatus").textContent = "API: Configured";
