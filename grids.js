let canvas = document.getElementById("draw-board");

let ctx = canvas.getContext("2d");

let player_turn = 0;

let playing = 1;

let win_states = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

let X_selected = [];

// checkForWin();

let O_selected = [];

let cellSize = {
    x : 50,
    y : 50
};

let gridSize = {
    x : 3,
    y : 3
};

//Starting position
let start = {
    x : 50,
    y : 50
};

function drawGrid(){
    ctx.lineWidth = 2;
    drawRows();
    drawColumns();
    ctx.lineWidth = 1;
}

function drawRows(){
  let y=start.y;

  for(let i=0; i<gridSize.y+1; i++){
    ctx.beginPath();
    ctx.moveTo(start.x, y);
    ctx.lineTo(start.x+gridSize.x*50, y);
    ctx.stroke();
    y += cellSize.y;
  }
}

function drawColumns(){
  let x=start.x;

  for(let i=0; i<gridSize.x+1; i++){
    ctx.beginPath();
    ctx.moveTo(x,start.y);
    ctx.lineTo(x,start.y+gridSize.y*50);
    ctx.stroke();
    x += cellSize.x;
  }
}
 

drawGrid();