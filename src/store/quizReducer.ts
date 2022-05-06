import {
  Answer,
  FetchNextQuizAction,
  FetchPrevQuizAction,
  FetchPushAnswerAction,
  FetchSetGenderAction,
  FetchStopQuizAction,
  Genders,
  QuizAction,
  QuizActionsTypes,
  QuizState
} from "../types/quizReducerTypes";

const defaultState: QuizState = {
  prevQuizId: null,
  quizId: 8,
  gender: Genders.noGender,
  answers: {}
}

export const quizReducer = (state = defaultState, action: QuizAction): QuizState => {
  switch (action.type) {
    case QuizActionsTypes.PUSH_ANSWER: {
      let body = {}

      if (action.payload.doNotShowInReplies) {
        body = {
          answer: action.payload.answer,
          doNotShowInReplies: action.payload.doNotShowInReplies
        }
      } else {
        body = action.payload.answer
      }

      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.key]: body
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
        prevQuizId: state.quizId,
        quizId: state.quizId + 1
      }
    }
    case QuizActionsTypes.PREV_QUIZ: {
      return {
        ...state,
        prevQuizId: state.quizId,
        quizId: state.quizId > -1 ? state.quizId - 1 : state.quizId
      }
    }
    case QuizActionsTypes.STOP_QUIZ: {
      return {
        ...state,
        prevQuizId: null,
        quizId: -1,
        answers: {}
      }
    }
    default: {
      return state
    }
  }
}

export const pushAnswerCreator = (payload: Answer): FetchPushAnswerAction => ({type: QuizActionsTypes.PUSH_ANSWER, payload})
export const setGenderCreator = (payload: Genders): FetchSetGenderAction => ({type: QuizActionsTypes.SET_GENDER, payload})
export const nextQuizCreator = (): FetchNextQuizAction => ({type: QuizActionsTypes.NEXT_QUIZ})
export const prevQuizCreator = (): FetchPrevQuizAction => ({type: QuizActionsTypes.PREV_QUIZ})
export const stopQuizCreator = (): FetchStopQuizAction => ({type: QuizActionsTypes.STOP_QUIZ})