import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useStyles from 'styles/ViewsStyles'
import TecCard from '../components/TecCard'

import { generalCards } from 'data'

export default function General() {
  const classes = useStyles()
  return (
    <Grid item container justify="center" className={classes.backendBackground}>
      <div className={classes.backendRoot}>
        <Typography variant="h1" className={classes.text}>
          General skills📖:
        </Typography>
        <Grid item container justify="center">
          {generalCards.map((card) => (
            <Grid item key={card.name}>
              <TecCard img={card.img} name={card.name} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  )
}
