
import { FaTrash } from "react-icons/fa";

export const Note = ({note, handleDelete}) => {
    const bgColor = note.bgColor
    return ( 
        <> 
           <div style={{  backgroundColor: bgColor }} className="note">
               <span>{note.content}</span>
               <div className="note-footer">
                   <small>{note.date}</small>
                   <FaTrash onClick={()=> handleDelete(note.id)}  className="delete-icon" size="1.1em" />
               </div>
           </div>
        </>
     );
}