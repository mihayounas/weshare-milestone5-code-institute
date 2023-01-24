import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";

function SharesPage() {
    const [shares, setShares] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const currentUser = useCurrentUser();


    useEffect(() => {
        const fetchShares = async () => {
            try {
                const { data } = await axiosReq.get(`/shared/`);
                console.log(data)
                setShares(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchShares();
    }, []);

    return (
        currentUser ? (
            <Container>
                <div>
                    <h1>Shares</h1>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {shares.length > 0 && (
                        <ul>
                            {shares.map((share) => (
                                <li key={share.id}>
                                    <p>Post Title: {share.title}</p>
                                    <p>Shared By: {share.owner}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </Container>) : (
            <div>Sorry no results</div>
        )
    );
}

export default SharesPage;