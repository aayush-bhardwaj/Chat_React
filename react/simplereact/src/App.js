/*
/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      message : "Hello, World!"
    }
  }

  ComponentWillMount(){

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={() => this.setState({message: this.state.message + "!"})}>{this.state.message}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/
import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL :"P",
      PLAYER_TWO_SYMBOL :"O",
      currentTurn : "P",
      board:[
        "","","","","","","","",""
      ],
      winner: null,
    }
  }

  handleClick(index){
    //console.log(index);
    if(this.state.board[index] === ""){
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board : this.state.board,
        currentTurn : this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        winner: this.checkForWinner(),
      })
    }
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return currentTurn
      } else {
        return false
      }
    })
  }

  render(){
    return(
      <div className="app-container">
        {this.state.winner ? <h1>{`The winner is ${this.state.winner}`}</h1> : null}
        <div className="board">
          {this.state.board.map((cell,index) => {
          return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>
          })}
        </div>
      </div>
    )
  }
}

export default App;
