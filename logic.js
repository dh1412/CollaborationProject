document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelectorAll(".grid div");
    var currentPlayer = 0;
    const displayCurrentPlayer = document.getElementById("#currentPlayer");
    const result = document.getElementById("#result");

    for (let i = 0; i < box.length; i++){
        box[i].onclick = function() {
            alert("You clicked box number " + i);
        }
    }

})
    
