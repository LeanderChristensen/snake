const canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext("2d");

let gameBoard = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let direction = 3;
let snake = {
	x: 2,
	y: 2,
	size: 0,
	tail: []
};
let score = -1;
let fruit = [];
let delay = false;

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

async function main() {
	while (true) {
		gameBoard = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		];
		snake.tail.shift();
		snake.tail.push([snake.x,snake.y]);
		for (let i = 0; i < snake.size; i++) {
			gameBoard[snake.tail[i][1]][snake.tail[i][0]] = 1;
		}
		gameBoard[snake.y][snake.x] = 1;
		gameBoard[fruit[0]][fruit[1]] = 2;
		switch (direction) {
			case 0:
				snake.y--;
				if (snake.y < 0) {
					snake.y = 19;
				}
				break;
			case 1:
				snake.x--;
				if (snake.x < 0) {
					snake.x = 19;
				}
				break;
			case 2:
				snake.y++;
				if (snake.y >= 20) {
					snake.y = 0;
				}
				break;
			case 3:
				snake.x++;
				if (snake.x >= 20) {
					snake.x = 0;
				}
				break;
		}
		switch (gameBoard[snake.y][snake.x]) {
			case 0:
				gameBoard[snake.y][snake.x] = 1;
				break;
			case 1:
				let highScore = score;
				if (document.cookie.indexOf("highScore") > -1) {
					if (Number(getCookie("highScore")) > 0) {
						highScore = Math.max(highScore, Number(getCookie("highScore")));
					}
				}
				document.cookie = "highScore=" + highScore + "; expires=Sat, 01 Jan 2100 12:00:00 UTC";
				document.getElementById("high-score").innerHTML = `HiScore: ${highScore}`;
				document.getElementById("score").innerHTML = `Score: ${score}`;
				document.getElementById("game-over").style.display = "block";
				return;
			case 2:
				eat();
				gameBoard[snake.y][snake.x] = 1;
				break;
		}
		for (let i = 0; i < gameBoard.length; i++) {
			for (let j = 0; j < gameBoard[i].length; j++) {
				switch(gameBoard[i][j]) {
					case 0:
						ctx.fillStyle = "#262626";
						break;
					case 1:
						ctx.fillStyle = "green";
						break;
					case 2:
						ctx.fillStyle = "red";
						break;
				}
				ctx.fillRect((j*25), (i*25), 25, 25);
			}
		}
		await sleep(250);
		delay = false;
	}
}

function eat() {
	let x = Math.floor(Math.random()*20);
	let y = Math.floor(Math.random()*20);
	if (gameBoard[x][y] == 0) {
		fruit = [x, y];
		snake.size++;
		score++;
		snake.tail.unshift([snake.x,snake.y]);
	} else {
		eat();
	}
}

window.addEventListener("keydown", onKeyDown, false);

function onKeyDown(event) {
	let keyCode = event.keyCode;
	switch (keyCode) {
		case 87: // w, up
		case 38:
			if (direction != 2 && !delay) {
				direction = 0;
				delay = true;
			}
			break;
		case 65: // a, left
		case 37:
			if (direction != 3 && !delay) {
		  		direction = 1;
				delay = true;
			}
		  	break;
		case 83: // s, down
		case 40:
			if (direction != 0 && !delay) {
		  		direction = 2;
				delay = true;
		  	}
		  	break;
		case 68: // d, right
		case 39:
			if (direction != 1 && !delay) {
		  		direction = 3;
				delay = true;
			}
		  	break;
	}
}

eat();
main();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}