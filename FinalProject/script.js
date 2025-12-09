// Anonymous fuction = function without a name
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;
    let enemies = [];

    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', e => {
                //If e is pressed down and not already in the array, only then put it into the array
                if (    e.key === 'ArrowDown' ||
                        e.key === 'ArrowUp' || 
                        e.key === 'ArrowLeft' || 
                        e.key === 'ArrowRight'
                        && this.keys.indexOf(e.key) === -1) {
                    this.keys.push(e.key);
                }
            });
            window.addEventListener('keyup', e => {
                //When e is released, if it is arrow down find index and splice to remove it
                if (    e.key === 'ArrowDown' ||
                        e.key === 'ArrowUp' || 
                        e.key === 'ArrowLeft' || 
                        e.key === 'ArrowRight') {
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
            });
        }
    }
    //Draw, animate, and update player position bassed on user input
    class Player {
        constructor(gameWidth, gameHeight) { //Be aware of boundaries so player stays on screen
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            //Good practice to have art assests set to size you want to use in game
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = this.gameHeight - this.height;
            this.image = document.getElementById('playerImage');
            this.frameX = 0;
            this.frameY = 0;
            this.speed = 0;
            this.vy = 0; //Velocity y
            this.weight = 0; //Gravity effect
        }
        draw(context) {
            //Source x, source y, source width, source height, destination x, destination y, destination width, destination height
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        //To move player around
        update(input){
            //When positive, player moves right, when negative player moves left
            if (input.keys.indexOf('ArrowRight') > -1) {
                this.speed = 5;
            } else if (input.keys.indexOf('ArrowLeft') > -1) {
                this.speed = -5;
            } else if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) { //Ensure player can only jump when on ground
                this.vy = -32; //Jump strength
            } else{
                this.speed = 0;
            }

            //Horizontal movement
            this.x += this.speed;
            //Horizontal boundaries
            if (this.x < 0) this.x = 0;
            else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;
            

            //If player is not on ground, gradually increase gravity effect
            if (!this.onGround()) {
                this.vy += this.weight;
                this.frameY = 1; //Change sprite to jumping frame
            } else { //If player is on ground, reset gravity effect to stop vertical movement
                this.vy = 0;
                this.frameY = 0; //Change sprite to running frame
            }

            //Vertical movement
            this.y += this.vy;
            //Vertical boundaries
            if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
        }
        onGround(){
            return this.y >= this.gameHeight - this.height; //If player is standing on solid ground
            }
        }

    class Background {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById('backgroundImage');
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 720;
            this.speed = 20;
        }
        draw(context) {
            //Draw two images side by side to create looping effect
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            //this.speed accounts for gap between two images when scrolling
            context.drawImage(this.image, this.x + this.width - this.speed, this.y, this.width, this.height);
        }
        update() {
            this.x -= this.speed; //Scroll background to the left
            if (this.x < 0 - this.width) this.x = 0; //Reset background position to create loop
        }
    }

    class Enemy {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            //Check art asset size for single frame dimensions
            this.width = 160;
            this.height = 119;
            this.image = document.getElementById('enemyImage');
            this.x = this.gameWidth; //Start at right edge of screen
            this.y = this.gameHeight - this.height;
            this.frameX = 0;
            this.speed = 8;
        }
        draw(context) {
            //Source x, source y, source width, source height, destination x, destination y, destination width, destination height
            //Sprite sheet only has one row, so source y is always 0
            context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        update() {
            this.x -= this.speed;
        }
    }
    
    enemies.push(new Enemy(canvas.width, canvas.height)); //Add initial enemy on page load
    function handleEnemies() {
        if (enemyTimer > enemyInterval + randomEnemyInterval) {
            enemies.push(new Enemy(canvas.width, canvas.height));
            enemyTimer = 0;
        } else {
            enemyTimer += deltaTime;
        }
        enemies.forEach(enemy => {
            enemy.draw(ctx);
            enemy.update();
        });
    }

    function displayStatusText() {
    }

    //Instantiate objects
    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);

    let lastTime = 0;
    let enemyTimer = 0; //Time since last enemy spawned
    let enemyInterval = 1000; //Spawn enemy every 1 second
    let randomEnemyInterval = Math.random() * 1000 + 500; //Randomize enemy spawn time

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime; //Time difference between current and last frame
        lastTime = timeStamp; //... so it can be used for the next loop

        ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear canvas between each animation loop
        background.draw(ctx); //Draw background first so player displays on top
        
        player.draw(ctx);
        player.update(input);

        handleEnemies();

        requestAnimationFrame(animate); //Calls animate function over and over to create loop
    }
    animate(0);
});