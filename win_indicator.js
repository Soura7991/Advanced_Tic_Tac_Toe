function win_indicator(state){
    let diff = state[1] - state[0];

    drawWinLine(diff, state[0]);
    
    // console.log(diff);
}

function drawWinLine(diff, state){

    if(diff == 1 && state == 1){
        ctx.beginPath();
        ctx.moveTo(55,75);
        ctx.lineTo(195, 75);
        ctx.stroke();
    }
    
    if(diff == 1 && state == 4){
        ctx.beginPath();
        ctx.moveTo(55,125);
        ctx.lineTo(195, 125);
        ctx.stroke();
    }
    
    if(diff == 1 && state == 7){
        ctx.beginPath();
        ctx.moveTo(55,175);
        ctx.lineTo(195, 175);
        ctx.stroke();
    }

    if(diff == 3 && state == 1){
        ctx.beginPath();
        ctx.moveTo(75,55);
        ctx.lineTo(75, 195);
        ctx.stroke();
    }

    if(diff == 3 && state == 2){
        ctx.beginPath();
        ctx.moveTo(125,55);
        ctx.lineTo(125, 195);
        ctx.stroke();
    }

    if(diff == 3 && state == 3){
        ctx.beginPath();
        ctx.moveTo(175,55);
        ctx.lineTo(175, 195);
        ctx.stroke();
    }

    if(diff == 4 && state == 1){
        ctx.beginPath();
        ctx.moveTo(55,55);
        ctx.lineTo(195, 195);
        ctx.stroke();
    }

    if(diff == 2 && state == 3){
        ctx.beginPath();
        ctx.moveTo(195,55);
        ctx.lineTo(55, 195);
        ctx.stroke();
    }
}