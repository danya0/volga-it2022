import {FC, useEffect, useState} from 'react'
import Widget from './components/Widget'
import getDataSource from './utils/getDataSource'

const css = `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Roboto&display=swap');
    .widget {
        font-family: 'Open Sans', sans-serif;
    }
    
    .widget h1, h2, h3, h4, p {
        margin: 0;
        padding: 0;
    }
`

const App: FC = () => {
    const [isContainSource, setIsContainsSource] = useState<boolean>(false)

    useEffect(() => {
        if (getDataSource()) {
            setIsContainsSource(true)
        }
    }, [])

    const NoSource: FC = () => (
        <h1>The element does not contain the "data-source" attribute</h1>
    )

    const WidgetBody: FC<any> = ({...props}) => (
        <div {...props}>
            <Widget/>
        </div>
    )

    return (
        <>
            {
                isContainSource
                    ?
                    <div>
                        <style>{css}</style>
                        <WidgetBody className="widget"/>
                    </div>
                    : <NoSource/>
            }
        </>
    )
}

export default App
