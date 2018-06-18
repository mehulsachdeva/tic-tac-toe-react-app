import React, { Component } from 'react';
import './App.css';

var obj = {}
let i = 0
let turn = 'Turn of X'

class App extends Component {

  //*********** Intializing *************
  constructor(props){
      super(props)
      this.state = {
        content: {},
        winner: '',
        disabled: '',
        Xwins: 0,
        Owins: 0,
        draw: 0,
      }
    }

    //************ Display X or O depending on turn **************
    buttonClick = (event) => {
        event.preventDefault()

        let winnerArr = [
          ['p1','p2','p3'],
          ['p4','p5','p6'],
          ['p7','p8','p9'],
          ['p1','p5','p9'],
          ['p1','p4','p7'],
          ['p2','p5','p8'],
          ['p3','p5','p7'],
          ['p3','p6','p9']
        ]

        if(i%2 == 0){
          turn = 'Turn of O'
          obj[event.target.id] = 'X'
        } else {
          turn = 'Turn of X'
          obj[event.target.id] = 'O'
        }

        this.setState({
          content: obj,
        })

        if(this.state.content[winnerArr[0][0]] == 'X' && this.state.content[winnerArr[0][1]] == 'X' && this.state.content[winnerArr[0][2]] == 'X'){
          this.setState({
            winner: 'Winner is X',
            Xwins: this.state.Xwins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[1][0]] == 'X' && this.state.content[winnerArr[1][1]] == 'X' && this.state.content[winnerArr[1][2]] == 'X'){
          this.setState({
            winner: 'Winner is X',
            Xwins: this.state.Xwins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[2][0]] == 'X' && this.state.content[winnerArr[2][1]] == 'X' && this.state.content[winnerArr[3][2]] == 'X'){
          this.setState({
            winner: 'Winner is X',
            Xwins: this.state.Xwins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[3][0]] == 'X' && this.state.content[winnerArr[3][1]] == 'X' && this.state.content[winnerArr[3][2]] == 'X'){
          this.setState({
            winner: 'Winner is X',
            Xwins: this.state.Xwins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[4][0]] == 'X' && this.state.content[winnerArr[4][1]] == 'X' && this.state.content[winnerArr[4][2]] == 'X'){
          this.setState({
            winner: 'Winner is X',
            Xwins: this.state.Xwins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[5][0]] == 'X' && this.state.content[winnerArr[5][1]] == 'X' && this.state.content[winnerArr[5][2]] == 'X'){
          this.setState({
            winner: 'Winner is X',
            Xwins: this.state.Xwins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[6][0]] == 'X' && this.state.content[winnerArr[6][1]] == 'X' && this.state.content[winnerArr[6][2]] == 'X'){
          this.setState({
            winner: 'Winner is X',
            Xwins: this.state.Xwins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[7][0]] == 'X' && this.state.content[winnerArr[7][1]] == 'X' && this.state.content[winnerArr[7][2]] == 'X'){
          this.setState({
            winner: 'Winner is X',
            Xwins: this.state.Xwins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[0][0]] == 'O' && this.state.content[winnerArr[0][1]] == 'O' && this.state.content[winnerArr[0][2]] == 'O'){
          this.setState({
            winner: 'Winner is O',
            Xwins: this.state.Xwins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[1][0]] == 'O' && this.state.content[winnerArr[1][1]] == 'O' && this.state.content[winnerArr[1][2]] == 'O'){
          this.setState({
            winner: 'Winner is O',
            Owins: this.state.Owins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[2][0]] == 'O' && this.state.content[winnerArr[2][1]] == 'O' && this.state.content[winnerArr[3][2]] == 'O'){
          this.setState({
            winner: 'Winner is O',
            Owins: this.state.Owins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[3][0]] == 'O' && this.state.content[winnerArr[3][1]] == 'O' && this.state.content[winnerArr[3][2]] == 'O'){
          this.setState({
            winner: 'Winner is O',
            Owins: this.state.Owins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[4][0]] == 'O' && this.state.content[winnerArr[4][1]] == 'O' && this.state.content[winnerArr[4][2]] == 'O'){
          this.setState({
            winner: 'Winner is O',
            Owins: this.state.Owins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[5][0]] == 'O' && this.state.content[winnerArr[5][1]] == 'O' && this.state.content[winnerArr[5][2]] == 'O'){
          this.setState({
            winner: 'Winner is O',
            Owins: this.state.Owins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[6][0]] == 'O' && this.state.content[winnerArr[6][1]] == 'O' && this.state.content[winnerArr[6][2]] == 'O'){
          this.setState({
            winner: 'Winner is O',
            Owins: this.state.Owins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else if(this.state.content[winnerArr[7][0]] == 'O' && this.state.content[winnerArr[7][1]] == 'O' && this.state.content[winnerArr[7][2]] == 'O'){
          this.setState({
            winner: 'Winner is O',
            Owins: this.state.Owins + 1,
            content: ''
          })
          turn = 'Turn of X'
          obj = {}
          i = -1
        }
        else {
          if(i >= 8){
            this.setState({
              winner: 'Draw',
              draw: this.state.draw + 1,
              content: ''
            })
            turn = 'Turn of X'
            obj = {}
            i = -1
          }
        }
        console.log(i)
        i = i + 1
    }

    //*********** Reset Board ***********
    resetBoard = () => {
        this.setState({
          content: ''
        })
        turn = 'Turn of X'
        obj = {}
        i = 0
    }

    //*********** Clear Win History ************
    clearWinHistory = () => {
      this.setState({
        Xwins: 0,
        Owins: 0,
        draw: 0
      })
    }

    render(){
      return(
        <div>
          <div className = 'header'>
            <span>TIC TAC TOE</span>
          </div>
          <center>
            <div className = 'wincontainer'>
              <span>X won: <b>{this.state.Xwins}</b> games</span>
              <span className = 'wins'>O won: <b>{this.state.Owins}</b> games</span>
              <span className = 'wins'>Draw: <b>{this.state.draw}</b> games</span>
            </div>
            <div className = 'buttonClearDiv'>
              <button className = 'clearWin' onClick = {this.clearWinHistory}>CLEAR</button>
            </div>
            <div className = 'turnDesc'>{turn}</div>
            <div>
              <table className = 'board'>
                <tbody>
                  <tr>
                    <td><button id='p1' onClick = {this.buttonClick} disabled = {this.state.content.p1}>{this.state.content.p1}</button></td>
                    <td><button id='p2' onClick = {this.buttonClick} disabled = {this.state.content.p2}>{this.state.content.p2}</button></td>
                    <td><button id='p3' onClick = {this.buttonClick} disabled = {this.state.content.p3}>{this.state.content.p3}</button></td>
                  </tr>
                  <tr>
                    <td><button id='p4' onClick = {this.buttonClick} disabled = {this.state.content.p4}>{this.state.content.p4}</button></td>
                    <td><button id='p5' onClick = {this.buttonClick} disabled = {this.state.content.p5}>{this.state.content.p5}</button></td>
                    <td><button id='p6' onClick = {this.buttonClick} disabled = {this.state.content.p6}>{this.state.content.p6}</button></td>
                  </tr>
                  <tr>
                    <td><button id='p7' onClick = {this.buttonClick} disabled = {this.state.content.p7}>{this.state.content.p7}</button></td>
                    <td><button id='p8' onClick = {this.buttonClick} disabled = {this.state.content.p8}>{this.state.content.p8}</button></td>
                    <td><button id='p9' onClick = {this.buttonClick} disabled = {this.state.content.p9}>{this.state.content.p9}</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className = 'winnerDesc'>{this.state.winner}</div>
            <div className = 'buttonDiv'>
              <button className = 'resetButton' onClick = {this.resetBoard}>RESET</button>
            </div>
          </center>
        </div>
      )
    }
}

export default App;
