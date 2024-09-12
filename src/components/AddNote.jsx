import { useState } from "react";

export const AddNote = ( {handleAddNote}) => {
    const [noteText, setNoteText] = useState("");
    const charLimit = 200;
    const handleChange = (event) =>{
      if(charLimit - event.target.value.length >= 0){
        setNoteText(event.target.value)  
      }       
    }
    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText("")
        }
    }
    return (  
        <>
          <div className="note new ">
            <textarea  onChange={handleChange} value={noteText} placeholder="type and save your note"  cols="10" rows="10"></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} remaing</small>
                <button onClick={handleSaveClick} className="save">Save</button>
            </div>
          </div>
        </>
    );
}