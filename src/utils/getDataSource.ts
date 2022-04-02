const getDataSource = () => {
    const root: HTMLElement = document.querySelector('#glasses-quiz-widget')!
    return root.dataset.source
}

export default getDataSource