import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            turn: 0,
            board: [[], [], [], [], [], [], []],
            winner: ''
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.setState = this.setState.bind(this);
    }

    onClickHandler(row, turn, board, setState) {
        if (this.state.board[row].length>=6){
            return;
        }
        var boardToStr = function (board) {
            var result = ''
            for (var i = 0; i < board.length; i++) {
                for (var k = 0; k < 6; k++) {
                    if (board[i][k] !== undefined) {
                        result += board[i][k];
                    } else {
                        result += '.';
                    }
                }
            }
            return result;
        }
        axios.get(`/api?player=${turn}&row=${row}&boardStr=${boardToStr(board)}`, {
            params: {
                ID: 12345
            }
        })
            .then(function (response) {
                var board1 = [];
                for (var i = 0; i < 7; i++) {
                    board1.push([...board[i]]);
                    
                }
                if (response.data === 'Please continue') {
                    board1[row].push(turn)
                    setState({ board: board1 });
                    setState({ turn: Number(!turn) });
                } else if (response.data === 'Please place else where!') {
                    console.log('Please place else where!')
                } else {
                    board1[row].push(turn)
                    setState({ board: board1 });
                    setState({ turn: Number(!turn) });
                    console.log(response.data);
                    setState({ winner: response.data })
                }
                console.log(board1)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if (this.state.winner.length===0){
            return (
                <div>
                    <div className='info'>
                    <h1>Connect Four</h1>
                    <h2>This is player {this.state.turn} turn!</h2>
                    </div>

                    <table>
                        <tbody>
                            <tr>
                            <td className="cell" onClick={() => this.onClickHandler(0, this.state.turn, this.state.board, this.setState)}>{this.state.board[0] ? this.state.board[0][5] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(1, this.state.turn, this.state.board, this.setState)}>{this.state.board[1] ? this.state.board[1][5] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(2, this.state.turn, this.state.board, this.setState)}>{this.state.board[2] ? this.state.board[2][5] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(3, this.state.turn, this.state.board, this.setState)}>{this.state.board[3] ? this.state.board[3][5] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(4, this.state.turn, this.state.board, this.setState)}>{this.state.board[4] ? this.state.board[4][5] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(5, this.state.turn, this.state.board, this.setState)}>{this.state.board[5] ? this.state.board[5][5] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(6, this.state.turn, this.state.board, this.setState)}>{this.state.board[6] ? this.state.board[6][5] : null}</td>
                            </tr>
                            <tr>
                                 <td className="cell" onClick={() => this.onClickHandler(0, this.state.turn, this.state.board, this.setState)}>{this.state.board[0] ? this.state.board[0][4] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(1, this.state.turn, this.state.board, this.setState)}>{this.state.board[1] ? this.state.board[1][4] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(2, this.state.turn, this.state.board, this.setState)}>{this.state.board[2] ? this.state.board[2][4] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(3, this.state.turn, this.state.board, this.setState)}>{this.state.board[3] ? this.state.board[3][4] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(4, this.state.turn, this.state.board, this.setState)}>{this.state.board[4] ? this.state.board[4][4] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(5, this.state.turn, this.state.board, this.setState)}>{this.state.board[5] ? this.state.board[5][4] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(6, this.state.turn, this.state.board, this.setState)}>{this.state.board[6] ? this.state.board[6][4] : null}</td>
                            </tr>
                            <tr>
                                <td className="cell" onClick={() => this.onClickHandler(0, this.state.turn, this.state.board, this.setState)}>{this.state.board[0] ? this.state.board[0][3] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(1, this.state.turn, this.state.board, this.setState)}>{this.state.board[1] ? this.state.board[1][3] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(2, this.state.turn, this.state.board, this.setState)}>{this.state.board[2] ? this.state.board[2][3] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(3, this.state.turn, this.state.board, this.setState)}>{this.state.board[3] ? this.state.board[3][3] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(4, this.state.turn, this.state.board, this.setState)}>{this.state.board[4] ? this.state.board[4][3] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(5, this.state.turn, this.state.board, this.setState)}>{this.state.board[5] ? this.state.board[5][3] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(6, this.state.turn, this.state.board, this.setState)}>{this.state.board[6] ? this.state.board[6][3] : null}</td>
                            </tr>
                            <tr>
                                <td className="cell" onClick={() => this.onClickHandler(0, this.state.turn, this.state.board, this.setState)}>{this.state.board[0] ? this.state.board[0][2] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(1, this.state.turn, this.state.board, this.setState)}>{this.state.board[1] ? this.state.board[1][2] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(2, this.state.turn, this.state.board, this.setState)}>{this.state.board[2] ? this.state.board[2][2] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(3, this.state.turn, this.state.board, this.setState)}>{this.state.board[3] ? this.state.board[3][2] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(4, this.state.turn, this.state.board, this.setState)}>{this.state.board[4] ? this.state.board[4][2] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(5, this.state.turn, this.state.board, this.setState)}>{this.state.board[5] ? this.state.board[5][2] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(6, this.state.turn, this.state.board, this.setState)}>{this.state.board[6] ? this.state.board[6][2] : null}</td>
    
                            </tr>
                            <tr>
                                <td className="cell" onClick={() => this.onClickHandler(0, this.state.turn, this.state.board, this.setState)}>{this.state.board[0] ? this.state.board[0][1] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(1, this.state.turn, this.state.board, this.setState)}>{this.state.board[1] ? this.state.board[1][1] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(2, this.state.turn, this.state.board, this.setState)}>{this.state.board[2] ? this.state.board[2][1] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(3, this.state.turn, this.state.board, this.setState)}>{this.state.board[3] ? this.state.board[3][1] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(4, this.state.turn, this.state.board, this.setState)}>{this.state.board[4] ? this.state.board[4][1] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(5, this.state.turn, this.state.board, this.setState)}>{this.state.board[5] ? this.state.board[5][1] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(6, this.state.turn, this.state.board, this.setState)}>{this.state.board[6] ? this.state.board[6][1] : null}</td>
                            </tr>
                            <tr>
                                <td className="cell" onClick={() => this.onClickHandler(0, this.state.turn, this.state.board, this.setState)}>{this.state.board[0] ? this.state.board[0][0] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(1, this.state.turn, this.state.board, this.setState)}>{this.state.board[1] ? this.state.board[1][0] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(2, this.state.turn, this.state.board, this.setState)}>{this.state.board[2] ? this.state.board[2][0] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(3, this.state.turn, this.state.board, this.setState)}>{this.state.board[3] ? this.state.board[3][0] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(4, this.state.turn, this.state.board, this.setState)}>{this.state.board[4] ? this.state.board[4][0] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(5, this.state.turn, this.state.board, this.setState)}>{this.state.board[5] ? this.state.board[5][0] : null}</td>
                                <td className="cell" onClick={() => this.onClickHandler(6, this.state.turn, this.state.board, this.setState)}>{this.state.board[6] ? this.state.board[6][0] : null}</td>
                            </tr>
                        </tbody>
                    </table>
    
                </div>
            )
        } else{
            return (<h1>{this.state.winner}</h1>)
        }
       
    }
}



ReactDOM.render(<App></App>, document.getElementById('app'));