import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./countSlice";

const store = configureStore({
    reducer : {
        counterReducer:counterSlice
    }
})

export default store