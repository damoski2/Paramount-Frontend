import '../styles/globals.css'
import { Navbar } from '../components/import'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
