import { NextApiRequest, NextApiResponse } from "next"
import { DataInterface , SuccessInterface } from "types"

export default async (req:NextApiRequest, res:NextApiResponse<SuccessInterface>) => {
  const { from_name , email , message }: DataInterface = req.body

  if(!(req.method === 'POST')) return res.status(400).json({success:false})
  if(!from_name || !email || !message) return res.status(400).json({success:false})

  const data = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.USER_ID,
    template_params: {
      from_name:from_name,
      email:email,
      message:message
    }
}
 
  return res.status(200).json({ 
    success: await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((resApi) => {
        if(resApi.status===200){
          return true
        }else{
          return false
        }
      })
      .catch(()=>{
        return false
      })
  })
}
