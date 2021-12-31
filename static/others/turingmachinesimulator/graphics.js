//v1.0 2014/6/1
DrawLineBox = function(canvas,x,y,width,height,r,g,b,line_width){
	canvas.beginPath();
	canvas.strokeStyle = "rgb("+r+","+g+","+b+")";
	canvas.lineWidth = line_width;
	canvas.rect(x,y,width,height);
	canvas.stroke();
}
DrawFillBox = function(canvas,x,y,width,height,r,g,b){
	canvas.fillStyle = "rgb("+r+","+g+","+b+")";
	canvas.fillRect(x,y,width,height);
}
function DrawLineTriangle(canvas,x1,y1,x2,y2,x3,y3,r,g,b,line_width){
	canvas.beginPath();
	canvas.strokeStyle = "rgb("+r+","+g+","+b+")";
	canvas.moveTo(x1,y1);
	canvas.lineTo(x2,y2);
	canvas.lineTo(x3,y3);
	canvas.lineTo(x1,y1);
	canvas.stroke();
	canvas.closePath();
}
function DrawFillTriangle(canvas,x1,y1,x2,y2,x3,y3,r,g,b){
	canvas.beginPath();
	canvas.fillStyle = "rgb("+r+","+g+","+b+")";
	canvas.moveTo(x1,y1);
	canvas.lineTo(x2,y2);
	canvas.lineTo(x3,y3);
	canvas.lineTo(x1,y1);
	canvas.fill();
	canvas.closePath();
}
function DrawString(canvas,x,y,r,g,b,px_size,text){
	ctx1.fillStyle="rgb("+r+","+g+","+b+")";
    ctx1.textBaseline="top";
    ctx1.font=px_size+"px 'ＭＳ Ｐゴシック'";
    ctx1.fillText(text,x,y);
}