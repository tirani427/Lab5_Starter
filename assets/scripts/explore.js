// explore.js

window.addEventListener('DOMContentLoaded', init);

const voice_source = window.SpeechSynthesis;

function init() {
  // TODO
  const button = document.getElementById("start-talking");
  button.addEventListener("click", () => smilingFace());

  const voiceSelector = document.getElementById("voice-select");

  const voice_options = document.getElementById("voice-select");

  addVoices(voice_options);

  const speakingText = document.getElementById("text-to-speak");

  speakingText.addEventListener("change", () => speakingText());


}

function smilingFace(){
  const picture = document.getElementById("smiling-face");
  picture.src = "assets/images/smiling-open.png";
}

function addVoices(selector_list){
  let voices = voice_source.getVoices();

  for(let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${vocies[i].lang})`;

    if(voices[i].default){
      option.textContent = `${voices[i].name} (${vocies[i].lang}) -- DEFAULT`;
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);

    selector_list.appendChild(option);

  }
}

function speakingText(){

}
