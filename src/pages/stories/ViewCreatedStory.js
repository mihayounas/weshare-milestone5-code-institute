import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import StoriesPage from "./StoriesPage";

function ViewCreatedStory() {
    const { id } = useParams();
    const [stories, setStories] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: stories }] = await Promise.all([
                    axiosReq.get(`/stories/${id}`),
                ]);
                setStories({ results: [stories] });
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Row className="h-100">
            <StoriesPage {...stories.results[0]} setStories={setStories} storiesPage />
        </Row>
    );
}

export default ViewCreatedStory;