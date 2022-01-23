import { SkillContainer } from './DataTypes'

export const allSkills: SkillContainer[] = [
  {
    type: 'General',
    skills: [
      {
        name: 'HTML',
        description:
          'I have experience with HTML5 and CSS3. I have worked with Bootstrap and Materialize.',
        img: 'html.svg',
      },
    ],
  },
  {
    type: 'Frontend',
    skills: [
      {
        name: 'JavaScript',
        description:
          'I have experience with JavaScript, React, Redux, and TypeScript.',
        img: 'js.svg',
      },
    ],
  },
  {
    type: 'Backend',
    skills: [
      {
        name: 'Node.js',

        description: 'I have experience with Node.js, Express, and MongoDB.',
        img: 'node.svg',
      },
    ],
  },
]
