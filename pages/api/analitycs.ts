import { NextApiRequest } from 'next'
import nodemailer from 'nodemailer'
import requestIp from 'request-ip'
import geoip from 'geoip-lite'

export default async (req: NextApiRequest) => {
  const ip = requestIp.getClientIp(req)
  const platform = req.headers['sec-ch-ua-platform']
  const geo = geoip.lookup(ip as string)

  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.SECONDARY_USER_ADRESS,
      pass: process.env.SECONDARY_PASSWORD,
    },
  })

  const html = `
    <div>
      <strong>${ip} viewed your website in ${geo?.country}</strong> 
      <br/>
      Location data: <strong>${JSON.stringify(geo)}</strong> 
      <br/>
        <strong>Platform used: ${platform}</strong>
    </div>
  `

  const info = {
    to: [
      process.env.MAIN_USER_ADRESS as string,
      process.env.SECONDARY_USER_ADRESS as string,
    ],
    subject: `Someone viewed your website in ${geo?.country}`,
    html,
  }

  return await transporter.sendMail(info)
}
