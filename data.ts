import {CardInterface} from 'types'

const cobuildLabPng = 'cobuildLab.png'
export const experienceCards:CardInterface[] = [
  {
    img:cobuildLabPng,
    name:'Cobuild Lab',
    exp:{
      time:"since jan 2020",
      url:"https://cobuildlab.com/"
    }
  }
]


const nodeSvg = 'nodejs.svg'
const expressPng = 'Express.png'
const mongoSvg = 'mongodb.svg'
const gitSvg = 'git.svg'
export const backendCards:CardInterface[]  = [
  {img:nodeSvg,name:'Nodejs'},
  {img:expressPng,name:'Express.js'},
  {img:mongoSvg,name:'MongoDB'},
  {img:gitSvg,name:'GIT'}
]


const reactSvg = 'React.svg'
const nextSvg = 'Nextjs.svg'
const javascriptSvg = 'javascript.svg'
const materialuiSvg = 'materialui.svg'
export const frontendCards:CardInterface[]  = [
  {img:reactSvg,name:'React.js'},
  {img:nextSvg,name:'Next.js'},
  {img:materialuiSvg,name:'Material-ui'},
  {img:javascriptSvg,name:'Javascript'}
]