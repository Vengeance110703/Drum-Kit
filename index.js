for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        sounds(this.textContent);
        hover(this.textContent);
    });
}
document.addEventListener("keydown", function (e) {
    sounds(e.key);
    hover(e.key);
});

function hover(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100)
}

function sounds(letter) {
    switch (letter) {
        case "w":
            var w = new Audio("sounds/crash.mp3");
            w.play();
            break;

        case "a":
            var w = new Audio("sounds/kick-bass.mp3");
            w.play();
            break;

        case "s":
            var w = new Audio("sounds/snare.mp3");
            w.play();
            break;

        case "d":
            var w = new Audio("sounds/tom-1.mp3");
            w.play();
            break;

        case "j":
            var w = new Audio("sounds/tom-2.mp3");
            w.play();
            break;

        case "k":
            var w = new Audio("sounds/tom-3.mp3");
            w.play();
            break;

        case "l":
            var w = new Audio("sounds/tom-4.mp3");
            w.play();
            break;

        default:
            console.log(this.textContent);
            break;
    }
}