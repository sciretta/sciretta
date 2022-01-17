import React from 'react'
import SkillCard from './SkillCard'

function SkillsContainer() {
  return (
    <div
      className="h-[600px] w-[340px] md:h-[900px] md:w-[380px] m-5 overflow-y-auto rounded-lg flex flex-col justify-start items-center pt-5"
      style={{ border: '1px solid yellow' }}
    >
      <div className="text-lighter text-3xl font-medium text-3xl font-body mb-10">
        General
      </div>
      <div className="flex flex-col justify-start items-center min-h-min">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  )
}

export default SkillsContainer
