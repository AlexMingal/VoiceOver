let isPlay = false;

const actorPlayer = document.querySelector('.actor__player');
const playBtn = document.querySelector('.play__icon')
const audio = new Audio();

playBtn.addEventListener('click', ()=> {
  if (!isPlay) {playAudio()}
  else {pauseAudio()}
  playBtn.classList.toggle('pause')
  });


function playAudio() {
  audio.src = '../sounds/James.mp3';
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
  playBtn.style.backgroundImage = "url('./img/png/pause.png')"
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
  playBtn.style.backgroundImage = "url('./img/png/play.png')"
}
