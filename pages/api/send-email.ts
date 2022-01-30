import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { SendEmailData, SendEmailResponse } from 'src/modules/shared/types'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SendEmailResponse>,
) => {
  const { name, email, message }: SendEmailData = req.body

  if (req.method !== 'POST')
    return res.status(400).json({ success: false, message: 'Bad request' })
  if (!name || !email || !message)
    return res
      .status(400)
      .json({ success: false, message: 'Please fill all fields' })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SECONDARY_USER_ADRESS,
      pass: process.env.SECONDARY_PASSWORD,
    },
  })

  const html = `
    <div>
      <strong>${name}</strong> se ha contactado contigo desde tu pagina:
      <div>
        <br/>
        <p>${message}</p>
        <br/>
        <strong>Responder: ${email}</strong>
      </div>
    </div>
  `

  const info = {
    to: [
      process.env.MAIN_USER_ADRESS as string,
      process.env.SECONDARY_USER_ADRESS as string,
    ],
    subject: `Portfolio: ${name} se quiere contactar contigo `,
    html,
  }

  return await transporter
    .sendMail(info)
    .then(() => {
      res.status(200).json({ success: true, message: 'Email sent' })
    })
    .catch((error) => {
      console.error(error.message)
      res.status(500).json({ success: false, message: 'Internal server error' })
    })
}
