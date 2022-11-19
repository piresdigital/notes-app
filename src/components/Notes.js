import React, { useState, useEffect } from "react";
import './css/Notes.css'
import Note from './Note'

export default function Notes(props){

    // Note is a child component of Notes

    return (
        <div className='Notes_Container'>
            {props.notes.map((note,i)=>
                <Note update={ props.update } delete={props.delete} noteIndex={i} key={ i + '-' + note.title} {...note} />
            )}
        </div>
    )
}
