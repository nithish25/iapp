import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<marquee><h1>Manoj Aiyer is React Developer</h1></marquee>, document.getElementById('root'));

serviceWorker.unregister();
