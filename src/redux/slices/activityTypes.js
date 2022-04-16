
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activityTypes: [
        {
            id: 1001,
            name: 'mcq',
            icon: `./assets/icons/activityTypes/mcq.svg`,
            categoryId: 102
        },
        {
            id: 1002,
            name: 'matchTheFollowing',
            icon: `./assets/icons/activityTypes/matchTheFollowing.svg`,
            categoryId: 102
        },
        {
            id: 1003,
            name: 'trueOrFalse',
            icon: `./assets/icons/activityTypes/trueOrFalse.svg`,
            categoryId: 102
        },
        {
            id: 1004,
            name: 'jigsawPuzzles',
            icon: `./assets/icons/activityTypes/jigsawPuzzles.svg`,
            categoryId: 102
        },
        {
            id: 1005,
            name: 'matchingPairs',
            icon: `./assets/icons/activityTypes/matchingPairs.svg`,
            categoryId: 102
        },
    ]
}

const activityTypes = createSlice({
    name: 'activityTypes',
    initialState,
    reducers: {
        updateActivityTypes: (state, { payload }) => {
            state.activityTypes = payload
        },
    }
})

export const { updateActivityTypes } = activityTypes.actions
export default activityTypes.reducer
