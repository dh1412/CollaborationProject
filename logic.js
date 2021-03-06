//DOM
document.addEventListener('DOMContentLoaded', function() {
    //selects each div inside class grid and defines them as box
    const box = document.querySelectorAll(".grid div");
    //sets the current player to 1, which will be the computer
    var currentPlayer = 1;
    //selects id audio and defines it as music
    const music = document.querySelector("#audio");
    //selects id result and defines it as result
    const result = document.querySelector("#result");
    //lists all the possible win conditions
    const possibleWin = [
        [0, 1, 2, 3],
        [6, 5, 4, 3],
        [7, 8, 9, 10],
        [41, 40, 39, 38],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
      ]
    //this is a function that checks for possible wins 
    function checkresult() {
        //repeats for each possible win
        for (let x = 0; x < possibleWin.length; x++) {
            //defines the conditions of winning
            const box1 = box[possibleWin[x][0]];
            const box2 = box[possibleWin[x][1]];
            const box3 = box[possibleWin[x][2]];
            const box4 = box[possibleWin[x][3]];
            //if 4 boxes of win condition are occupied by the same player, it will add following string to result
            if (box1.classList.contains("player1") && box2.classList.contains("player1") && box3.classList.contains("player1") && box4.classList.contains("player1")) {
                result.innerHTML = "Computer won"
            }
            if (box1.classList.contains("player2") && box2.classList.contains("player2") && box3.classList.contains("player2") && box4.classList.contains("player2")) {
                result.innerHTML = "Player won"
            }
        }
        
    }
    //this will play the music
    music.play();
    //this will loop the music
    music.loop = true;
    //repeat for every single box in the grid; the game continues until every box is filled 
    for (let i = 0; i < box.length; i++) {
        //generates a random number and save it as variable randbox
        var randbox = Math.floor(Math.random() * 41 + 1);
        //when the grid is clicked
        $(".grid").on("click", function(){
            //if current player is 1
            if (currentPlayer == 1) {
                //if the box contains class none; check if the box is occupied
                if (box[randbox].classList.contains("none")){
                    //remove class none since a circle will be placed
                    box[randbox].classList.remove("none");
                    //add class player1 to indicate that the div(box) is taken by following player
                    box[randbox].classList.add("player1");
                    //sets the value of current player to 2, so the turn goes over
                    currentPlayer = 2;
                    //creates another random number
                    randbox = Math.floor(Math.random() * 41 + 1);
                    //check if player 1 wins
                    checkresult();
                }
                //if something is already present in the box, generate another random number
                else {
                    randbox = Math.floor(Math.random() * 41 + 1);
                }
            }    
        });
        //when a box is clicked
        $(box[i]).on("click", function() {
            //if there is no circle inside the box
            if (box[i].classList.contains("none")){
                //if current player is 2
                if (currentPlayer == 2) {
                    //same as player 1
                    box[i].classList.remove("none");
                    //adds class player2
                    box[i].classList.add("player2");
                    //current player is set to 1
                    currentPlayer = 1;
                    //check if player 2 wins
                    checkresult();
                }
            }
            
        })
    }
    

})
    
