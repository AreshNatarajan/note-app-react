import { AddNote } from "./AddNote";
import { Note } from "./Note";

export const NoteList = ({notes, handleAddNote, handleDelete}) => {
    return (  
        <> 
           <div className="note-list">
             {
                notes.map((note) => <Note handleDelete={handleDelete} key={note.id} note={note} />)
             }
             <AddNote handleAddNote={handleAddNote}  />
           </div>
        </>
    );
}