//import { galleryItems } from './gallery-items'

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}

setCurrentTime();
function setCurrentTime() {
  if (player.setCurrentTime(localStorage.getItem(CURRENT_TIME))) {
  }
}
player.on('timeupdate', throttle(onPlay, 1000));
