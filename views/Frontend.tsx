import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import TecCard from '../components/TecCard'
import { ThemeTypes } from 'types'

const reactSvg = 'React.svg'
const nextSvg = 'Nextjs.svg'
const cssSvg = 'css3.svg'
const htmlSvg = 'html5.svg'
const javascriptSvg = 'javascript.svg'
const materialuiSvg = 'materialui.svg'

const useStyles = makeStyles((theme:ThemeTypes) => ({
  root:{
    transform:'skew(0deg,10deg)',
    width:'90vw',
    display:'flex',
    justifyContent:'center',
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column'
    }
  },
  background:{
    background:theme.palette.terciary.main,
    width:'100%',
    minHeight:'100vh',
    transform:'skew(0deg,-10deg) translateY(-120px)',
    padding:'200px 0',
    marginTop:300
  },
  text:{
    textAlign:'center'
  }
}))

export default function Fronted() {
  const classes = useStyles()
  return (
    <Grid 
      item container 
      justify="center"
      className={classes.background}
    >
      <div
        className={classes.root}
      >
        <Typography
          variant="h1"
          className={classes.text}
        >
          Fronted skills:
        </Typography>
        <Grid 
          item container
          justify="center"
        >
          {
            cards.map(card=>(
              <Grid item key={card.name}>
                <TecCard
                  img={card.img} 
                  name={card.name}
                />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </Grid>
  )
}

const cards = [
  {img:reactSvg,name:'React.js'},
  {img:nextSvg,name:'Next.js'},
  {img:materialuiSvg,name:'Material-ui'},
  {img:javascriptSvg,name:'Javascript'}
]