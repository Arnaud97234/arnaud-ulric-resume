import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: {
		experiences: [
			{
				title: '',
				company: { name: '', link: '' },
				desc: [],
				startDate: '',
				endDate: '',
				techs: [
					{
						name: '',
						icon: ''
					}
				]
			}
		],
		expertises: [
			{
				tools: [
					{
						name: '',
						level: 0,
						icon: ''
					}
				],
				techs: [
					{
						name: '',
						level: 0,
						icon: ''
					}
				],
				languages: [
					{
						name: '',
						level: ''
					}
				]
			}
		],
		diplomas: [{ title: '', date: '' }]
	}
}

export const resumeSlice = createSlice({
	name: 'resume',
	initialState,
	reducers: {
		addResumeToStore: (state, action) => {
			state.value = action.payload
		}
	}
})

export const { addResumeToStore } = resumeSlice.actions
export default resumeSlice.reducer
