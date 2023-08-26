
//initialized player's symbol game state
let playerSymbol = "X"; 
let gameEnded = false;

//function to update the turnIndicator
function updateTurnIndicator(){
  let turnIndicator = document.getElementById("turnIndicator");
  turnIndicator.textContent = "Player" + playerSymbol + "'s turn";
}

// added click event listener to cells, to checks if the cell is empty and game hasn't ended. it fills the cell with
//the palyer's symbol
 for (let i = 1; i <= 9; i++) { 
  document.getElementById(i.toString()).addEventListener("click",
   function () {
     if (this.innerHTML === "" && !gameEnded) { 
      this.innerHTML = playerSymbol;
       this.classList.add(playerSymbol.toLowerCase()); 
       if (checkWin()) { 
        // if it's a win
        gameEnded = true; 
        setTimeout(function () { 
        alert(playerSymbol + " wins!");
       }, 500); 
      } else if (checkDraw()) { 
        gameEnded = true; 
        //if it's a draw 
        setTimeout(function () {
           alert("It's a draw!");
           }, 500); 
          } else { 
            //if no win or draw, switchs player's turn
            playerSymbol = (playerSymbol === "X") ? "O" : "X"; 
          updateTurnIndicator();
        } 
      } 
    }); 
  }
  //array of winning combinatios
  let winPos = [
     [1, 2, 3], [4, 5, 6], 
     [7, 8, 9], [1, 4, 7], 
     [2, 5, 8], [3, 6, 9],
      [1, 5, 9], [3, 5, 7] ]; 
      
      //function to check for a win
      function checkWin() {
         for (let i = 0; i < winPos.length; i++) {
           let [a, b, c] = winPos[i]; if (document.getElementById(a.toString()).innerHTML ===
            playerSymbol && document.getElementById(b.toString()).innerHTML === 
            playerSymbol && document.getElementById(c.toString()).innerHTML === playerSymbol) { 
            document.getElementById(a.toString()).classList.add("win"); 
            document.getElementById(b.toString()).classList.add("win");
            document.getElementById(c.toString()).classList.add("win"); 
            return true;
             // Returns true if there's a win 
            }
           }
            return false;
             // Returns false if there's no win 
            } 
            //function to check for a draw 
            function checkDraw() { 
              for (let i = 1; i <= 9; i++) { 
                if (document.getElementById(i.toString()).innerHTML === "") {
                   return false; 
                   // If any cell is empty, it isn't a draw 
                  } 
                }
                 return true; 
                 // if All cells are filled, it's a draw 
                }

                // added event listener to reset button, which resets game board, game state , player symbol and 
                //turn indicator when the button is clicked.
                 document.getElementById("reset").addEventListener("click", function () { 
                  for (let i = 1; i <= 9; i++) {
                     let cell = document.getElementById(i.toString()); 
                     cell.innerHTML = ""; cell.classList.remove("x"); 
                     cell.classList.remove("o"); cell.classList.remove("win"); 
                    }
                     gameEnded = false; 
                     playerSymbol = "X"; 
                  
                     updateTurnIndicator();
                    });
