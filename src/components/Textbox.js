import React, { useState } from 'react';
import './css/Textbox.css'

export default function Textbox(props){

    // State of the text inside the title and description section of the textbox
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    return(
        <div className='Textbox_Container'>
            <div className='Textbox_Form'>
                <label className='Label' htmlFor='title'>Title</label>
                <input className='Title' name='title' type='text' spellCheck='false' placeholder='' required value={title} onChange={e => setTitle(e.target.value)}/>
                <label className='Label' htmlFor='title'>Description</label>
                <textarea name='description' className='Description' type='text' spellCheck='false' required rows='3' placeholder='' value={description} onChange={e => setDescription(e.target.value)}/>
                {title && description ? (
                    <div className='Submit' onClick={ () => {
                        props.add(title, description)
                        setTitle('')
                        setDescription('')
                    } }>Add Note</div>
                ) : // Disable the 'Add Note' button when title and description are empty
                (
                    <div className=' Submit Submit-Null'>Add Note</div>
                )}
            </div>
        </div>
    )
}