import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { StyledEngineProvider } from '@mui/material/styles'
import '../styles/fonts/webfontkit-Abel/abel-regular-webfront.woff'

config.autoAddCss = false

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import users from '../reducers/users'

const store = configureStore({
  reducer: { users },
})


export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
        </StyledEngineProvider>
      </Provider>
    </>
  )
}
