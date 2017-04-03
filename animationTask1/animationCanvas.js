window.onload = function(){

var canvas = document.getElementById("canvasArea");
var ctx = canvas.getContext("2d");


function drawingCurve(cp1x,cp1y,cp2x,cp2y,x,y) {
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
ctx.stroke();
}
function drawingLine(c,d) {
	ctx.lineTo(c,d);
	ctx.stroke();
}
function drawingCircle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
}
drawingCurve(770,100,800,102,770,112);
drawingCurve(770,110,745,102,770,100);
ctx.beginPath();
drawingCurve(773,112,730,125,754,98);
drawingCurve(765,92,768,90,785,96);
drawingCurve(805,113,795,121,770,112);
ctx.beginPath();
drawingCurve(762,115,770,125,781,116);
ctx.beginPath();
drawingCurve(795,108,790,80,795,65);
drawingCurve(800,60,810,65,815,80);
drawingCurve(815,60,820,65,820,60);
drawingCurve(815,50,810,50,800,55);
drawingCurve(780,50,780,50,750,55);
drawingCurve(730,50,730,50,725,60);
drawingCurve(725,70,725,70,728,75);
drawingCurve(730,70,730,70,743,65);
drawingCurve(745,75,748,70,747,110);
ctx.beginPath();
drawingCurve(747,110,720,155,746,200);
drawingCurve(770,210,767,170,741,192);
ctx.beginPath();
drawingCurve(763,143,765,155,762,190);
ctx.beginPath();
drawingCurve(745,115,672,90,732,185);
drawingCurve(720,180,695,205,748,200);
ctx.beginPath();
drawingCurve(763,195,770,185,783,195);
ctx.beginPath();
drawingCurve(795,110,820,155,800,200);
drawingCurve(775,210,780,175,803,190);
ctx.beginPath();
drawingCurve(782,143,775,155,783,194);
ctx.beginPath();
drawingCurve(798,115,870,90,815,185);
drawingCurve(820,180,855,205,800,200);
ctx.beginPath();
ctx.moveTo(797,115);
drawingLine(825,70);
drawingCurve(835,95,820,110,820,113);
ctx.closePath();
drawingCircle(785,85,3);
ctx.fillStyle = "black";
ctx.fill();
drawingCircle(756,85,3);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.save();
ctx.scale(2,1);
drawingCircle(80,600,5);
ctx.restore();
ctx.closePath();
}