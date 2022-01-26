import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { SkillContainer } from 'src/modules/shared/DataTypes'
import SkillCard from './SkillCard'

function SkillsContainer({
  data,
  setId,
}: {
  data: SkillContainer
  setId: (value: string | null) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <motion.div
      layoutId={data.type}
      drag
      dragConstraints={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      dragElastic={0.6}
      ref={containerRef}
      className="h-[700px] w-[400px] md:h-[1000px] md:w-[600px] m-5 overflow-y-auto rounded-lg flex flex-col justify-start items-center  bg-darker"
    >
      <div className="bg-dark py-10 border-2 border-darker text-center w-full select-none text-lighter text-3xl font-medium text-3xl font-body mb-10 hover:cursor-grab active:cursor-grabbing">
        {data.type}
      </div>
      <div className="flex flex-col justify-start items-center min-h-min">
        {data.skills.map((item) => (
          <SkillCard
            key={item.name}
            data={item}
            containerName={data.type}
            onSelect={() => setId(`${data.type}-${item.name}`)}
          />
        ))}
      </div>
      <button
        onClick={() =>
          containerRef.current?.scrollBy({
            top: 800,
            behavior: 'smooth',
          })
        }
        className="sticky bottom-5 opacity-20 z-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <img src="./down-arrow.svg" className="h-8 w-8" alt="Down" />
      </button>
    </motion.div>
  )
}

export default SkillsContainer
