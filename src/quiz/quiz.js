import {quizImages} from './quizImages'

export const quiz = [
  {
    quizId: 1,
    optionName: 'gender',
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
    optionName: 'eyewear_type',
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
    optionName: 'lenstype',
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
      previewPageTitle: 'What do you need your glasses for?',
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
    optionName: 'frame_size',
    title: 'What’s your current frame size?',
    image: quizImages.quiz4.frameSize,
    answerOption: {
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
      answerId: 'skip',
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
    if: {
      quizId: 2,
      answer: 210
    },
    quizId: 5,
    optionName: 'blue_light',
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
    ],
    underText: 'I don’t know'
  },

  {
    if: {
      quizId: 2,
      answer: 211
    },
    quizId: 5,
    optionName: 'shade',
    title: 'When you’re out and about, which shade of lenses do you prefer?',
    answerOption: {
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
    optionName: 'face_shape',
    title: 'Every face shape has a perfect fit. What’s yours?',
    answerOption: {
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
    optionName: 'facial_features',
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
    optionName: 'shape',
    title: 'Which frame style are you looking for?',
    subtitle: 'You can pick more than one.',
    answerOption: {
      checked: true
    },
    answers: [
      {
        id: 1,
        name: 'Rectangle',
        image: quizImages.quiz8.fs1
      },
      {
        id: 2,
        name: 'Rectangle',
        image: quizImages.quiz8.fs1
      },
      {
        id: 3,
        name: 'Rectangle',
        image: quizImages.quiz8.fs1
      },
      {
        id: 4,
        name: 'Rectangle',
        image: quizImages.quiz8.fs1
      },
      {
        id: 5,
        name: 'Rectangle',
        image: quizImages.quiz8.fs1
      },
      {
        id: 6,
        name: 'Rectangle',
        image: quizImages.quiz8.fs1
      },
      {
        id: 7,
        name: 'Rectangle',
        image: quizImages.quiz8.fs1
      },
      {
        id: 8,
        name: 'Rectangle',
        image: quizImages.quiz8.fs1
      },
      {
        id: 9,
        name: 'Rectangle',
        image: quizImages.quiz8.fs1
      },
    ]
  },

  {
    quizId: 9,
    optionName: 'particular_brands',
    title: 'Are you looking for any particular eyewear brands?',
    answers: [
      {
        id: true,
        name: 'Yes, I have some in mind',
      },
      {
        id: false,
        name: 'No, brand isn\'t important',
      }
    ]
  },

  {
    if: {
      quizId: 9,
      answer: true
    },
    quizId: 10,
    optionName: 'brands',
    title: 'Choose your favorite brands',
    subtitle: 'You can pick more than one.',
    answerOption: {
      checked: true
    },
    answers: [
      {
        id: 1,
        image: quizImages.quiz10.brand1
      },
      {
        id: 2,
        image: quizImages.quiz10.brand1
      },
      {
        id: 3,
        image: quizImages.quiz10.brand1
      },
      {
        id: 4,
        image: quizImages.quiz10.brand1
      },
      {
        id: 5,
        image: quizImages.quiz10.brand1
      },
      {
        id: 6,
        image: quizImages.quiz10.brand1
      },
      {
        id: 7,
        image: quizImages.quiz10.brand1
      },
      {
        id: 8,
        image: quizImages.quiz10.brand1
      },
      {
        id: 9,
        image: quizImages.quiz10.brand1
      },
    ]
  },
]