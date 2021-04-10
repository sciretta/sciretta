import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useStyles from 'styles/ViewsStyles'
import TecCard from '../components/TecCard'

import { frontendCards } from 'data'

export default function Fronted() {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      justify="center"
      className={classes.frontendBackground}
    >
      <div className={classes.frontendRoot}>
        <Typography variant="h1" className={classes.text}>
          Frontend skills✌:
        </Typography>
        <Grid item container justify="center">
          {frontendCards.map((card) => (
            <Grid item key={card.name}>
              <TecCard img={card.img} name={card.name} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  )
}
