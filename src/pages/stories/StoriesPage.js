import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no_result.webp";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import NewPopularStories from "../../pages/stories/NewPopularStories";
import Story from "../stories/Story";

function StoriesPage({ message, filter = "" }) {
    const [stories, setStories] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const { data } = await axiosReq.get(`/stories/?${filter}search=${query}`);
                setStories(data.results);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchStories();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" >

                <i className={`fas fa-search ${styles.SearchIcon}`} />
                <Form
                    className={styles.SearchBar}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <Form.Control
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        className="mr-sm-2"
                        placeholder="Search posts"
                    />
                </Form>

                {hasLoaded ? (
                    <>
                        {stories.length ? (
                            <InfiniteScroll style={{ display: 'flex', overflowY: 'auto', marginTop: '30px', gap: '20px', maxWidth: '100vw', marginLeft: 'auto', marginRight: 'auto' }}
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
            </Col>
            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">

            </Col>
        </Row>
    );
}

export default StoriesPage;