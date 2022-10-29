import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import GlobalStyle from '../globalStyle'



function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar/>
            <GlobalStyle />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp