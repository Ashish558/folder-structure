import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { combineReducers } from 'redux'

import authReducer from './slices/auth'
import activityCategoriesReducer from './slices/activityCategories'
import activityTypesReducer from './slices/activityTypes'

const reducer = combineReducers({
    auth: authReducer,
    activityCategories: activityCategoriesReducer,
    activityTypes: activityTypesReducer
})

export const store = configureStore({
    reducer,
})



setupListeners(store.dispatch)