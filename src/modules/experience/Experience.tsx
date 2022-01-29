import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Typewriter from 'typewriter-effect'
import { useOnScreen } from '../shared/hooks'

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '20px' },
}

function Experience() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useOnScreen(ref)

  useEffect((): void => {
    setIsOpen(isIntersecting)
  }, [isIntersecting])

  return (
    <div id="experience" className="flex flex-col items-evenly mt-40 max-h-fit">
      <div className="text-lighter font-medium text-5xl font-body mb-10 flex justify-center">
        Experience
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div
          onClick={() => open('https://www.cobuildlab.com/')}
          className={`m-4 min-h-[300px] min-w-[240px] md:h-[470px] md:w-[400px] lg:h-[570px] lg:w-[500px] bg-center md:bg-top bg-[url('/cobuildLab.png')] bg-contain bg-no-repeat px-10 hover:cursor-pointer`}
        />
        <div ref={ref} className="flex flex-col w-full p-8">
          <div className="flex w-full flex-col md:flex-row items-center mb-10">
            <div className=" text-center text-lighter font-medium text-3xl font-body mr-2">
              CobuildLab
            </div>
            <div className="text-center text-lighter font-medium text-xl font-body ">
              since december 2020.
            </div>
          </div>

          <motion.div
            variants={variants}
            animate={isOpen ? 'open' : 'closed'}
            initial={{ opacity: 0 }}
            transition={{ type: 'just', delay: 0.6 }}
            className="flex w-full md:w-4/6 text-start text-lighter font-medium text-base font-body">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pasteString(
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, odio? Sed nobis qui tenetur placeat repellat iure incidunt quasi nulla, earum rem quo dolores, delectus, dolore sapiente enim id expedita?',
                    null,
                  )
                  .start()
              }}
              options={{
                cursor: `<span>|</span>`,
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Experience
