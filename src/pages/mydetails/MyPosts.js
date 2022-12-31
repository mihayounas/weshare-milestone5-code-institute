import React, { useEffect, useState } from "react";
import { Col, Row } from 'react-bootstrap';
import Post from "../posts/PostsPage";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../../contexts/CurrentUserContext";



function MyPosts() {
    const currentUser = useCurrentUser();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = `https://weshare-api-app.herokuapp.com/posts`
        const getPosts = async () => {
            const response = await fetch(url)
            const result = await response.json()
            setPosts(result.results)
        }

        getPosts()

    }, [])
    return (

        <div>

            {posts.map(postItem => (
                <Post key={postItem.id} postItem={postItem} />
            ))}
        </div>
    )
}

export default MyPosts;