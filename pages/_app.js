import '../public/css/bootstrap.min.css'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from './../redux/store/store'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
