import React, {FC} from 'react'
import styled from 'styled-components'

interface ProgressBarProps {
  current: number,
  max: number,
}

const StyledProgress = styled.div<ProgressBarProps>`
  width: 100%;
  height: 8px;
  background: #D8D8D8;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: -${(props: ProgressBarProps) => 100 - props.current / props.max * 100}%;
    background: linear-gradient(290.47deg, #3797FA 11.33%, #45C9FF 83.66%);
    border-radius: 0 5px 5px 0;
  }
`

const ProgressBar: FC<ProgressBarProps> = ({current, max}) => {
  return (
      <StyledProgress current={current} max={max}/>
  )
}

export default ProgressBar