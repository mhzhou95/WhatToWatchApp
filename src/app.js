import React from 'react';
import ReactDOM from 'react-dom';
import WhatToWatchApp from './components/WhatToWatchApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const http = require('http');
setInterval(() => {
  http.get('http://what-do-mz.herokuapp.com');
}, 300000);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
ReactDOM.render(<WhatToWatchApp />, document.getElementById('app'));
