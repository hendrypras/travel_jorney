// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import myFirstReducer from './reducer'
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ myFirstReducer })
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)
