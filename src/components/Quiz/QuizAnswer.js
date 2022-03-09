import React from 'react'
import styled, {css} from 'styled-components'

const StyledQuizAnswer = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(231, 235, 237, 0.80141);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  color: #425A60;
  cursor: pointer;

  display: flex;
  justify-content: ${props => props.oneRowText ? 'space-between' : props.oneRow ? 'flex-start' : 'center'};
  align-items: center;
  flex-direction: column;

  transition: transform .3s;

  &:hover {
    transform: scale(1.05);
  }
  
  ${props => props.oneRow ? css`
    flex-direction: row;
    align-items: center;

    & > *:nth-child(1) {
      flex-basis: 30%;
    }

    & > *:nth-child(3) {
      flex-grow: 1;
    }
  ` : null}

  ${props => props.oneRowText ? css`
    padding: 0 20px;
  ` : null};
`

const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`

const OneRowText = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #0F0F0F
`

const Divider = styled.div`
  width: 1px;
  height: 35px;
  background: #DEDEDE;
  margin-right: 18px;
`

const StyledQuizImage = styled.div`
  margin-bottom: ${props => props.oneRow ? 'none' : '15px'};
  display: flex;
  justify-content: center;
  align-items: center;
`

const QuizAnswer = ({image, oneRow, oneRowText, children}) => {
  const imageItem = image
      ?
      <StyledQuizImage oneRow={oneRow}>
        <img src={image} alt="quiz-answer"/>
      </StyledQuizImage>
      :
      null

  return (
      <StyledQuizAnswer oneRow={oneRow} oneRowText={oneRowText}>
        {imageItem}
        {oneRow && !oneRowText ? <Divider/> : null}
        <Text>{children}</Text>
        {oneRowText ? <OneRowText>{oneRowText}</OneRowText> : null}
      </StyledQuizAnswer>
  )
}

export default QuizAnswer