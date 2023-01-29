import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no_result.webp";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Story from "../stories/Story";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function StoriesPage({ message, filter }) {
    const [stories, setStories] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();

    const [query] = useState("");

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const { data } = await axiosReq.get(`/stories/`);
                if (filter) {
                    const filteredStories = data.results.filter((story) => currentUser?.username === story.owner)
                    setStories(filteredStories);
                } else {
                    setStories(data.results)
                }
                setHasLoaded(true);
            } catch (err) {
                // console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchStories();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname, currentUser?.username]);

    return (
        <Row>

            {hasLoaded ? (
                <>
                    {stories.length ? (
                        <InfiniteScroll style={{ display: 'flex', flexWrap: "wrap" }}
                            children={stories.map((story) => (
                                <Story key={story.id} {...story} setStories={setStories} stories={stories} />
                            ))}
                            dataLength={stories.length}
                            loader={<Asset spinner />}
                            hasMore={!!stories.next}
                            next={() => fetchMoreData(stories, setStories)}
                        />
                    ) : (
                        <Container className={appStyles.Content}>
                            <Asset src={NoResults} message={message} />
                        </Container>
                    )}
                </>
            ) : (
                <Container className={appStyles.Content}>
                    <Asset spinner />
                </Container>
            )}

            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">

            </Col>
        </Row>
    );
}

export default StoriesPage;