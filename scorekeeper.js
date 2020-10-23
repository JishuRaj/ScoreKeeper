var p1player = document.querySelector("#p1");
var p2player = document.querySelector("#p2");
var p1score = 0;
var p2score = 0;
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var gameover = false;
var winningscore = 5;
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningscoredisplay = document.querySelector("p span");


p1player.addEventListener("click", function () {
	if (!gameover) {
		p1score++;
		if (p1score === winningscore) {
			p1display.classList.add("winner");
			gameover = true;
		}
	    p1display.textContent = p1score;
	}
	
});

p2player.addEventListener("click", function(){
	if (!gameover) {
		p2score++;
		if (p2score===winningscore) {
			p2display.classList.add("winner");
			gameover=true;
		}
	    p2display.textContent = p2score;
	}
	
});



function Reset(){
	p1score=0;
    p2score=0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
}
reset.addEventListener("click", function(){
    Reset();
});

numInput.addEventListener("change", function(){
    winningscoredisplay.textContent = this.value;
    winningscore = Number(this.value);
    Reset();
});