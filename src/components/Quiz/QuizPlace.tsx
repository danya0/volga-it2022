import React, {FC} from 'react'
import QuizAnswerChecked from './QuizAnswerChecked'
import {checkDevelopmentMode} from '../../utils/checkDevelopmentMode'
import QuizAnswer from './QuizAnswer'
import styled, {css} from 'styled-components'
import {IQuizGrid} from './Quiz'
import {IAdditionalQuestion, IQuiz} from '../../types/quizTypes'
import {Genders} from '../../types/quizReducerTypes'
import {CheckedFunction, GenerateResponse} from '../../types/components'

const StyledQuizPlace = styled.div`
  flex-grow: 1;

  ${(props: IQuizGrid) => !props.grid ? css`
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > * {
      flex-grow: 1;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  ` : css`
    padding: 15px 12px 0 12px;
    height: fit-content;
    width: fit-content;
    display: grid;
    grid-template: repeat(3, 103px) / repeat(auto-fill, 160px);
    grid-auto-flow: column;
    grid-gap: 10px;
  `}
`

interface IQuizPlace {
    checked?: boolean,
    oneRow?: boolean,
    quiz: IQuiz | IAdditionalQuestion,
    gender: Genders,
    checkedF: CheckedFunction,
    generateResponse: GenerateResponse,
    quizOptionName: string
}

const QuizPlace: FC<IQuizPlace> = ({checked, quiz, gender, checkedF, oneRow, generateResponse, quizOptionName}) => {
    return (
        <StyledQuizPlace
            // display: grid (To display 'checked' elements)
            grid={checked}
            onScroll={(e: any) => {
                console.log('e ->', e)
            }}
        >
            {quiz.answers.map((answer: any, idx: number) => {
                // check the gender type to substitute the correct picture
                let image = answer.image
                if (typeof answer.image === 'object') {
                    image = answer.image[gender]
                }
                const answerWithImage = {
                    ...answer,
                    image
                }

                // depending on the type of question, select the correct element
                if (checked) {
                    return (
                        <QuizAnswerChecked
                            data-testid={checkDevelopmentMode(`answer-${idx+1}`)}

                            style={{width: 160}}
                            key={idx}
                            answer={answerWithImage}
                            onClick={checkedF}
                        >
                            {answer.name}
                        </QuizAnswerChecked>
                    )
                } else {
                    return (
                        <QuizAnswer
                            data-testid={checkDevelopmentMode(`answer-${idx+1}`)}

                            key={idx}
                            oneRow={oneRow}
                            answer={answerWithImage}
                            onClick={() => {
                                generateResponse(quizOptionName, answer.id, !!quiz.doNotShowInReplies
                                )
                            }}
                        >
                            {answer.name}
                        </QuizAnswer>
                    )
                }
            })}
        </StyledQuizPlace>
    )
}

export default QuizPlace