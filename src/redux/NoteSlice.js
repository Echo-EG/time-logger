import {createSlice} from "@reduxjs/toolkit";


const noteSlice = createSlice({
    name : "loggerSlice/types",
    initialState: [
        {
            id: 1,
            date: "date1",
            title: "title1",
            timeSpent:"time spent 1",
            complete: false
        },
        {
            id: 2,
            date: "date2",
            title: "title2",
            timeSpent:"time spent 2",
            complete: false
        },
        {
            id: 3,
            date: "date3",
            title: "title3",
            timeSpent:"time spent 3",
            complete: false
        }

    ],
    
    
    reducers:{
        addTask: (state, action) =>{
            const newTask  = {
                id: action.payload.id,
                date: action.payload.date,
                title: "New Log redux",
                timeSpent:"time spent redux",
                complete: false,
            };
            // state.push(newTask);
            state.unshift(newTask);
            // localStorage.setItem('todos', JSON.stringify(state))
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (tasks) => tasks.id === action.payload.id);
            state[index].complete = action.payload.complete;
        },
        changeTitle: (state, action) => {
            const index = state.findIndex(
                (tasks) => tasks.id === action.payload.id);
            state[index].title = action.payload.title;
        }
    },
})

export const {addTask, toggleComplete, changeTitle} = noteSlice.actions;
export default noteSlice.reducer;