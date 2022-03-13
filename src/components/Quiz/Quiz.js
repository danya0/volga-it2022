import React from 'react'
import styled, {css} from 'styled-components'
import QuizAnswer from './QuizAnswer'
import Button from '../UI/Button'

const QuizTitle = styled.h3`
  color: #0F0F0F;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: ${props => props.withSubtitle ? '10px' : '20px'};
`

const QuizSubtitle = styled.p`
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #697580;
  
  ${props => props.mb ? 'margin-bottom: 26px' : null};
`

const StyledQuiz = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${props => props.withSubtitle ? '30px' : '50px'};
  padding-bottom: 25px;
  ${props => {
    const padding = props.ifChecked ? '13px' : props.twoAnswer ? '50px' : '30px'
    
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

const QuizPlaceWrap = styled.div`
  ${props => props.grid ? css`
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
  
  ${props => !props.grid ? css`
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
    height: fit-content;
    width: fit-content;
    padding: 0 12px;
    display: grid;
    grid-template: repeat(3, 103px) / repeat(3, 160px);
    grid-gap: 10px;
  `}
  
  
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
  const checked = quiz.answerOption?.checked

  return (
      <StyledQuiz twoAnswer={quiz.answers.length <= 2} ifChecked={checked} withSubtitle={quiz.subtitle}>
        <QuizTitle withSubtitle={quiz.subtitle}>{quiz.title}</QuizTitle>
        {quiz.subtitle ? <QuizSubtitle mb={checked}>{quiz.subtitle}</QuizSubtitle> : null}

        {quiz.image ? <QuizImage src={quiz.image} alt="quiz-image"/> : null}

        <QuizPlaceWrap grid={checked}>
          <QuizPlace grid={checked}>
            {quiz.answers.map((answer, idx) => (
                <QuizAnswer
                    key={idx}
                    oneRow={oneRow}
                    checkedType={checked}
                    answer={answer}
                >
                  {answer.name}
                </QuizAnswer>
            ))}
          </QuizPlace>
        </QuizPlaceWrap>

        {checked ?
            <Button style={{
              width: 181,
              margin: '0 auto 18px auto'
            }}>
              Continue
            </Button> : null}

        <SkipButton hide={!quiz.underText}>{quiz.underText}</SkipButton>
      </StyledQuiz>
  )
}

export default Quiz