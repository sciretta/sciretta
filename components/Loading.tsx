import Skeleton from '@material-ui/lab/Skeleton'

export function Loading({ display }: { display: string }) {
  return (
    <>
      <Skeleton
        variant="rect"
        width={500}
        height={60}
        style={{
          backgroundColor: 'rgba(0,0,0,.85)',
          color: 'lightgrey',
          fontSize: '20px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
          height: '30px',
          margin: 20,
        }}
      >
        🤞 Loading {display}...
      </Skeleton>
    </>
  )
}
