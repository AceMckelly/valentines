const	c = document.getElementById("gc");
const	cc = c.getContext('2d');

var board;

(function setup(){
	board = new Board();
	
	//timer loop
	var idVar = window.setInterval(()=>{
		cc.clearRect(0, 0, c.width,c.height);
		board.update();
		board.draw();
	},100);
}());

function buttonclick(){
	board.create();
}