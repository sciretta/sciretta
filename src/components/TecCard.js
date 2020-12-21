import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    width:400,
    height:300,
    margin:20,
    [theme.breakpoints.down('sm')]:{
      width:260
    }
  },
  text:{
    textAlign:'center'
  }
}))

export default function TecCard({img,name}) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        image={img}
        title={name}
      />
      <CardContent>
        <Typography 
          className={classes.text}
          gutterBottom 
          variant="h3" 
          component="h3"
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}
