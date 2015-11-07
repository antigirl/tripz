import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app';
import {todos} from './reducer/reducers'

let store = createStore(todos);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
