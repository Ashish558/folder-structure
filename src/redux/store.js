import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { combineReducers } from 'redux'

import authReducer from './slices/auth'

const reducer = combineReducers({
    auth: authReducer
})

export const store = configureStore({
    reducer,
})



setupListeners(store.dispatch)