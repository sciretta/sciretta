import Contact from 'src/modules/contact/Contact'
import Experience from 'src/modules/experience/Experience'
import TopBar from 'src/modules/shared/components/TopBar'
import Skills from 'src/modules/skills/Skills'
import WhoAmI from 'src/modules/who-am-i/WhoAmI'

export default function Home() {
  return (
    <div className="bg-dark">
      <TopBar />
      <div className="p-5">
        <WhoAmI />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}
