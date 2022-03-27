import React, {FC} from 'react'
import styled from 'styled-components'

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 174%;
  color: #3A4850;
  text-align: center;
  margin-bottom: 25px;
`

const SubAccentTitle: FC<any> = ({children, ...props}) => {
  return (
      <Subtitle {...props}>
        {children}
      </Subtitle>
  )
}

export default SubAccentTitle