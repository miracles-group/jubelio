import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './configureStore'
import App from './App'

import 'antd/dist/antd.css';
import './assets/fontawesome/css/all.min.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
