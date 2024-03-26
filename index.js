//detecting button press
var l = document.querySelectorAll(".drum").length;
for(i=0;i<l;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var inner = this.innerHTML;//extracting the text of the button
        makeSound(inner);
        buttonAnimation(inner);
    });
}

//detecting keyboard press
document.addEventListener("keydown",function(event){
    var key=event.key;//storing the value of the key pressed on keyboard
    makeSound(key);
    buttonAnimation(key);
});

//function producing sound 
function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:console.log(key);
    }
}

function buttonAnimation(currentKey)
{
    var active = document.querySelector("."+currentKey);//selecting each key by its letter
    active.classList.add("pressed");

    setTimeout(function() {
        active.classList.remove("pressed");
    },100);  // applies the animation for 100ms and then removes it using timeout function
}