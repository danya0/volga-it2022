import React from 'react'
import styled from 'styled-components'
import backArrow from '../img/arrow_left.svg'
import nextArrow from '../img/arrow_right.svg'
import close from '../img/exit.svg'
import logo from '../img/logo.png'
import ProgressBar from './UI/ProgressBar'

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 66px;
  
  & * > {
    width: 100%;
  }
`

const StyledHeader = styled.header`
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`

const StyledBtn = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`

const BackBtn = styled(StyledBtn)`
  width: 8.5px;
  height: 14px;
  background-image: url(${backArrow});
`

const ToRightBtn = styled(StyledBtn)`
  background-image: url(${nextArrow});
  width: 11px;
  height: 18px;
`

const CloseBtn = styled(StyledBtn)`
  width: 13.79px;
  height: 13.61px;
  background-image: url(${close});
`

const Counter = styled.div`
  font-size: 18px;
  line-height: 19px;
`

const Header = ({inProgress, close}) => {
  if (inProgress) {
    return (
        <HeaderWrap>
          <StyledHeader>
            <BackBtn/>
            <Counter>1/10</Counter>
            <CloseBtn/>
          </StyledHeader>
          <ProgressBar current={1} max={10}/>
        </HeaderWrap>
    )
  } else {
    return (
        <HeaderWrap>
          <StyledHeader>
            <img src={logo} alt="logo"/>
            {close ? <CloseBtn/> : <ToRightBtn/>}
          </StyledHeader>
        </HeaderWrap>
    )
  }
}

export default Header