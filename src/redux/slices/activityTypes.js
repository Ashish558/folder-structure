
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        {
            id: 1003,
            name: 'trueOrFalse',
            icon: `./assets/icons/activityTypes/trueOrFalse.svg`,
            categoryId: 102,
            isSelected: true,
        },
        {
            id: 1004,
            name: 'jigsawPuzzles',
            icon: `./assets/icons/activityTypes/jigsawPuzzles.svg`,
            categoryId: 102,
            isSelected: true,
        },
        {
            id: 1005,
            name: 'matchingPairs',
            icon: `./assets/icons/activityTypes/matchingPairs.svg`,
            categoryId: 102,
            isSelected: true,
        },
    ]
}

//toggleActivityTypeSelection is for changing the isSelected key from the activity types. only the subtypes & trending themes of the selected activity types will be displayed in the below sliders
const activityTypes = createSlice({
    name: 'activityTypes',
    initialState,
    reducers: {
        updateActivityTypes: (state, { payload }) => {
            state.activityTypes = payload
        },
        toggleActivityTypeSelection: (state, { payload }) => {
            return {
                ...state,
                activityTypes: state.activityTypes.map(activityType => activityType.id === payload.id ?
                    { ...activityType, isSelected: !activityType.isSelected } : activityType
                )
            }
        },
    }
})

export const { updateActivityTypes, toggleActivityTypeSelection } = activityTypes.actions
export default activityTypes.reducer
