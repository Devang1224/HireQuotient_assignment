import { configureStore } from '@reduxjs/toolkit'

import dataReducer from "../reducers/dataReducer"
// import filterReducer from "../reducers/Filters"

export const store = configureStore({
        reducer: {
          dataReducer, 
         }, 
    })