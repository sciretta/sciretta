import { CardInterface } from 'types'

const cobuildLabPng = 'cobuildLab.png'
export const experienceCards: CardInterface[] = [
  {
    img: cobuildLabPng,
    name: 'Cobuild Lab',
    exp: {
      time: 'since jan 2021',
      url: 'https://cobuildlab.com/',
    },
  },
]

const nodeSvg = 'nodejs.svg'
const expressPng = 'expressjs.png'
const mongoSvg = 'mongodb.svg'
const eightbaseSvg = '8base.svg'
const firebaseSvg = 'firebase.svg'
const apolloSvg = 'apollo.svg'
export const backendCards: CardInterface[] = [
  { img: nodeSvg, name: 'Nodejs' },
  { img: apolloSvg, name: 'Apollo GraphQL' },
  { img: expressPng, name: 'Express.js' },
  { img: mongoSvg, name: 'MongoDB' },
  { img: firebaseSvg, name: 'firebase' },
  { img: eightbaseSvg, name: '8base' },
]

const reactSvg = 'React.svg'
const nextSvg = 'Nextjs.svg'
const materialuiSvg = 'materialui.svg'
const styledcomponentsPng = 'styledcomponents.png'
const tailwindSvg = 'tailwindcss.svg'
const chakrauiPng = 'chakraui.png'
export const frontendCards: CardInterface[] = [
  { img: reactSvg, name: 'React js' },
  { img: nextSvg, name: 'Nextjs' },
  { img: materialuiSvg, name: 'Material UI' },
  { img: tailwindSvg, name: 'Tailwind CSS' },
  { img: styledcomponentsPng, name: 'Styled components' },
  { img: chakrauiPng, name: 'Chakra UI' },
]

const gitSvg = 'git.svg'
const javascriptSvg = 'javascript.svg'
const typescriptSvg = 'typescript.svg'
const githubSvg = 'github.svg'
const jestSvg = 'jest.svg'
const graphqlSvg = 'graphql.svg'
export const generalCards: CardInterface[] = [
  { img: javascriptSvg, name: 'Javascript' },
  { img: typescriptSvg, name: 'Typescript' },
  { img: gitSvg, name: 'GIT' },
  { img: githubSvg, name: 'GitHub' },
  { img: jestSvg, name: 'Jest (testing)' },
  { img: graphqlSvg, name: 'GraphQL' },
]
