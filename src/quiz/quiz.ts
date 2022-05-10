import {quizImages} from './quizImages'
import {IQuiz} from "../types/quizTypes";

export enum OptionNames {
    gender = 'gender',
    eyewear_type = 'eyewear_type',
    lenstype = 'lenstype',
    frame_size = 'frame_size',
    blue_light = 'blue_light',
    shade = 'shade',
    face_shape = 'face_shape',
    facial_features = 'facial_features',
    shape = 'shape',
    particular_brands = 'particular_brands',
    brand = 'brand'
}

export const quiz: IQuiz[] = [
    {
        quizId: 1,
        optionName: OptionNames.gender,
        title: 'You are looking for',
        answers: [
            {
                id: 5,
                name: 'Women\'s Styles',
                image: quizImages.quiz1.women
            },
            {
                id: 4,
                name: 'Men\'s Styles',
                image: quizImages.quiz1.men
            }
        ],
        underText: 'I\'d like to see both'
    },

    {
        quizId: 2,
        optionName: OptionNames.eyewear_type,
        title: 'What type of glasses are you looking for?',
        answers: [
            {
                id: 210,
                name: 'Eyeglasses',
                image: {
                    men: quizImages.quiz2.menEyeglasses,
                    women: quizImages.quiz2.womenEyeglasses,
                    noGender: quizImages.quiz2.menEyeglasses,
                }
            },
            {
                id: 211,
                name: 'Sunglasses',
                image: {
                    men: quizImages.quiz2.menSunglasses,
                    women: quizImages.quiz2.womenSunglasses,
                    noGender: quizImages.quiz2.menSunglasses,
                }
            }
        ],
        underText: 'I want to see both'
    },

    {
        quizId: 3,
        optionName: OptionNames.lenstype,
        previewPageTitle: 'Let\'s get to know you!',
        title: 'Do you need vision correction?',
        answers: [
            {
                id: true,
                name: 'Yes'
            },
            {
                id: false,
                name: 'No'
            }
        ],
        underText: 'I want to see both',
        additionalQuestion: {
            answerId: true,
            title: 'What type of glasses are you looking for?',
            answers: [
                {
                    id: 6,
                    name: 'Near Vision'
                },
                {
                    id: 6,
                    name: 'Distance Vision',
                },
                {
                    id: 7,
                    name: 'Multifocal / Progressive'
                }
            ],
            underText: 'Skip',
        }
    },

    {
        quizId: 4,
        optionName: OptionNames.frame_size,
        title: 'What’s your current frame size?',
        image: quizImages.quiz4.frameSize,
        answerOptions: {
            oneRow: true
        },
        answers: [
            {
                id: 68,
                name: 'Small',
                oneRowText: '42-48 mm',
            },
            {
                id: 67,
                name: 'Medium',
                oneRowText: '49-53 mm'
            },
            {
                id: 66,
                name: 'Large',
                oneRowText: '54-58 mm'
            }
        ],
        underText: 'I don’t know',
        additionalQuestion: {
            answerId: null,
            previewPageTitle: 'No worries, we’ve got you!',
            title: 'How wide would you say your face is?',
            answers: [
                {
                    id: 66,
                    name: 'Wider Than Average'
                },
                {
                    id: 67,
                    name: 'Average'
                },
                {
                    id: 68,
                    name: 'Narrower Than Average'
                }
            ],
            underText: 'I’m not sure'
        }
    },

    {
        displayCondition: {
            conditionalQuizName: OptionNames.eyewear_type,
            answer: [210, null]
        },
        quizId: 5,
        optionName: OptionNames.blue_light,
        title: 'Would you like to protect your eyes from light emanating from screens?',
        answers: [
            {
                id: true,
                name: 'Yes'
            },
            {
                id: false,
                name: 'No'
            }
        ]
    },

    {
        displayCondition: {
            conditionalQuizName: OptionNames.eyewear_type,
            answer: 211
        },
        quizId: 5,
        optionName: OptionNames.shade,
        title: 'When you’re out and about, which shade of lenses do you prefer?',
        answerOptions: {
            oneRow: true
        },
        answers: [
            {
                id: 1,
                name: 'Dark Shade',
                image: quizImages.quiz5.darkShade
            },
            {
                id: 2,
                name: 'Light Shade',
                image: quizImages.quiz5.lightShade
            },
            {
                id: 3,
                name: 'Transitioning Shade',
                image: quizImages.quiz5.transitionShade
            },
        ]
    },

    {
        quizId: 6,
        optionName: OptionNames.face_shape,
        title: 'Every face shape has a perfect fit. What’s yours?',
        answerOptions: {
            oneRow: true
        },
        answers: [
            {
                id: 'long',
                name: 'I have a long face',
                image: {
                    men: quizImages.quiz6.menLong,
                    women: quizImages.quiz6.womenLong,
                    noGender: quizImages.quiz6.nogenLong
                }
            },
            {
                id: 'round',
                name: 'I have a round face',
                image: {
                    men: quizImages.quiz6.menRound,
                    women: quizImages.quiz6.womenRound,
                    noGender: quizImages.quiz6.nogenRound
                }
            },
            {
                id: 'between',
                name: 'In between',
                image: {
                    men: quizImages.quiz6.menBetween,
                    women: quizImages.quiz6.womenBetween,
                    noGender: quizImages.quiz6.nogenBetween
                }
            }
        ],
        underText: 'I don’t know'
    },

    {
        quizId: 7,
        optionName: OptionNames.facial_features,
        title: 'How would you define your facial features?',
        answers: [
            {
                id: 'sharp',
                name: 'Sharp',
            },
            {
                id: 'rounded',
                name: 'Rounded',
            },
            {
                id: 'between',
                name: 'In between',
            }
        ],
        underText: 'I don’t know'
    },

    {
        quizId: 8,
        optionName: OptionNames.shape,
        title: 'Which frame style are you looking for?',
        subtitle: 'You can pick more than one.',
        answerOptions: {
            checked: true
        },
        answers: [
            {
                id: 'rectangle',
                name: 'Rectangle',
                image: quizImages.quiz8.rectangle
            },
            {
                id: 'wayframe',
                name: 'Wayframe',
                image: quizImages.quiz8.wayframe
            },
            {
                id: 'cat_eye',
                name: 'Cat Eye',
                image: quizImages.quiz8.cat_eye
            },
            {
                id: 'browline',
                name: 'Browline',
                image: quizImages.quiz8.browline
            },
            {
                id: 'round',
                name: 'Round',
                image: quizImages.quiz8.round
            },
            {
                id: 'rimless',
                name: 'Rimless',
                image: quizImages.quiz8.rimless
            },
            {
                id: 'aviator',
                name: 'Aviator',
                image: quizImages.quiz8.aviator
            },
            {
                id: 'oval',
                name: 'Oval',
                image: quizImages.quiz8.oval
            },
            {
                id: 'square',
                name: 'Squzre',
                image: quizImages.quiz8.square
            },
            {
                id: 'geometric',
                name: 'Geometric',
                image: quizImages.quiz8.geometric
            },
            {
                id: 'oversized',
                name: 'Oversized',
                image: quizImages.quiz8.oversized
            },
            {
                id: 'wrap',
                name: 'Wrap',
                image: quizImages.quiz8.wrap
            },
        ]
    },

    {
        quizId: 9,
        doNotShowInReplies: true,
        optionName: OptionNames.particular_brands,
        title: 'Are you looking for any particular eyewear brands?',
        answers: [
            {
                id: 1,
                name: 'Yes, I have some in mind',
            },
            {
                id: 0,
                name: 'No, brand isn\'t important',
            }
        ]
    },

    {
        displayCondition: {
            conditionalQuizName: OptionNames.particular_brands,
            answer: 1
        },
        quizId: 10,
        optionName: OptionNames.brand,
        title: 'Choose your favorite brands',
        subtitle: 'You can pick more than one.',
        answerOptions: {
            checked: true
        },
        answers: [
            {
                id: 'ray_ban',
                image: quizImages.quiz10.ray_ban
            },
            {
                id: 'hilary_duff',
                image: quizImages.quiz10.hilary_duff
            },
            {
                id: 'michael_kors',
                image: quizImages.quiz10.michael_kors
            },
            {
                id: 'oakley',
                image: quizImages.quiz10.oakley
            },
            {
                id: 'prada',
                image: quizImages.quiz10.prada
            },
            {
                id: 'coach',
                image: quizImages.quiz10.coach
            },
            {
                id: 'gucci',
                image: quizImages.quiz10.gucci
            },
            {
                id: 'versace',
                image: quizImages.quiz10.versace
            },
            {
                id: 'tory_burch',
                image: quizImages.quiz10.tory_burch
            },
            {
                id: 'armani_exchange',
                image: quizImages.quiz10.armani_exchange
            },
            {
                id: 'vogue',
                image: quizImages.quiz10.vogue
            },
            {
                id: 'burberry',
                image: quizImages.quiz10.burberry
            },
        ]
    },
]


export function getQuizLength() {
    return quiz.reduce((acc: number[], item) => {
        const {quizId} = item

        if (acc.indexOf(quizId) === -1) {
            acc.push(quizId)
        }

        return acc
    }, []).length
}