function checkForWin(){

    checkForX();
    checkForO();
}

function checkForX(){

    X_selected.sort();

    for(let i=0; i< win_states.length; i++){

        let k = 0, win=0;

        for(let j=0; j< win_states[0].length; j++){
            
            for( k ; k < X_selected.length; k++){

                if(win_states[i][j] == X_selected[k]){
                    win++;
                    break;
                }
            }
            if(win == 3){
                break;
            }
            
        }

        if(win == 3){
            console.log("win ");
            finishGame(win_states[i]);
            break;
        }
    }
}

function checkForO(){

    O_selected.sort();

    for(let i=0; i< win_states.length; i++){

        let k = 0, win=0;

        for(let j=0; j< win_states[0].length; j++){
            
            for( k ; k < O_selected.length; k++){

                if(win_states[i][j] == O_selected[k]){
                    win++;
                    break;
                }
            }
            if(win == 3){
                break;
            }
            
        }

        if(win == 3){
            console.log("win " + win_states[i]);
            finishGame(win_states[i]);
            break;
        }
    }
    
}

function finishGame(state){
    playing = 0;
    win_indicator(state);
}
