import React from 'react'
import styled from 'styled-components'

const StyledQuiz = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 30px 0 30px;
`

const QuizTitle = styled.h3`
  color: #0F0F0F;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 30px;
`

const Quiz = () => {
  return (
      <StyledQuiz>
        <QuizTitle>Привет? опаво лоап олаолп олаплал папд адж пджап аджп</QuizTitle>
      </StyledQuiz>
  )
}

export default Quiz