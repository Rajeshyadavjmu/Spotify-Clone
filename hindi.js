console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 1;
let audioElement = new Audio('hindi/11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Maiyya Mainu-Jersey ", filePath: "hindi/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "kesariya", filePath: "hindi/21.mp3", coverPath: "covers/2.jpg"},
    {songName: "king-mann meri jaan", filePath: "hindi/31.mp3", coverPath: "covers/3.jpg"},
    
    // {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/21.mp3", coverPath: "covers/7.jpg"},
    // {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/21.mp3", coverPath: "covers/8.jpg"},
    // {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/21.mp3", coverPath: "covers/9.jpg"},
    // {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/41.mp3", coverPath: "covers/10.jpg"},
    // {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/11.mp3", coverPath: "covers/1.jpg"},
    // {songName: "Cielo - Huma-Huma", filePath: "songs/21.mp3", coverPath: "covers/2.jpg"},
    // {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/31.mp3", coverPath: "covers/3.jpg"},
    // {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/41.mp3", coverPath: "covers/4.jpg"},
    // {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/51.mp3", coverPath: "covers/5.jpg"},
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    // console.log(i+ " biche mein song name " +songs[i].filePath );
})

// songItems.forEach((element)=>{
//     console.log(element);
// })
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `hindi/${(songIndex*10)+1}.mp3`;
        // console.log(audioElement.src);
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=3){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `hindi/${(songIndex*10)+1}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `punjabi/${(songIndex*10)+1}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})