import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import useStyles from 'styles/ComponentsStyles'

export default function TecCard({img,name}:{img:string,name:string}) {
  const classes = useStyles()

  return (
    <Card className={classes.cardRoot}>
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