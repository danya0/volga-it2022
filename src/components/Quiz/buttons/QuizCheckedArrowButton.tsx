import React, {FC} from 'react'
import styled, {css} from 'styled-components'
import arrowImage from '../../../img/arrow_right.svg'

export enum ArrowOrientation {
    left,
    right
}

interface IQuizCheckedArrowButton {
    orientation: ArrowOrientation,
    onClick?: () => void
}

const StyledQuizCheckedArrowButton = styled.div`
  opacity: 0;
  
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s;
  
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;
  
  ${(props: IQuizCheckedArrowButton) => props.orientation === ArrowOrientation.left ? css`
    left: 10px;
  ` : css`
    right: 10px;
  `}
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.18);
  }
`

const QuizCheckedArrowButton: FC<IQuizCheckedArrowButton> = ({orientation, onClick}) => {
    return (
        <StyledQuizCheckedArrowButton className="arrow-button" orientation={orientation} onClick={onClick}>
            {orientation === ArrowOrientation.left ? (
                <img style={{transform: 'rotateZ(180deg)'}} src={arrowImage} alt="prev"/>
            ) : (
                <img src={arrowImage} alt="next"/>
            )}
        </StyledQuizCheckedArrowButton>
    )
}

export default QuizCheckedArrowButton