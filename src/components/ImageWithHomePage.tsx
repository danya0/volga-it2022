import React, {FC} from 'react'
import {withHomePage} from '../utils/withHomePage'

interface ImageProps {
    How?: any
    src: any
    alt: string
    [key: string]: any
}

const ImageWithHomePage: FC<ImageProps> = ({How, src, alt, ...props}) => {
    const link = withHomePage(src)
    return (
        <>
            {How ? <How alt={alt} src={link} loading={'lazy'} {...props}/> : <img alt={alt} src={link} loading={'lazy'} {...props}/>}
        </>
    )
}

export default ImageWithHomePage