import React, { useState, useRef, useEffect } from "react";
import './css/Note.css';

export default function Note(props){
    useEffect(() => {
        if('ontouchstart' in document){
            noteRef.current.classList.add('Mobile')
        }

    }, []);

    const noteRef = useRef();
    
    // Note is a component denoting a single note.. and it is a child component of Notes component

    // title and description of the note respectively
    const [noteTitle, setNoteTitle] = useState(props.title)
    const [noteDescription, setNoteDescription] = useState(props.description)

    // isHidden is a state denoting visibility of pop-up modal
    const [isHidden, setIsHidden] = useState(true)

    // title and description which is shown inside the modal
    const [modalTitle, setModalTitle] = useState(props.title)
    const [modalDescription, setModalDescription] = useState(props.description)

    // Function to ovverride the click effect inside the modal
    function insideModalOnClick(e) {
        e.stopPropagation()
    }

    return(
        <div ref={ noteRef } className='Note_Modal' >
            <div className='Note'> 
                <div className='Title'>{noteTitle}</div>
                <div className='Description'>{noteDescription}</div>
                <div className='DeleteSection'>
                    <img src={process.env.PUBLIC_URL+'/edit.png'}  alt='edit' onClick={()=>setIsHidden(false)} />
                    <img src={process.env.PUBLIC_URL+'/delete.png'}  alt='delete' onClick={()=> props.delete(props.noteIndex) } />
                </div>
            </div>

            {/* Modal is shown after clicking on a note */}
            {/* Show modal only if isHidden is set to false */}
            {!isHidden && (
                <div className='Modal' onClick={()=>setIsHidden(true)}>
                    <div className='Modal_Content' onClick={insideModalOnClick}>
                        <div className='Modal_Form'>
                            <h2>Updating Note</h2>

                            <label htmlFor='title'>Update your title.</label>
                            <input className='Modal_Title' name='title' type='text' spellCheck='false' placeholder='' required value={modalTitle} onChange={e => setModalTitle(e.target.value)}/>
                    
                            <label htmlFor='description'>Update your note content.</label>
                            <textarea name='description' rows='6' className='Modal_Description' spellCheck='false' placeholder='Take a note...' defaultValue={noteDescription} onChange={e => setModalDescription(e.target.value) }/>
                        </div>

                        <div className='Modal_Close'>
                            <button className='Modal_Button Modal_Button--Cancel' onClick={()=> setIsHidden(true)}>Close</button>
                            <button className='Modal_Button Modal_Button--Update'  onClick={()=> { props.update(props.noteIndex, modalTitle, modalDescription); setIsHidden(true)} }>Update</button>
                            <button className='Modal_Button Modal_Button--Delete'  onClick={()=> { props.delete(props.noteIndex); setIsHidden(true)} }>Delete</button> 
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
