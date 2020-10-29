window.onload = start;

/** the position of the bird relative to the left side of the page */
let left = 0;

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
}

/** sets an interval to make the bird fly */
function fly() {
    setInterval(moveBirdToTheRight,2);
}

/*
function testForLoop(){
    console.time('loop');

    const iterations = 100000000000000000000;
    for (let i = 0; i < iterations.length; i++) {
        //nothing
    }

    console.timeEnd('loop');

}

testForLoop();

*/

//break problem down into smaller parts