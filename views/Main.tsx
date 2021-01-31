import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Contact from 'components/Contact'
import useStyles from 'styles/ViewsStyles'
import Image from 'next/image'

const avatar = 'avatar.png'

export default function Main() {
  const classes = useStyles()
  return (
    <>
      <Grid 
        item container
        sm={11} md={10} lg={9} xl={7}
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Typography
            variant="h1"
            className={classes.text}
          >
            {`Hi 👋, i'm Leonardo and i'm a Web Developer from Venezuela`}
          </Typography>
        </Grid>
        <Grid item>
          <Image
            width={400}
            height={400}
            src={"/"+avatar}
            alt="Avatar"
            layout="fixed"
            className={classes.avatar} 
          />
        </Grid>
      </Grid>
      <Grid container>
        <Contact/>
      </Grid>
    </>
  )
}