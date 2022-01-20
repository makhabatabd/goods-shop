import React from 'react';

import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './reducer/reducer';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './components/App/App';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);


