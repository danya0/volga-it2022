import {
  Answer,
  FetchNextQuizAction,
  FetchPrevQuizAction,
  FetchPushAnswerAction,
  FetchSetGenderAction,
  FetchStartAction,
  Genders,
  QuizAction,
  QuizActionsTypes,
  QuizState
} from "../types/quizReducerTypes";

const defaultState: QuizState = {
  start: false,
  quizId: 2,
  gender: Genders.noGender,
  answers: {}
}

export const quizReducer = (state = defaultState, action: QuizAction): QuizState => {
  switch (action.type) {
    case QuizActionsTypes.START_QUIZ: {
      return {
        ...state,
        start: true
      }
    }
    case QuizActionsTypes.PUSH_ANSWER: {
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.key]: action.payload.answer
        }
      }
    }
    case QuizActionsTypes.SET_GENDER: {
      return {
        ...state,
        gender: action.payload
      }
    }
    case QuizActionsTypes.NEXT_QUIZ: {
      return {
        ...state,
        quizId: state.quizId + 1
      }
    }
    case QuizActionsTypes.PREV_QUIZ: {
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

export const startQuizCreator = (): FetchStartAction => ({type: QuizActionsTypes.START_QUIZ})
export const pushAnswerCreator = (payload: Answer): FetchPushAnswerAction => ({type: QuizActionsTypes.PUSH_ANSWER, payload})
export const setGenderCreator = (payload: Genders): FetchSetGenderAction => ({type: QuizActionsTypes.SET_GENDER, payload})
export const nextQuizCreator = (): FetchNextQuizAction => ({type: QuizActionsTypes.NEXT_QUIZ})
export const prevQuizCreator = (): FetchPrevQuizAction => ({type: QuizActionsTypes.PREV_QUIZ})