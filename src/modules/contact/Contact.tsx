import { motion } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react'
import { FireworksContext } from '../shared/components/Confetti'
import { useOnScreen } from '../shared/hooks'
import { SendEmailData, SendEmailResponse } from '../shared/types'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '30px' },
}

//tailwind elegant input styling
const inputClass =
  'w-full h-10 p-2 bg-lighter border-0 rounded-md focus:outline-none transition duration-150 ease-in-out font-body font-medium placeholder:font-body text-darker placeholder:text-dark'

// tailwind disabled button
const disabledButtonClass =
  'text-light bg-lighter cursor-not-allowed hover:bg-lighter'

function Contact() {
  const [disabledButton, setDisabledButton] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useOnScreen(ref)
  const fireworks = useContext(FireworksContext)

  useEffect((): void => {
    setIsOpen(isIntersecting)
  }, [isIntersecting])

  useEffect((): void => {
    if (name && email && message) {
      return setDisabledButton(false)
    }
    setDisabledButton(true)
  }, [name, email, message])

  function sendEmail() {
    if (disabledButton) return
    const data: SendEmailData = {
      name,
      email,
      message,
    }

    fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res: SendEmailResponse) => {
        if (res.success) {
          setEmail('')
          setMessage('')
          setName('')
          if (!fireworks?.startAnimation) return
          fireworks.startAnimation(2000)
        } else {
          setError(res.message)
        }
      })
      .catch((err) => {
        setError(err)
        setTimeout(() => {
          setError('')
        }, 5000)
      })
  }

  return (
    <div
      id="contact"
      className="flex flex-col items-evenly mt-40 min-h-screen pt-16">
      <span className="flex text-lighter font-medium text-5xl font-body mb-10 justify-center">
        Contact
      </span>
      <div
        ref={ref}
        className="h-[75vh] min-h-[500px] flex justify-center lg:justify-between p-16">
        <div className="flex flex-col items-center h-fit bg-darker rounded-xl w-1/2 min-w-[300px] p-8">
          <div className="w-full flex-col md:flex-row flex items-center justify-between mb-8">
            <input
              onChange={(e): void => setName(e.target.value)}
              className={`${inputClass} md:mr-2`}
              value={name}
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e): void => setEmail(e.target.value)}
              value={email}
              className={`${inputClass} mt-2 md:mt-0`}
              type="email"
              placeholder="Email"
            />
          </div>
          <textarea
            onChange={(e): void => setMessage(e.target.value)}
            value={message}
            placeholder="Message"
            rows={10}
            className={`${inputClass} h-auto resize-none`}
          />
          <button
            className={`mt-10 hover:bg-light transition duration-150 ease-in-out text-darker font-body font-medium rounded-md bg-lighter p-4 ${
              disabledButton ? disabledButtonClass : ''
            }`}
            onClick={sendEmail}>
            Send email
          </button>
          {error && (
            <span className="flex text-red-500 font-medium text-3xl font-body mt-2 justify-center">
              {error}
            </span>
          )}
        </div>

        <motion.div
          variants={variants}
          animate={isOpen ? 'open' : 'closed'}
          initial={{ opacity: 0 }}
          transition={{ type: 'just', delay: 0.6 }}
          className="min-h-48 hidden lg:flex flex-col w-1/2 px-8">
          <span className="flex text-lighter font-medium text-3xl font-body mb-10 justify-center">
            Let's talk
          </span>
          <div className="h-full w-full bg-[url('/undraw_agreement.svg')] bg-contain bg-no-repeat bg-center" />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
