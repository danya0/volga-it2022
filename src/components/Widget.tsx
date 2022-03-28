import React, {FC, useEffect} from 'react'
import styled from 'styled-components'
import {mainDarkColor} from '../constants/styledConstats'
import Preview from './Preview'
import Header from './Header'
import Quiz from './Quiz/Quiz'
import {getQuizLength, quiz} from '../quiz/quiz'
import {useDispatch} from 'react-redux'
import {nextQuizCreator, prevQuizCreator, stopQuizCreator} from '../store/quizReducer'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IAnswerInState} from "../types/quizReducerTypes";
import {IDisplayCondition} from "../types/quizTypes";
import FinalWindow from "./FinalWindow";

const StyledWidget = styled.div`
  margin: 0 auto;
  color: ${mainDarkColor};
  max-width: 375px;
  border: 1px solid black;
  height: 638px;

  display: flex;
  flex-direction: column;
`

const checkCondition = (answers: IAnswerInState, condition: IDisplayCondition) => answers[condition.conditionalQuizName] === condition.answer

const Widget: FC = () => {
    const answers = useTypedSelector(state => state.quiz.answers)
    const prevQuizId = useTypedSelector(state => state.quiz.prevQuizId)
    const quizId = useTypedSelector(state => state.quiz.quizId)
    const currentQuiz = quiz[quizId]
    const finalQuizId = quiz[quiz.length - 1].quizId
    const dispatch = useDispatch()

    const nextQuiz = () => {
        dispatch(nextQuizCreator())
    }

    const prevQuiz = () => {
        dispatch(prevQuizCreator())
    }

    const stopQuiz = () => {
        dispatch(stopQuizCreator())
    }

    useEffect(() => {
        if (currentQuiz?.displayCondition && prevQuizId) {
            if (!checkCondition(answers, currentQuiz.displayCondition)) {
                if (prevQuizId < quizId) {
                    nextQuiz()
                } else {
                    prevQuiz()
                }
            }
        }
    }, [currentQuiz?.displayCondition])


    const widgetBody = quizId < 0 ? <Preview startEvent={nextQuiz}/> : quizId > finalQuizId ? <FinalWindow /> : <Quiz quiz={currentQuiz}/>

    return (
        <StyledWidget>
            <Header
                prev={prevQuiz}
                close={stopQuiz}
                maxProgress={getQuizLength()}
                progress={currentQuiz ? currentQuiz.quizId : quizId}
            />
            {widgetBody}
        </StyledWidget>
    )
}

export default Widget