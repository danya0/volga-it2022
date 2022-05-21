import React, {FC, useEffect, useRef, useState} from 'react'
import QuizPlace from '../QuizPlace'
import styled, {css} from 'styled-components'
import {IAdditionalQuestion, IQuiz} from '../../../types/quizTypes'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {CheckedFunction, GenerateResponse} from '../../../types/components'
import QuizCheckedArrowButton, {ArrowOrientation} from '../buttons/QuizCheckedArrowButton'
import {isMobileDevice} from '../../../utils/isMobileDevice'
import {log} from 'util'

export interface IQuizGrid {
    grid?: boolean
}

const QuizPlaceWrapStyled = styled.div`
  position: relative;
  ${(props: IQuizGrid) => props.grid ? css`
    display: block;
    overflow-x: scroll;
  ` : 'display: flex'};
  flex-grow: 1;
  scroll-behavior: smooth;

  ${(props: any) => {
    const padding = props.grid ? '0' : props.twoAnswer ? '49px' : '30px'

    return css`
      padding-left: ${padding};
      padding-right: ${padding};
    `
  }}
  &::-webkit-scrollbar {
    display: none;
  }
`

interface IQuizPlaceWrap {
    quiz: IQuiz | IAdditionalQuestion,
    checked?: boolean,
    checkedF: CheckedFunction,
    oneRow?: boolean,
    generateResponse: GenerateResponse,
    quizOptionName: string
}

const RelativeWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  &:hover .arrow-button {
    opacity: 1;
  }
`

const QuizPlaceWrap: FC<IQuizPlaceWrap> = ({quiz, checked, checkedF, oneRow, generateResponse, quizOptionName}) => {
    const gender = useTypedSelector(state => state.quiz.gender)
    const quizWrapRef = useRef<HTMLDivElement>(null)
    const [showNextArrow, setShowNextArrow] = useState<boolean>(true)
    const [showPrewArrow, setShowPrewArrow] = useState<boolean>(false)

    useEffect(() => {
        setShowNextArrow(true)
        setShowPrewArrow(false)
    }, [quiz])

    const onScrollHandler = () => {
        const scrollLeft = quizWrapRef.current!.scrollLeft
        const inRightSite: boolean = quizWrapRef.current!.offsetWidth + scrollLeft + 3 >= quizWrapRef.current!.scrollWidth

        if (scrollLeft === 0) {
            setShowPrewArrow(false)
        }
        if (inRightSite) {
            setShowNextArrow(false)
        }
        if ((scrollLeft > 0 && !inRightSite) && (!showPrewArrow || !showNextArrow)) {
            setShowPrewArrow(true)
            setShowNextArrow(true)
        }
    }

    const arrowButtonsJSX = (
        <>
            {showPrewArrow && (
                <QuizCheckedArrowButton
                    onClick={() => quizWrapRef.current!.scroll(quizWrapRef.current!.scrollLeft - 330, 0)}
                    orientation={ArrowOrientation.left}/>
            )}
            {showNextArrow && (
                <QuizCheckedArrowButton
                    onClick={() => quizWrapRef.current!.scroll(quizWrapRef.current!.scrollLeft + 330, 0)}
                    orientation={ArrowOrientation.right}/>
            )}
        </>
    )

    const quizPlaceWrap = (
        <QuizPlaceWrapStyled
            // if 'twoAnswer' or 'ifChecked' need to increase wrapper paddings
            twoAnswer={quiz.answers.length <= 2}
            grid={checked}
            ref={quizWrapRef}
            onScroll={onScrollHandler}
        >
            <QuizPlace quiz={quiz} quizOptionName={quizOptionName} checked={checked} gender={gender}
                       checkedF={checkedF} oneRow={oneRow} generateResponse={generateResponse}/>
        </QuizPlaceWrapStyled>
    )

    if (checked) {
        return (
            <RelativeWrap>
                {quizPlaceWrap}
                {!isMobileDevice() && arrowButtonsJSX}
            </RelativeWrap>
        )
    } else {
        return (
            <>
                {quizPlaceWrap}
            </>
        )
    }
}

export default QuizPlaceWrap