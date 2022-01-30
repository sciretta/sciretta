import router from 'next/router'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import Contact from 'src/modules/contact/Contact'
import Experience from 'src/modules/experience/Experience'
import {
  Fireworks,
  FireworksContext,
} from 'src/modules/shared/components/Confetti'
import Footer from 'src/modules/shared/components/Footer'
import TopBar from 'src/modules/shared/components/TopBar'
import Skills from 'src/modules/skills/Skills'
import WhoAmI from 'src/modules/who-am-i/WhoAmI'

export default function Home() {
  const confettiRef = useRef<{
    startAnimation: (customTime?: number) => void
  }>(null)

  useEffect(() => {
    setTimeout(() => {
      router.replace('#whoami')
      confettiRef.current && confettiRef.current.startAnimation()
    }, 1000)
  }, [])

  return (
    <div className="bg-dark">
      <Head>
        <title>Leonardo Sciretta</title>
      </Head>
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
        <Footer />
        <Fireworks ref={confettiRef} />
      </FireworksContext.Provider>
    </div>
  )
}
