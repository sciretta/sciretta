import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Contact from 'components/Contact'
import useStyles from 'styles/ViewsStyles'
import Image from 'next/image'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const avatar = 'avatar.png'

const Main = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  let avatarRadius = 400
  if (matches) {
    avatarRadius = 320
  }
  const classes = useStyles()
  return (
    <>
      <Grid
        item
        container
        sm={11}
        md={10}
        lg={9}
        xl={7}
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h1" className={classes.text}>
            {`Hi 👋, i'm Leonardo and i'm JavaScript & TypeScript Fullstack Developer from Venezuela`}
          </Typography>
        </Grid>
        <Grid item>
          <Image
            width={avatarRadius}
            height={avatarRadius}
            src={'/' + avatar}
            alt="Avatar"
            layout="fixed"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Contact />
      </Grid>
    </>
  )
}

export default Main
