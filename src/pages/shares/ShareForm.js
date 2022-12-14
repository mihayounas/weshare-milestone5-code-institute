import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "../posts/Post";

function ShareForm() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: post }] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                ]);
                setPost({ results: [post] });
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);
    return (
        <form>
            <label>
                Title:
                <input type="text" />
            </label>
            <br />
            <Post />
        </form>
    );
}

export default ShareForm