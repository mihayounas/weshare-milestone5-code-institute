import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";




const Story = (props) => {
    const {
        id,
        owner,
        profile_id,
        location,
        image,
        updated_at,
        setStories,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();


    const handleEdit = () => {
        history.push(`/stories/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/stories/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className={styles.Post} style={{ width: '20rem',  }}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        <MoreDropdown
                            isOwner={is_owner}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/stories/${id}`}>
                <Card.Img src={image} style={{ height: "220px", objectFit: "cover" }} />
            </Link>
            <Card.Body>
                {owner && <Card.Title className="text-center">{owner}'s Story</Card.Title>}
                {location && <Card.Text>Location:{location}</Card.Text>}

            </Card.Body>
        </Card>
    );
}


export default Story;