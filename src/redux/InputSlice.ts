import { createSlice } from "@reduxjs/toolkit"

const initialState: string = ""

const InputSlice = createSlice({
    name: 'InputSlice',
    initialState,
    reducers: {
        handleChange: (state, actions) => state = actions.payload
    }
})


export default InputSlice.reducer;

export const { handleChange } = InputSlice.actions