
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {
            id: 101,
            icon: './assets/icons/activityCategories/video.svg',
            categoryName: 'Video Activity',
            isSelected: false
        },
        {
            id: 102,
            icon: './assets/icons/activityCategories/assessment.svg',
            categoryName: 'Assessment',
            isSelected: true
        },
        {
            id: 103,
            icon: './assets/icons/activityCategories/games.svg',
            categoryName: 'Games',
            isSelected: false
        },
        {
            id: 104,
            icon: './assets/icons/activityCategories/marketing-pages.svg',
            categoryName: 'Marketing Pages',
            isSelected: false
        },
        {
            id: 105,
            icon: './assets/icons/activityCategories/themes.svg',
            categoryName: 'Themes',
            isSelected: false
        },
    ]
}

const activityCategories = createSlice({
    name: 'activityCategories',
    initialState,
    reducers: {
        updateCategories: (state, { payload }) => {
            state.activityCategories = payload
        },
        selectCategory: (state, { payload }) => {
            return {
                ...state,
                categories: state.categories.map(category => category.id === payload.id ?
                    { ...category, isSelected: true } :
                    category.isSelected === true ? { ...category, isSelected: false } :
                        category
                )
            }
        }
    }
})

export const { updateCategories, selectCategory } = activityCategories.actions
export default activityCategories.reducer
