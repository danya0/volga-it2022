import React, {FC, useState} from 'react'
import {checkImageAndInsertEl, StyledQuizAnswer, Text} from './QuizAnswer'
import styled, {css} from 'styled-components'
import assurance from '../../img/assurance.svg'
import {IAnswerWithStringImage} from "../../types/quizTypes";
import {CheckedFunction} from "../../types/components";

interface ICheckedAnswer {
  checked?: boolean
}

const CheckedAnswer = styled(StyledQuizAnswer)<ICheckedAnswer>`
  position: relative;

  ${(props: ICheckedAnswer) => props.checked ? css`
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

interface IQuizAnswerChecked {
  answer: IAnswerWithStringImage,
  onClick: CheckedFunction
}

const QuizAnswerChecked: FC<IQuizAnswerChecked> = ({answer, onClick, children, ...props}) => {
  const [checked, setChecked] = useState<boolean>(false)
  const {image} = answer
  const checkedType = true

  const flag = checked ? (<Flag>
    <img src={assurance} alt="checked"/>
  </Flag>) : null

  const clickFunction = () => {
    onClick(answer.id, !checked)
    setChecked(!checked)
  }

  return (
      <CheckedAnswer
          data-assurance={assurance}
          checked={checked}
          onClick={clickFunction}
          {...props}
      >
        {checkImageAndInsertEl(image, {smallBottom: checkedType && !!children, noMargin: !children})}
        {children ? <Text small={checkedType}>{children}</Text> : null}
        {flag}
      </CheckedAnswer>
  )
}

export default QuizAnswerChecked