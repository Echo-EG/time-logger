import { Grid, Typography, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

// import {addTask} from '../../redux/NoteSlice';
import {addTask, toggleComplete, changeTitle} from '../../redux/NoteSlice';
import { id } from "date-fns/locale";



export const InputWindow = () => {

    const [time, setTime] = useState({
        timerOn: true,
        timerStart: 0,
        timerTime: 0
    }); 

    const noteState = useSelector((state) => state.noteSlice)

    // const [notes, setNotes] = useState("New Log");
    const [notes, setNotes] = useState(noteState || []);

    const [date, setDate] = useState();

    const dispatch = useDispatch();

    

    // const handleToggle = (e) =>{
    //     dispatch(toggleComplete({id: e.id, complete: !e.complete}))
    // }

    // const handleNoteInput = (e) => {
    //     setNotes(e.target.value);
    // }


    const handleCallendarChange = (newDate) =>{
        setDate(newDate);
    }

    const newLog = () =>{
        // dispatch(addTask({title: "string", id: moment(date).format("LL")}))
        dispatch(addTask({date: moment(date).format("LL"), id: Date.now()}))
        
    }

    const saveLog = (e) =>{
        dispatch(changeTitle({id: e.notesList.id, title: notes}))
    }

    useEffect(() => {
        // setNotes()
        // console.log("useEffect fired");
        // console.log(notes);
        

    }, [noteState]);



    return (

        <Grid container className="layoutGrid" justifyContent="center" alignItems="center">
            {/* <Grid item className="watchItem">
                <Typography variant='h4' align="center">Stop Watch</Typography>
                <Typography align="center" variant="h3">{time}</Typography>
                <Typography align="center" variant="h3">stop watch</Typography>
        
                <div className="buttonGroup" >
                    <Button variant="contained">Start-task</Button>
                    <Button variant="contained">Stop-task</Button>
                    <Button variant="contained">Reset-watch</Button>
                </div>

            </Grid> */}

            <Grid item 
            className="callendarItem">
                <Typography variant="h4" align="center">Date Picker</Typography>                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <CalendarPicker date={date} onChange={handleCallendarChange}/>
                </LocalizationProvider>
                
                {/* <Typography variant="h3" align="center">{moment(date).format("LL")}</Typography> */}
                

                <List>
                    {noteState.map((notesList) => {
                        const handleToggle = () =>{
                            dispatch(toggleComplete({id: notesList.id, complete: !notesList.complete}))
                        }

                        const handleFocus = (e) =>{
                            
                        }

                        const handleTitle = (e) => {
                            
                            // index of element in the array who's id matches that of the mapped element

                            const index = notes.findIndex((tasks) => tasks.id === e.id);


                            // setNotes(notes[index]= {
                            //     title: `${e.target.value}`
                            // } )

                            // notes[index].title = setNotes()
                            // console.log(e.target.value)
                            
                            console.log(index);
                            console.log(e);
                        }

                        return <ListItem alignItems="flex-start" key={notesList.id}>
                            <ListItemAvatar>
                                <Checkbox checked={notesList.complete} onChange={handleToggle}/>
                            </ListItemAvatar>
                            <div className="inputContainer">
                                <TextField
                                    id="notes"
                                    label = {notesList.timeSpent}
                                    // defaultValue = {notesList.title}
                                    defaultValue = {handleFocus}

                                    // multiline value={notesList.title}
                                    // multiline value={notes}
                                    variant="standard"
                                    // onFocus={handleFocus}
                                    onChange={handleTitle(notesList)} 
                                    />
                            </div>
                            <Button variant="contained">Start-task</Button>
                            <Button variant="contained">Stop-task</Button>
                        </ListItem>
                             
                    })}
                </List>
                
                <div className="buttonGroup" >
                    <Button onClick={newLog} size="small" variant="contained">Start-new-log</Button>
                    <Button onClick={saveLog} size="small" variant="contained">Save</Button>
                    <Button size="small" variant="contained">Delete-log</Button>
                    <Button size="small" variant="contained">Resume-old-log</Button>
                </div>
            </Grid>

        </Grid>
    );
};

// export default InputWindow;