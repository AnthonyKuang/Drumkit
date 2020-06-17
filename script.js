window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();

  const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
  div.classList.add('playing');
})

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', function(e) {
  key.classList.remove('playing');
}));