import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar.jsx'
import Comands from '../Comands/Comands.jsx'
import Notes from '../Notes/Notes.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getNotes } from "../../Redux/Actions/actions.js"


function Home() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getNotes())
    }, [])
    const results = useSelector((state) => state.notes)
    const access = useSelector((state) => state.access)
    return (
        <div>
            <NavigationBar/>
            <Comands/>
            { access ? (results.length === 0 ? <h1>There ara no notes</h1> : <Notes notes={results}/>) : <h1>You must log in</h1>}
        </div>
    )
}

export default Home;