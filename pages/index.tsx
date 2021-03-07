import loadable from '@loadable/component'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme } from 'styles/Theme'
import { Loading } from 'components/Loading'

const Layout = loadable(() => import('views/Layout'),{
  fallback:<Loading/>
})
const Main = loadable(() => import('views/Main'))
const Frontend = loadable(() => import('views/Frontend'))
const Backend = loadable(() => import('views/Backend'))
const Experience = loadable(() => import('views/Experience'))

export default function Home() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <title>Leonardo Sciretta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main/>
        <Experience/>
        <Frontend/>
        <Backend/>
      </Layout>
    </ThemeProvider>
  )
}


