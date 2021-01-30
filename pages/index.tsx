import Head from 'next/head'
// import {Suspense,lazy} from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
// import Skeleton from '@material-ui/lab/Skeleton'
import { lightTheme } from 'styles/Theme'
import Layout from 'views/Layout'

// const Main = lazy(() => import('views/Main'))
// const Fronted = lazy(() => import('views/Frontend'))
// const Backend = lazy(() => import('views/Backend'))

import Main from 'views/Main'
import Frontend from 'views/Frontend'
import Backend from 'views/Backend'


export default function Home() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <title>Leonardo Sciretta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <Suspense fallback={<Loading/>}>
	        <Main/>
	        <Frontend/>
	        <Backend/>
	      </Suspense> */}
		<Main/>
		<Frontend/>
		<Backend/>
      </Layout>
    </ThemeProvider>
  )
}

// function Loading(){
//   return(
// 	  <Skeleton variant="rect" width={500} height={60}
// 	  style={{
// 	  	marginTop:'15vh',
// 	  	backgroundColor:'rgba(0,0,0,.7)',
// 	  	borderRadius:'5px',
// 	  	color:'lightgrey',
// 	  	fontSize:'20px',
// 	  	fontWeight:'bold',
// 	  	display:'flex',
// 	  	alignItems:'center',
// 	  	justifyContent:'center'
// 	  }}>Loading...</Skeleton>
// 	)
// }
