import { useEffect, useRef } from 'react'
import Contact from 'src/modules/contact/Contact'
import Experience from 'src/modules/experience/Experience'
import {
  Fireworks,
  FireworksContext,
} from 'src/modules/shared/components/Confetti'
import TopBar from 'src/modules/shared/components/TopBar'
import Skills from 'src/modules/skills/Skills'
import WhoAmI from 'src/modules/who-am-i/WhoAmI'

export default function Home() {
  const confettiRef = useRef<{
    startAnimation: (customTime?: number) => void
  }>(null)

  useEffect(() => {
    confettiRef.current && confettiRef.current.startAnimation()
  }, [])

  return (
    <div className="bg-dark">
      <FireworksContext.Provider
        value={{
          startAnimation: (time) => confettiRef.current?.startAnimation(time),
        }}>
        <TopBar />
        <div className="p-5">
          <WhoAmI />
          <Skills />
          <Experience />
          <Contact />
        </div>
        <Fireworks ref={confettiRef} />
      </FireworksContext.Provider>
    </div>
  )
}
