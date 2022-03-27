import {FC, useEffect, useState} from 'react'
import Widget from './components/Widget'

const App: FC = () => {
  const [isContainSource, setIsContainsSource] = useState<boolean>(false)

  useEffect(() => {
    const root: HTMLElement = document.querySelector('#glasses-quiz-widget')!

    if (root.dataset.source) {
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
              ? <WidgetBody className="widget"/>
              : <NoSource/>
        }
      </>
  )
}

export default App;
