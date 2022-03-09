import React from 'react'
import styled from 'styled-components'
import QuizAnswer from './QuizAnswer'

const StyledQuiz = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.withSubtitle ? '30px' : '50px'} 30px 25px 30px;
  height: 100%;
  background: #F7F8F9;
`

const QuizTitle = styled.h3`
  color: #0F0F0F;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: ${props => props.withSubtitle ? '10px' : '30px'};
`

const QuizSubtitle = styled.p`
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #697580;
`

const QuizImage = styled.img`
  margin-bottom: 35px;
`

const QuizPlaceWrap = styled.div`
  display: flex;
  flex-grow: 1;
`

const QuizPlace = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 300px;
  
  & > * {
    flex-grow: 1;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const SkipButton = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-top: 36px;

  text-align: center;
  text-decoration-line: underline;

  color: #3A4850;
  
  display: ${props => props.hide ? 'none' : 'block'};
`

const Quiz = ({quiz}) => {

  const oneRow = quiz.answerOption?.oneRow

  return (
      <StyledQuiz withSubtitle={quiz.subtitle}>
        <QuizTitle withSubtitle={quiz.subtitle}>{quiz.title}</QuizTitle>
        {quiz.subtitle ? <QuizSubtitle>{quiz.subtitle}</QuizSubtitle> : null}

        {quiz.image ? <QuizImage src={quiz.image} alt="quiz-image"/> : null}

        <QuizPlaceWrap>
          <QuizPlace>
            {quiz.answers.map(answer => (
                <QuizAnswer
                    key={answer.name}
                    oneRow={oneRow}
                    oneRowText={answer.oneRowText}
                    image={answer.image}
                >
                  {answer.name}
                </QuizAnswer>
            ))}
          </QuizPlace>
        </QuizPlaceWrap>
        <SkipButton hide={!quiz.underText}>{quiz.underText}</SkipButton>
      </StyledQuiz>
  )
}

export default Quiz