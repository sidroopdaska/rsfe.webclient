import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './_global.scss';

import App from './app';

let mainAppContainer = document.getElementById('react-app');
ReactDOM.render(<App />, mainAppContainer);
