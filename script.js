window.onload = start;

/** the position of the bird relative to the left side of the page */
let left = 0;
let right = 1;
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
    left += 0.2;

    //render position
    bird.style.left = left + '%';
    if (left >= 100){
        left = -50;
    }
   
}

/** sets an interval to make the bird fly */
function fly() {
    setInterval(moveBirdToTheRight,2);
    setInterval(moveBirdDown,1);
}


function moveBirdDown(){
    const bird = document.getElementById('bird');
    down += 0.1;
    bird.style.top= down + '%';
    if (down >= 100){
        down = -20;
    }
    console.log(down);
}

function turnBirdAround(){
    const bird = document.getElementById('bird');
    up += 0.1;
    bird.style.bottom= up + '%';
}
