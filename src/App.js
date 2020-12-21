import React, {Suspense,lazy} from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { lightTheme } from './Theme'
import Layout from './views/Layout'
import Skeleton from '@material-ui/lab/Skeleton'

const Main = lazy(() => import('./views/Main'))
const Fronted = lazy(() => import('./views/Fronted'))
const Backend = lazy(() => import('./views/Backend'))


export default function App(props) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <Suspense fallback={<Loading/>}>
	        <Main/>
	        <Fronted/>
	        <Backend/>
	      </Suspense>
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
	  	fontWeight:'600',
	  	display:'flex',
	  	alignItems:'center',
	  	justifyContent:'center'
	  }}>Loading...</Skeleton>
	)
}