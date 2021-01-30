import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useStyles from 'styles/ViewsStyles'

import TecCard from '../components/TecCard'

const reactSvg = 'React.svg'
const nextSvg = 'Nextjs.svg'
const javascriptSvg = 'javascript.svg'
const materialuiSvg = 'materialui.svg'

export default function Fronted() {
  const classes = useStyles()
  return (
    <Grid 
      item container 
      justify="center"
      className={classes.frontendBackground}
    >
      <div
        className={classes.frontendRoot}
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