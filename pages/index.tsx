import TopBar from 'src/modules/shared/components/TopBar'
import WhoAmI from 'src/modules/who-am-i/WhoAmI'
// const Main = loadable(() => import('views/Main'))
// <Main fallback={<Loading display="main section 👋" />} />

export default function Home() {
  return (
    <>
      <TopBar />
      <WhoAmI />
    </>
  )
}
