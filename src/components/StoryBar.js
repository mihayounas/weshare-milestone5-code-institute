import React, { useEffect, useState } from "react";
import ViewCreatedStory from "../pages/stories/ViewCreatedStory";
import { useCurrentUser } from "../contexts/CurrentUserContext";


function StoryBar() {
    const currentUser = useCurrentUser();
    const [stories, setStories] = useState({ results: [] });


    return (
        <div>
            <ViewCreatedStory />
        </div>
    );
}

export default StoryBar;