$(document).ready(function(){
    // Default Player's Turn to X
    var turn = "X"
    // Array stores values that we will check later for a winner
    var turns = ["#","#","#","#","#","#","#","#"];
    // default computer 
    var computersTurn = "O";
    // keeps track of whos turn it is 
    var gameOn = false
    // keeps trackof computers turn so no loop
    var count = 0; 
    
    // change players turn to X and computer's to O
    $("#turnX").click(function(){
        turn = "X"
        computersTurn = "O"
        $("#turnX").addClass("btn-primary");
        $("#turnO").removeClass("btn-primary");
        reset();
    });
    
    $("#turnO").click(function(){
        turn = "O"
        computersTurn = "X"
        $("#turnO").addClass("btn-primary");
        $("#turnX").removeClass("btn-primary");
        reset();
    });
    
    function computerTurn(){
        var taken = false;
        while(taken == false && count !==5){
            // generate computers random turn 
            var computersMove = (Math.random()*10).toFixed();
            var move = $("#" + computersMove).text();
            if(move === "#"){
                $("#" + computersMove).text(computersTurn);
                taken = true;
                turns[computersMove] = computersTurn;
            }
        }
    }

    function playerTurn(turn, id){
        var spotTaken = $("#" + id).text();
        if(spotTaken === "#"){
            count++
            turns[id] = turn;
            $("#" + id).text(turn);
            winCondition(turns, turn);
            if(gameOn === false){
                computerTurn();
                winCondition(turns, computersTurn)
            }
        }
    }
    
    function winCondition(turnsArray, currentTurn){
        if(turnsArray[0] === currentTurn && turnsArray[1] === currentTurn && turnsArray[2] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player " + currentTurn + " wins!");
        } else if(turnsArray[3] === currentTurn && turnsArray[4] === currentTurn && turnsArray[5] === currentTurn){
            gameOn = true;
            reset();
        } else if(turnsArray[6] === currentTurn && turnsArray[7] === currentTurn && turnsArray[8] === currentTurn){
            gameOn = true;
            reset();
        } else if(turnsArray[0] === currentTurn && turnsArray[3] === currentTurn && turnsArray[6] === currentTurn){
            gameOn = true;
            reset();
        } else if(turnsArray[1] === currentTurn && turnsArray[4] === currentTurn && turnsArray[7] === currentTurn){
            gameOn = true;
            reset();
        } else if(turnsArray[2] === currentTurn && turnsArray[5] === currentTurn && turnsArray[8] === currentTurn){
            gameOn = true;
            reset();
        } else if(turnsArray[0] === currentTurn && turnsArray[4] === currentTurn && turnsArray[8] === currentTurn){
            gameOn = true;
            reset(); // 2, 4, 6
        } else if(turnsArray[2] === currentTurn && turnsArray[4] === currentTurn && turnsArray[6] === currentTurn){
            gameOn = true;
            reset();
        } else {
            gameOn = false;
        }
    }

    $(".tic").click(function(){
        var slot = $(this).attr("id");
        playerTurn(turn, slot);
        
    });
    
    function reset() {
        turns = ["#","#","#","#","#","#","#","#"];
        count = 0;
        $(".tic").text("#")
        gameOn = true;
    }
});