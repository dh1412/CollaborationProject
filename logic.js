var pressed = 0
function startgame() {

}

var grid = {
    a: ["a1", "a2", "a3", "a4", "a5", "a6"],
    b: ["b1", "b2", "b3", "b4", "b5", "b6"],
    c: ["c1", "c2", "c3", "c4", "c5", "c6"], 
    d: ["d1", "d2", "d3", "d4", "d5", "d6"],
    e: ["e1", "e2", "e3", "e4", "e5", "e6"],
    f: ["f1", "f2", "f3", "f4", "f5", "f6"],
}
for (i=0; i<grid.a.length; i++){
    grid.a[i] = true
}
$(".a").on("click", function(){
    
    $(".a6").html('<img src="assets/redcircle.jpg" alt="">')
    grid.a[5] = false
    if (grid.a[5]){
        console.log("true");
    }
    else {
        console.log("false");
    }
})

