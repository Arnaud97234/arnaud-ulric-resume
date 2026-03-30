import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import profile from '@/reducers/profile'
import intro from '@/reducers/intro'
import resume from '@/reducers/resume'
import projects from '@/reducers/projects'

const reducers = combineReducers({ profile, intro, resume, projects })

const store = configureStore({
	reducer: reducers
})

config.autoAddCss = false

const theme = createTheme({
	typography: {
		fontFamily: '"Abel", Arial, sans-serif',
	},
})

function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</Provider>
	)
}

export default App
