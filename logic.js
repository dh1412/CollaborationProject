document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelectorAll(".grid div");
    var currentPlayer = 1;
    const displayCurrentPlayer = document.getElementById("#currentPlayer");
    const result = document.getElementById("#result");

    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function() {
            // if a circle is present in the box below, the next circle should drop on top of it
            if (box[i].classList.contains("none")){
                if (currentPlayer == 1) {
                    box[i].classList.remove("none");
                    box[i].classList.add("player1");
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                if (currentPlayer == 2) {
                    box[i].classList.remove("none");
                    box[i].classList.add("player2");
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
            }
        }
    }

})
    
