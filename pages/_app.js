//wrapper component for whole app. place to import global styles
import '../styles/globals.css'
export default function App( {Component, pageProps} ) {
    return <Component {...pageProps} />
}