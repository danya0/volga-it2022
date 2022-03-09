import React from 'react'
import styled from 'styled-components'
import {mainDarkColor} from '../constants/styledConstats'
import Preview from './Preview'
import Header from './Header'
import Quiz from './Quiz/Quiz'
import {quiz} from '../quiz/quiz'

const StyledWidget = styled.div`
  margin: 0 auto;
  color: ${mainDarkColor};
  max-width: 375px;
  border: 1px solid black;
  height: 638px;

  display: flex;
  flex-direction: column;
  
`

const Widget = () => {
  return (
      <StyledWidget>
        <Header/>
        {/*<Preview/>*/}
        <Quiz quiz={quiz[7]}/>
      </StyledWidget>
  )
}

export default Widget