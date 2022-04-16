
import { createSlice } from "@reduxjs/toolkit";

//themes sliders in design page
//when the user changes activity categories, activity subtypes of its activity types will be fetched
//each subtype will have key 'activityTypeId'
const initialState = {
    sliders: {
        trendingThemes: [
            {
                img: './assets/theme.png',
                name: 'theme1'
            },
            {
                img: './assets/theme.png',
                name: 'theme2'
            }
        ],
        subtypes: [
            {
                img: './assets/theme.png',
                name: 'subtype1theme',
                activityTypeId: 1002
            },
            {
                img: './assets/theme.png',
                name: 'subtype2theme1',
                activityTypeId: 1002,
            },
            {
                img: './assets/theme.png',
                name: 'subtype1theme1',
                activityTypeId: 1001,
            },
            {
                img: './assets/theme.png',
                name: 'subtype2theme1',
                activityTypeId: 1001,
            },
        ]
    }
}

const sidebarSliders = createSlice({
    name: 'sidebarSliders',
    initialState,
    reducers: {
        updateActivityTypes: (state, { payload }) => {
            state.sidebarSliders = payload
        },
    }
})

export const { updateActivityTypes } = sidebarSliders.actions
export default sidebarSliders.reducer
