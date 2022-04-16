

import { createSlice } from "@reduxjs/toolkit";

//user can create any number of activities so 'activities' is an array of objects.
//activityType and subtype will be there in every activity object other keys will depend on activity type.
//keys will be based on the activity type.
//isActive ie. selected activity will be displayed in the activity design box
const initialState = {
   activities: [
       {
           activityType: 0,
           activitySubtype: 0,
           isActive: true
       }
   ]
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
            return {
                ...state,
                activities: state.activities.map(activity => activity.id === payload.id ?
                    { ...activity, isActive: true } :
                    activity.isActive === true ? { ...activity, isActive: false } :
                        activity
                )
            }
        },
    }
})

export const { updateAuth } = activity.actions
export default activity.reducer
