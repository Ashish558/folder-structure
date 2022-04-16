
import { createSlice } from "@reduxjs/toolkit";

//sliders in design page
//when the user changes activity categories, activity subtypes and themes of each subtype of its activity type will be fetched
//each subtype will have key 'activityTypeId'

//trending themes will be received from backend
//We will also get activityType and subtype of each trending Theme.

const initialState = {
    isMegaSliderActive: false,
    sliders: {
        trendingThemes: [
            {
                id: 3001,
                img: './assets/theme.png',
                name: 'theme1',
                activityType: 1002,
                activitySubtype: 10001
            },
            {
                id: 3002,
                img: './assets/theme.png',
                name: 'theme2',
                activityType: 1002,
                activitySubtype: 10002
            }
        ],
        subtypes: [
            {
                id: 10001,
                name: 'mcq with image',
                activityTypeId: 1002
            },
            {
                id: 10002,
                name: 'mcq with timer',
                activityTypeId: 1002,
            },
        ],
        themes: [
            {
                id: 3004,
                img: './assets/theme.png',
                name: 'subtype1theme1',
                subtypeId: 10001
            },
            {
                id: 3005,
                img: './assets/theme.png',
                name: 'subtype2theme2',
                subtypeId: 10002,
            },
        ]
    }
}

//updateSubtypes will be dispatched whenever the category is changed or the selected activity types changes.

const sidebarSliders = createSlice({
    name: 'sidebarSliders',
    initialState,
    reducers: {
        updateActivityTypes: (state, { payload }) => {
            state.sidebarSliders = payload
        },
        updateSubtypes: (state, { payload }) => {
            state.sidebarSliders = payload
        },
        updateThemes: (state, { payload }) => {
            state.sidebarSliders = payload
        },
    }
})

export const { updateActivityTypes } = sidebarSliders.actions
export default sidebarSliders.reducer
