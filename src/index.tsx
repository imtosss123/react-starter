import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// styling
import './index.scss'

import ReduxRoot from '_redux/rootRedux'

const rootEl = document.getElementById('root')
ReactDOM.render(<ReduxRoot />, rootEl)

// comment in for PWA with service worker in production mode
// registerServiceWorker()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
