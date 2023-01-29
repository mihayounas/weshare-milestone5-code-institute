import React from 'react';
import css from "../styles/Sidebar.module.css";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUserContext";

function SideBar() {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    return (
        <div className={css.sidebar}>
            {currentUser && (
                <>
                    <a href="/stories"><i className="fa fa-rss"></i> Stories</a>
                    <a href="/liked"><i className="fas fa-heart"></i> Liked</a>
                    <a href="/friends"><i className="fa fa-address-book"></i> Friends</a>
                    <a href="/events"><i className="fa fa-calendar"></i> Events</a>
                    <a href="/sports"><i className="fa fa-medal"></i> Sport</a>
                    <a href="#."><i className="fa fa-suitcase"></i> Jobs</a>
                    <a href="#."><i className="fa fa-video"></i> Videos</a>
                </>
            )}
        </div>
    );
}

export default SideBar;



