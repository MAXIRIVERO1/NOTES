import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import NavigationBar from '../NavigationBar/NavigationBar'
import style from "./formPut.module.css"

function FormPut() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [ note, setNote ] = useState({})
    const [ formData, setFormData ] = useState({
        title: note.title,
        content: note.content,
        tag: note.tag,
        active: note.active
    })

    useEffect(()=>{
        const fetching = async()=>{
            try {
                const { data } = await axios.get(`https://notes-xm7v.onrender.com/notes/detail/${id}`)
                setNote(data)
            } catch (error) {
                console.error("error fetching note to edit: ", error)
            }
        }
    fetching()
    }, [])
    if(!note){ return <div>Error finding note to edit</div> }

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await axios.put(`https://notes-xm7v.onrender.com/notes/put/${id}`, formData)
            Swal.fire({
                title: "Updated",
                text: "Note updated successfully",
                icon: "info",
                confirmButtonText: "OK"
            })
            setNote({})
            navigate(`/detail/${id}`)
        } catch (error) {
            console.error("error updating note: ", error)
        }
    }

    return (
        <div>
            <NavigationBar/>
            <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form}>
                <input type="text" id='title' name='title' value={formData.title} onChange={handleChange} placeholder={note.title} className={style.input}/><br />
                <textarea type="text" id='content' name='content' value={formData.content} onChange={handleChange} placeholder={note.content} className={style.input}/><br />
                <select id="tag" name="tag" value={formData.tag} onChange={handleChange} className={style.select}>
                    <option value="others">TAG</option>
                    <option value="work">work</option>
                    <option value="project">project</option>
                    <option value="low priority">low priority</option>
                    <option value="medium priority">medium priority</option>
                    <option value="high priority">high priority</option>
                    <option value="meetings">meetings</option>
                    <option value="idea">ideas</option>
                    <option value="to-do">to-do</option>
                    <option value="travel">travel</option>
                    <option value="others">others</option>
                </select><br />
                <select id="active" name="active" value={formData.active} onChange={handleChange} className={style.select}>
                    <option value={true}>active</option>
                    <option value={false}>inactive</option>
                </select><br />
                <button type='submit' className={style.button}>Submit</button>
            </form>
            </div>
        </div>
    )
};

export default FormPut;