import { motion } from 'framer-motion'
import React from 'react'
import { Skill } from 'src/modules/shared/DataTypes'

function SkillCard({
  data,
  containerName,
  onSelect,
}: {
  data: Skill
  containerName: string
  onSelect: () => void
}) {
  return (
    <motion.div
      onClick={onSelect}
      layoutId={`${containerName}-${data.name}`}
      className={`m-4 h-[300px] w-[300px] md:h-[380px] md:w-[400px] rounded-sm ${data.img} bg-contain bg-no-repeat bg-center px-10  flex flex-col rounded-md flex flex-col justify-end items-center hover:cursor-pointer`}
    >
      <div className="w-fit text-lighter bg-darker/80 rounded-sm py-2 px-2 text-lighter text-xl font-medium font-body mb-10 flex justify-center">
        {data.name}
      </div>
    </motion.div>
  )
}

export default SkillCard
