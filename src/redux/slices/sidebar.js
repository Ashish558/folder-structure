
import { createSlice } from "@reduxjs/toolkit";

//contains all activity categories
//activity types will change based on activity category
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
    ],
    activityTypes: [
        {
            id: 1001,
            name: 'mcq',
            icon: `./assets/icons/activityTypes/mcq.svg`,
            categoryId: 102,
            isSelected: true,
        },
        {
            id: 1002,
            name: 'matchTheFollowing',
            icon: `./assets/icons/activityTypes/matchTheFollowing.svg`,
            categoryId: 102,
            isSelected: true,
        },
    ]
}

const sidebar = createSlice({
    name: 'sidebar',
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

export const { updateCategories, selectCategory } = sidebar.actions
export default sidebar.reducer
