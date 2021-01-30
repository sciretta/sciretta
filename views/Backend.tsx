import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import TecCard from 'components/TecCard'
import { ThemeTypes } from 'types'

const nodeSvg = 'nodejs.svg'
const expressPng = 'Express.png'
const mongoSvg = 'mongodb.svg'
const gitSvg = 'git.svg'

const useStyles = makeStyles((theme:ThemeTypes) => ({
  root:{
    transform:'skew(0deg,-10deg)',
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
    transform:'skew(0deg,10deg) translateY(120px)',
    padding:'200px 0',
    marginBottom:250
  },
  text:{
    textAlign:'center'
  }
}))

export default function Backend() {
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
        Backend skills:
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
  {img:nodeSvg,name:'Nodejs'},
  {img:expressPng,name:'Express.js'},
  {img:mongoSvg,name:'MongoDB'},
  {img:gitSvg,name:'GIT'}
]