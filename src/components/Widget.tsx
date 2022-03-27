import React, {FC, useEffect} from 'react'
import styled from 'styled-components'
import {mainDarkColor} from '../constants/styledConstats'
import Preview from './Preview'
import Header from './Header'
import Quiz from './Quiz/Quiz'
import {quiz} from '../quiz/quiz'
import LikeWindow from './LikeWindow'
import FinalWindow from './FinalWindow'
import {useDispatch} from 'react-redux'
import {nextQuizCreator, prevQuizCreator, stopQuizCreator} from '../store/quizReducer'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IAnswerInState} from "../types/quizReducerTypes";
import {IDisplayCondition} from "../types/quizTypes";

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


    return (
        <StyledWidget>
            <Header
                prev={prevQuiz}
                close={quizId >= 0 ? stopQuiz : undefined}
                inProgress={quizId >= 0}
                progress={currentQuiz ? currentQuiz.quizId : undefined}
            />
            {quizId < 0 ? <Preview startEvent={nextQuiz}/> : <Quiz quiz={currentQuiz}/>}
            {/*<LikeWindow>No worries, we’ve got you!</LikeWindow>*/}
            {/*<FinalWindow/>*/}
        </StyledWidget>
    )
}

export default Widget