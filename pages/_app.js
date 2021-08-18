import '../public/css/bootstrap.min.css'
import '../styles/globals.css'
import "nprogress/nprogress.css"
import Router from 'next/router'
import NProgress from 'nprogress'
import ThemeProvider from '../components/context api/ThemeProvider'


// loading progress
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
