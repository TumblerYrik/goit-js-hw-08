import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE__KEY = 'videoplayer-current-time';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const saveTimeThrottled = throttle(function (currentTime) {
  localStorage.setItem(STORAGE__KEY, currentTime);
}, 1000); 

player.on('timeupdate', function (data) {
  saveTimeThrottled(data.seconds);
});

window.addEventListener('load', function () {
  const currentTime = localStorage.getItem(STORAGE__KEY);
  if (currentTime !== null) {
    player.setCurrentTime(currentTime).catch(function (error) {
      console.error('Set current time failed', error.name, error.message);
    });
  }
});