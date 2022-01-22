import SkillsContainer from './components/SkillsContainer'

const containers = ['General', 'Frontend', 'Backend']

function Skills() {
  return (
    <div className="flex flex-col items-evenly">
      <div className="text-lighter font-medium text-6xl font-body mb-10 flex justify-center">
        Skills
      </div>
      <div className="min-h-screen flex flex-col items-center justify-evenly xl:flex-row">
        {containers.map((name, idx) => (
          <SkillsContainer key={name} name={name} idx={idx} />
        ))}
      </div>
    </div>
  )
}

export default Skills
