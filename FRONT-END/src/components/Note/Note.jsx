import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteArch, addArch } from "../../Redux/Actions/actions.js"
import { useDispatch, useSelector } from 'react-redux'
import style from "./note.module.css"

function Note(note) {
    const [ isArch, setIsArch ] = useState(false)
    const archiveds = useSelector((state) => state.archived)
    console.log("estos son los archivados: ", archiveds)
    const dispatch = useDispatch()
    useEffect(()=>{
        const isArchived = archiveds.some((obj)=> obj.id === note.id)
        setIsArch(isArchived)
    }, [archiveds])
    const handleArch = (id) => {
        if(isArch){
            setIsArch(false)
            dispatch(deleteArch(id))
        }else{
            setIsArch(true)
            dispatch(addArch(id))
        }
    };
    const { title, id } = note
    return (
        <div>
            <div className={style.div}>
                <Link to={`/detail/${id}`} className={style.link}><h3 className={style.h3}>{title}</h3></Link>
                { isArch ? <button onClick={()=>{handleArch(id)}} className={style.button}>🔒</button> :
                <button onClick={()=>{handleArch(id)}}className={style.button}>🔓</button>}
            </div>
        </div>
    )
};

export default Note;