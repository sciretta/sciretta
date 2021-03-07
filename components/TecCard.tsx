import React from 'react'
import Image from 'next/image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import useStyles from 'styles/ComponentsStyles'
import { CardActionArea } from '@material-ui/core'

import {CardInterface} from 'types'

export default function TecCard({img,name,exp}:CardInterface) {
  const classes = useStyles()

  let content = <>
    <CardMedia>
      <Image
        width={exp?100:700}
        height={exp?80:370}
        src={"/"+img}
        alt={name}
        layout="responsive"
      />
    </CardMedia>
    <CardContent>
      <Typography 
        className={classes.text}
        gutterBottom 
        variant="h2" 
        component="h2"
      >
        {name}
      </Typography>
    </CardContent>
  </>

  if(exp){
    content = <CardActionArea 
      className={classes.actionCard} href={exp.url}
      target={"_blank"}
    >
      {content}
      <Typography 
        className={classes.text}
        gutterBottom 
        variant="h3" 
        component="h3"
      >
        {exp.time}
      </Typography>
    </CardActionArea>
  }

  return (
    <Card className={exp?classes.expCard:classes.card}>
      {content}
    </Card>
  )
}