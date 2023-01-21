import React, { useState } from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function ShareForm() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [isShared, setIsShared] = useState(false);
    const [error, setError] = useState(null);

    const handleSharing = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axiosReq.post(`/posts/${id}`);
            setIsShared(true);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSharing}>
            <label>
                Title:
                <input type="text" disabled={isShared} />
            </label>
            <br />
            <button type="submit" disabled={isLoading || isShared}>
                {isLoading ? "Sharing..." : "Share"}
            </button>
            {error && <p>{error.message}</p>}
            {isShared && <p>Post shared successfully!</p>}
        </form>
    );
}

export default ShareForm;