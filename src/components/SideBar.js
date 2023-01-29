import React from 'react';
import css from "../styles/Sidebar.module.css";

// SideBar extra menu
function SideBar() {
    return (
        <div className={css.sidebar}>
            <a href="/stories" ><i className="fa fa-rss"></i>Stories</a>
            <a href="/liked"><i className="fas fa-heart"></i>Liked</a>
            <a href="/friends"><i className="fa fa-address-book-o"></i>Friends</a>
            <a href="/events"><i className="fa fa-calendar-o" ></i>Events</a>
            <a href="/sports"><i className="fa-solid fa-medal"></i>Sport</a>
            <a href="#."><i className="fa fa-suitcase"></i>Jobs</a>
            <a href="#."><i className="fa fa-play-circle"></i>Videos</a>
        </div>
    )
}

export default SideBar;