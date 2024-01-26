import React from 'react';
import Note from '../Note/Note.jsx';

function Notes({notes}) {
    console.log(notes)
    
  return (
    <div>
        {notes.map((note, index) =>{
            const { title, id } = note
            return (
                <Note title={title} key={index} id={id}/>
            )
        })}
    </div>
  )
}

export default Notes