export type Answer = {
    key: string,
    answer: any
};

export enum Genders {
    men = 'men',
    women = 'women',
    noGender = 'noGender'
}

export type IAnswerInState = {
    [key: string]: any
}

export interface QuizState {
    prevQuizId: number | null
    quizId: number,
    gender: Genders,
    answers: IAnswerInState
}

export enum QuizActionsTypes {
    NEXT_QUIZ = 'NEXT_QUIZ',
    PREV_QUIZ = 'PREV_QUIZ',
    PUSH_ANSWER = 'PUSH_ANSWER',
    SET_GENDER = 'SET_GENDER',
    STOP_QUIZ = 'STOP_QUIZ',
}

export interface FetchNextQuizAction {
    type: QuizActionsTypes.NEXT_QUIZ
}
export interface FetchPrevQuizAction {
    type: QuizActionsTypes.PREV_QUIZ
}
export interface FetchPushAnswerAction {
    type: QuizActionsTypes.PUSH_ANSWER,
    payload: Answer
}
export interface FetchSetGenderAction {
    type: QuizActionsTypes.SET_GENDER,
    payload: Genders
}
export interface FetchStopQuizAction {
    type: QuizActionsTypes.STOP_QUIZ
}

export type QuizAction = FetchNextQuizAction | FetchPrevQuizAction | FetchPushAnswerAction | FetchSetGenderAction | FetchStopQuizAction
