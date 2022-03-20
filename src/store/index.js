import {combineReducers, createStore} from 'redux'
import {quizReducer} from './quizReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(combineReducers({
  quiz: quizReducer
}), composeWithDevTools())