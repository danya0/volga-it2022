import React, {useState} from 'react'
import {checkImageAndInsertEl, StyledQuizAnswer, Text} from './QuizAnswer'
import styled, {css} from 'styled-components'
import assurance from '../../img/assurance.svg'

const CheckedAnswer = styled(StyledQuizAnswer)`
  position: relative;

  ${props => props.checked ? css`
    border: 1.96px solid #2196F3;
  ` : null}
`

const Flag = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #2196F3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const QuizAnswerChecked = ({answer, checkedType, children, ...props}) => {
  const [checked, setChecked] = useState(false)
  const {image} = answer

  const flag = checked ? (<Flag>
    <img src={assurance} alt="checked"/>
  </Flag>) : null

  const clickFunction = () => setChecked(!checked)

  return (
      <CheckedAnswer
          data-assurance={assurance}
          checked={checked}
          onClick={clickFunction}
      >
        {checkImageAndInsertEl(image, {smallBottom: checkedType && !!children, noMargin: !children})}
        {children ? <Text small={checkedType}>{children}</Text> : null}
        {flag}
      </CheckedAnswer>
  )
}

export default QuizAnswerChecked