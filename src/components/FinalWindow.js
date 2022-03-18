import React from 'react'
import styled from 'styled-components'
import Circle from './UI/Circle'
import giftSvg from '../img/finalWindow/gift.svg'
import {StyledAccentTitle} from './UI/AccentTitle'
import SubAccentTitle from './UI/SubAccentTitle'
import Button from './UI/Button'

const StyledFinalWindow = styled.div`
  position: relative;
  height: 100%;
  padding: 38px 25px 26px 25px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

const GiftItem = styled.img`
  position: absolute;
  left: 29px;
  top: 20px;
`

const AccentTitle = styled(StyledAccentTitle)`
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 12px;
`

const Policy = styled.p`
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  text-align: center;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #5B6971;
`

const FinalWindow = () => {
  return (
      <StyledFinalWindow>
        <Circle style={{
          marginBottom: 32
        }}>
          <GiftItem src={giftSvg} alt="gift"/>
        </Circle>
        <AccentTitle>We've found some awesome frames for you!</AccentTitle>
        <SubAccentTitle style={{
          marginBottom: 50,
          lineHeight: '155%'
        }}>Send the results to your email to receive special discounts.</SubAccentTitle>
        <Button xPadding={70}>Send</Button>

        <Policy>By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</Policy>
      </StyledFinalWindow>
  )
}

export default FinalWindow