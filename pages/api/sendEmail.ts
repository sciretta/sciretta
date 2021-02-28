import { NextApiRequest, NextApiResponse } from "next"
import { DataInterface , SuccessInterface } from "types"
import nodemailer from "nodemailer"

export default async (req:NextApiRequest, res:NextApiResponse<SuccessInterface>) => {
  const { from_name , email , message }: DataInterface = req.body

  if(!(req.method === 'POST')) return res.status(400).json({success:false})
  if(!from_name || !email || !message) return res.status(400).json({success:false})

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.SECONDARY_USER_ADRESS, pass: process.env.SECONDARY_PASSWORD }
  })

  const html = `
    <div>
      <strong>${from_name}</strong> se ha contactado contigo desde tu pagina:
      <div>
        <br/>
        <p>${message}</p>
        <br/>
        <strong>Responder: ${email}</strong>
      </div>
    </div>
  `

  const info = {
    to: [process.env.MAIN_USER_ADRESS as string, process.env.SECONDARY_USER_ADRESS as string],
    subject: `Portfolio: ${from_name} se quiere contactar contigo `,
    html
  };

  try{
    return await transporter
      .sendMail(info)
      .then(()=>{
        res.status(200).json({success:true})
      })
      .catch(error => {
        console.error(error.message)
        res.status(500).json({success:false})
      });
  } catch (err) {
    return res.status(500).json({success:false})
  }
}
