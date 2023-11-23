//import { galleryItems } from './gallery-items'

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}
function setCurrentTime() {
  if (!localStorage.getItem(CURRENT_TIME, seconds)) {
    return;
  }
 }
 player.on('timeupdate', throttle(onPlay, 1000));
