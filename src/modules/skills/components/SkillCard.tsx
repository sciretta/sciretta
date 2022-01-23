import { motion } from 'framer-motion'
import React from 'react'
import { Skill } from 'src/modules/shared/DataTypes'

function SkillCard({ data, onSelect }: { data: Skill; onSelect: () => void }) {
  return (
    <motion.div
      onClick={onSelect}
      layoutId={data.name}
      className="h-[300px] w-[300px] md:h-[340px] md:w-[350px] m-1 rounded-sm"
      style={{ border: '1px solid yellow' }}
    >
      compact
    </motion.div>
  )
}

export default SkillCard
