import React from 'react';

import Button from './Button'

import '../style/GameBoard.css';

function GameBoard(props) {
	function renderButton(i) {
		return <Button 
						value={props.boardContent[i]}
						handleClick={() => props.handleClick(i)}
					 />
	}

	const { player, gameOver, restartGame } = props;
	let status;

	if (gameOver === 'win') {
		status = `Game over. Winner is ${player === 'X' ? 'O':'X'}`;
	} else if (gameOver === 'draw'){
		status = "It's a draw game";
	} else {
		status = `Current Player is: ${player}`;
	}

	return(
		<div className="game-board">
			<div className="status">{status}</div>
			<div className="row row-1">
				{renderButton(0)}
				{renderButton(1)}
				{renderButton(2)}					
			</div>
			<div className="row row-2">
				{renderButton(3)}
				{renderButton(4)}
				{renderButton(5)}		
			</div>
			<div className="row row-3">
				{renderButton(6)}
				{renderButton(7)}
				{renderButton(8)}		
			</div>
			{ gameOver &&
				<button onClick={restartGame}>Restart</button>
			}
		</div>
	);
}

export default GameBoard;