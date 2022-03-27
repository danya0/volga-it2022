import React, {FC, useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import QuizAnswer from './QuizAnswer'
import Button from '../UI/Button'
import QuizAnswerChecked from './QuizAnswerChecked'
import {useDispatch} from 'react-redux'
import {nextQuizCreator, pushAnswerCreator, setGenderCreator} from '../../store/quizReducer'
import LikeWindow from '../LikeWindow'
import {AnswerType, IAdditionalQuestion, IQuiz} from "../../types/quizTypes";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Genders} from "../../types/quizReducerTypes";

interface IQuizTitle {
    withSubtitle?: string | boolean
}

const QuizTitle = styled.h3<IQuizTitle>`
  color: #0F0F0F;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: ${(props: IQuizTitle) => props.withSubtitle ? '10px' : '20px'};
`

interface IQuizSubtitle {
    mb?: boolean
}

const QuizSubtitle = styled.p<IQuizSubtitle>`
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #697580;

  ${(props: IQuizSubtitle) => props.mb ? 'margin-bottom: 11px' : null};
`

interface IStyledQuiz {
    withSubtitle?: boolean;
    ifChecked?: boolean;
    twoAnswer?: boolean;
}

const StyledQuiz = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${(props: IStyledQuiz) => props.withSubtitle ? '30px' : '50px'};
  padding-bottom: 25px;
  ${(props: IStyledQuiz) => {
    const padding = props.ifChecked ? '13px' : props.twoAnswer ? '49px' : '30px'

    return css`
      padding-left: ${padding};
      padding-right: ${padding};
    `
  }}
  height: 100%;
  background: #F7F8F9;
`

const QuizImage = styled.img`
  margin-bottom: 35px;
`

interface IQuizGrid {
    grid?: boolean
}

const QuizPlaceWrap = styled.div`
  ${(props: IQuizGrid) => props.grid ? css`
    margin: 0 -13px 0 -13px;
    display: block;
    overflow-x: scroll;
  ` : 'display: flex'};
  flex-grow: 1;


  &::-webkit-scrollbar {
    display: none;
  }
`

const QuizPlace = styled.div`
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
    grid-template: repeat(3, 103px) / repeat(3, 160px);
    grid-gap: 10px;
  `}
`

interface ISkipButton {
    hide?: boolean
}

const SkipButton = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-top: 36px;

  text-align: center;
  text-decoration-line: underline;

  color: #3A4850;

  display: ${(props: ISkipButton) => props.hide ? 'none' : 'block'};
`

interface IQuizEl {
    quiz: IQuiz
}

const Quiz: FC<IQuizEl> = ({quiz: quizFromProps}) => {
    const [quiz, setQuiz] = useState<IQuiz | IAdditionalQuestion | any>(quizFromProps)
    useEffect(() => {
        setQuiz(quizFromProps)
    }, [quizFromProps])

    // a state in which the element should display text and an image on the same line
    const oneRow = quiz.answerOptions?.oneRow
    // a state where the element is of type 'checked'
    const checked = quiz.answerOptions?.checked
    // variable to display 'between page'
    const betweenPage = quiz.previewPageTitle
    // a variable that keeps track of whether there is an additional question
    const additionalQuestion = quiz.additionalQuestion

    // state that changes to false after 3 seconds of showing betweenPage
    const [isBetweenPage, setIsBetweenPage] = useState(!!betweenPage)
    useEffect(() => {
        setIsBetweenPage(!!betweenPage)
    }, [betweenPage])

    const dispatch = useDispatch()
    const gender = useTypedSelector(state => state.quiz.gender)
    const quizOptionName = quiz.optionName

    const generateResponse = (key: string, answer: AnswerType) => {
        // check additionalQuestion
        if (additionalQuestion && answer === additionalQuestion.answerId) {
            setQuiz({
                ...additionalQuestion,
                optionName: quiz.optionName,
            })
            return
        }

        // quiz 1
        if (key === 'gender') {
            const gender: Genders = answer === 5 ? Genders.women : answer === 4 ? Genders.men : Genders.noGender
            dispatch(setGenderCreator(gender))
        }

        // dispatch responses to the state
        dispatch(pushAnswerCreator({
            key,
            answer: answer ? answer : null
        }))
        // move to the next quiz
        dispatch(nextQuizCreator())
    }

    useEffect(() => {
        let timeout: any
        if (isBetweenPage) {
            timeout = setTimeout(() => {
                setIsBetweenPage(false)
            }, 2000)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [betweenPage, isBetweenPage, quiz])

    // xml parts
    const betweenPageXML = <LikeWindow>{betweenPage}</LikeWindow>

    const quizXML = (
        <StyledQuiz
            // if 'twoAnswer' or 'ifChecked' need to increase wrapper paddings
            twoAnswer={quiz.answers.length <= 2}
            ifChecked={checked}
            // change padding on top
            withSubtitle={quiz.subtitle}
        >
            <QuizTitle withSubtitle={quiz.subtitle}>
                {quiz.title}
            </QuizTitle>
            {quiz.subtitle ? <QuizSubtitle mb={checked}>{quiz.subtitle}</QuizSubtitle> : null}
            {quiz.image ? <QuizImage src={quiz.image} alt="quiz-image"/> : null}
            <QuizPlaceWrap
                // creates negative margin padding
                grid={checked}
            >
                <QuizPlace
                    // display: grid (To display 'checked' elements)
                    grid={checked}
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
                                    key={idx}
                                    answer={answerWithImage}
                                >
                                    {answer.name}
                                </QuizAnswerChecked>
                            )
                        } else {
                            return (
                                <QuizAnswer
                                    key={idx}
                                    oneRow={oneRow}
                                    answer={answerWithImage}
                                    onClick={() => {
                                        generateResponse(quizOptionName, answer.id)
                                    }}
                                >
                                    {answer.name}
                                </QuizAnswer>
                            )
                        }
                    })}
                </QuizPlace>
            </QuizPlaceWrap>

            {checked ?
                <Button style={{
                    width: 181,
                    margin: '0 auto 18px auto'
                }}>
                    Continue
                </Button> : null}

            <SkipButton
                hide={!quiz.underText}
                onClick={() => generateResponse(quizOptionName, null)}
            >
                {quiz.underText}
            </SkipButton>
        </StyledQuiz>
    )

    return (
        <>
            {isBetweenPage ? betweenPageXML : quizXML}
        </>
    )
}

export default Quiz