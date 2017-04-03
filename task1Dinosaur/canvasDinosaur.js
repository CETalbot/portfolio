window.onload = function(){


var canvas = document.getElementById("canvasBorder");
var ctx = canvas.getContext("2d");
//bottom of dinosaur and spikes lines function
function drawingLine(c,d) {
	ctx.lineTo(c,d);
}

function drawingCurve(cp1x,cp1y,cp2x,cp2y,x,y) {
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
ctx.stroke();
}
function drawingCircle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}

/*sky background colour gradient code used from 
https://www.w3schools.com/tags/canvas_createlineargradient.asp on 05/03/2017*/
var gradient=ctx.createLinearGradient(0,0,0,300);
gradient.addColorStop(0, "#66b3ff");
gradient.addColorStop(1,"#ff8c1a");
ctx.fillStyle = gradient;
ctx.fillRect(0,0,400,300);
ctx.closePath();
ctx.beginPath();
//grass background
var grad=ctx.createLinearGradient(0,300,0,370);
grad.addColorStop(0, "#003300");
grad.addColorStop(1,"#008000");
ctx.fillStyle = grad;
ctx.fillRect(0,300,400,400);

ctx.beginPath();
//neck of dinosaur
ctx.moveTo(236, 252);
drawingCurve(230,205,180,120,210,120);
//the head of dinosaur
drawingCurve(300,100,300,20,160,22);
//back of head
drawingCurve(158,22,146,22,149,52);
//back of body
drawingCurve(155,50,165,300,10,350);
//bottom of dinosaur
drawingLine(140,350);
drawingLine(236,252);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.closePath();
ctx.fillStyle = "#37c857";
ctx.fill();

ctx.beginPath();
//belly of dinosaur
ctx.moveTo(230,317);
drawingCurve(280,250,150,130,170,320);
ctx.closePath();
ctx.fillStyle = "#d2f6d5";
ctx.fill();
ctx.beginPath();
//right foot of dinsoaur
ctx.beginPath();
ctx.moveTo(200,350);
drawingCurve(310,370,270,280,225,320);
ctx.closePath();
ctx.fillStyle = "#37c857";
ctx.fill();
ctx.beginPath();
//left foot of dinosaur
ctx.moveTo(135, 350);
drawingCurve(270,370,230,270,170,320);
ctx.fillStyle = "#37c857";
ctx.fill();

//left hand
ctx.moveTo(170,200);
drawingCurve(250,220,210,150,170,180);
ctx.closePath();

ctx.beginPath();
//right hand
ctx.moveTo(220,200);
drawingCurve(280,220,240,150,212,180);
ctx.closePath();
ctx.fillStyle = "#37c857";
ctx.fill();

//bottom spike on tail
ctx.beginPath();
ctx.moveTo(20,347);
drawingLine(20,325);
//bottom spike on tail
drawingLine(35,341,20,325);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
ctx.beginPath();
//moving upwards on dinosaur next spike on tail
ctx.moveTo(48,332);
drawingLine(47,310);
//moving upwards on dinosaur next spike on tail
drawingLine(60,322,47,310);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//moving upwards on dinosaur next spike starting bottom of back
ctx.beginPath();
ctx.moveTo(72,312);
drawingLine(64,295);
//moving upwards on dinosaur next spike starting bottom of back
drawingLine(83,300,64,295);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//moving upwards on dinosaur next spike working up back of the dinosaur
ctx.beginPath();
ctx.moveTo(93,288);
drawingLine(82,274);
//moving upwards on dinosaur next spike working up back of the dinosaur
drawingLine(105,272,83,274);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//moving upwards on dinosaur next spike working up back of the dinosaur
ctx.beginPath();
ctx.moveTo(112,258);
drawingLine(94,248);
//moving upwards on dinosaur next spike working up back of the dinosaur
drawingLine(118,244,94,248);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//moving upwards on dinosaur next spike working up back of the dinosaur
ctx.beginPath();
ctx.moveTo(122,234);
drawingLine(103,224);
//moving upwards on dinosaur next spike working up back of the dinosaur
drawingLine(130,215,104,224);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//moving upwards on dinosaur next spike working up back of the dinosaur
ctx.beginPath();
ctx.moveTo(135,200);
drawingLine(111,190);
//moving upwards on dinosaur next spike working up back of the dinosaur
drawingLine(139,180,112,190);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//moving upwards on dinosaur next spike working up back of the dinosaur
ctx.beginPath();
ctx.moveTo(143,165);
drawingLine(117,155);
//moving upwards on dinosaur next spike working up back of the dinosaur
drawingLine(146,145,119,155);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//moving upwards on dinosaur next spike working up back of the dinosaur
ctx.beginPath();
ctx.moveTo(148,133);
drawingLine(121,123);
//moving upwards on dinosaur next spike working up back of the dinosaur
drawingLine(149,113,122,123);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//moving upwards on dinosaur next spike working up back of the dinosaur
ctx.beginPath();
ctx.moveTo(150,100);
drawingLine(123,90);
//moving upwards on dinosaur next spike working up back of the dinosaur
drawingLine(151,80,124,90);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//moving upwards on dinosaur next spike working up back of the dinosaur
ctx.beginPath();
ctx.moveTo(151,70);
drawingLine(123,60);
//moving upwards on dinosaur next spike working up back of the dinosaur
drawingLine(149,45,124,60);
ctx.closePath();
ctx.fillStyle = "#009f0d";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

//mouth
ctx.beginPath();
ctx.moveTo(255,100);
drawingCurve(245,110,220,110,220,100);
ctx.strokeStyle = "black";
ctx.stroke();

//eye
drawingCircle(215,55,8);
ctx.fillStyle = "black";
ctx.fill();
}