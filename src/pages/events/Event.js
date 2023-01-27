import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";




const Event = (props) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const {
        id,
        owner,
        title,
        start_time,
        end_time,
        location,
        description,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/event/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/event/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
        setFormSubmitted(true);
    };

    useEffect(() => {
        if (formSubmitted) {
            history.push('/events');
            window.location.reload();
        }
    }, [formSubmitted]);

    return (

        <Card className={styles.Post}>
            <div>
                <i className="fa-solid fa-trash" onClick={handleDelete}></i>
                <i className="fa-solid fa-pen-to-square" onClick={handleEdit}></i>
            </div>
            <Card.Body>
                {is_owner && <Card.Title className="text-center">{is_owner}</Card.Title>}
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