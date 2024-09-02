const progressBar=document.getElementById('progressBar')
const song=document.getElementById('mySong')
const controlIcon=document.getElementById('ctrl')
song.onloadedmetadata=function(){
    progressBar.max=song.duration;
    progressBar.value=song.currentTime;
}
controlIcon.addEventListener('click',myfunction)
function myfunction(){
    if(controlIcon.classList.contains('bx-pause')){
        song.pause()
        controlIcon.classList.remove('bx-pause')
        controlIcon.classList.add('bx-play')
    }else{
        song.play()
        controlIcon.classList.add('bx-pause')
        controlIcon.classList.remove('bx-play')
    }
}
if(song.play()){
    setInterval(() => {
        progressBar.value=song.currentTime
    }, 1000);
}
progressBar.onchange=function(){
    song.play()
    song.currentTime=progressBar.value;
    controlIcon.classList.add('bx-pause')
    controlIcon.classList.remove('bx-play')
}
song.onended=function(){
    song.pause()
    controlIcon.classList.add('bx-play')
}