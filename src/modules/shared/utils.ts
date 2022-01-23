import { allSkills } from './Data'

/*
 * @description - Find Skill image.
 * @param id - must to follow this format "containerType-skillName".
 */
export const findSkillImage = (id: string): string => {
  let image: string = ''

  const skillContainer = allSkills.find(
    (container) => container.type === id.split('-')[0],
  )
  if (!skillContainer) {
    console.error(`Skill container ${id} not found.`)
    return ''
  }
  const skill = skillContainer.skills.find(
    (skill) => skill.name === id.split('-')[1],
  )
  if (!skill) {
    console.error(`Skill ${id} not found.`)
    return ''
  }
  image = skill.img

  return image
}
