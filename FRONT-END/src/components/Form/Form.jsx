import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';
import NavigationBar from '../NavigationBar/NavigationBar';
import { useSelector } from 'react-redux';
import style from "./form.module.css"

function Form() {
    const navigate = useNavigate()
    const access = useSelector((state) => state.access)
    const [ formData, setFormData ] = useState({
        title : "",
        content: "",
        tag: "others",
        active: true
    })

  const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name] : e.target.value
        });
    };

  const handleSubmit = async(e) => {
        e.preventDefault();
        try {
        const { data } = await axios.post(`http://localhost:3001/notes/create`, formData);
        const { id } = data;
        Swal.fire({
            title: "Perfect",
            text: "Note created successfuly",
            icon: "info",
            confirmButtonText: "OK"
        });
        setFormData({
            title: "",
            content: "",
            tag: "others",
            active: true
        });
        navigate(`/detail/${id}`)
        } catch (error) {
        console.error("error creating note: ",error)
        }
    }
    return (
        <div>
            <NavigationBar/>
            { access ? 
            <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form}>
            <input type="text" id='title' name='title' value={formData.title} onChange={handleChange} placeholder='title' className={style.input} required/><br />
            <textarea type="text" id='content' name='content' value={formData.content} onChange={handleChange} placeholder='content' className={style.input} required/><br />
            <select id="tag" name="tag" value={formData.tag} onChange={handleChange} className={style.select} required>
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
            </select ><br />
            <select id="active" name="active" value={formData.active} onChange={handleChange} className={style.select}>
                <option value={true}>active</option>
                <option value={false}>inactive</option>
            </select><br />
            <button type='submit' className={style.button}>Submit</button>
        </form> 
        </div> :
        <h1>You must log in</h1>
            }
        </div>
    )
};

export default Form;