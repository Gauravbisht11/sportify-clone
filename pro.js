let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.getElementById("masterPlay")
let gif=document.getElementById("gif")
let songItem=Array.from(document.getElementsByClassName("songItem"))
// console.log(songItem)


let songs=[{songName: "Warriyo-Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
{songName: "Cielo-Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
{songName: "DEAF KEV-Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
{songName: "Different Heaven & EH!DE-My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
{songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
{songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
{songName: "Sakhiyaan-Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
{songName: "Bhula Dena-Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"}
]

songItem.forEach((element,i) => {
    // console.log(element,i)
    // console.log(element.getElementsByClassName("rightimg")[0]);
   element.getElementsByClassName("rightimg")[0].src=songs[i].coverPath;
    
    element.getElementsByClassName("songNames")[0].innerText = songs[i].songName; 
});


//*********** play and pause
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime==0)
    {

        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.add("red");
        masterPlay.classList.remove("green");
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove("red")
        masterPlay.classList.add("green")
        
       
        
    }
})
//************ update of progress bar
audioElement.addEventListener('timeupdate',()=>{
// console.log("timeupdate")
progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value=progress;
})


// go to any position in song
myProgressBar.addEventListener("change",()=>{
audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
})

// change song button play and pause 
const makeAllPLays=()=>{
    Array.from(document.getElementsByClassName("changeSong")).forEach(element => {
        element.classList.remove("red");
        element.classList.add("green")
    }
    )}

Array.from(document.getElementsByClassName("changeSong")).forEach(element => {
    
    element.addEventListener("click",()=>{
        makeAllPLays();
        // console.log(element)
        element.classList.remove("green");
        element.classList.add("red")
        songIndex=parseInt(element.id)
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        document.getElementById("songinfotext").innerText=songs[songIndex].songName;
        audioElement.addEventListener('timeupdate',()=>{
            // console.log("timeupdate")
        //    let decimal= (parseInt(audioElement.currentTime)/60 %1).toFixed(2)
        //    let num=parseInt(parseInt(audioElement.currentTime)/60)
        //    document.getElementsByClassName("time")[songIndex].innerHTML=`${num}:${decimal}`;
           document.getElementsByClassName("time")[songIndex].innerText=parseInt(audioElement.currentTime) 
            })
    })
});


// previous button

document.getElementById("previous").addEventListener("click",()=>{
if((songIndex-1)>=0)
{
    document.getElementsByClassName("changeSong")[songIndex].classList.remove("red")
    document.getElementsByClassName("changeSong")[songIndex].classList.add("green")
    songIndex=songIndex-1
    document.getElementsByClassName("changeSong")[songIndex].classList.add("red")
    document.getElementsByClassName("changeSong")[songIndex].classList.remove("green")
    document.getElementById("songinfotext").innerText=songs[songIndex].songName;
    audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();

}
})



// next button


document.getElementById("next").addEventListener("click",()=>{
if((songIndex+1)<=(songs.length)-1)
{
    document.getElementsByClassName("changeSong")[songIndex].classList.remove("red")
    document.getElementsByClassName("changeSong")[songIndex].classList.add("green")
    songIndex=songIndex+1
    document.getElementsByClassName("changeSong")[songIndex].classList.add("red")
    document.getElementsByClassName("changeSong")[songIndex].classList.remove("green")
    document.getElementById("songinfotext").innerText=songs[songIndex].songName;
    audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
}
})

