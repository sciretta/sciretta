import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useStyles from 'styles/ViewsStyles'

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
        <Grid 
          item container
          justify="center"
        >
          <Typography
            variant="h3"
            className={classes.text}
          >
I am currently an inexperienced web developer looking for his first job, I have been studying web development for 2 years and I feel ready to face my first job challenge 💪
          </Typography>
        </Grid>
      </div>
    </Grid>
  )
}
