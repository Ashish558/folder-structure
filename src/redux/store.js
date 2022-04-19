import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { combineReducers } from 'redux'

import userReducer from './slices/user'
import activityCategoriesReducer from './slices/activityCategories'
import activityTypesReducer from './slices/activityTypes'
import sidebarSlidersReducer from './slices/sidebarSliders'
import activityReducer from './slices/activity'
import sidebarReducer from './slices/sidebar'

const reducer = combineReducers({
    user: userReducer,
    activityCategories: activityCategoriesReducer,
    activityTypes: activityTypesReducer,
    sidebarSliders :sidebarSlidersReducer,
    activity: activityReducer,
    sidebar: sidebarReducer
})

export const store = configureStore({
    reducer,
})



setupListeners(store.dispatch)