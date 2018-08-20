import React,{Component} from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props){ // set the initial state for the game
    super(props);
    this.state = {
      history:[{
        squares: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
    }],
    xIsNext: true,
  };
  }
  render() {
    return (
      <article className="game container mt-5">
        <section className="row">
          <div className="col-sm-8 game-board">
            <Board />
          </div>
          <div className="col-sm-4 game-info">
            <p className="h2">{/* status */}</p>
            <ul className="nav nav-pills flex-column">
              {/* TODO */}
            </ul>
          </div>
        </section>
      </article>
    );
  }
}

export default Game;
