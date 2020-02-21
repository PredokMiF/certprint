import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components'

import * as serviceWorker from './serviceWorker'
import { themes } from './styles'
import GlobalStyles from './styles/globals'
import store, { history } from './store'
import App from './App'


ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ThemeProvider theme={themes.default}>
                <GlobalStyles/>
                <App/>
            </ThemeProvider>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
