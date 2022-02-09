import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { SendEmailResponse } from 'src/modules/shared/types'
import requestIp from 'request-ip'
import geoip from 'geoip-lite'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SendEmailResponse>,
) => {
  const ip = requestIp.getClientIp(req)
  const platform = req.headers['sec-ch-ua-platform']
  const geo = geoip.lookup(ip as string)

  if (req.method !== 'GET')
    return res.status(400).json({ success: false, message: 'Bad request' })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SECONDARY_USER_ADRESS,
      pass: process.env.SECONDARY_PASSWORD,
    },
  })

  const html = `
    <div>
      <strong>${ip} viwed your website</strong> 
      <br/>
      from <strong>${(geo?.city, geo?.country)}</strong> 
      <br/>
        
        <strong>Platform used: ${platform}</strong>
      
    </div>
  `

  const info = {
    to: [
      process.env.MAIN_USER_ADRESS as string,
      process.env.SECONDARY_USER_ADRESS as string,
    ],
    subject: `Someone viwed your website in ${geo?.country}`,
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
