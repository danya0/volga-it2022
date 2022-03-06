import {useEffect, useState} from 'react'

function App() {
  const [isContainSource, setIsContainsSource] = useState(false)

  useEffect(() => {
    const root = document.querySelector('#glasses-quiz-widget')

    if (root.dataset.source) {
      setIsContainsSource(true)
    }
  }, [])

  const NoSource = () => (
      <h1>The element does not contain the "data-source" attribute</h1>
  )

  const WidgetBody = () => (
      <div>Widget</div>
  )

  return (
      <>
        {
          isContainSource
              ? <WidgetBody/>
              : <NoSource/>
        }
      </>
  )
}

export default App;
