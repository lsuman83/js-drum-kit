
function playSound (e){
   
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   console.log(sound)
    if(!sound) return;

    key.classList.add("playing");
    sound.currentTime = 0;
    sound.play()
}

function removeSound (e){
   if(e.propertyName !== "transform") return;

   e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener("transitionend", removeSound))

document.addEventListener('keydown', playSound)