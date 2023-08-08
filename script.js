let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Tumsey Pyaar Karke Tumse Pyaar Karke",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Aashiqui Aa Gayi  Radhe Shyam",
    filePath: "songs/2.mp3",
    coverPath: "cover/2.jpg",
  },
  {
    songName: "Kuch Baatien  Kuch Baatein",
    filePath: "songs/3.mp3",
    coverPath: "cover/3.jpg",
  },
  {
    songName: "Mehbooba  KGF Chapter 2",
    filePath: "songs/4.mp3",
    coverPath: "cover/4.jpg",
  },
  {
    songName: '"Doobey"  Gehraiyaan',
    filePath: "songs/5.mp3",
    coverPath: "cover/5.jpg",
  },
  {
    songName: "Raatan Lambiyan",
    filePath: "songs/6.mp3",
    coverPath: "cover/6.jpg",
  },
  {
    songName: "Barsaat Ki Dhun",
    filePath: "songs/7.mp3",
    coverPath: "cover/7.jpg",
  },
  { songName: "Ranjhaa", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
  { songName: "Is Qadar", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
];
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
document.getElementById("previous").addEventListener("click", () => {
audioElement.addEventListener("timeupdate", () => {
 progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  0;
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();
      let songIndex = 0;
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = 'songs/${songIndex + 1}.mp3';
      audioElement.currentTime = 0;
      audioElement.play();
      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
    });
  }
);
});
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  }
   else 
   {
    songIndex += 1;
  }
  audioElement.src = 'songs/${songIndex + 1}.mp3';
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = 'songs/${songIndex + 1}.mp3';
  masterSongName.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-pause-circle");
  masterplay.classList.add("fa-play-circle");
});
 