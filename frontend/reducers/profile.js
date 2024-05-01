import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: {
		name: '',
		title: '',
		subTitle: '',
		email: '',
		links: [
			{
				name: '',
				url: '',
				icon: ''
			}
		]
	}
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		addProfileToStore: (state, action) => {
			state.value.name = action.payload.name
			state.value.title = action.payload.title
			state.value.subTitle = action.payload.subTitle
			state.value.email = action.payload.email
			state.value.links = action.payload.links
		}
	}
})

export const { addProfileToStore } = profileSlice.actions
export default profileSlice.reducer
