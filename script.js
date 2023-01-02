

var audio = document.getElementById("myAudio");
  audio.volume = 0.2;

var powerup = document.getElementById("powerup");
powerup.volume = 0.05;
var kick = document.getElementById("kick");
kick.volume = 0.2;

// var powerup = new Audio();
// powerup.src = "powerup.wav"

// var kick = new Audio();
// kick.src = "kick.wav"

function tocar(){
    kick.play();
}
function girar(){
    powerup.play();
}

  function openInNewTab(url) {
    kick.play();
    var win = window.open(url, '_blank');
  }

  let button_minus = document.getElementById('button_minus').addEventListener('click',minimizar)
  let button_plus = document.getElementById('button_plus').addEventListener('click',maximizar)

  function minimizar(){
    powerup.play();
    let screen = document.getElementById('screen');
    let gap = document.getElementById('gap');
    let visor = document.getElementById('visor');
    let title = document.getElementById('title');

    screen.classList.add('minus');
    gap.classList.add('vanish');
    visor.classList.add('vanish');
    title.classList.add('gone');
  }
  function maximizar(){
    powerup.play();
    let screen = document.getElementById('screen');
    let gap = document.getElementById('gap');
    let visor = document.getElementById('visor');
    let title = document.getElementById('title');

    screen.classList.remove('minus');

    setTimeout(() => {
        gap.classList.remove('vanish');
    visor.classList.remove('vanish');
    title.classList.remove('gone');
    },1500)
  }


var L_button = document.getElementById('L-button').addEventListener('click',toPause)
var R_button = document.getElementById('R-button').addEventListener('click',toPlay)

function toPause(){
    audio.pause()
    console.log('pause')
}
function toPlay(){
    audio.play()
    console.log('play')
}

var circle = document.getElementById('circle').addEventListener('click',toRotate)

function toRotate(){

    let nintendo = document.getElementById('nintendo');
    nintendo.classList.add('nintendo_spin')

    setTimeout(()=>{
        nintendo.classList.remove('nintendo_spin')
    },3000)
}

var title = document.getElementById('title').addEventListener('click',openForm)
var back = document.getElementById('out').addEventListener('click',closeForm)

function openForm(){
    let form_back = document.querySelector(".form_back");
    form_back.style.display = 'flex';

}
function closeForm(){
  let form_input = document.getElementById('form_input').value
  let email_input = document.getElementById('email_input').value
  let text_form = document.getElementById('text_form').value

  if(form_input == '' && email_input == '' && text_form == ''){
    let form_back = document.querySelector(".form_back");
    form_back.style.display = 'none';
  }
}
