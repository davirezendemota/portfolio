import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import GlobalStyle from '../globalStyle'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Navbar/>
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp