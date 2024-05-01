import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import profile from '@/reducers/profile'
import intro from '@/reducers/intro'
import resume from '@/reducers/resume'
import projects from '@/reducers/projects'

const reducers = combineReducers({ profile, intro, resume, projects })

const store = configureStore({
	reducer: reducers
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
