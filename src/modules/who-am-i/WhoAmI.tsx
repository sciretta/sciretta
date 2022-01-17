import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '20px' },
}

const primaryFontStyle =
  'color: #ADBECC; font-family: Open Sans, Helvetica; font-weight: 500; font-size: 1.875rem;'

function WhoAmI() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect((): void => {
    setTimeout(() => {
      setIsOpen(true)
    }, 1500)
  }, [])

  return (
    <div className="h-screen min-h-min flex justify-center items-center flex-col text-center">
      <motion.div
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0 }}
        transition={{ type: 'just', delay: 0.6 }}
      >
        <div className="text-lighter text-3xl font-medium  font-body mb-10">
          Hello I am
        </div>
        <div className="text-lighter  font-medium text-6xl font-body mb-10">
          Leonardo Sciretta
        </div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString(
                `<span style="${primaryFontStyle}">TypeScript, JavaScript ...</span>`,
              )
              .pauseFor(3000)
              .deleteAll(130)
              .typeString(
                `<span style="${primaryFontStyle}">Web and Mobile developer.</span>`,
              )
              .start()
          }}
          options={{
            cursor: `<span style="${primaryFontStyle}">|</span>`,
          }}
        />
      </motion.div>
      <motion.div
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0 }}
        transition={{ type: 'just', delay: 1.2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="mt-5 flex justify-center items-center w-10/12 h-20">
          <button
            className="w-16 h-16"
            onClick={() => open('https://github.com/sciretta')}
          >
            <img src="./github.svg" alt="Github" />
          </button>
          <button
            className="ml-6 mr-6 w-16 h-16"
            onClick={() => console.log('gmail')}
          >
            <img src="./gmail.svg" alt="Github" />
          </button>
          <button
            className="w-16 h-16"
            onClick={() =>
              open('https://www.linkedin.com/in/leonardo-sciretta-a43939201')
            }
          >
            <img src="./linkedin.svg" alt="Github" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default WhoAmI
