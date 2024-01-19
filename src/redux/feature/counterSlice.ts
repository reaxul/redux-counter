import { createSlice } from "@reduxjs/toolkit";

type stateType = {
    value: number

}
const initialState: stateType = { value: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        incrementByAmount(state, action) {
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;