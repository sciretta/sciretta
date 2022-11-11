import { SkillContainer } from './DataTypes'

export const allSkills: SkillContainer[] = [
  {
    type: 'General',
    skills: [
      {
        name: 'JavaScript',
        img: "bg-[url('/javascript.svg')]",
      },
      {
        name: 'TypeScript',
        img: "bg-[url('/typescript.svg')]",
      },
      {
        name: 'Rust',
        img: "bg-[url('/rust_crab.svg')]",
      },
      {
        name: 'GraphQL',
        img: "bg-[url('/graphql.svg')]",
      },
      {
        name: 'Jest (testing)',
        img: "bg-[url('/jest.svg')]",
      },
    ],
  },
  {
    type: 'Frontend',
    skills: [
      {
        name: 'React/React Native',
        img: "bg-[url('/React.svg')]",
      },
      {
        name: 'Next.js',
        img: "bg-[url('/Nextjs.svg')]",
      },
      {
        name: 'Expo',
        img: "bg-[url('/expo.svg')]",
      },
      {
        name: 'Android Studio',
        img: "bg-[url('/android_studio.svg')]",
      },
    ],
  },
  {
    type: 'Backend',
    skills: [
      {
        name: 'Node.js',
        img: "bg-[url('/nodejs.svg')]",
      },
      {
        name: 'Apollo GraphQL',
        img: "bg-[url('/apollo.svg')]",
      },
      {
        name: 'Express',
        img: "bg-[url('/expressjs.png')]",
      },
      {
        name: 'Nest.js',
        img: "bg-[url('/nestjs.svg')]",
      },
      {
        name: 'MongoDB',
        img: "bg-[url('/mongodb.svg')]",
      },
      {
        name: 'Firebase',
        img: "bg-[url('/firebase.svg')]",
      },
      {
        name: 'Docker',
        img: "bg-[url('/docker.png')]",
      },
    ],
  },
]
