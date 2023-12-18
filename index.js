let imageToCache = new Image();
imageToCache.src = "ILTQq.png";


function init(){
    let video = document.getElementsByTagName('video')[0];
    let playPauseBtn = document.getElementsByTagName('button')[0];
    let stopBtn = document.getElementsByTagName('button')[1];
    let pngCached = document.getElementsByTagName("section")[1];
    pngCached.appendChild(imageToCache);
    playPauseBtn.addEventListener('click', event=> {
        if (video.paused) {
          video.play();
          console.log("hej");
          playPauseBtn.textContent = 'Pause';
        } else {
          video.pause();
          playPauseBtn.textContent = 'Play';
        }
      });
  
      stopBtn.addEventListener('click', event=> {
        video.pause();
        video.currentTime = 0;
        console.log("hej");
        playPauseBtn.textContent = 'Play';
      });
  
      video.addEventListener('ended', event=> {
        playPauseBtn.textContent = 'Play';
        console.log("hej");
      });
}
window.onload = init();

function useCachedImage(){
    let cachedImage = new Image();
    cachedImage.src = "bild.png";
    
}

function video1(){
    
    
 
}