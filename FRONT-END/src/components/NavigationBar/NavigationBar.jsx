import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from "../../Redux/Actions/actions.js";
import style from "./navigationBar.module.css"


function NavigationBar() {
    const { pathname } = useLocation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const access = useSelector((state) => state.access)
    const handleLogOut = () => {
        dispatch(logOut())
        navigate("/")
    }
    return (
        <div className={style.div}>
            <h2 className={style.h2}>MY NOTES</h2>
            { pathname !== "/home" ? 
            <Link to={"/home"}><button className={style.button}>Home</button></Link> : 
            null }
            { pathname !== "/archived" ? 
            <Link to={"/archived"}><button className={style.button}>Archived</button></Link> : 
            null }
            { !access ?
            <Link to={"/"}><button className={style.button}>Log In</button></Link> :
            <button onClick={handleLogOut} className={style.button}>Log Out</button> }
        </div>
    )
};

export default NavigationBar;