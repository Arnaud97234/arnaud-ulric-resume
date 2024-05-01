import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: {
		skills: [{ name: '', icon: '' }],
		desc: []
	}
}

export const introSlice = createSlice({
	name: 'intro',
	initialState,
	reducers: {
		addIntroToStore: (state, action) => {
			state.value.skills = action.payload.skills
			state.value.desc = action.payload.desc
		}
	}
})

export const { addIntroToStore } = introSlice.actions
export default introSlice.reducer
