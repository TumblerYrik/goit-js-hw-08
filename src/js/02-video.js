import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const saveTimeThrottled = throttle(function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000); 

player.on('timeupdate', function (data) {
  saveTimeThrottled(data.seconds);
});

window.addEventListener('load', function () {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime !== null) {
    player.setCurrentTime(currentTime).catch(function (error) {
      console.error('Set current time failed', error.name, error.message);
    });
  }
});