document.getElementById("draw-board").addEventListener("click", function(event){

    if(playing == 0 || player_turn == 9){
        event.preventDefault();
    }

    else{
        player_turn++;

        let rect = canvas.getBoundingClientRect();

        let coords_x = (event.clientX-12)/2;
        let coords_y = (event.clientY-12)/2;




        //OBJECT PLACEMENT

        if(coords_x > start.x && coords_x < 2*start.x && coords_y > start.y && coords_y < 2*start.y){
            drawCircle(start.x + start.x/2, start.y + start.y/2);
            drawCross(start.x+5, start.y+5);
            push(player_turn, 1);
        }
    
        if(coords_x > 2*start.x && coords_x < 3*start.x && coords_y > start.y && coords_y < 2*start.y){
            drawCircle(2*start.x + start.x/2, start.y + start.y/2);
            drawCross(2*start.x+5, start.y+5);
            push(player_turn, 2);
        }
    
        if(coords_x > 3*start.x && coords_x < 4*start.x && coords_y > start.y && coords_y < 2*start.y){
            drawCircle(3*start.x + start.x/2, start.y + start.y/2);
            drawCross(3*start.x+5, start.y+5);
            push(player_turn, 3);
        }
    
        if(coords_x > start.x && coords_x < 2*start.x && coords_y > 2*start.y && coords_y < 3*start.y){
            drawCircle(start.x + start.x/2, 2*start.y + start.y/2);
            drawCross(start.x+5, 2*start.y+5);
            push(player_turn, 4);
        }
    
        if(coords_x > 2*start.x && coords_x < 3*start.x && coords_y > 2*start.y && coords_y < 3*start.y){
            drawCircle(2*start.x + start.x/2, 2*start.y + start.y/2);
            drawCross(2*start.x+5, 2*start.y+5);
            push(player_turn, 5);
        }
    
        if(coords_x > 3*start.x && coords_x < 4*start.x && coords_y > 2*start.y && coords_y < 3*start.y){
            drawCircle(3*start.x + start.x/2, 2*start.y + start.y/2);
            drawCross(3*start.x+5, 2*start.y+5);
            push(player_turn, 6);
        }
    
        if(coords_x > start.x && coords_x < 2*start.x && coords_y > 3*start.y && coords_y < 4*start.y){
            drawCircle(start.x + start.x/2, 3*start.y + start.y/2);
            drawCross(start.x+5, 3*start.y+5);
            push(player_turn, 7);
        }
    
        if(coords_x > 2*start.x && coords_x < 3*start.x && coords_y > 3*start.y && coords_y < 4*start.y){
            drawCircle(2*start.x + start.x/2, 3*start.y + start.y/2);
            drawCross(2*start.x+5, 3*start.y+5);
            push(player_turn, 8);
        }
    
        if(coords_x > 3*start.x && coords_x < 4*start.x && coords_y > 3*start.y && coords_y < 4*start.y){
            drawCircle(3*start.x + start.x/2, 3*start.y + start.y/2);
            drawCross(3*start.x+5, 3*start.y+5);
            push(player_turn, 9);
        }
    }

    //OBJECT PLACEMENT ENDS

        function push(turn, num){
            if(turn % 2 == 1)
                X_selected.push(num);
            else
                O_selected.push(num);
        }

        console.log(X_selected);

        checkForWin();
        
});