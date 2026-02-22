const chartData = {

  "2026-02-15": generateDay(1),
  "2026-02-16": generateDay(2),
  "2026-02-17": generateDay(3),
  "2026-02-18": generateDay(4),
  "2026-02-19": generateDay(5),
  "2026-02-20": generateDay(6),
  "2026-02-21": generateDay(7)

};

function generateDay(shift) {
  const songs = [
    "Die With A Smile",
    "APT.",
    "Beautiful Things",
    "Birds of a Feather",
    "Greedy",
    "Gata Only",
    "Cruel Summer",
    "Espresso",
    "Calm Down",
    "Houdini",
    "Paint The Town Red",
    "Water",
    "As It Was",
    "Levitating",
    "Good Luck, Babe!"
  ];

  const artists = [
    "Lady Gaga, Bruno Mars",
    "ROSÉ, Bruno Mars",
    "Benson Boone",
    "Billie Eilish",
    "Tate McRae",
    "FloyyMenor, Cris MJ",
    "Taylor Swift",
    "Sabrina Carpenter",
    "Rema, Selena Gomez",
    "Dua Lipa",
    "Doja Cat",
    "Tyla",
    "Harry Styles",
    "Dua Lipa",
    "Chappell Roan"
  ];

  return songs.map((title, i) => {
    const newPos = ((i + shift) % 15);
    return {
      pos: newPos + 1,
      title: songs[newPos],
      artist: artists[newPos],
      last: i + 1
    };
  }).sort((a, b) => a.pos - b.pos);
}

const chartContainer = document.getElementById("chart");
const dateInput = document.getElementById("datePicker");

function getArrow(current, last) {
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

    row.innerHTML = `
      <div class="pos">${song.pos}</div>
      <div class="cover">
        <img src="${image}" alt="${song.title}">
      </div>
      <div class="title">${song.title}</div>
      <div class="artist">${song.artist}</div>
      <div class="last">${getArrow(song.pos, song.last)}</div>
    `;

    chartContainer.appendChild(row);
  }
}

dateInput.addEventListener("change", (e) => {
  renderChart(e.target.value);
});

dateInput.value = "2026-02-21";
renderChart("2026-02-21");
