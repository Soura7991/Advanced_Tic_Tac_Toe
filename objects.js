//Cross Dimension
let cross_Dim = {
    x : cellSize.x - 10,
    y : cellSize.y - 10
};

//Circle Dimension
let circle_Dim = {
    radius : cellSize.x - 30,
};

// function drawObjects(){
//     drawCross();
//     drawCircle();
// }

function drawCross(x,y){
    if(player_turn % 2 != 1){
        return;
    }

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + cross_Dim.x, y + cross_Dim.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + cross_Dim.x, y);
    ctx.lineTo(x, y + cross_Dim.y);
    ctx.stroke();
}

function drawCircle(x,y){
    if(player_turn % 2 != 0){
        return;
    }
    ctx.beginPath();
    ctx.arc(x, y, circle_Dim.radius, 0, 2 * Math.PI);
    ctx.stroke();
}

// drawObjects();