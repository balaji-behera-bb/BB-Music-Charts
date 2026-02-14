const chartData = {
  "2026-02-12": [
    { pos: 1, title: "Abracadabra", artist: "Lady Gaga", image: "https://via.placeholder.com/50", last: 1 },
    { pos: 2, title: "DTMF", artist: "Bad Bunny", image: "https://via.placeholder.com/50", last: 3 },
    { pos: 3, title: "Die With a Smile", artist: "Lady Gaga & Bruno Mars", image: "https://via.placeholder.com/50", last: 2 },
    { pos: 4, title: "APT.", artist: "ROSÉ & Bruno Mars", image: "https://via.placeholder.com/50", last: 4 },
    { pos: 5, title: "Birds of a Feather", artist: "Billie Eilish", image: "https://via.placeholder.com/50", last: 5 },
    { pos: 6, title: "Not Like Us", artist: "Kendrick Lamar", image: "https://via.placeholder.com/50", last: 6 },
    { pos: 7, title: "Cruel Summer", artist: "Taylor Swift", image: "https://via.placeholder.com/50", last: 8 },
    { pos: 8, title: "Espresso", artist: "Sabrina Carpenter", image: "https://via.placeholder.com/50", last: 7 },
    { pos: 9, title: "Greedy", artist: "Tate McRae", image: "https://via.placeholder.com/50", last: 9 },
    { pos: 10, title: "Water", artist: "Tyla", image: "https://via.placeholder.com/50", last: 10 },
    { pos: 11, title: "Calm Down", artist: "Rema & Selena Gomez", image: "https://via.placeholder.com/50", last: 12 },
    { pos: 12, title: "Paint the Town Red", artist: "Doja Cat", image: "https://via.placeholder.com/50", last: 11 },
    { pos: 13, title: "Seven", artist: "Jung Kook", image: "https://via.placeholder.com/50", last: 13 },
    { pos: 14, title: "Unholy", artist: "Sam Smith & Kim Petras", image: "https://via.placeholder.com/50", last: 14 },
    { pos: 15, title: "As It Was", artist: "Harry Styles", image: "https://via.placeholder.com/50", last: 15 }
  ],

  "2026-02-13": [
    { pos: 1, title: "Abracadabra", artist: "Lady Gaga", image: "https://via.placeholder.com/50", last: 1 },
    { pos: 2, title: "Die With a Smile", artist: "Lady Gaga & Bruno Mars", image: "https://via.placeholder.com/50", last: 3 },
    { pos: 3, title: "DTMF", artist: "Bad Bunny", image: "https://via.placeholder.com/50", last: 2 },
    { pos: 4, title: "APT.", artist: "ROSÉ & Bruno Mars", image: "https://via.placeholder.com/50", last: 4 },
    { pos: 5, title: "Birds of a Feather", artist: "Billie Eilish", image: "https://via.placeholder.com/50", last: 5 },
    { pos: 6, title: "Not Like Us", artist: "Kendrick Lamar", image: "https://via.placeholder.com/50", last: 6 },
    { pos: 7, title: "Espresso", artist: "Sabrina Carpenter", image: "https://via.placeholder.com/50", last: 8 },
    { pos: 8, title: "Cruel Summer", artist: "Taylor Swift", image: "https://via.placeholder.com/50", last: 7 },
    { pos: 9, title: "Greedy", artist: "Tate McRae", image: "https://via.placeholder.com/50", last: 9 },
    { pos: 10, title: "Water", artist: "Tyla", image: "https://via.placeholder.com/50", last: 10 },
    { pos: 11, title: "Paint the Town Red", artist: "Doja Cat", image: "https://via.placeholder.com/50", last: 12 },
    { pos: 12, title: "Calm Down", artist: "Rema & Selena Gomez", image: "https://via.placeholder.com/50", last: 11 },
    { pos: 13, title: "Seven", artist: "Jung Kook", image: "https://via.placeholder.com/50", last: 13 },
    { pos: 14, title: "Unholy", artist: "Sam Smith & Kim Petras", image: "https://via.placeholder.com/50", last: 14 },
    { pos: 15, title: "As It Was", artist: "Harry Styles", image: "https://via.placeholder.com/50", last: 15 }
  ]
};

// Default load
const firstDate = Object.keys(chartData)[0];
datePicker.value = firstDate;
renderChart(firstDate);
