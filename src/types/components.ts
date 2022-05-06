import {AnswerType} from './quizTypes'

export type CheckedFunction = (id: string, checked: boolean) => void
export type CheckedArray = string[]
export type GenerateResponse = (key: string, answer: AnswerType, doNotShowInReplies: boolean) => void