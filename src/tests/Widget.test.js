import '@testing-library/jest-dom'
import {render as rtlRender, screen, waitFor} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {quizReducer} from '../store/quizReducer'
import userEvent from '@testing-library/user-event'
import Widget from '../components/Widget'
import {Genders} from '../types/quizReducerTypes'
import {OptionNames} from '../quiz/quiz'

function renderWithRedux(
    ui,
    {
        preloadedState,
        store = configureStore({reducer: {quiz: quizReducer}, preloadedState}),
        ...renderOptions
    } = {}
) {
    function Wrapper({children}) {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

describe('Test Widget component', () => {
    process.env.NODE_ENV = 'development'

    describe('Tests for quizId = 0', () => {
        const preloadedState = {preloadedState: {quiz: {quizId: 0}}}

        test('Render', () => {
            renderWithRedux(<Widget/>, preloadedState)
            expect(screen.getByText(/You are looking for/i)).toBeInTheDocument()
        })

        describe('test userEvents', () => {
            afterEach(() => {
                expect(screen.getByText(/What type of glasses are you looking for/i)).toBeInTheDocument()
            })

            test('Click 1 button', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-1'))
            })

            test('Click 2 button', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-2'))
            })

            test('Click on skip button', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('skip-btn'))
            })
        })
    })

    describe('Tests for quizId = 1', () => {

        const preloadedState = {preloadedState: {quiz: {quizId: 1}}}

        test('Render', () => {
            renderWithRedux(<Widget/>, preloadedState)
            expect(screen.getByText(/What type of glasses are you looking for/i)).toBeInTheDocument()
        })

        describe('test userEvents', () => {
            afterEach(() => {
                expect(screen.getByText(/Let's get to know you!/i)).toBeInTheDocument()
            })

            test('Click 1 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-1'))
            })
            test('Click 2 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-2'))
            })
            test('Click on skip button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('skip-btn'))
            })
        })

        describe('Checking the display of icons', () => {
            test('Women icon', () => {
                renderWithRedux(<Widget/>, {preloadedState: {quiz: {quizId: 1, gender: Genders.women}}})
                expect(screen.getByTestId('answer-1')).toContainHTML('women')
            })

            test('Men icon', () => {
                renderWithRedux(<Widget/>, {preloadedState: {quiz: {quizId: 1, gender: Genders.men}}})
                expect(screen.getByTestId('answer-1')).toContainHTML('men')
            })

            test('No gender icon', () => {
                renderWithRedux(<Widget/>, {preloadedState: {quiz: {quizId: 1, gender: Genders.noGender}}})
                expect(screen.getByTestId('answer-1')).toContainHTML('men')
            })
        })
    })

    describe('Tests for quizId = 2', () => {
        const preloadedState = {preloadedState: {quiz: {quizId: 2}}}

        test('Render', async () => {
            await renderWithRedux(<Widget/>, preloadedState)
            // expect(await screen.findByText(/Do you need vision correction/i)).toBeInTheDocument()
            await waitFor(() => {
                expect(screen.getByText(/Do you need vision correction/i)).toBeInTheDocument()
            }, {timeout: 2001})
        })

        test('Show preview title', () => {
            renderWithRedux(<Widget/>, preloadedState)
            expect(screen.getByText(/Let's get to know you!/i)).toBeInTheDocument()
        })

        describe('test userEvents', () => {

            const waitForF = async () => {
                await waitFor(() => {
                    expect(screen.getByText(/Do you need vision correction/i)).toBeInTheDocument()
                }, {timeout: 2001})
            }

            test('Click 1 button && show additional question', async () => {
                await renderWithRedux(<Widget/>, preloadedState)
                await waitForF()
                await userEvent.click(screen.getByTestId('answer-1')) // Yes
                expect(screen.getByText(/What do you need your glasses for/i)).toBeInTheDocument()
            })
            test('Click 2 button && show next question', async () => {
                await renderWithRedux(<Widget/>, preloadedState)
                await waitForF()
                await userEvent.click(screen.getByTestId('answer-2'))
                expect(screen.getByText(/What’s your current frame size/i)).toBeInTheDocument()
            })
            test('Click on skip button && show next question', async () => {
                await renderWithRedux(<Widget/>, preloadedState)
                await waitForF()
                await userEvent.click(screen.getByTestId('skip-btn'))
                expect(screen.getByText(/What’s your current frame size/i)).toBeInTheDocument()
            })
        })

        describe('Tests for quizId = 2 ADDITIONAL QUESTION', () => {
            const preloadedState = {preloadedState: {quiz: {quizId: 2}}}

            const testAdditionalQuestion = async () => {
                await waitFor(() => {
                    expect(screen.getByText(/Do you need vision correction/i)).toBeInTheDocument()
                }, {timeout: 2001})
                await userEvent.click(screen.getByTestId('answer-1'))
                screen.debug()
                expect(screen.getByText(/What do you need your glasses for?/i)).toBeInTheDocument()
            }

            test('Render', async () => {
                await renderWithRedux(<Widget/>, preloadedState)
                await testAdditionalQuestion()
            })

            describe('test userEvents', () => {

                afterEach(() => {
                    expect(screen.getByText(/What’s your current frame size/i)).toBeInTheDocument()
                })

                test('Click 1 button && show next question', async () => {
                    await renderWithRedux(<Widget/>, preloadedState)
                    await testAdditionalQuestion()
                    await userEvent.click(screen.getByTestId('answer-1')) // Near Vision
                })
                test('Click 2 button && show next question', async () => {
                    await renderWithRedux(<Widget/>, preloadedState)
                    await testAdditionalQuestion()
                    await userEvent.click(screen.getByTestId('answer-2')) // Distance Vision
                })
                test('Click 3 button && show next question', async () => {
                    await renderWithRedux(<Widget/>, preloadedState)
                    await testAdditionalQuestion()
                    await userEvent.click(screen.getByTestId('answer-2')) // Multifocal / Progressive
                })
                test('Click on skip button && show next question', async () => {
                    await renderWithRedux(<Widget/>, preloadedState)
                    await testAdditionalQuestion()
                    await userEvent.click(screen.getByTestId('skip-btn'))
                })
            })
        })
    })


    describe('Tests for quizId = 3', () => {
        const preloadedState = {preloadedState: {quiz: {quizId: 3, answers: {[OptionNames.eyewear_type]: 210}}}}
        const expectNextQuiz = () => {
            expect(screen.getByText(/Would you like to protect your eyes from light emanating from screens/i)).toBeInTheDocument()
        }

        test('Render', () => {
            renderWithRedux(<Widget/>, preloadedState)
            expect(screen.getByText(/What’s your current frame size/i)).toBeInTheDocument()
        })

        describe('test userEvents', () => {

            test('Click 1 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-1'))
                expectNextQuiz()
            })
            test('Click 2 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-2'))
                expectNextQuiz()
            })
            test('Click 3 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-3'))
                expectNextQuiz()
            })
            test('Click on skip button && show additional question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('skip-btn'))
                expect(screen.getByText(/No worries, we’ve got you!/i)).toBeInTheDocument()
            })
        })


        describe('Tests for quizId = 3 ADDITIONAL QUESTION', () => {

            const testAdditionalQuestion = async () => {
                userEvent.click(screen.getByTestId('skip-btn'))
                await waitFor(() => {
                    expect(screen.getByText(/How wide would you say your face is/i)).toBeInTheDocument()
                }, {timeout: 2001})
            }

            test('Render', async () => {
                renderWithRedux(<Widget/>, preloadedState)
                await testAdditionalQuestion()
            })

            describe('test userEvents', () => {

                test('Click 1 button && show next question', async () => {
                    renderWithRedux(<Widget/>, preloadedState)
                    await testAdditionalQuestion()
                    userEvent.click(screen.getByTestId('answer-1'))
                    expectNextQuiz()
                })
                test('Click 2 button && show next question', async () => {
                    renderWithRedux(<Widget/>, preloadedState)
                    await testAdditionalQuestion()
                    userEvent.click(screen.getByTestId('answer-2'))
                    expectNextQuiz()
                })
                test('Click 3 button && show next question', async () => {
                    renderWithRedux(<Widget/>, preloadedState)
                    await testAdditionalQuestion()
                    userEvent.click(screen.getByTestId('answer-3'))
                    expectNextQuiz()
                })
                test('Click on skip button && show next question', async () => {
                    renderWithRedux(<Widget/>, preloadedState)
                    await testAdditionalQuestion()
                    userEvent.click(screen.getByTestId('skip-btn'))
                })
            })
        })
    })

    describe('Tests for quizId = 4, 5', () => {

        describe('displayCondition', () => {

            describe('quiz index === 4', () => {
                test('Skip FIRST 5 quiz, if eyewear_type !== 210, but === 211', () => {
                    renderWithRedux(<Widget/>, {
                        preloadedState: {
                            quiz: {
                                quizId: 4,
                                prevQuizId: 3,
                                answers: {[OptionNames.eyewear_type]: 211}
                            }
                        }
                    })
                    expect(screen.getByText(/When you’re out and about, which shade of lenses do you prefer/i)).toBeInTheDocument()
                })

                test('If answer = null (Skip button) - show FIRST quiz 5', () => {
                    renderWithRedux(<Widget/>, {
                        preloadedState: {
                            quiz: {
                                quizId: 4,
                                prevQuizId: 3,
                                answers: {[OptionNames.eyewear_type]: null}
                            }
                        }
                    })
                    expect(screen.getByText(/Would you like to protect your eyes from light emanating from screens/i)).toBeInTheDocument()
                })

                test('If answer = 210 (Eyeglasses) - show FIRST quiz 5', () => {
                    renderWithRedux(<Widget/>, {
                        preloadedState: {
                            quiz: {
                                quizId: 4,
                                prevQuizId: 3,
                                answers: {'eyewear_type': 210}
                            }
                        }
                    })
                    expect(screen.getByText(/Would you like to protect your eyes from light emanating from screens/i)).toBeInTheDocument()
                })
            })

            // quiz index === 5
            describe('quiz index === 5', () => {
                test('Skip SECOND 5 quiz, if eyewear_type !== 211, but === 210', () => {
                    renderWithRedux(<Widget/>, {
                        preloadedState: {
                            quiz: {
                                quizId: 5,
                                prevQuizId: 4,
                                answers: {'eyewear_type': 210}
                            }
                        }
                    })
                    expect(screen.getByText(/Every face shape has a perfect fit. What’s yours/i)).toBeInTheDocument()
                })

                test('Skip SECOND 5 quiz, if eyewear_type !== 211, but === null (Skip button)', () => {
                    renderWithRedux(<Widget/>, {
                        preloadedState: {
                            quiz: {
                                quizId: 5,
                                prevQuizId: 4,
                                answers: {'eyewear_type': null}
                            }
                        }
                    })
                    expect(screen.getByText(/Every face shape has a perfect fit. What’s yours/i)).toBeInTheDocument()
                })

                test('If answer = 211 (Eyeglasses) - show FIRST quiz 5', () => {
                    renderWithRedux(<Widget/>, {
                        preloadedState: {
                            quiz: {
                                quizId: 5,
                                prevQuizId: 4,
                                answers: {'eyewear_type': 211}
                            }
                        }
                    })
                    expect(screen.getByText(/When you’re out and about, which shade of lenses do you prefer/i)).toBeInTheDocument()
                })
            })
        })

        describe('Quiz index === 4 userEvents tests', () => {
            const preloadedState = {preloadedState: {quiz: {quizId: 4, prevQuizId: 3, answers: {'eyewear_type': 210}}}}

            afterEach(() => {
                expect(screen.getByText(/Every face shape has a perfect fit. What’s yours?/i)).toBeInTheDocument()
            })

            test('Click 1 button && show next quiz', () => {
                renderWithRedux(<Widget/>, preloadedState)
                expect(screen.getByText(/Would you like to protect your eyes from light emanating from screens?/i)).toBeInTheDocument()
                userEvent.click(screen.getByTestId('answer-1'))
            })

            test('Click 2 button && show next quiz', () => {
                renderWithRedux(<Widget/>, preloadedState)
                expect(screen.getByText(/Would you like to protect your eyes from light emanating from screens?/i)).toBeInTheDocument()
                userEvent.click(screen.getByTestId('answer-2'))
            })
        })

        describe('Quiz index === 5 userEvents tests', () => {
            const preloadedState = {preloadedState: {quiz: {quizId: 5, prevQuizId: 4, answers: {'eyewear_type': 211}}}}

            afterEach(() => {
                expect(screen.getByText(/Every face shape has a perfect fit. What’s yours?/i)).toBeInTheDocument()
            })

            test('Click 1 button && show next quiz', () => {
                renderWithRedux(<Widget/>, preloadedState)
                expect(screen.getByText(/When you’re out and about, which shade of lenses do you prefer?/i)).toBeInTheDocument()
                userEvent.click(screen.getByTestId('answer-1'))
            })

            test('Click 2 button && show next quiz', () => {
                renderWithRedux(<Widget/>, preloadedState)
                expect(screen.getByText(/When you’re out and about, which shade of lenses do you prefer?/i)).toBeInTheDocument()
                userEvent.click(screen.getByTestId('answer-2'))
            })

            test('Click 3 button && show next quiz', () => {
                renderWithRedux(<Widget/>, preloadedState)
                expect(screen.getByText(/When you’re out and about, which shade of lenses do you prefer?/i)).toBeInTheDocument()
                userEvent.click(screen.getByTestId('answer-3'))
            })
        })
    })

    describe('Tests for quizId = 6', () => {
        const preloadedState = {preloadedState: {quiz: {quizId: 6}}}

        test('Render', () => {
            renderWithRedux(<Widget/>, preloadedState)
            expect(screen.getByText(/Every face shape has a perfect fit. What’s yours?/i)).toBeInTheDocument()
        })

        describe('Checking the display of icons', () => {
            test('Women icon', () => {
                renderWithRedux(<Widget/>, {preloadedState: {quiz: {quizId: 6, gender: Genders.women}}})
                expect(screen.getByTestId('answer-1')).toContainHTML('women')
            })
            test('Men icon', () => {
                renderWithRedux(<Widget/>, {preloadedState: {quiz: {quizId: 6, gender: Genders.men}}})
                expect(screen.getByTestId('answer-1')).toContainHTML('men')
            })
            test('No gender icon', () => {
                renderWithRedux(<Widget/>, {preloadedState: {quiz: {quizId: 6, gender: Genders.noGender}}})
                expect(screen.getByTestId('answer-1')).toContainHTML('nogen')
            })
        })

        describe('test userEvents', () => {
            afterEach(() => {
                expect(screen.getByText(/How would you define your facial features?/i)).toBeInTheDocument()
            })

            test('Click 1 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-1'))
            })
            test('Click 2 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-2'))
            })
            test('Click on skip button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('skip-btn'))
            })
        })
    })

    describe('Tests for quizId = 7', () => {
        const preloadedState = {preloadedState: {quiz: {quizId: 7}}}

        test('Render', () => {
            renderWithRedux(<Widget/>, preloadedState)
            expect(screen.getByText(/How would you define your facial features?/i)).toBeInTheDocument()
        })

        describe('test userEvents', () => {
            afterEach(() => {
                expect(screen.getByText(/Which frame style are you looking for?/i)).toBeInTheDocument()
            })

            test('Click 1 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-1'))
            })
            test('Click 2 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-2'))
            })
            test('Click 3 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-3'))
            })
            test('Click on skip button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('skip-btn'))
            })
        })
    })

    describe('Tests for quizId = 8 (CHECKED TYPE QUIZ)', () => {
        const preloadedState = {preloadedState: {quiz: {quizId: 8}}}

        test('Render', () => {
            renderWithRedux(<Widget/>, preloadedState)
            expect(screen.getByText(/Which frame style are you looking for?/i)).toBeInTheDocument()
        })

        test('Checking all button states', () => {
            renderWithRedux(<Widget/>, preloadedState)
            const btn = screen.getByRole('button', {name: /Continue/i})
            expect(btn).toBeDisabled()
            userEvent.click(screen.getByTestId('answer-1'))
            expect(btn).not.toBeDisabled()
            userEvent.click(screen.getByTestId('answer-1'))
            expect(btn).toBeDisabled()
        })

        test('Checking the status of checked elements', () => {
            renderWithRedux(<Widget/>, preloadedState)
            const answer = screen.getByTestId('answer-1')
            expect(answer).not.toContainHTML('checked')

            userEvent.click(answer)
            expect(answer).toContainHTML('checked')
        })

        describe('test userEvents', () => {

            test('Select one element && click on "Continue" button', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-1'))
                userEvent.click(screen.getByRole('button', {name: /Continue/i}))
                expect(screen.getByText(/Are you looking for any particular eyewear brands?/i)).toBeInTheDocument()
            })
        })
    })

    describe('Tests for quizId = 9', () => {
        const preloadedState = {preloadedState: {quiz: {quizId: 9}}}

        test('Render', () => {
            renderWithRedux(<Widget/>, preloadedState)
            expect(screen.getByText(/Are you looking for any particular eyewear brands?/i)).toBeInTheDocument()
        })

        describe('test userEvents', () => {

            test('Click 1 button && show next question', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-1'))
                expect(screen.getByText(/Choose your favorite brands/i)).toBeInTheDocument()
            })
            test('Click 2 button && stop quiz', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-2'))
                expect(screen.queryByText(/Choose your favorite brands/i)).not.toBeInTheDocument()
                expect(screen.getByText(/We've found some awesome frames for you!/i)).toBeInTheDocument()
            })
        })
    })


    describe('Tests for quizId = 10', () => {
        const preloadedState = {preloadedState: {quiz: {quizId: 10}}}

        test('Render', () => {
            renderWithRedux(<Widget/>, preloadedState)
            expect(screen.getByText(/Choose your favorite brands/i)).toBeInTheDocument()
        })

        describe('displayCondition', () => {
            test('particular_brands === 0 - Miss this quiz', () => {
                renderWithRedux(<Widget/>, {
                    preloadedState: {
                        quiz: {
                            quizId: 10,
                            answers: {[OptionNames.particular_brands]: 0},
                            prevQuizId: 9
                        }
                    }
                })
                expect(screen.getByText(/We've found some awesome frames for you!/i)).toBeInTheDocument()
            })

            test('particular_brands === 1 - Show this quiz', () => {
                renderWithRedux(<Widget/>, {
                    preloadedState: {
                        quiz: {
                            quizId: 10,
                            answers: {[OptionNames.particular_brands]: 1},
                            prevQuizId: 9
                        }
                    }
                })
                expect(screen.getByText(/Choose your favorite brands/i)).toBeInTheDocument()
            })
        })

        describe('test userEvents', () => {

            test('Select one element && click on "Continue" button', () => {
                renderWithRedux(<Widget/>, preloadedState)
                userEvent.click(screen.getByTestId('answer-1'))
                userEvent.click(screen.getByRole('button', {name: /Continue/i}))
                expect(screen.getByText(/We've found some awesome frames for you!/i)).toBeInTheDocument()
            })
        })
    })

    describe('Widget userEvents', () => {
        test('Display welcome page when quizId = -1', () => {
            renderWithRedux(<Widget/>, {preloadedState: {quiz: {quizId: -1}}})
            expect(screen.getByText(/Let’s find your perfect pair/i)).toBeInTheDocument()
        })

        test('Click on close button', () => {
            renderWithRedux(<Widget/>, {
                preloadedState: {
                    quiz: {
                        quizId: 1,
                    }
                }
            })
            expect(screen.getByText(/What type of glasses are you looking for/i)).toBeInTheDocument()
            userEvent.click(screen.getByTestId('header-close'))
            expect(screen.getByText(/Let’s find your perfect pair/i)).toBeInTheDocument()
        })

        test('Click on back button', () => {
            renderWithRedux(<Widget/>, {
                preloadedState: {
                    quiz: {
                        quizId: 1,
                        prevQuizId: 0
                    }
                }
            })
            expect(screen.getByText(/What type of glasses are you looking for?/i)).toBeInTheDocument()
            userEvent.click(screen.getByTestId('header-back'))
            expect(screen.getByText(/You are looking for/i)).toBeInTheDocument()
        })
    })
})