import React from 'react'
import { Link } from 'react-router-dom'
import { filterByTag, filterStatus } from '../../Redux/Actions/actions';
import { useDispatch } from 'react-redux';
import style from "./comands.module.css"

function Comands() {
    const dispatch = useDispatch();
    const handleTag = (e) => {
        const tag = e.target.value;
        dispatch(filterByTag(tag))
    };
    const handleStatus = (e) => {
        const status = e.target.value;
        dispatch(filterStatus(status));
    };
    return (
        <div className={style.div}>
            <Link to={"/create"}><button className={style.button}>Create</button></Link>
            <select name="filterTag" id="filterTag" onChange={handleTag} className={style.button}>
                <option value="all tags">All tags</option>
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
            </select>
            <select name="filterStatus" id="filterStatus" onChange={handleStatus} className={style.button}>
                <option value="all">All status</option>
                <option value="active">active</option>
                <option value="inactive">inactive</option>
            </select>
        </div>
    )
};

export default Comands;