import frameSizeImg from './img/quiz4/frame_size.png'

export const quiz = [
  {
    optionName: 'gender',
    title: 'You are looking for',
    answers: [
      {
        id: 5,
        name: 'Women\'s Styles',
        image: null
      },
      {
        id: 4,
        name: 'Men\'s Styles',
        image: null
      }
    ],
    underText: 'I\'d like to see both'
  },

  {
    optionName: 'eyewear_type',
    title: 'What type of glasses are you looking for?',
    answers: [
      {
        id: 210,
        name: 'Eyeglasses',
        image: null
      },
      {
        id: 211,
        name: 'Men\'s Styles',
        image: null
      }
    ],
    underText: 'I want to see both'
  },

  {
    optionName: 'lenstype',
    previewPageTitle: 'Let\'s get to know you!',
    title: 'What type of glasses are you looking for?',
    answers: [
      {
        id: 0,
        name: 'Yes'
      },
      {
        id: 1,
        name: 'No'
      }
    ],
    underText: 'I want to see both',
    additionalQuestion: {
      answerId: 0,
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
    optionName: 'frame_size',
    title: 'What’s your current frame size?',
    image: frameSizeImg,
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
    optionName: 'protect_eyes',
    title: 'Would you like to protect your eyes from light emanating from screens?',
    answers: [
      {
        id: 1,
        name: 'Yes'
      },
      {
        id: 0,
        name: 'No'
      }
    ],
    additionalQuestion: {
      answerId: 1,
      title: 'When you’re out and about, which shade of lenses do you prefer?',
      answerOption: {
        oneRow: true
      },
      answers: [
        {
          id: 1,
          name: 'Dark Shade',
          image: null
        },
        {
          id: 2,
          name: 'Light Shade',
          image: null
        },
        {
          id: 3,
          name: 'Transitioning Shade',
          image: null
        },
      ]
    },
    underText: 'I don’t know'
  },

  {
    optionName: 'face_type',
    title: 'Every face shape has a perfect fit. What’s yours?',
    answers: [
      {
        id: 1,
        name: 'I have a long face',
        image: null
      },
      {
        id: 2,
        name: 'I have a round face',
        image: null
      },
      {
        id: 3,
        name: 'In between',
        image: null
      }
    ],
    underText: 'I don’t know'
  },

  {
    optionName: 'facial_feature',
    title: 'How would you define your facial features?',
    answers: [
      {
        id: 1,
        name: 'Sharp',
      },
      {
        id: 2,
        name: 'Rounded',
      },
      {
        id: 3,
        name: 'In between',
      }
    ],
    underText: 'I don’t know'
  },

  {
    optionName: 'frame_style',
    title: 'Which frame style are you looking for?',
    subtitle: 'You can pick more than one.',
    answerOption: {
      checked: true
    },
    answers: [
      {
        id: 1,
        name: 'Rectangle',
        image: null
      },
      {
        id: 2,
        name: 'Rectangle',
        image: null
      },
      {
        id: 3,
        name: 'Rectangle',
        image: null
      },
      {
        id: 4,
        name: 'Rectangle',
        image: null
      },
      {
        id: 5,
        name: 'Rectangle',
        image: null
      },
      {
        id: 6,
        name: 'Rectangle',
        image: null
      },
      {
        id: 7,
        name: 'Rectangle',
        image: null
      },
      {
        id: 8,
        name: 'Rectangle',
        image: null
      },
      {
        id: 9,
        name: 'Rectangle',
        image: null
      },
    ],
    underText: 'I don’t know'
  },

  {
    optionName: 'particular_brands',
    title: 'Are you looking for any particular eyewear brands?',
    answers: [
      {
        id: 1,
        name: 'Yes, I have some in mind',
      },
      {
        id: 2,
        name: 'No, brand isn\'t important',
      }
    ]
  },

  {
    optionName: 'brands',
    title: 'Choose your favorite brands',
    subtitle: 'You can pick more than one.',
    answerOption: {
      checked: true
    },
    answers: [
      {
        id: 1,
        image: null
      },
      {
        id: 2,
        image: null
      },
      {
        id: 3,
        image: null
      },
      {
        id: 4,
        image: null
      },
      {
        id: 5,
        image: null
      },
      {
        id: 6,
        image: null
      },
      {
        id: 7,
        image: null
      },
      {
        id: 8,
        image: null
      },
      {
        id: 9,
        image: null
      },
    ],
    underText: 'I don’t know'
  },
]