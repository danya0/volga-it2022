import React, {useState} from 'react'
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
  
  ${props => props.small ? css`
    font-size: 13.72px;
    line-height: 14px;
    margin-bottom: 13px;
  `: null}
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
  margin-bottom: ${props => props.oneRow ? 'none' : props.smallBottom ? '8px' : '15px'};
  display: flex;
  justify-content: center;
  align-items: center;
`

const QuizAnswer = ({answer, oneRow, checkedType, children}) => {
  const [checked, setChecked] = useState(false)

  const toggleChecked = () => setChecked(!checked)

  const {image, oneRowText} = answer

  const imageItem = image
      ?
      <StyledQuizImage smallBottom={checkedType} oneRow={oneRow}>
        <img src={image} alt="quiz-answer"/>
      </StyledQuizImage>
      :
      null

  // todo: обработка состояния checked

  return (
      <StyledQuizAnswer
          oneRow={oneRow}
          oneRowText={oneRowText}
          onClick={!checkedType ? null : toggleChecked}
      >
        {imageItem}
        {oneRow && !oneRowText ? <Divider/> : null}
        {children ? <Text small={checkedType}>{children}</Text> : null}
        {oneRowText ? <OneRowText>{oneRowText}</OneRowText> : null}
      </StyledQuizAnswer>
  )
}

export default QuizAnswer