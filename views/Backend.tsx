import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TecCard from 'components/TecCard'
import useStyles from 'styles/ViewsStyles'

import { backendCards } from 'data'

export default function Backend() {
  const classes = useStyles()
  return (
    <Grid item container justify="center" className={classes.backendBackground}>
      <div className={classes.backendRoot}>
        <Typography variant="h1" className={classes.text}>
          Backend skills👌:
        </Typography>
        <Grid item container justify="center">
          {backendCards.map((card) => (
            <Grid item key={card.name}>
              <TecCard img={card.img} name={card.name} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  )
}
