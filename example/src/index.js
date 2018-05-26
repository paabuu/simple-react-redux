import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import counter from './reducers';
import { Provider } from './react-redux';
const rootReducer = combineReducers({
    count: counter
});

const store = createStore(rootReducer);

store.dispatch({
    type: 'INC'
});

const Container = () => (
    <Provider store={ store }>
        <App></App>
    </Provider>
);

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
