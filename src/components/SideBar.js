import React from 'react';
import css from "../styles/Sidebar.module.css";


function SideBar() {
    return (
        <div className={css.sidebar}>
            <a href="/feed" ><i className="fa fa-rss"></i>Feed</a>
            <a href="/liked"><i className="fas fa-heart"></i>Liked</a>
            <a href="/friends"><i className="fa fa-address-book-o"></i>Friends</a>
            <a href="/events"><i className="fa fa-calendar-o" ></i>Events</a>
            <a href="#." target="_blank"><i className="fa fa-suitcase"></i>Jobs</a>
            <a href="#." target="_blank"><i className="fa fa-play-circle"></i>Videos</a>
        </div>
    )
}

export default SideBar;