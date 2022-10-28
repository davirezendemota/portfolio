import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from '../globalStyle'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp