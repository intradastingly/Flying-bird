window.onload = start;

/** the position of the bird relative to the left side of the page */
let left = 0;
let right = 0;
let down = 0;
let up = 0;

/** starts the program on page load. */
function start() {
    fly();
}

/** Moves the bird to the right.  */


function moveBirdToTheRight(){
    const bird = document.getElementById('bird');
    
    //update position
    left += 0.1;

    //render position
    bird.style.left = left + '%';
    if (left >= 100){
        left = -10;
        document.getElementById("bird").src="../bird2.gif";
    }
    console.log(left);
}

/** sets an interval to make the bird fly */
function fly() {
    setInterval(moveBirdToTheRight,2);
    setInterval(moveBirdDown,1);
}


function moveBirdDown(){
    const bird = document.getElementById('bird');
    down += 0.05;
    bird.style.top= down + '%';
    if (down >= 80){
        down = -20;
    }
    
}

function turnBirdAround(){
    const bird = document.getElementById('bird');
    up += 0.1;
    bird.style.bottom= up + '%';
}
