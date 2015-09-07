/**
 * Created by jedia on 9/6/2015.
 */
console.log('hello');
var canvasWidth = 800;
var canvasHeight = 600;

$('#gameCanvas').attr('width',canvasWidth);
$('#gameCanvas').attr('height',canvasHeight);

var canvas = $('#gameCanvas')[0].getContext('2d');

canvas.strokeRect(0,0 , canvasWidth , canvasHeight);


var image  = new Image();
image.src = "player.png";


$(image).load(function() {


    canvas.drawImage(image,  (canvasWidth / 2) - (image.width /2), (canvasHeight /2 ) - (image.height /2));

});


