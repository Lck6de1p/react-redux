import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import store from './redux/store'
import {Provider} from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    {/* 此处需要Provider包裹app，目的是让app所有的后代容器组件接收到store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


