import { configureStore } from '@reduxjs/toolkit'
import InputSlice from './InputSlice'
import filterSlice from './filterSlice'



export const store = configureStore({
    reducer: {
        input: InputSlice,
        filter: filterSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch