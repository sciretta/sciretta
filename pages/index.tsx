import TopBar from 'src/modules/shared/components/TopBar'
import Skills from 'src/modules/skills/Skills'
import WhoAmI from 'src/modules/who-am-i/WhoAmI'
// const Main = loadable(() => import('views/Main'))
// <Main fallback={<Loading display="main section 👋" />} />

export default function Home() {
  return (
    <div className="bg-dark">
      <TopBar />
      <WhoAmI />
      <Skills />
    </div>
  )
}
