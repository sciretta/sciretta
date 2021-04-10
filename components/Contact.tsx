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
import { useState } from 'react'
import useStyles from 'styles/ComponentsStyles'
import { DataInterface } from 'types'

export default function Contact(): JSX.Element {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleChange = () => setExpanded((prevExpanded) => !prevExpanded)

  return (
    <div className={classes.container}>
      <Accordion square expanded={expanded} onChange={handleChange}>
        <AccordionSummary aria-controls="panel1d-content">
          <Typography variant="h3" className={classes.text}>
            Contact
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MailForm />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function MailForm(): JSX.Element {
  const classes = useStyles()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [incomplete, setIncomplete] = useState(false)

  function sendEmail() {
    const from_name = document.getElementById('from_name') as HTMLInputElement
    const email = document.getElementById('email') as HTMLInputElement
    const message = document.getElementById('message') as HTMLInputElement
    if (!from_name.value || !email.value || !message.value)
      return setIncomplete(true)

    const data: DataInterface = {
      from_name: from_name.value,
      email: email.value,
      message: message.value,
    }

    fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res: { success: boolean }) => {
        if (res.success) {
          setSuccess(true)
          from_name.value = ''
          email.value = ''
          message.value = ''
        } else {
          setError(true)
        }
        setIncomplete(false)
      })
      .catch(() => {
        setError(true)
      })
  }

  const handleClose = () => {
    setSuccess(false)
    setError(false)
    setIncomplete(false)
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
            variant="outlined"
            error={incomplete}
            autoComplete="from_name"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.fields}
            placeholder="Email"
            id="email"
            variant="outlined"
            error={incomplete}
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
        <Grid item container justify="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={sendEmail}
            disableElevation
            className={classes.button}
          >
            Send
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={success}
        onClose={handleClose}
        autoHideDuration={5000}
      >
        <Alert severity="success">Email sent!</Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={error}
        onClose={handleClose}
        autoHideDuration={5000}
      >
        <Alert severity="error">Something was wrong!</Alert>
      </Snackbar>
    </>
  )
}
