console.log("welcome to spotify");

// use audio
let audio = new Audio('/Spotify Clone/spotify images/1.mp3');

// initialization
let progress_bar = document.getElementById('progress_bar');
let play_btn = document.getElementById('play_btn');
let backward_btn = document.getElementById('backward_btn');
let forward_btn = document.getElementById('forward_btn');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItemPlayBtn = Array.from(document.getElementsByClassName('songItemPlayBtn'));
let songIndex = 0;
let song_item = Array.from(document.getElementsByClassName('song_item'));
let song = [
    { songName: "khalasi", filePath: '/Spotify Clone/spotify images/1.mp3', coverPath: '/Spotify Clone/spotify images/cover1.jpg' },
    { songName: "Mi-amor", filePath: '/Spotify Clone/spotify images/2.mp3', coverPath: '/Spotify Clone/spotify images/cover2.jpg' },
    { songName: "Tu hai kahan", filePath: '/Spotify Clone/spotify images/3.mp3', coverPath: '/Spotify Clone/spotify images/cover3.jpg' },
    { songName: "Chaka-chak", filePath: '/Spotify Clone/spotify images/4.mp3', coverPath: '/Spotify Clone/spotify images/cover1.jpg' },
    { songName: "Dil jhoom", filePath: '/Spotify Clone/spotify images/5.mp3', coverPath: '/Spotify Clone/spotify images/cover2.jpg' },
    { songName: "Shona-Shona", filePath: '/Spotify Clone/spotify images/6.mp3', coverPath: '/Spotify Clone/spotify images/cover3.jpg' },
    { songName: "Humsafar", filePath: '/Spotify Clone/spotify images/7.mp3', coverPath: '/Spotify Clone/spotify images/cover1.jpg' }
]

// foreach on song_item 
song_item.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName('img')[0].src = song[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = song[i].songName;
});

// event on play pause btn
play_btn.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        play_btn.classList.remove('fa-circle-play')
        play_btn.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else {
        audio.pause();
        play_btn.classList.remove('fa-circle-pause')
        play_btn.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
});

// event on audio for timing 
audio.addEventListener('timeupdate', () => {
    // update progress_bar
    progress = parseInt((audio.currentTime / audio.duration) * 100)
    progress_bar.value = progress

});

// event on progress_bar
progress_bar.addEventListener('change', () => {
    audio.currentTime = progress_bar.value * audio.duration / 100
});

// making all btns play
let makeAllPlay= ()=>{
    songItemPlayBtn.forEach((element)=>{
    element.classList.remove('fa-circle-pause')
    element.classList.add('fa-circle-play')
})
}


// console.log(songItemPlayBtn)
// event on songItemPlayBtn
songItemPlayBtn.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText=song[songIndex].songName;
 audio.src= `/Spotify Clone/spotify images/${songIndex+1}.mp3`
 audio.currentTime=0;
audio.play();
play_btn.classList.remove('fa-circle-play');
play_btn.classList.add('fa-circle-pause');
    })
})

// event on forward_btn 
document.getElementById('forward_btn').addEventListener('click' ,()=>{
if(songIndex>=7){
    songIndex =0
}
else{
    songIndex +=1;
}
audio.src= `/Spotify Clone/spotify images/${songIndex+1}.mp3`
masterSongName.innerText=song[songIndex].songName;
audio.currentTime=0;
audio.play();
play_btn.classList.remove('fa-circle-play');
play_btn.classList.add('fa-circle-pause');
})

// event on backward_btn 
document.getElementById('backward_btn').addEventListener('click' ,()=>{
if(songIndex<=0){
    songIndex =0
}
else{
    songIndex -=1;
}
audio.src= `/Spotify Clone/spotify images/${songIndex+1}.mp3`
masterSongName.innerText=song[songIndex].songName;
audio.currentTime=0;
audio.play();
play_btn.classList.remove('fa-circle-play');
play_btn.classList.add('fa-circle-pause');
})

