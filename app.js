// console.log("hello!");
//variables
const prev=document.getElementById('prev');
const play=document.getElementById('play');
const next=document.getElementById('next');
const gana=document.getElementById('song');
const banner=document.getElementById("banner");
const title=document.getElementById("title");
const playpause=document.getElementById("playpause");
let number=1;
let stat=0;
//songs data
const songs=[
    {
        name:"Afreen",
        src:"./tracks/Afreen (Reprise) - Rahat Fateh Ali Khan 320Kbps.mp3",
        imgSrc:"./images/thumb-rahat-fateh-ali-khan-mp3-songs-300.jpg"
    },
    {
        name:"Laal Ishq",
        src:"./tracks/22 Laal Ishq - Ramleela (Arijit Singh).mp3",
        imgSrc:"./images/thumb-soulful-voice-arijit-singh-mp3-songs-300.jpg"
    },
    {
        name:"Sadda Haq",
        src:"./tracks/Saadda Haq (Rockstar) - Mohit Chauhan - 320Kbps.mp3",
        imgSrc:"./images/thumb-best-of-mohit-chauhan-mp3-songs-300.jpg"
    }
]

const status={
    play:"./images/icons/icons8-play-30.png",
    pause:"./images/icons/icons8-pause-50.png"
}
//functions 
let playSong=(num)=>{
    banner.src=songs[num].imgSrc;
    gana.src=songs[num].src;
    title.innerText=songs[num].name;
    gana.play();
}


//Event litners
next.addEventListener("click",()=>{
    ++number;
    if(number>2)
    {
        number-=3;
    }
    playSong(number);
});

prev.addEventListener("click",()=>{
    --number;
    if(number<0)
    {
        number+=3;
    }
    playSong(number);
});

play.addEventListener("click",()=>{
    if(stat===0)
    {
        playpause.src=status.pause;
    playSong(number);
    stat=1;
    }
    else
    {
        gana.pause();
        playpause.src=status.play;
        stat=0;
    }
});