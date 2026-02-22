const startDate = new Date("2026-02-13");
const endDate = new Date("2026-02-28");

const masterPool = [
"Die With A Smile - Lady Gaga, Bruno Mars",
"APT. - ROSÉ, Bruno Mars",
"Beautiful Things - Benson Boone",
"Espresso - Sabrina Carpenter",
"Birds of a Feather - Billie Eilish",
"Greedy - Tate McRae",
"Houdini - Dua Lipa",
"Water - Tyla",
"Calm Down - Rema, Selena Gomez",
"Chaleya - Arijit Singh",
"Satranga - Arijit Singh",
"O Maahi - Arijit Singh",
"Heeriye - Jasleen Royal, Arijit Singh",
"Husn - Anuv Jain",
"With You - AP Dhillon",
"Obsessed - Riar Saab",
"Tauba Tauba - Karan Aujla",
"Gata Only - FloyyMenor, Cris MJ"
];

let chartData = {};

function formatDate(date) {
return date.toISOString().split("T")[0];
}

function splitSong(str) {
const parts = str.split(" - ");
return { title: parts[0], artist: parts[1] };
}

function generateInitialDay() {
return masterPool.slice(0, 15).map((song, index) => {
const { title, artist } = splitSong(song);
return {
pos: index + 1,
title,
artist,
last: index + 1,
cover: "https://via.placeholder.com/60"
};
});
}

function shiftChart(prevDay, dateObj) {
let newDay = JSON.parse(JSON.stringify(prevDay));

newDay.forEach(song => {
let movement = Math.floor(Math.random() * 3) - 1; // -1,0,+1
song.pos = Math.max(1, Math.min(15, song.pos + movement));
});

newDay.sort((a,b) => a.pos - b.pos);

// force unique positions
newDay.forEach((song,i) => song.pos = i+1);

// Valentine boost (Feb 14)
if (formatDate(dateObj) === "2026-02-14") {
newDay.forEach(song => {
if (song.title === "Heeriye" || song.title === "Husn") {
song.pos = Math.max(1, song.pos - 3);
}
});
}

// Punjabi spike (Feb 20)
if (formatDate(dateObj) === "2026-02-20") {
newDay.forEach(song => {
if (song.title === "Tauba Tauba") {
song.pos = 2;
}
});
}

// New #1 takeover (Feb 25)
if (formatDate(dateObj) === "2026-02-25") {
newDay.forEach(song => {
if (song.title === "Beautiful Things") {
song.pos = 1;
}
});
}

newDay.sort((a,b) => a.pos - b.pos);
newDay.forEach((song,i) => {
song.last = prevDay.find(s=>s.title===song.title)?.pos || 0;
song.pos = i+1;
});

return newDay;
}

// generate all days
let current = generateInitialDay();
let dateCursor = new Date(startDate);

while (dateCursor <= endDate) {
chartData[formatDate(dateCursor)] = current;
let nextDate = new Date(dateCursor);
nextDate.setDate(nextDate.getDate()+1);
current = shiftChart(current, nextDate);
dateCursor.setDate(dateCursor.getDate()+1);
}

// DOM rendering
const chartContainer = document.getElementById("chart");
const dateInput = document.getElementById("datePicker");

function getArrow(current,last){
if(last===0)return"NEW";
const movement=last-current;
if(movement>0)return`↑ ${movement}`;
if(movement<0)return`↓ ${Math.abs(movement)}`;
return"–";
}

function renderChart(date){
chartContainer.innerHTML="";
const songs=chartData[date];
if(!songs)return;

songs.forEach(song=>{
const row=document.createElement("div");
row.className="chart-row";
row.innerHTML=`
<div class="pos">${song.pos}</div>
<div class="cover"><img src="${song.cover}"></div>
<div class="title">${song.title}</div>
<div class="artist">${song.artist}</div>
<div class="last">${getArrow(song.pos,song.last)}</div>
`;
chartContainer.appendChild(row);
});
}

dateInput.addEventListener("change",(e)=>renderChart(e.target.value));
dateInput.value="2026-02-13";
renderChart("2026-02-13");
