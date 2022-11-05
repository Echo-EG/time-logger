import {configureStore} from "@reduxjs/toolkit";
import noteSlice from "./NoteSlice";

// export const store = configureStore({
//     reducer: {
//         noteSlice: noteSlice,
//     }
// })

export default configureStore({
    reducer: {
        noteSlice: noteSlice,
    }
})