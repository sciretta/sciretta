import { Container, CssBaseline } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

export function Loading(){
  return(
    <>
      <CssBaseline/>
      <Container fixed style={{width:'100vw',height:'100vh',alignItems:'center',justifyContent:'center'}}>
        <div style={{marginTop:'45vh'}}></div>
        <Skeleton variant="rect" width={500} height={60}
          style={{
            backgroundColor:'rgba(0,0,0,.85)',
            color:'lightgrey',
            fontSize:'20px',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:2,
            height:'30px'
          }}
        >
          Loading... 🤞
        </Skeleton>
      </Container>
    </>
  )
}