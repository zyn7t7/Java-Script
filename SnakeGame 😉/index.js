// constants 
let inputDir = { x: 0, y: 0 };
let speed = 15;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
food = { x: 7, y: 6 };
// let score = 0;

// functions 
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    //with it
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
        // with wall 
        if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {

            return true;
        }

        return false;

};

function gameEngine() {
        //updating snake array abd fuud
        if (isCollide(snakeArr)) {
            inputDir = { x: 0, y: 0 };
            alert("Play Again")
            snakeArr = [{ x: 11, y: 14 }];
            // score = 0;
        }
        // food eaten 
        if (snakeArr[0].y === food.y && snakeArr[0].x ===food.x) {
            // score += 1;
            snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
            let a = 2;
            let b = 16;
            food = {x: Math.round(a+(b-a)*Math.random()), y: Math.round(a + (b-a)*Math.random())}
        }


        // moviug 
        for (let i = snakeArr.length - 2; i >= 0; i--) {
            // const element = array[i];
            snakeArr[i+1] = {...snakeArr[i] };

        }
        snakeArr[0].x += inputDir.x;
        snakeArr[0].y += inputDir.y;
        //display snake 
        board.innerHTML = "";
        snakeArr.forEach((e, index) => {
            snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = e.y;
            snakeElement.style.gridColumnStart = e.x;
            if (index === 0) {

                snakeElement.classList.add('head');
            }
            else {
                snakeElement.classList.add('snake');

            }
            board.appendChild(snakeElement);
        })
        // food 
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);

    }


    // main 
    window.requestAnimationFrame(main);
    window.addEventListener('keydown', e => {
        inputdir = { x: 0, y: 1 } //start
        switch (e.key) {
            case "ArrowUp":
                console.log('ArrowUp');
                inputDir.x = 0;
                inputDir.y = -1;
                break;
            case "ArrowDown":
                console.log('ArrowDown');
                inputDir.x = 0;
                inputDir.y = 1;
                break;
            case "ArrowLeft":
                console.log('ArrowLeft');
                inputDir.x = -1;
                inputDir.y = 0;
                break;
            case "ArrowRight":
                console.log('ArrowRight');
                inputDir.x = 1;
                inputDir.y = 0;
                break;
            default:
                break;
        }
    });
