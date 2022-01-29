import { useState } from 'react'
// import { useOnScreen } from '../shared/hooks'

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: '30px' },
// }

//tailwind elegant input styling
const inputClass =
  ' w-full h-10 p-2 bg-lighter border-0 rounded-md focus:outline-none transition duration-150 ease-in-out font-body font-medium placeholder:font-body text-darker placeholder:text-dark'

// tailwind disabled button
const disabledButtonClass =
  'text-light bg-lighter hover:bg-lighter cursor-not-allowed'

function Contact() {
  const [isSending, setIsSending] = useState(false)
  // const [isOpen, setIsOpen] = useState(false)
  // const ref = useRef<HTMLDivElement>(null)
  // const isIntersecting = useOnScreen(ref)

  // useEffect((): void => {
  //   setIsOpen(isIntersecting)
  // }, [isIntersecting])

  return (
    <div
      id="contact"
      className="flex flex-col items-evenly mt-40 min-h-screen pt-16">
      <span className="flex text-lighter font-medium text-5xl font-body mb-10 justify-center">
        Contact
      </span>
      <div className="h-[75vh] min-h-[500px] flex justify-center lg:justify-between p-16">
        <div className="flex flex-col items-center min-h-fit bg-darker rounded-xl w-1/2 min-w-[300px] p-8">
          <div className="w-full flex-col md:flex-row flex items-center justify-between mb-8">
            <input
              className={`${inputClass} md:mr-2`}
              type="text"
              placeholder="Name"
            />
            <input
              className={`${inputClass} mt-2 md:mt-0`}
              type="email"
              placeholder="Email"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={10}
            className={`${inputClass} h-auto resize-none`}
          />
          <button
            className={`mt-10 hover:bg-light transition duration-150 ease-in-out text-darker font-body font-medium rounded-md bg-lighter p-4 ${
              isSending ? disabledButtonClass : ''
            }`}
            onClick={() => setIsSending((prev) => !prev)}>
            Send email
          </button>
        </div>
        <div className="min-h-48 hidden lg:flex flex-col w-1/2 px-8">
          <span className="flex text-lighter font-medium text-3xl font-body mb-10 justify-center">
            Let's talk
          </span>
          <div className="h-full w-full bg-[url('/undraw_agreement.svg')] bg-contain bg-no-repeat bg-center" />
        </div>
      </div>
    </div>
  )
}

export default Contact
