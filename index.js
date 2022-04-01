function changeText(text){
    document.getElementById("headerText").innerHTML=text;
}

function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    //const audio=document.querySelector("audio");
    console.log(audio);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("playing");
    if(!audio)return
    audio.currentTime=0;
    audio.play();
    
    key.classList.add("playing");
}
function removeTransition(e){
    const keys=document.querySelectorAll('.key');
    keys.forEach((e)=>e.classList.remove("playing"));
    console.log(e);
}
window.addEventListener("keydown",playSound)
window.addEventListener("keyup",removeTransition);