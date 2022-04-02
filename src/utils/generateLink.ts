import {IAnswerInState} from "../types/quizReducerTypes";
import objectCheck from "./objectCheck";

export const generateLink = (answers: IAnswerInState, sourceLink: string): any => {
    return Object.keys(answers).reduce((acc: string, current: any, index) => {
        const isArray = Array.isArray(answers[current])

        if (
            ( objectCheck(answers[current]) && answers[current].doNotShowInReplies )
            || answers[current] === null
        ) {
            return acc
        }

        return acc + (index !== 0 ? '&' : '?') + `${current}=${isArray ? answers[current].join(',') : answers[current]}`
    }, sourceLink + '/')
}