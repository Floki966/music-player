const data = [
  {
    id: 1,
    title: 'Tungevaag, Raaban - Bad Boy',
    audio: 'songs/badboy.mp3',
    img: 'images/badboy.jpg',
  },
  {
    id: 2,
    title: 'Imagine Dragons - Believer',
    audio: 'songs/believer.mp3',
    img: 'images/believer.jpg',
  },
  {
    id: 3,
    title: 'David Guetta & Afrojack ft Charli XCX & French Montana - Dirty Sexy Money',
    audio: 'songs/dirtysexymoney.mp3',
    img: 'images/dirtysexymoney.jpg',
  },
  {
    id: 4,
    title: 'Marshmello & Anne-Marie - FRIENDS',
    audio: 'songs/friends.mp3',
    img: 'images/friends.jpg',
  },
  {
    id: 5,
    title: 'One Direction - Steal My Girl',
    audio: 'songs/stealmygirl.mp3',
    img: 'images/stealmygirl.jpg',
  },
  {
    id: 6,
    title: 'NF - When I Grow Up',
    audio: 'songs/whenigrowup.mp3',
    img: 'images/whenigrowup.jpg',
  },
];

// get buttons
let musicControl = document.getElementById('Pause');
let musicRight = document.getElementById('Right');
let musicLeft = document.getElementById('Left');
let musicRandom = document.getElementById('Random');
let playButton = document.querySelector('.fa-play');

// get Id´s for content
let audio = document.getElementById('Audio');
let title = document.getElementById('Title');
let picture = document.getElementById('Pic');

//global variables
let count = 0;
let play = false;

musicControl.addEventListener('click', () => {
  if (play === false) {
    audio.play();
    play = true;
    playButton.classList.add('fa-pause');
    playButton.classList.remove('fa-play');
  } else {
    audio.pause();
    play = false;
    playButton.classList.add('fa-play');
    playButton.classList.remove('fa-pause');
  }
  console.log(play);
});

musicRight.addEventListener('click', () => {
  if (count === data.length - 1) {
    count = 0;
    dataToHTML();
  } else {
    count++;
    dataToHTML();
  }
});

musicLeft.addEventListener('click', () => {
  if (count === 0) {
    count = data.length - 1;
    dataToHTML();
  } else {
    count--;
    dataToHTML();
  }
});

musicRandom.addEventListener('click', () => {
  count = Math.floor(Math.random() * data.length - 1) + 1;
  dataToHTML();
});

let dataToHTML = () => {
  title.innerHTML = data[count].title;
  picture.src = data[count].img;
  audio.src = data[count].audio;
};

window.onload = () => {
  dataToHTML();
};
