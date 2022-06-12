import { AppProps } from 'next/app'
import '../src/styles/global.css'
import '../node_modules/react-device-frameset/dist/styles/marvel-devices.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
