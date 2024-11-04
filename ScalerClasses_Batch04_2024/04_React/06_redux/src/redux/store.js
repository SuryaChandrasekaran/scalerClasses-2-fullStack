import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: todoSlice.reducer,
        userState: userSlice.reducer
    }
});


export default store;