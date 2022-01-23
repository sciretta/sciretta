import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { allSkills } from '../shared/Data'
import SkillsContainer from './components/SkillsContainer'

function Skills() {
  const [id, setId] = useState<string | null>(null)
  return (
    <div className="flex flex-col items-evenly">
      <div className="text-lighter font-medium text-6xl font-body mb-10 flex justify-center">
        Skills
      </div>
      <AnimatePresence>
        <div className="min-h-screen flex flex-col items-center justify-evenly xl:flex-row">
          {allSkills.map((item) => (
            <SkillsContainer setId={setId} key={item.type} data={item} />
          ))}
        </div>
        {id && (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setId(null)}
            >
              <motion.div
                layoutId={id}
                onClick={() => setId(null)}
                className=" ml-auto mr-auto z-50 h-[300px] w-[300px] md:h-[600px] md:w-[700px] m-1 rounded-sm"
                style={{ border: '1px solid yellow' }}
              >
                expanded
              </motion.div>
              <div
                className="opacity-50 fixed inset-0 z-40 bg-black"
                // onClick={() => setId(null)}
              ></div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Skills
