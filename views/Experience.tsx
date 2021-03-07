import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TecCard from 'components/TecCard'
import useStyles from 'styles/ViewsStyles'

import { experienceCards } from 'data'

export default function Experience() {
  const classes = useStyles()
  return (
    <Grid 
      item container 
      justify="center"
      className={classes.experienceBackground}
    >
      <div
        className={classes.experienceRoot}
      >
        <Typography
          variant="h1"
          className={classes.text}
        >
          Experience:
        </Typography>
        <Grid 
          item container
          justify="center"
        >
          {
            experienceCards.map(card=>(
              <Grid item key={card.name}>
                <TecCard
                  img={card.img} 
                  name={card.name}
                  exp={card.exp}
                />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </Grid>
  )
}
