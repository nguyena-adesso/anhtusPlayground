var ctx = document.getElementById('circular-loader').getContext('2d');

//PercentageValue
var percentage = 70;
var start = 1.5 * Math.PI;
var canvasWidth = ctx.canvas.width;
var canvasHeight = ctx.canvas.height; 

ctx.clearRect(0, 0, canvasWidth, canvasHeight);
ctx.lineWidth = 20;
ctx.fillStyle = '#660000';
ctx.strokeStyle = "#660000";
ctx.textAlign = 'center';
ctx.font = "12px Verdana";
ctx.fillText("Akku: " + percentage + "%", canvasWidth*.5, canvasHeight*.5+2);
ctx.beginPath();
ctx.arc(canvasWidth/2, canvasHeight/2, canvasHeight/3, start, 	getEndAngleFromPercentage(percentage) , false);
ctx.stroke();

function getEndAngleFromPercentage(percentage)
{
	return (percentage * 3.6 * (Math.PI/180)) + (1.5*Math.PI);
}
