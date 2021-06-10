import ReactDOM from 'react-dom';
import React from 'react';
import App from './component/app';
import { Client } from 'colyseus.js'

const endpoint = `${window.location.protocol.replace('http', 'ws')}//${window.location.host}`;
window._client = new Client(endpoint);

ReactDOM.render(React.createElement(App), document.getElementById('root'));
