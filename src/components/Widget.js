import React from 'react'
import styled from 'styled-components'
import {mainDarkColor} from '../constants/styledConstats'
import Preview from './Preview'
import Header from './Header'
import Quiz from './Quiz/Quiz'
import {quiz} from '../quiz/quiz'
import LikeWindow from './LikeWindow'
import FinalWindow from './FinalWindow'
import {useDispatch, useSelector} from 'react-redux'
import {prevQuizCreator, startQuizCreator} from '../store/quizReducer'

const StyledWidget = styled.div`
  margin: 0 auto;
  color: ${mainDarkColor};
  max-width: 375px;
  border: 1px solid black;
  height: 638px;

  display: flex;
  flex-direction: column;
  
`

const Widget = () => {
  const isStart = useSelector(state => state.quiz.start)
  const quizId  = useSelector(state => state.quiz.quizId)
  const currentQuiz = quiz[quizId]
  const dispatch = useDispatch()

  const startFunction = () => {
    dispatch(startQuizCreator())
  }

  const prevQuiz = () => {
    dispatch(prevQuizCreator())
  }

  return (
      <StyledWidget>
        <Header prev={prevQuiz} inProgress={isStart} progress={quizId + 1}/>
        {!isStart ? <Preview startEvent={startFunction}/> : <Quiz quiz={currentQuiz}/>}
        {/*<LikeWindow>No worries, we’ve got you!</LikeWindow>*/}
        {/*<FinalWindow/>*/}
      </StyledWidget>
  )
}

export default Widget