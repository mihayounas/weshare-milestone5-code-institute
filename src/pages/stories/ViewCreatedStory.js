import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";



import StoriesPage from "./StoriesPage";

function ViewCreatedStory() {
    const { id } = useParams();
    const [stories, setStories] = useState({ results: [] });

    return (
        <Row className="h-100">
            <StoriesPage {...stories.results[0]} setStories={setStories} filter={false} />
        </Row>
    );
}

export default ViewCreatedStory;