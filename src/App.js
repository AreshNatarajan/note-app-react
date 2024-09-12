import { useState } from "react";
import { NoteList } from "./components/NoteList";
import { nanoid } from 'nanoid'
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { useEffect } from "react";
import { useRef } from "react";
// import { json } from "react-router-dom";

const App = () => {
  // const defaultValue  = {
  //    id : nanoid(),
  //    content : "work",
  //    date : "11/09/2024",
  //    bgColor : `rbg(${200}, ${150}, ${130})`
  // }
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('')
  
  // add localstorage
  useEffect(()=>{
    const overAlllocalStorageData = JSON.parse(window.localStorage.getItem('mynotedata'));
    console.log(overAlllocalStorageData, 'from local');
    if(overAlllocalStorageData){
       setNotes(overAlllocalStorageData)
    }
  },[]);
 
 
  useEffect(()=>{
    localStorage.setItem('mynotedata', JSON.stringify(notes))
  },[notes]);



  const addNote = (text) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    const date = new Date();
    const newNote = {
      id: nanoid(),
      content: text,
      date: date.toLocaleDateString(),
      bgColor : color
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }
 // dark mode light mode using useRef();
  const toggleRef  = useRef()
  const deleteNote = (id) =>{
    const newNotes =  notes.filter(note => note.id !== id )
    setNotes(newNotes)
  }
  return (
    <>
    
    <div className="container" ref={toggleRef}>
        <Header handleToggle={toggleRef} />
        <Search handleSearch ={setSearchText} />
        <NoteList  notes={notes.filter((note => note.content.toLowerCase().includes(searchText)))} handleAddNote={addNote} handleDelete ={deleteNote} />
      </div>
   
     
    </>
  );
}

export default App


