import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TecCard from 'components/TecCard'
import useStyles from 'styles/ViewsStyles'

const nodeSvg = 'nodejs.svg'
const expressPng = 'Express.png'
const mongoSvg = 'mongodb.svg'
const gitSvg = 'git.svg'

export default function Backend() {
  const classes = useStyles()
  return (
    <Grid 
      item container 
      justify="center"
      className={classes.backendBackground}
    >
      <div
        className={classes.backendRoot}
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