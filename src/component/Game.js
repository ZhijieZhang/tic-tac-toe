import React, { Component } from 'react';

import GameBoard from './GameBoard'

import '../style/Game.css';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
		this.restartGame = this.restartGame.bind(this);
	}

	isGameOver() {
		let filledBoard;
		let gameStatus;
		const winLines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		filledBoard = this.state.boardContent.every(square => square !== null);
		if (filledBoard) {
			gameStatus = 'draw';
		}

		for (let i = 0; i < winLines.length; i++) {
			const winLine = winLines[i];
			let hasWinner = winLine.map(index => this.state.boardContent[index])
													 	.reduce((acc, cur) => {
															return acc === cur ? acc : false;
														})

			if (hasWinner) {
				gameStatus = 'win';
			}
		}	

		if (!gameStatus) {
			this.setState({gameOver: false});
			return;
		}
		this.setState({gameOver: gameStatus});
	}

	handleClick(i) {
		let newBoardContent = [...this.state.boardContent];

		// If a button has been clicked, click it twice won't change the content nor current player
		if (!this.state.gameOver && !newBoardContent[i]) {
			newBoardContent[i] = this.state.player;
			this.setState(prevState => ({
				boardContent: newBoardContent,
				player: prevState.player === 'X' ? 'O' : 'X'
			}), this.isGameOver);	
		}
	}

	restartGame() {
		this.setState(initialState);
	}

  render() {
    return (
    	<div className="game-container">
    		<h1>Tic-Tac-Toe</h1>
    		<GameBoard 
    			player={this.state.player}
    			boardContent={this.state.boardContent}
    			gameOver={this.state.gameOver}
    			handleClick={(i) => this.handleClick(i)}
    			restartGame={this.restartGame}
    		/>
    	</div>
    );
  }
}

let initialState = {
	player: 'X',		
	boardContent : Array(9).fill(null),	
	gameOver: false	
};

export default Game;
