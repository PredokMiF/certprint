import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { reduxBatch } from '@manaflair/redux-batch'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'


export const history = createBrowserHistory()

const rootReducer = combineReducers({
    router: connectRouter(history),
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
    enhancers: [reduxBatch],
})

export type RootState = ReturnType<typeof rootReducer>

export default store
