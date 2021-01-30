import React from 'react'
import Image from 'next/image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import useStyles from 'styles/ComponentsStyles'

export default function TecCard({img,name}:{img:string,name:string}) {
  const classes = useStyles()

  return (
    <Card className={classes.cardRoot}>
      <CardMedia>
        <Image
          width={700}
          height={370}
          src={"/"+img}
          alt={name}
          layout="responsive"
        />
      </CardMedia>
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