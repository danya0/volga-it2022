import React, {FC} from 'react'
import styled from 'styled-components'
import {accentColor} from '../../constants/styledConstats'

export const StyledAccentTitle = styled.h2`
  font-size: 25px;
  color: ${accentColor};
  text-align: center;
`



const AccentTitle: FC<any> = ({children, ...props}) => {
  return (
      <StyledAccentTitle {...props}>
        {children}
      </StyledAccentTitle>
  )
}

export default AccentTitle