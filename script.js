const chartData = {
  "2026-02-12": [
    { pos: 1, title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", last: 2 },
    { pos: 2, title: "APT.", artist: "ROSÉ, Bruno Mars", last: 1 },
    { pos: 3, title: "Birds of a Feather", artist: "Billie Eilish", last: 4 },
    { pos: 4, title: "Beautiful Things", artist: "Benson Boone", last: 3 },
    { pos: 5, title: "Gata Only", artist: "FloyyMenor, Cris MJ", last: 6 },
    { pos: 6, title: "Greedy", artist: "Tate McRae", last: 7 },
    { pos: 7, title: "Cruel Summer", artist: "Taylor Swift", last: 8 },
    { pos: 8, title: "Espresso", artist: "Sabrina Carpenter", last: 9 },
    { pos: 9, title: "Calm Down", artist: "Rema, Selena Gomez", last: 10 },
    { pos: 10, title: "Houdini", artist: "Dua Lipa", last: 11 },
    { pos: 11, title: "Paint The Town Red", artist: "Doja Cat", last: 12 },
    { pos: 12, title: "Water", artist: "Tyla", last: 13 },
    { pos: 13, title: "As It Was", artist: "Harry Styles", last: 14 },
    { pos: 14, title: "Levitating", artist: "Dua Lipa", last: 15 },
    { pos: 15, title: "Stay", artist: "The Kid LAROI, Justin Bieber", last: null }
  ],

  "2026-02-13": [
    { pos: 1, title: "APT.", artist: "ROSÉ, Bruno Mars", last: 2 },
    { pos: 2, title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", last: 1 },
    { pos: 3, title: "Birds of a Feather", artist: "Billie Eilish", last: 3 },
    { pos: 4, title: "Gata Only", artist: "FloyyMenor, Cris MJ", last: 5 },
    { pos: 5, title: "Beautiful Things", artist: "Benson Boone", last: 4 },
    { pos: 6, title: "Greedy", artist: "Tate McRae", last: 6 },
    { pos: 7, title: "Cruel Summer", artist: "Taylor Swift", last: 7 },
    { pos: 8, title: "Espresso", artist: "Sabrina Carpenter", last: 8 },
    { pos: 9, title: "Calm Down", artist: "Rema, Selena Gomez", last: 9 },
    { pos: 10, title: "Houdini", artist: "Dua Lipa", last: 10 },
    { pos: 11, title: "Paint The Town Red", artist: "Doja Cat", last: 11 },
    { pos: 12, title: "Water", artist: "Tyla", last: 12 },
    { pos: 13, title: "As It Was", artist: "Harry Styles", last: 13 },
    { pos: 14, title: "Levitating", artist: "Dua Lipa", last: 14 },
    { pos: 15, title: "Fortnight", artist: "Taylor Swift, Post Malone", last: null }
  ],

  "2026-02-14": [
    { pos: 1, title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", last: 2 },
    { pos: 2, title: "APT.", artist: "ROSÉ, Bruno Mars", last: 1 },
    { pos: 3, title: "Beautiful Things", artist: "Benson Boone", last: 5 },
    { pos: 4, title: "Birds of a Feather", artist: "Billie Eilish", last: 3 },
    { pos: 5, title: "Greedy", artist: "Tate McRae", last: 6 },
    { pos: 6, title: "Gata Only", artist: "FloyyMenor, Cris MJ", last: 4 },
    { pos: 7, title: "Cruel Summer", artist: "Taylor Swift", last: 7 },
    { pos: 8, title: "Espresso", artist: "Sabrina Carpenter", last: 8 },
    { pos: 9, title: "Calm Down", artist: "Rema, Selena Gomez", last: 9 },
    { pos: 10, title: "Houdini", artist: "Dua Lipa", last: 10 },
    { pos: 11, title: "Paint The Town Red", artist: "Doja Cat", last: 11 },
    { pos: 12, title: "Water", artist: "Tyla", last: 12 },
    { pos: 13, title: "As It Was", artist: "Harry Styles", last: 13 },
    { pos: 14, title: "Levitating", artist: "Dua Lipa", last: 14 },
    { pos: 15, title: "Good Luck, Babe!", artist: "Chappell Roan", last: null }
  ]
};

const chartContainer = document.getElementById("chart");
const dateInput = document.getElementById("datePicker");

function getArrow(current, last) {
  if (!last) return "";
  const movement = last - current;
  if (movement > 0) return `↑ ${movement}`;
  if (movement < 0) return `↓ ${Math.abs(movement)}`;
  return "–";
}

function getCover(song) {
  const query = encodeURIComponent(`${song.title} ${song.artist}`);
  return `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`;
}

async function fetchCover(song) {
  try {
    const res = await fetch(getCover(song));
    const data = await res.json();
    if (data.results && data.results[0]) {
      return data.results[0].artworkUrl100;
    }
  } catch (e) {}
  return "https://via.placeholder.com/100";
}

async function renderChart(date) {
  chartContainer.innerHTML = "";
  const songs = chartData[date];
  if (!songs) return;

  for (const song of songs) {
    const image = await fetchCover(song);

    const row = document.createElement("div");
    row.className = "chart-row";

    const isNew = song.last === null;

    row.innerHTML = `
      <div class="pos">${song.pos}</div>

      <div class="cover">
        <img src="${image}" alt="${song.title}">
      </div>

      <div class="title">
        ${song.title}
        ${isNew ? `<span class="badge">NEW</span>` : ""}
      </div>

      <div class="artist">${song.artist}</div>

      <div class="last">
        ${isNew ? "—" : getArrow(song.pos, song.last)}
      </div>
    `;

    chartContainer.appendChild(row);
  }
}

dateInput.addEventListener("change", (e) => {
  renderChart(e.target.value);
});

const today = "2026-02-14";
dateInput.value = today;
renderChart(today);
