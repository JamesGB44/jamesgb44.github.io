window.onload = function() {
 init();
}
var canvas = document.getElementById("canvas"); 
var my_context = canvas.getContext('2d'); 
var random_colour, width = 20, height = 20, x = 0, y = 0;

function init(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	/*
	my_context.beginPath();
	my_context.rect(0,0,canvas.width,canvas.height);
	my_context.fillStyle = "black";
	my_context.fill();
	
	my_context.beginPath();
	my_context.rect((canvas.width/2) - 25,canvas.height/2 - 25,50,50);
	my_context.fillStyle = "red";
	my_context.fill();
	
	my_context.beginPath();
	my_context.arc(canvas.width/2,canvas.height/2, 20, 0, 2 * Math.PI);
	my_context.fillStyle = "blue";
	my_context.fill();
	
	my_context.moveTo(canvas.width/2, 0)
	my_context.lineTo(canvas.width/2, canvas.height)
	my_context.strokeStyle = "orange";
	my_context.stroke();
	
	my_context.moveTo(0, canvas.height/2)
	my_context.lineTo(canvas.width, canvas.height/2)
	my_context.strokeStyle = "orange";
	my_context.stroke();
	*/
	while (true){
		
		while (x*10 < canvas.width)
		{
			while (y*10 < canvas.height)
			{
				console.log(x, y)
				random_colour = '#'+Math.floor(Math.random()*16777215).toString(16);
				my_context.fillStyle = random_colour;
				my_context.fillRect(x*20,y*20, width, height)
				y++;
			}
			x++;
			y = 0;
		}
	}



}