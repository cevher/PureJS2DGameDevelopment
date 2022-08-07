/**     @type{HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies  = 20;
const enemiesArray = [];

let gameFrame = 0;


// enemy1 = {
//     x: 10,
//     y: 50,
//     width: 200,
//     height: 200,
// };

// const enemyImage = new Image();
// enemyImage.src = 'enemy1.png';

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy3.png';
        
        this.y = Math.random() * canvas.height;
        
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;

        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;

        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random () * (canvas.height - this.height);
        this.newX = Math.random() * (canvas.width - this.width);
        this.newY = Math.random () * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() *3 + 1);
        this.interval = Math.floor(Math.random() * 200 + 50;
    }

    update(){
        // this.x = 0;
        // this.y = 0;
        if(gameFrame % this.interval === 0){
            this.newX = Math.random() * (canvas.width - this.width);
            this.newY = Math.random () * (canvas.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/70;
        this.y -= dy/70;

        if(this.x + this.width <0)
        {
            this.x = canvas.width;
        }
        // animate sprites
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }

    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}
// const enemy1 = new Enemy();

for(let i=0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(object => {
        object.update();
        object.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();