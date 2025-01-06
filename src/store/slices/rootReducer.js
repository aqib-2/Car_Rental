import {combineReducers} from '@reduxjs/toolkit'
import loginSlice from './loginslice'
import signUpSlice from './signUpSlice'
import adminSlice from './adminSlice'
import dialogSlice from './dialogSlice'
import lookupSLice from './lookupSlice'
import dashboardSlice from './dashboardSlice'

const rootReducer = combineReducers({
   login:loginSlice,
   signUp:signUpSlice,
   admin:adminSlice,
   dialog:dialogSlice,
   lookup:lookupSLice,
   dashboard:dashboardSlice,
})

export default rootReducer