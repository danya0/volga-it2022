import React, {FC} from 'react'
import styled, {css} from 'styled-components'
import {IAnswerWithStringImage} from "../../types/quizTypes"
import ImageWithHomePage from '../ImageWithHomePage'

interface IStyledQuizAnswer {
    oneRow?: any;
    oneRowText?: string;
}

export const StyledQuizAnswer = styled.div<IStyledQuizAnswer>`
  background: #FFFFFF;
  border: 1px solid rgba(231, 235, 237, 0.80141);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  color: #425A60;
  cursor: pointer;

  display: flex;
  justify-content: ${(props: IStyledQuizAnswer) => props.oneRowText ? 'space-between' : props.oneRow ? 'flex-start' : 'center'};
  align-items: center;
  flex-direction: column;

  transition: transform .3s;

  ${(props: IStyledQuizAnswer) => props.oneRow ? css`
    flex-direction: row;
    align-items: center;

    & > *:nth-child(1) {
      flex-basis: 30%;
    }

    & > *:nth-child(3) {
      flex-grow: 1;
    }
  ` : null}

  ${(props: IStyledQuizAnswer) => props.oneRowText ? css`
    padding: 0 20px;
  ` : null};
`

interface IText {
    small?: boolean
}

export const Text = styled.p<IText>`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  ${(props: IText) => props.small ? css`
    font-size: 13.72px;
    line-height: 14px;
    margin-bottom: 13px;
  ` : null}
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

interface IStyledQuizImage {
    noMargin?: boolean;
    smallBottom?: boolean;
}

const StyledQuizImage = styled.div<IStyledQuizImage>`
  margin-bottom: ${(props: IStyledQuizImage) => props.noMargin ? 'none' : props.smallBottom ? '8px' : '15px'};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const checkImageAndInsertEl = (imgItem?: string, props?: any, alt?: string) => (
    imgItem
        ?
        // smallBottom={checkedType && children} noMargin={oneRow || !children}
        <StyledQuizImage
            {...props}
        >
            <ImageWithHomePage src={imgItem} alt={alt ? alt : 'quiz-answer'}/>
        </StyledQuizImage>
        :
        null
)

interface IQuizAnswer {
    answer: IAnswerWithStringImage;
    oneRow?: boolean;
    onClick?: () => void;
    [key: string]: any
}

const QuizAnswer: FC<IQuizAnswer> = ({answer, oneRow, children, onClick, ...props}) => {
    const {image, oneRowText} = answer
    const checkedType = false

    return (
        <StyledQuizAnswer
            // display element on one line
            oneRow={oneRow}
            // display element on one line with 'space-between'
            oneRowText={oneRowText}

            onClick={onClick}
            {...props}
        >
            {checkImageAndInsertEl(image, {smallBottom: checkedType && !!children, noMargin: oneRow || !children}, `${children}` || oneRowText)}
            {oneRow && !oneRowText ? <Divider/> : null}
            {children ? <Text small={checkedType}>{children}</Text> : null}
            {oneRowText ? <OneRowText>{oneRowText}</OneRowText> : null}
        </StyledQuizAnswer>
    )
}

export default QuizAnswer