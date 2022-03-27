import React, {FC} from 'react'
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

const StyledWidget = styled.div`
  margin: 0 auto;
  color: ${mainDarkColor};
  max-width: 375px;
  border: 1px solid black;
  height: 638px;

  display: flex;
  flex-direction: column;
`

const Widget: FC = () => {
    const quizId = useTypedSelector(state => state.quiz.quizId)
    const currentQuiz = quiz[quizId]
    const dispatch = useDispatch()

    const startFunction = () => {
        dispatch(nextQuizCreator())
    }

    const prevQuiz = () => {
        dispatch(prevQuizCreator())
    }

    const stopQuiz = () => {
        dispatch(stopQuizCreator())
    }

    return (
        <StyledWidget>
            <Header
                prev={prevQuiz}
                close={quizId >= 0 ? stopQuiz : undefined}
                inProgress={quizId >= 0}
                progress={quizId + 1}
            />
            {quizId < 0 ? <Preview startEvent={startFunction}/> : <Quiz quiz={currentQuiz}/>}
            {/*<LikeWindow>No worries, we’ve got you!</LikeWindow>*/}
            {/*<FinalWindow/>*/}
        </StyledWidget>
    )
}

export default Widget