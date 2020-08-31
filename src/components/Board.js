import React, {Component}  from 'react';
import React, { useState } from 'react';


class Board extends Component {

  render(){
      return("div-row", {}, "Row");
  }
}

export default Board;

 function gameBoard() {
    // state 
   // boardState 
    const [boardCells, setBoardCells, ] = useState ([Array(9).fill(null)]);
   // turnState
    const [xIsNext, setXIsNext] = useState(true);  
    // handleClick
    const handleClick = index =>  {
      //  copy of board state
      const gameBoardCells = [...boardCells] 
      // if index of board is filled, reurn 
        if (gameBoardCells[index]) return; 
      // add x or o
      gameBoardCells[index] = xIsNext ? "X" : "O";      
      // calculate next turn
         
      //  set board state  
      // set turn state  
    }
     
        
 }

// board 
  // state 
   // boardState 
   // turnState
    // handleClick
      //  copy of board state 
      // if index of board is filled, reurn 
      // mutate board state copy and add x or o 
      // calculate next turn  
      //  set board state  
      // set turn state 
       