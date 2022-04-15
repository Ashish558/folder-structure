
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {
            icon: './assets\icons\activityCategories/video.svg',
            categoryName: 'Video Activity'
        },
        {
            icon: './assets\icons\activityCategories/assessment.svg',
            categoryName: 'Assessment'
        },
        {
            icon: './assets\icons\activityCategories/games.svg',
            categoryName: 'Games'
        },
        {
            icon: './assets\icons\activityCategories/marketing-pages.svg',
            categoryName: 'Marketing Pages'
        },
        {
            icon: './assets\icons\activityCategories/themes.svg',
            categoryName: 'Themes'
        },
    ]
}

const activityCategories = createSlice({
    name: 'activityCategories',
    initialState,
    reducers: {
        updateCategories: (state, { payload }) => {
            state.activityCategories = payload
        }
    }
})

export const { updateCategories } = activityCategories.actions
export default activityCategories.reducer
