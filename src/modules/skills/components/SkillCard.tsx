import { motion } from 'framer-motion'
import React from 'react'
import { Skill } from 'src/modules/shared/DataTypes'
import { useWindowWidth } from 'src/modules/shared/hooks'

function SkillCard({
  data,
  containerName,
  onSelect,
}: {
  data: Skill
  containerName: string
  onSelect: () => void
}) {
  const width = useWindowWidth()

  if (width === 'sm' || width === 'md')
    return (
      <div
        className={`m-4 h-[250px] w-[260px] sm:h-[300px] sm:w-[310px] ${data.img} bg-contain bg-no-repeat bg-center px-10  flex flex-col rounded-md flex flex-col justify-end items-center`}>
        <div className="w-fit text-lighter bg-darker/80 rounded-sm py-2 px-2 text-lighter text-xl font-medium font-body mb-10 flex justify-center">
          {data.name}
        </div>
      </div>
    )

  return (
    <motion.div
      onClick={onSelect}
      layoutId={`${containerName}-${data.name}`}
      className={`m-4 h-[300px] w-[310px] md:h-[380px] md:w-[400px] xl:h-[300px] xl:w-[310px] 2xl:h-[380px] 2xl:w-[400px] rounded-sm ${data.img} bg-contain bg-no-repeat bg-center px-10  flex flex-col rounded-md justify-end items-center hover:cursor-pointer`}>
      <div className="w-fit text-lighter bg-darker/80 rounded-sm py-2 px-2 text-lighter text-xl font-medium font-body mb-10 flex justify-center backdrop-blur-md">
        {data.name}
      </div>
    </motion.div>
  )
}

export default SkillCard
