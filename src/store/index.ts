import {combineReducers, createStore} from 'redux'
import {quizReducer} from './quizReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  quiz: quizReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>
