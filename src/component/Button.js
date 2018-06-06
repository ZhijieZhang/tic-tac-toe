import React from 'react';

import '../style/Button.css'

function Button(props) {
	const { value, handleClick } = props;

	return(
		<button onClick={handleClick}>{value}</button>
	);
}

export default Button;