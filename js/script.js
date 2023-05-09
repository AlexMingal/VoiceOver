let isPlay = false;

const actorPlayer = document.querySelector('.actor__player');
const playBtn = document.querySelector('.play__icon')
let audioCurTime = document.querySelector('.sample__duration');
const audio = new Audio();
// let audioCurTime;

playBtn.addEventListener('click', ()=> {
  audio.addEventListener("timeupdate", updateProgress);
  if (!isPlay) {playAudio()}
  else {pauseAudio()}
  });

function playAudio() {
  audio.src = '../sounds/James.mp3';
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
  toggleBtnIcon();
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
  toggleBtnIcon(); }

function toggleBtnIcon() {
  if (isPlay == false) { playBtn.style.backgroundImage = "url('./img/png/play.png')"}
  if (isPlay == true) {  playBtn.style.backgroundImage = "url('./img/png/pause.png')"}
}

function updateProgress(e) {
  const { duration, currentTime } = e.target;
  // const progressPercent = (currentTime / duration) * 100;
  // progress.style.width = `${progressPercent}%`;
  let zeros = '00:0',
      seconds;
  seconds = Math.floor(currentTime);
  if (seconds >= 10) {zeros = '00:'};
  if (seconds > 59) {zeros = '01:0'; seconds -= 60;};
  if (seconds > 69) {zeros = '01:';};
  audioCurTime.textContent = `${zeros}${seconds}`;
  if (currentTime == duration) { pauseAudio(); };
}