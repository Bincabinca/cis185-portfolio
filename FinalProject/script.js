// Anonymous fuction = function without a name
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

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
                }-
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
            context.fillStyle = 'white';
            context.fillRect(this.x, this.y, this.width, this.height);
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
        
            onGround(){
                return this.y >= this.gameHeight - this.height; //If player is standing on solid ground
        }
    }

    class Background {
    }

    class Enemy {
    }

    function handleEnemies() {
    }

    function displayStatusText() {
    }

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear canvas between each animation loop
        player.draw(ctx);
        player.update(input);
        requestAnimationFrame(animate); //Calls animate function over and over to create loop
    }
    animate();
});