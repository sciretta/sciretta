import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import { useSetUrlNavigation } from '../shared/hooks'

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '20px' },
}

function WhoAmI() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useSetUrlNavigation('whoami')

  useEffect((): void => {
    setTimeout(() => {
      setIsOpen(true)
    }, 1000)
  }, [])

  return (
    <div
      ref={ref}
      id="whoami"
      className="h-screen min-h-min flex justify-center items-center flex-col text-center">
      <motion.div
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0 }}
        transition={{ type: 'just', delay: 0.6 }}
        className="text-lighter text-3xl font-medium font-body">
        <span className="mb-10 block">Hello I am</span>
        <span className="block text-lighter font-medium text-6xl font-body mb-10">
          Leonardo Sciretta
        </span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString(`<span">JavaScript, TypeScript  ...</span>`)
              .pauseFor(3000)
              .deleteAll(20)
              .typeString(`<span">Web and Mobile developer.</span>`)
              .start()
          }}
          options={{
            cursor: `<span">|</span>`,
          }}
        />
        <span className="block mb-10" />
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
        }}>
        <div className="mt-5 flex justify-center items-center w-10/12 h-20">
          <button
            className="w-16 h-16"
            onClick={() => open('https://github.com/sciretta')}>
            <img src="./github.svg" alt="Github" />
          </button>
          <button
            className="ml-6 mr-6 w-16 h-16"
            onClick={() => console.log('gmail')}>
            <img src="./gmail.svg" alt="Github" />
          </button>
          <button
            className="w-16 h-16"
            onClick={() =>
              open('https://www.linkedin.com/in/leonardo-sciretta-a43939201')
            }>
            <img src="./linkedin.svg" alt="Github" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default WhoAmI
