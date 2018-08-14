import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Game from './components/Game'

import './styles/index.css';


ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
