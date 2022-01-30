import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { allSkills } from '../shared/Data'
import { useSetUrlNavigation } from '../shared/hooks'
import { findSkillImage } from '../shared/utils'
import SkillsContainer from './components/SkillsContainer'

function Skills() {
  const [id, setId] = useState<string | null>(null)
  const navigationRef = useSetUrlNavigation('skills')

  return (
    <div
      ref={navigationRef}
      id="skills"
      className="flex flex-col items-evenly pt-16">
      <span className="text-lighter font-medium text-5xl font-body mb-10 flex justify-center">
        Skills
      </span>
      <AnimatePresence>
        <div className="min-h-screen flex flex-col items-center justify-evenly xl:flex-row">
          {allSkills.map((item) => (
            <SkillsContainer setId={setId} key={item.type} data={item} />
          ))}
        </div>
        {id && (
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setId(null)}>
            <motion.div
              layoutId={id}
              onClick={() => setId(null)}
              className=" ml-auto mr-auto z-50 h-[500px] w-[440px] md:h-[700px] md:w-[600px] rounded-sm bg-dark px-10 py-10 flex flex-col rounded-md">
              <div
                className={`w-full h-5/6 ${findSkillImage(
                  id,
                )} bg-contain bg-no-repeat bg-center `}
              />
              <div className="mt-10 text-lighter text-3xl font-medium font-body mb-10 flex justify-center">
                {id.split('-')[1]}
              </div>
            </motion.div>
            <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Skills
