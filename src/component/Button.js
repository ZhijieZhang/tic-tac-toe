import React, { Component } from 'react';

import '../style/Button.css'

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMouseIn: false
		};

		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
	}

	mouseEnter() {
		this.setState({isMouseIn: true});
	}

	mouseLeave() {
		this.setState({isMouseIn: false});
	}

	showValue() {
		const { value, player, gameOver } = this.props;

		if (value) return value;
		else if (this.state.isMouseIn && !gameOver) return player;
		return null;
	}

	render() {
		return(
			<button 
				onClick={this.props.handleClick}
				onMouseEnter={this.mouseEnter}
				onMouseLeave={this.mouseLeave}
			>
				{this.showValue()}
			</button>
		);
	}

}

export default Button;