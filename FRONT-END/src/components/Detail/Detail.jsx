import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, clearDetail, deleteNote } from "../../Redux/Actions/actions.js"
import { useParams, Link, useNavigate } from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar.jsx'
import axios from 'axios'
import Swal from 'sweetalert2'
import style from "./detail.module.css"


function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getDetail(id))
        return ()=>{
            dispatch(clearDetail())
        }
    }, [])
    const note = useSelector((state) => state.detail)
    const handleDelete = async(id) => {
        try {
            await axios.delete(`https://notes-xm7v.onrender.com/notes/delete/${id}`)
            dispatch(deleteNote(id))
            Swal.fire({
                title: "Deleted",
                text: "Note deleted succesfully",
                icon: "info",
                confirmButtonText: "OK"
            })
            navigate("/home")
        } catch (error) {
            console.error("note not deleted: ",error)
        }
    }
    const { title, content, tag, active } = note
    return (
        <div>
            <NavigationBar/>
            <div className={style.div}>
            <h1>{title}</h1>
            <p>{content}</p>
            <h3>Tag : {tag}</h3>
            <p>Status : {active ? "active" : "inactive"}</p>
            <button onClick={()=>{handleDelete(id)}} className={style.button}>Delete</button>
            <Link to={`/edit/${id}`}><button className={style.button}>Edit</button></Link>
            </div>
        </div>
    )
};

export default Detail;