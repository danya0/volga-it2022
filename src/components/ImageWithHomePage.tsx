import React, {FC} from 'react'
import {withHomePage} from '../utils/withHomePage'

interface ImageProps {
    How?: any
    src: any
    alt: string
}

const ImageWithHomePage: FC<ImageProps> = ({How, src, alt}) => {
    const link = withHomePage(src)
    return (
        <>
            {How ? <How alt={alt} src={link} loading={'lazy'}/> : <img alt={alt} src={link} loading={'lazy'}/>}
        </>
    )
}

export default ImageWithHomePage