import React, {FC} from 'react'
import styled, {css} from 'styled-components'

interface StyledButtonProps {
    xPadding?: number;
}

interface ButtonProps extends StyledButtonProps {
    inactive?: boolean,
    onClick?: () => void,
    [key: string]: any
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  border: none;
  ${(props: {inactive?: boolean}) => {
    if (props.inactive) {
      return css`
        background: #DEDEDE;
        cursor: not-allowed !important;
      `
    } else {
        return css`
          background: linear-gradient(270deg, #45C7FA 0%, #2196F3 100%);
        `
    }
  }}
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.03);
  border-radius: 24px;
  color: transparent;
  padding: 13px ${(props: ButtonProps) => props.xPadding ? props.xPadding + 'px' : '48px'};

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 24px;
    background: #000;
    opacity: 0;
    transition: opacity .3s;
  }
  
  &:active:before {
    opacity: 0.2;
  }
  
  &:after {
    color: #fff;
    content: attr(data-text);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`

const Button: FC<ButtonProps> = ({children, inactive, xPadding, onClick, ...props}) => {
    return (
        <StyledButton
            inactive={inactive}
            disabled={inactive}

            xPadding={xPadding}
            data-text={children}
            onClick={!inactive ? onClick : null}
            {...props}
        >
            {children}
        </StyledButton>
    )
}

export default Button