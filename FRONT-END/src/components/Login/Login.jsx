import React, { useState } from 'react';
import { getAccess } from "../../Redux/Actions/actions.js";
import { useDispatch } from 'react-redux';
import { objUser } from "../../credentials.js";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import style from "./login.module.css"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ user, setUser ] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
        console.log("user: ",user)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user: ",user)
        user.email === objUser.email && user.password === objUser.password ? 
        dispatch(getAccess(true)) :
        dispatch(getAccess(false));
        setUser({...user, password: ""})
        user.email === objUser.email && user.password === objUser.password ?
        navigate("/home") :
        Swal.fire({
            title: "Error",
            text: "Incorrect password, please try again",
            icon: "error",
            confirmButtonText: "OK"
        })
        
    }
    const handleInfo = () => {
        Swal.fire({
            title: "Access",
            text: "email: accessEmail@gmail.com, password: 1234access",
            icon: "info",
            confirmButtonText: "OK"
        })
    }
    return (
        <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="">Email :</label><br />
                <input type="text" value={user.email} name="email" onChange={handleChange} required/><br />
                <label htmlFor="">Password :</label><br />
                <input type="password" value={user.password} name="password" onChange={handleChange} required/><br />
                <button type='submit' className={style.button}>ENTER</button><br />
                <button type="button" className={style.button} onClick={handleInfo}>Access?</button>
            </form>
        </div>
    )
}

export default Login