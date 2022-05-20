import React, {FC, useEffect, useRef, useState} from 'react'
import styled, {css} from 'styled-components'
import {useDispatch} from 'react-redux'
import {nextQuizCreator, pushAnswerCreator, setGenderCreator} from '../../store/quizReducer'
import LikeWindow from '../LikeWindow'
import {AnswerType, IAdditionalQuestion, IQuiz} from '../../types/quizTypes'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {Genders} from '../../types/quizReducerTypes'
import {OptionNames} from '../../quiz/quiz'
import {CheckedArray, CheckedFunction, GenerateResponse} from '../../types/components'
import {checkDevelopmentMode} from '../../utils/checkDevelopmentMode'
import ImageWithHomePage from '../ImageWithHomePage'
import QuizPlace from './QuizPlace'
import QuizCheckedButton from './buttons/QuizCheckedButton'
import QuizCheckedArrowButton, {ArrowOrientation} from './buttons/QuizCheckedArrowButton'
import {isMobileDevice} from '../../utils/isMobileDevice'
import QuizPlaceWrap from './wraps/QuizPlaceWrap'

interface IQuizTitle {
    withSubtitle?: string | boolean
}

const QuizTitle = styled.h3<IQuizTitle>`
  color: #0F0F0F;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: ${(props: IQuizTitle) => props.withSubtitle ? '10px' : '32px'};
`

interface IQuizSubtitle {
    mb?: boolean
}

const QuizSubtitle = styled.p<IQuizSubtitle>`
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #697580;

  ${(props: IQuizSubtitle) => props.mb ? 'margin-bottom: 11px' : null};
`

interface IStyledQuiz {
    withSubtitle?: boolean;
    ifChecked?: boolean;
    twoAnswer?: boolean;
}

const StyledQuiz = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${(props: IStyledQuiz) => props.withSubtitle ? '30px' : '50px'};
  padding-bottom: 25px;

  height: 100%;
  background: #F7F8F9;
`

const QuizImage = styled.img`
  margin-bottom: 35px;
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
`

interface IQuizEl {
    quiz: IQuiz
}

const Quiz: FC<IQuizEl> = ({quiz: quizFromProps}) => {
    const [quiz, setQuiz] = useState<IQuiz | IAdditionalQuestion>(quizFromProps)
    const quizWrapRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        setQuiz(quizFromProps)
    }, [quizFromProps])

    // a state in which the element should display text and an image on the same line
    const oneRow = quiz.answerOptions?.oneRow
    // a state where the element is of type 'checked'
    const checked = quiz.answerOptions?.checked
    // variable to display 'between page'
    const betweenPage = quiz.previewPageTitle
    // a variable that keeps track of whether there is an additional question
    const additionalQuestion = (quiz as IQuiz).additionalQuestion

    const [checkedAr, setCheckedAr] = useState<CheckedArray>([])
    const checkedF: CheckedFunction = (id, checked) => {
        if (checked) {
            setCheckedAr(prevState => [...prevState, id])
        } else {
            let idx = checkedAr.indexOf(id)
            setCheckedAr(prevState => [...prevState.slice(0, idx), ...prevState.slice(idx + 1)])
        }
    }

    // state that changes to false after 2 seconds of showing betweenPage
    const [isBetweenPage, setIsBetweenPage] = useState(!!betweenPage)
    useEffect(() => {
        setIsBetweenPage(!!betweenPage)
    }, [betweenPage])

    useEffect(() => {
        let timeout: any
        if (isBetweenPage) {
            timeout = setTimeout(() => {
                setIsBetweenPage(false)
            }, 2000)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [betweenPage, isBetweenPage, quiz])

    const dispatch = useDispatch()
    const quizOptionName = (quiz as IQuiz).optionName

    const generateResponse: GenerateResponse = (key: string, answer: AnswerType, doNotShowInReplies: boolean) => {

        // check additionalQuestion
        if (additionalQuestion && answer === additionalQuestion.answerId) {
            setQuiz({
                ...additionalQuestion,
                optionName: (quiz as IQuiz).optionName,
            })
            return
        }

        // quiz 1
        if (key === OptionNames.gender) {
            const gender: Genders = answer === 5 ? Genders.women : answer === 4 ? Genders.men : Genders.noGender
            dispatch(setGenderCreator(gender))
        }

        // dispatch responses to the state
        dispatch(pushAnswerCreator({
            key,
            answer,
            doNotShowInReplies
        }))
        // move to the next quiz
        dispatch(nextQuizCreator())
    }

    const quizCheckedButtonClick = () => {
        setCheckedAr([])
        generateResponse(quizOptionName, checkedAr, !!quiz.doNotShowInReplies)
    }

    // verticalToHorizontalScroll
    useEffect(() => {
        if (quizWrapRef.current) {
            quizWrapRef.current!.scrollLeft = 0
        }
    }, [quiz])

    // jsx parts
    const betweenPageJSX = <LikeWindow>{betweenPage}</LikeWindow>

    const quizJSX = (
        <StyledQuiz

            // change padding on top
            withSubtitle={quiz.subtitle}
        >
            <QuizTitle withSubtitle={quiz.subtitle} dangerouslySetInnerHTML={{__html: quiz.title}}>
                {/*{quiz.title}*/}
            </QuizTitle>
            {quiz.subtitle && <QuizSubtitle mb={checked}>{quiz.subtitle}</QuizSubtitle>}
            {quiz.image &&
                <ImageWithHomePage style={{padding: '0px 29px'}} How={QuizImage} src={quiz.image} alt="quiz-image"/>}

            <QuizPlaceWrap quiz={quiz} checkedF={checkedF} oneRow={oneRow} generateResponse={generateResponse}
                           quizOptionName={quizOptionName} checked={checked}/>

            {checked &&
                <QuizCheckedButton
                    inactive={!checkedAr.length}
                    onClick={quizCheckedButtonClick}
                >
                    Continue
                </QuizCheckedButton>
            }

            {quiz.underText && (
                <SkipButton
                    data-testid={checkDevelopmentMode('skip-btn')}
                    onClick={() => generateResponse(quizOptionName, null, !!quiz.doNotShowInReplies)}
                >
                    {quiz.underText}
                </SkipButton>
            )}
        </StyledQuiz>
    )

    return (
        <>
            {isBetweenPage ? betweenPageJSX : quizJSX}
        </>
    )
}

export default Quiz