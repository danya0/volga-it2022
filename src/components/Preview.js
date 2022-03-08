import React from 'react'
import styled from 'styled-components'
import AccentTitle, {StyledAccentTitle} from './UI/AccentTitle'
import PreviewImg from '../img/preview.png'
import Button from './UI/Button'

const StyledPreview = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 67px 24px 0 24px;
  background: linear-gradient(180deg, #E8F0F2 0%, rgba(232, 240, 242, 0) 100%);
`

const Image = styled.img`
  margin-bottom: 48px;
`

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 174%;
  color: #3A4850;
  max-width: 300px;
  text-align: center;
  margin-bottom: 25px;
`

const ThisAccentTitle = styled(StyledAccentTitle)`
  margin-bottom: 25px;
`

const Preview = () => {
  return (
      <StyledPreview>
        <Image src={PreviewImg} alt="preview"/>
        <ThisAccentTitle>Let’s find your perfect pair!</ThisAccentTitle>
        <Subtitle>Take the quiz to easily discover your perfect fit from thousands of styles</Subtitle>
        <Button>Start Now</Button>
      </StyledPreview>
  )
}

export default Preview