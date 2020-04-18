function work(letterTouched) {

    if (letterTouched === "w") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    } else if (letterTouched === "a") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    } else if (letterTouched === "s") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    } else if (letterTouched === "d") {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    } else if (letterTouched === "j") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    } else if (letterTouched === "k") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    } else if (letterTouched === "l") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    } else {
        console.log(this.innerHTML);
    }
}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var letterTouched = this.innerHTML;
        work(letterTouched);
        buttonAnmation(letterTouched);
    })
}

document.addEventListener("keypress", function(event) {
    work(event.key);
    buttonAnmation(event.key);
})

function buttonAnmation(action) {

    var buttonClicked = document.querySelector("." + action);
    buttonClicked.classList.add("pressed");

    setTimeout(function() {
        buttonClicked.classList.remove("pressed");
    }, 100);


}