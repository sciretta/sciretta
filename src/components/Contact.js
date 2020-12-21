import React from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import MuiAlert from '@material-ui/lab/Alert'
import SendIcon from '@material-ui/icons/Send'
import emailjs from 'emailjs-com'

const useStyles = makeStyles((theme) => ({
  text:{
    textAlign:'center',
    width:'100%'
  },
  container:{
    width:'100%'
  },
  fields:{
    backgroundColor:theme.palette.text.main,
    borderRadius:5
  },
  button:{
    backgroundColor:theme.palette.text.main,
    color:theme.palette.terciary.main,
    '&:hover': {
      backgroundColor: '#fefefe',
    }
  }
}))

export default function CustomizedAccordion() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={classes.container}>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h3" className={classes.text}>Contact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MailForm/>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}


function MailForm() {
  const classes = useStyles()
  const [success,setSuccess] = React.useState(false)
  const [error,setError] = React.useState(false)
  const [incomplete,setIncomplete] = React.useState(false)

  function sendEmail() {
    const from_name = document.getElementById('from_name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    if(!from_name || !email || !message) return setIncomplete(true)

    const data = {
        service_id: 'service_3ovv1h6',
        template_id: 'template_jbpbsrv',
        user_id: 'user_XYey1OUQ7AfPYfRsCJAJk',
        template_params: {
          from_name,
          email,
          message
        }
    }
     
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then((res) => {
      if(res.status===200){
        setSuccess(true)
        document.getElementById('from_name').value=""
        document.getElementById('email').value=""
        document.getElementById('message').value=""
      }else{
        setError(true)
      }
      setIncomplete(false)
    })
    .catch(()=>{
      setError(true)
      setIncomplete(false)
    })
  }

  const handleClose = () => {
    setSuccess(false)
    setError(false)
  }

  return (
    <>
      <Grid 
        container 
        justify="center"
        alignItems="flex-start"
        alignContent="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            className={classes.fields}
            placeholder="Name"
            id="from_name"
            variant="outlined" error={incomplete}
            autoComplete="from_name"
          />
        </Grid>
        <Grid item>
          <TextField 
            className={classes.fields}
            placeholder="Email"
            id="email"
            variant="outlined" error={incomplete}
            autoComplete="email"
          />
        </Grid>
        <Grid item container justify="center">
          <TextField
            className={classes.fields}
            id="message"
            placeholder="Message"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
            error={incomplete}
          />
        </Grid>
        <Grid 
          item
          container 
          justify="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon/>}
            onClick={sendEmail}
            disableElevation
            className={classes.button}
          >
            Send
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={success}
        onClose={handleClose}
        autoHideDuration={5000}
      >
        <Alert severity="success">
          Email sent!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={error}
        onClose={handleClose}
        autoHideDuration={5000}
      >
        <Alert severity="error">
          Something was wrong!
        </Alert>
      </Snackbar>
    </>
  )
}
