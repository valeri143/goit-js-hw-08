import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe= document.querySelector('#vimeo-player')
const player = new Player(iframe);

player.on('timeupdate', throttle(function(duration) {
    localStorage.setItem('videoplayer-current-time',JSON.stringify(duration));
}), 1000);
player.setCurrentTime().then(function(seconds) {
   localStorage.getItem('videoplayer-current-time');
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});