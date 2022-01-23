export type Skill = {
  name: string
  description: string
  img: string
}

export type SkillContainer = {
  type: string
  skills: Skill[]
}
