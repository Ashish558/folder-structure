

import { createSlice } from "@reduxjs/toolkit";

//user can create any number of activities so 'activities' is an array of objects.
//activityType and subtype will be there in every activity object other keys will depend on activity type.
//keys will be based on the activity type.
//isActive ie. selected activity will be displayed in the activity design box

const initialState = {
   activities: [],
   selectedActivity: 0
}

// activity slice which the user is designing
const activity = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        updateAuth: (state, {payload}) =>{
            state.activity = payload
        },
        selectActivity: (state, {payload}) =>{
            state.selectedActivity = payload
        },
        setActivity: (state, {payload}) =>{
            state.activities[selectedActivity] = payload
        },
    }
})

export const { updateAuth, setActivity } = activity.actions
export default activity.reducer
