import React, {FC} from 'react'
import Button from '../../UI/Button'

interface IQuizCheckedButton {
    inactive: boolean
    onClick: () => void
}

const QuizCheckedButton: FC<IQuizCheckedButton> = ({children, inactive, onClick}) => {
    return (
        <Button
            inactive={inactive}
            style={{
                width: 181,
                margin: '0 auto 18px auto'
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default QuizCheckedButton