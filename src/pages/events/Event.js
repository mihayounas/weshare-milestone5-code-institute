import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";




const Event = (props) => {
    const {
        id,
        owner,
        title,
        start_time,
        end_time,
        location,
        description,
        setEvents,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/events/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/events/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <div><i className="fa-solid fa-trash" onClick={handleDelete}></i>
                <i className="fa-solid fa-pen-to-square" onClick={handleEdit}></i>
            </div>
            <Card.Body>
                {title && <Card.Title className="text-center">Event : {title}</Card.Title>}
                {description && <Card.Text>{description}</Card.Text>}
                {start_time && <Card.Text>Starting: {start_time}</Card.Text>}
                {end_time && <Card.Text>Ending: {end_time}</Card.Text>}
                {location && <Card.Text>Location: {location}</Card.Text>}

            </Card.Body>
        </Card >
    );
};

export default Event;