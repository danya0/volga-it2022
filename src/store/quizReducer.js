const defaultState = {
  start: false,
  quizId: 2,
  gender: null,
  answers: {}
}

const START_QUIZ = 'START_QUIZ'
const NEXT_QUIZ = 'NEXT_QUIZ'
const PREV_QUIZ = 'PREV_QUIZ'
const PUSH_ANSWER = 'PUSH_ANSWER'
const SET_GENDER = 'SET_GENDER'


export const quizReducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_QUIZ: {
      return {
        ...state,
        start: true
      }
    }
    case PUSH_ANSWER: {
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.key]: action.payload.answer
        }
      }
    }
    case SET_GENDER: {
      return {
        ...state,
        gender: action.payload.gender
      }
    }
    case NEXT_QUIZ: {
      return {
        ...state,
        quizId: state.quizId + 1
      }
    }
    case PREV_QUIZ: {
      return {
        ...state,
        quizId: state.quizId > 0 ? state.quizId - 1 : state.quizId
      }
    }
    default: {
      return state
    }
  }
}

export const startQuizCreator = () => ({type: START_QUIZ})
export const pushAnswerCreator = (payload) => ({type: PUSH_ANSWER, payload})
export const setGenderCreator = (payload) => ({type: SET_GENDER, payload})
export const nextQuizCreator = () => ({type: NEXT_QUIZ})
export const prevQuizCreator = () => ({type: PREV_QUIZ})