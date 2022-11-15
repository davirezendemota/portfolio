import { AuthContextProvider } from '../contexts/auth'

import GlobalStyle from '../globalStyle'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ AuthContextProvider>
  )
}

export default MyApp