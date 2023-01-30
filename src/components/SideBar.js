import React from 'react';
import css from "../styles/Sidebar.module.css";
import {
    useCurrentUser,
} from "../contexts/CurrentUserContext";

function SideBar() {
    const currentUser = useCurrentUser();

    return (
        <div className={css.sidebar}>
            {currentUser && (
                <>
                    <a href="/stories"><i className="fa fa-rss"></i>Stories</a>
                    <a href="/feed"><i className="fas fa-heart"></i>Feed</a>
                    <a href="/friends"><i className="fa fa-address-book"></i>Friends</a>
                    <a href="/events"><i className="fa fa-calendar"></i>Events</a>
                    <a href="/sports"><i className="fa fa-medal"></i>Sport</a>

                </>
            )}
        </div>
    );
}

export default SideBar;
