import React from 'react';
import Item from './Item';

class Game extends React.Component {
  constructor(props) {
    super();

    this.state = {
      input: [
        [1, 1, 2, 3, 2, 2],
        [1, 1, 2, 3, 3, 3],
        [1, 2, 2, 3, 3, 3],
        [1, 2, 2, 2, 2, 3],
        [4, 2, 2, 2, 4, 4],
        [4, 4, 2, 2, 3, 2],
        [4, 4, 4, 1, 1, 2],
      ]
    }
  }

  componentDidMount() {
    // this.generateItems();

  }

  arrayClone = (arr) => {
    let i, copy;

    if (Array.isArray(arr)) {
      copy = arr.slice(0);
      for (i = 0; i < copy.length; i++) {
        copy[i] = this.arrayClone(copy[i]);
      }
      return copy;
    } else if (typeof arr === 'object') {
      throw 'Cannot clone array containing an object!';
    } else {
      return arr;
    }
  }
  // initializing function
  setItem = (i, j) => {
    // event.persist();
    let input = this.state.input;
    // let i = event.target.i;
    // let j = event.target.j;
    let selectedItem = input[i][j];
    // console.log(i)
    this.floodFill(input, i, j, selectedItem);
    // return input;
    this.setState({
      input: input
    })
  }

  // algorithm for finding all suitable cells
  floodFill = (input, i, j, selectedItem) => {
    if (input[i][j] !== selectedItem) { return };

    if (i > 0) {
      input[i][j] = 0;
      this.floodFill(input, i - 1, j, selectedItem);
    }
    if (i < input.length - 1) {
      input[i][j] = 0;
      this.floodFill(input, i + 1, j, selectedItem);
    }
    if (j > 0) {
      input[i][j] = 0;
      this.floodFill(input, i, j + 1, selectedItem);
    }
    if (j < input[0].length - 1) {
      input[i][j] = 0;
      this.floodFill(input, i, j - 1, selectedItem);
    }
    return input;
  }

  render() {
    return (
      <div className="game">
        {this.state.input.map((elem, i) => elem.map((el, j) => 
          <Item i={i} j={j} content={el} onClick={this.setItem}/>))}
      </div>
    )
  }
}

export default Game;