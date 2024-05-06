// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const button = document.getElementById("start-talking");
  button.addEventListener("click", () => smilingFace());

  const voiceSelector = document.getElementById("voice-select");
}

function smilingFace(){
  const picture = document.getElementById("smiling-face");
  picture.src = "assets/images/smiling-open.png";
}