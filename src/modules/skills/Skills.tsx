import React from 'react'
import SkillsContainer from './components/SkillsContainer'

function Skills() {
  return (
    <div className="flex flex-col items-evenly">
      <div className="text-lighter font-medium text-6xl font-body mb-10 flex justify-center">
        Skills
      </div>
      <div className="min-h-screen flex flex-col items-center justify-evenly xl:flex-row">
        <SkillsContainer />
        <SkillsContainer />
        <SkillsContainer />
      </div>
    </div>
  )
}

export default Skills
