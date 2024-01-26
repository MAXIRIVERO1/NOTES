import React from 'react';
import { useSelector } from 'react-redux';
import  Notes from "../Notes/Notes.jsx";
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

function Archived() {
    const archived = useSelector((state) => state.archived)
    const access = useSelector((state) => state.access)
    return (
        <div>
            <NavigationBar/>
            { access ? (archived.length === 0 ? <h1>There are no archived notes</h1> : <Notes notes={archived}/>) : <h1>You must log in</h1> }
        </div>
    )
};

export default Archived;