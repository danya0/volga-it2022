import React from 'react'
import styled from 'styled-components'

const StyledCircle = styled.div`
  position: relative;
  width: 131.52px;
  height: 131.52px;
  border-radius: 50%;
  background: #F7F8F9;
  box-shadow: -9px -9px 16px #FFFFFF, 9px 9px 16px rgba(163, 177, 198, 0.325148);
  
  margin-bottom: 40px;  
`

const Circle = ({children, ...props}) => {
  return (
      <StyledCircle {...props}>
        {children}
      </StyledCircle>
  )
}

export default Circle