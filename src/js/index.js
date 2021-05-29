
var vibes = [
  'Everbody is great! 🤟',
  'Mango fruit is great! 🥭',
  'My mother is great! 💌',
  'My friends are awsome! ❤️',
  'Life is great! ⛱️',
]

setInterval(
  () => {
    var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

    document.querySelector(".vibe").innerHTML = null;
    document.querySelector(".vibe").innerHTML = vibe;
  },
  1500
)
