

//  const audio = new Audio('Recorded Audio.wav')
 

// document.querySelector('.on').addEventListener('click', function() {
//   document.querySelector('.off').style.color = 'black';
//   document.querySelector('.on').style.color = 'white';
//   audio.loop = true;
//   audio.play();
// });

// document.querySelector('.off').addEventListener('click', function() {
//   document.querySelector('.on').style.color = 'black';
//   document.querySelector('.off').style.color = 'white';
  
//   audio.pause();
// });


let audio = new Audio('Recorded Audio.wav');

function toggleAudio() {
  const onButton = document.querySelector('.on');
  const offButton = document.querySelector('.off');
  
  if (audio.paused) {
    audio.loop = true;
    audio.play();
    onButton.style.color = 'white';
    offButton.style.color = 'black';
  } else {
    audio.pause();
    onButton.style.color = 'black';
    offButton.style.color = 'white';
  }
}

document.querySelector('.on').addEventListener('click', toggleAudio);
document.querySelector('.off').addEventListener('click', toggleAudio);
