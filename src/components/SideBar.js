import React from 'react';
import css from "../styles/Sidebar.module.css";

function SideBar() {
    return (
        <div className={css.sidebar}>
            <a href="#." target="_blank">My Stories</a>
            <a href="/myposts" >My Posts</a>
            <a href="#." target="_blank">My Friends</a>
        </div>
    )
}

export default SideBar