import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'
import { lightTheme } from 'styles/Theme'
import Layout from 'views/Layout'

import Main from 'views/Main'
import Frontend from 'views/Frontend'
import Backend from 'views/Backend'
import Experience from 'views/Experience'
import { useEffect, useState } from 'react'


export default function Home() {
  const [ loading , setLoading ] = useState(true)

  useEffect(()=>{
    setLoading(false)
  },[])

  if(loading) return <Loading/>

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

function Loading(){
  return(
	  <Skeleton variant="rect" width={500} height={60}
	  style={{
	  	marginTop:'15vh',
	  	backgroundColor:'rgba(0,0,0,.7)',
	  	borderRadius:'5px',
	  	color:'lightgrey',
	  	fontSize:'20px',
	  	fontWeight:'bold',
	  	display:'flex',
	  	alignItems:'center',
      justifyContent:'center',
      width:'100vw'
	  }}>Loading...</Skeleton>
	)
}
