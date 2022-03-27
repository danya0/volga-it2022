export interface IAnswer {
    id: any,
    name?: string,
    image?: string | object,
    oneRowText?: string
}

export interface IAnswerWithStringImage extends IAnswer {
    image?: string
}

export interface IAdditionalQuestion extends Omit<IQuiz,
    'quizId'
    | 'displayCondition'
    | 'additionalQuestion'
    | 'optionName'>{
    answerId: any,
}

interface IAnswerOptions {
    oneRow?: boolean,
    checked?: boolean
}

interface IDisplayCondition {
    conditionalQuizId: number,
    answer: number | boolean | string
}

export interface IQuiz {
    displayCondition?: IDisplayCondition
    quizId: number,
    optionName: string,
    title: string,
    subtitle?: string,
    image?: string,
    previewPageTitle?: string,
    answerOptions?: IAnswerOptions
    answers: IAnswer[],
    additionalQuestion?: IAdditionalQuestion
    underText?: string
}

export interface IQuizImage {
    [key: string]: any
}