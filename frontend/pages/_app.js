import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import users from '../reducers/users'

const store = configureStore({
  reducer: { users },
})

config.autoAddCss = false


function App({ Component, pageProps }) {

  return (
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
  )
}

export default App