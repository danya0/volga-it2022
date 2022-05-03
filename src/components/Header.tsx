import React, {FC} from 'react'
import styled from 'styled-components'
import backArrow from '../img/arrow_left.svg'
import nextArrow from '../img/arrow_right.svg'
import close from '../img/exit.svg'
import logo from '../img/logo.png'
import ProgressBar from './UI/ProgressBar'
import {checkDevelopmentMode} from '../utils/checkDevelopmentMode'
import ImageWithHomePage from './ImageWithHomePage'
import {withHomePage} from '../utils/withHomePage'

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  flex-shrink: 0;

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
  background-image: url(${withHomePage(backArrow)});
`

const ToRightBtn = styled(StyledBtn)`
  background-image: url(${withHomePage(nextArrow)});
  width: 11px;
  height: 18px;
`

const CloseBtn = styled(StyledBtn)`
  width: 13.79px;
  height: 13.61px;
  background-image: url(${withHomePage(close)});
`

const Counter = styled.div`
  font-size: 18px;
  line-height: 19px;
`

interface HeaderProps {
    progress: number,
    maxProgress: number,
    close: () => void,
    prev: () => void
}

const Header: FC<HeaderProps> = ({progress, maxProgress, close, prev}) => {
    const isFinal = progress > maxProgress

    // xml part
    const closeBtn = <CloseBtn data-testid={checkDevelopmentMode('header-close')} onClick={close}/>

    const headerInProgress =
        <>
            <BackBtn data-testid={checkDevelopmentMode('header-back')} onClick={prev}/>
            <Counter>{progress}/{maxProgress}</Counter>
            {closeBtn}
        </>

    const header =
        <>
            <ImageWithHomePage src={logo} alt="logo"/>
            {isFinal ? closeBtn : <ToRightBtn/>}
        </>

    return (
        <HeaderWrap>
            <StyledHeader>
                {progress < 0 || isFinal ? header : headerInProgress}
            </StyledHeader>
            {progress > 0 ? <ProgressBar current={progress} max={maxProgress}/> : null}
        </HeaderWrap>
    )
}

export default Header