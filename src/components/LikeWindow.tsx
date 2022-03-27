import React, {FC} from 'react'
import AccentTitle from './UI/AccentTitle'
import styled, {keyframes} from 'styled-components'
import likeSvg from '../img/likeWindow/like.svg'
import star1 from '../img/likeWindow/star1.svg'
import star2 from '../img/likeWindow/star2.svg'
import Circle from './UI/Circle'

const LikeWindowWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 100px 15px 0 15px;
`

const likeAnim = keyframes`
  0% {
    transform: rotateZ(-180deg) scale(0.35);
  }
  
  65% {
    transform: scale(1.2);
  }
  
  100% {
    transform: rotateZ(0) scale(1);
  }
`

const Image = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(${(props: {bg: string}) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  
  animation: ${likeAnim} .75s ease-in-out;
`

const Star = styled(Image)`
  height: 9px;
  width: 9px;
  background-size: cover;
`

const LikeWindow: FC = ({children}) => {
  return (
      <LikeWindowWrap>
        <Circle>
          <Image bg={likeSvg}/>
          {/* little star 1 */}
          <Star style={{
            left: 31,
            top: 43
          }} bg={star1}/>
          {/* little star 2 */}
          <Star style={{
            left: 74,
            top: 28
          }} bg={star2}/>
        </Circle>
        <AccentTitle style={{
          fontSize: 24
        }}>{children}</AccentTitle>
      </LikeWindowWrap>
  )
}

export default LikeWindow