import React, {useEffect} from 'react'
import styled, {css} from 'styled-components'
import QuizAnswer from './QuizAnswer'
import Button from '../UI/Button'
import QuizAnswerChecked from './QuizAnswerChecked'
import {useDispatch, useSelector} from 'react-redux'
import {nextQuizCreator, pushAnswerCreator, setGenderCreator} from '../../store/quizReducer'

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

  ${props => props.mb ? 'margin-bottom: 11px' : null};
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
    padding: 15px 12px 0 12px;
    height: fit-content;
    width: fit-content;
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
  // a state in which the element should display text and an image on the same line
  const oneRow = quiz.answerOption?.oneRow
  // a state where the element is of type 'checked'
  const checked = quiz.answerOption?.checked

  const dispatch = useDispatch()
  const gender = useSelector(state => state.quiz.gender)
  const quizOptionName = quiz.optionName

  const generateResponse = (key, answer) => {
    // quiz 1
    if (key === 'gender') {
      console.log('answer.id ->', answer)
      const gender = answer === 5 ? 'women' : answer === 4 ? 'men' : null
      dispatch(setGenderCreator({gender}))
    }

    // dispatch responses to the state
    dispatch(pushAnswerCreator({
      key,
      answer: answer ? answer : null
    }))
    // move to the next quiz
    dispatch(nextQuizCreator())
  }

  return (
      <StyledQuiz
          // if 'twoAnswer' or 'ifChecked' need to increase wrapper paddings
          twoAnswer={quiz.answers.length <= 2}
          ifChecked={checked}
          // change padding on top
          withSubtitle={quiz.subtitle}
      >
        <QuizTitle withSubtitle={quiz.subtitle}>
          {quiz.title}
        </QuizTitle>
        {quiz.subtitle ? <QuizSubtitle mb={checked}>{quiz.subtitle}</QuizSubtitle> : null}
        {quiz.image ? <QuizImage src={quiz.image} alt="quiz-image"/> : null}
        <QuizPlaceWrap
            // creates negative margin padding
            grid={checked}
        >
          <QuizPlace
              // display: grid (To display 'checked' elements)
              grid={checked}
          >
            {quiz.answers.map((answer, idx) => {
              // check the gender type to substitute the correct picture
              let image = answer.image
              if (typeof answer.image === 'object') {
                image = answer.image[gender ? gender : 'noGender']
              }

              // depending on the type of question, select the correct element
              if (checked) {
                return (
                    <QuizAnswerChecked
                      key={idx}
                      checkedType={checked}
                      answer={{
                        ...answer,
                        image: image
                      }}
                    >
                      {answer.name}
                    </QuizAnswerChecked>
                )
              } else {
                return (
                    <QuizAnswer
                        key={idx}
                        oneRow={oneRow}
                        checkedType={checked}
                        answer={{
                          ...answer,
                          image: image
                        }}
                        onClick={() => {generateResponse(quizOptionName, answer.id)}}
                    >
                      {answer.name}
                    </QuizAnswer>
                )
              }
            })}
          </QuizPlace>
        </QuizPlaceWrap>

        {checked ?
            <Button style={{
              width: 181,
              margin: '0 auto 18px auto'
            }}>
              Continue
            </Button> : null}

        <SkipButton
            hide={!quiz.underText}
            onClick={() => generateResponse(quizOptionName)}
        >
          {quiz.underText}
        </SkipButton>
      </StyledQuiz>
  )
}

export default Quiz