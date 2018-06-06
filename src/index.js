import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Game from './component/Game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
