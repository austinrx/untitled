/**
 * Created by jedia on 9/6/2015.
 */
console.log('hello');
var canvasWidth = 800;
var canvasHeight = 600;

$('#gameCanvas').attr('width',canvasWidth);
$('#gameCanvas').attr('height',canvasHeight);

var canvas = $('#gameCanvas')[0].getContext('2d');

var keysDown = {};

$('body').bind('keydown', function(e){
    keysDown[e.which] = true
})

$('body').bind('keyup',function(e) {
   keysDown[e.which] = false;
}

var image  = new Image();
image.src = "player.png";


$(image).load(function() {


    canvas.drawImage(image,  (canvasWidth / 2) - (image.width /2), (canvasHeight /2 ) - (image.height /2));

});


}
function draw() {
    console.log('draw');
    canvas.clearRect(0,0 , canvasWidth,canvasHeight);
    canvas.strokeRect(0,0 , canvasWidth , canvasHeight);

    canvas.drawImage(image,  playerX,playerY);
}

var playerX = (canvasWidth / 2) - (image.width /2);
var playerY =  (canvasHeight /2 ) - (image.height /2);

var FPS = 30;

setInterval(function() {
    update();
    draw();
}, 1000/ FPS)

function update() {
    console.log('update');
    if(keysDown[37]) {
        playerX -= 10;
    }
    if(keysDown[38]) {
        playerY -= 10;
    }
    if(keysDown[39]) {
        playerX -= 10;
        if(keysDown[40]) {
            playerY -= 10;
        }
    }