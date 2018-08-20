import React from 'react';
// class Square  extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }
//   render(){
//     return(
//       <button className="square"
//         onClick={() => this.setState({value: 'X'})}
//               >
//               {this.state.value}
//             </button>
  function Square(props){
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  function setWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(squares[b]);
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }



export default Square;
export {setWinner} ;
