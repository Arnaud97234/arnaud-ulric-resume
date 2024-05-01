import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [
		{
			name: '',
			desc: '',
			techs: [],
			links: [],
			image: ''
		}
	]
}

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		addProjectsToStore: (state, action) => {
			const projects = []
			const projectsList = action.payload.map((e) => {
				projects.push({
					name: e.name,
					desc: e.desc,
					techs: e.techs,
					links: e.links,
					image: e.image
				})
			})
			state.value = projects
		}
	}
})

export const { addProjectsToStore } = projectsSlice.actions
export default projectsSlice.reducer
