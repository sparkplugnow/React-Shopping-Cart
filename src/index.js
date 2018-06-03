import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Apptwo from "./Apptwo"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Apptwo />, document.getElementById('costumer'));

registerServiceWorker();
