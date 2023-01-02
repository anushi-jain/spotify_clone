console.log("Welcome To Spotify");

//Intialize the  Variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay=document.getElementById('play');
let masterSongName=document.getElementById('masterSongName');
let myProgressBar=document.getElementById('ProgressBar');
let gifPlayer=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songPlay=Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    {songName :"Alone", filePath: "C:\Users\91817\Desktop\spotify clone\1.mp3", coverPath:"C:\Users\91817\Desktop\spotify clone\cover.jpg"},
    {songName :"Kajra Re", filePath: "C:\Users\91817\Desktop\spotify clone\2.mp3", coverPath: "C:\Users\91817\Desktop\spotify clone\6.webp"},
    {songName :"mauja", filePath: "C:\Users\91817\Desktop\spotify clone\3.mp3", coverPath:"C:\Users\91817\Desktop\spotify clone\5.webp"},
    {songName :"cutiepie", filePath: "C:\Users\91817\Desktop\spotify clone\4.mp3", coverPath: "C:\Users\91817\Desktop\spotify clone\4.jpg"},
    {songName :"hosanna", filePath: "C:\Users\91817\Desktop\spotify clone\5.mp3", coverPath: "C:\Users\91817\Desktop\spotify clone\3.jpg"},
    {songName :"Adhoore", filePath: "C:\Users\91817\Desktop\spotify clone\6.mp3", coverPath: "C:\Users\91817\Desktop\spotify clone\2.jpg"},
    {songName :"qala", filePath: "C:\Users\91817\Desktop\spotify clone\7.mp3", coverPath: "C:\Users\91817\Desktop\spotify clone\1.webp"},
]

songItems.forEach((element,i)=>{
    console.log(element, i);
    //element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

//audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gifPlayer.style.opacity=1;
    }
    //if audio is playing toh hum pause kare
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gifPlayer.style.opacity=0;
    }
})

//Listen to events  
    //time update audioElement ka hoga(i.e the song) naki progressBar ka ,kyuki woh after all gane ka hi progress dikhaega
audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
        /*update seekbar
        progress in % or parseInt isliye kiya h kyuki hume integer mei % chahiye */
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
                        //console.log(progress);
        myProgressBar.value=progress;
})

//progress bar par agar aage peeche kare toh gaane bhi usi hissab se change ho 
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})

 const makeAllPlays = ()=>{
     songPlay.forEach((element)=>{
        element.classList.remove('fa-circle-pause');
         element.classList.add('fa-circle-play');
     })
 }

songPlay.forEach((element)=>{
     element.addEventListener('click', (e)=>{
         console.log(e.target);
         makeAllPlays();
         songIndex=parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         gifPlayer.style.opacity=1;
         audioElement.src=`${songIndex+1}.mp3`;
         masterSongName.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
     })
 })

 document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=7;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
 })

 document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
 })