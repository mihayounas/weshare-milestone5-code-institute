import React from "react";
import ViewCreatedStory from "../pages/stories/ViewCreatedStory";
import { useCurrentUser } from "../contexts/CurrentUserContext";


function StoryBar() {
    const currentUser = useCurrentUser();

    return (
        currentUser ? (
            <div>
                <ViewCreatedStory filter={true} />
            </div>
        ) : (
            <h2>You need to be logged in to see recent stories.</h2>
        )
    );
}

export default StoryBar;