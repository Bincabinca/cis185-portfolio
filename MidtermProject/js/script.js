// move snake game logic here

    snake.x += snake.dx;
    snake.y += snake.dy;
    
    // reset game if snake hits left or right edge of screen
    if (snake.x < 0 || snake.x >= canvas.width) {
        snake.x = 160;
            snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
    }