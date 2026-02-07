function yes() {
  document.getElementById("response").innerText =
    "YAY! I knew it 💖🥰";
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}