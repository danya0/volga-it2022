import React from 'react'
import styled from 'styled-components'
import {accentColor} from '../../constants/styledConstats'

export const StyledAccentTitle = styled.h2`
  font-size: 25px;
  color: ${accentColor};
  text-align: center;
`

const AccentTitle = ({children}) => {
  return (
      <StyledAccentTitle>
        {children}
      </StyledAccentTitle>
  )
}

export default AccentTitle