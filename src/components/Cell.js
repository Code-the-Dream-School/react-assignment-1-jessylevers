import React, {Component}  from 'react';


class  Cell extends Component {

render(){
  return(
    <div>
      <Square /  > 
    </div>
  );
  }

}
export default Cell;

function Square(props) {
  return (
    <button id="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// const Cell () = {  
    //value 
    //onClick (prop) 
// }


