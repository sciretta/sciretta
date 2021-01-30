import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { ThemeTypes } from 'types'

import Contact from 'components/Contact'

const avatar = 'avatar.png'

const useStyles = makeStyles((theme:ThemeTypes) => ({
  root:{
    paddingTop:50,
    minHeight:'95vh'
  },
  main:{
    textAlign:'center'
  },
  avatar:{
    width:400,
    height:400,
    [theme.breakpoints.down('sm')]:{
      width:350,
      height:350
    }
  }
}))

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
            className={classes.main}
          >
            {`Hi, i'm Leonardo and i'm a Web Developer from Venezuela`}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar 
            className={classes.avatar} 
            alt="Leonardo" 
            src={avatar} 
          />
        </Grid>
      </Grid>
      <Grid container>
        <Contact/>
      </Grid>
    </>
  )
}