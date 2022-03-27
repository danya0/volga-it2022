import React, {FC} from 'react'
import styled from 'styled-components'
import {StyledAccentTitle} from './UI/AccentTitle'
import PreviewImg from '../img/preview.png'
import Button from './UI/Button'
import SubAccentTitle from './UI/SubAccentTitle'

const StyledPreview = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 67px 18px 0 18px;
  background: linear-gradient(180deg, #E8F0F2 0%, rgba(232, 240, 242, 0) 100%);
`

const Image = styled.img`
  margin-bottom: 48px;
`

const ThisAccentTitle = styled(StyledAccentTitle)`
  margin-bottom: 25px;
`

interface PreviewProps {
    startEvent: () => void
}

const Preview:FC<PreviewProps> = ({startEvent}) => {
  return (
      <StyledPreview>
        <Image src={PreviewImg} alt="preview"/>
        <ThisAccentTitle>Let’s find your perfect pair!</ThisAccentTitle>
        <SubAccentTitle>Take the quiz to easily discover your perfect fit from thousands of styles</SubAccentTitle>
        <Button onClick={startEvent}>Start Now</Button>
      </StyledPreview>
  )
}

export default Preview