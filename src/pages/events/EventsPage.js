import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CreateEvent from "./CreateEvent";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no_result.webp";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Event from "./Event";



function EventsPage({ message, filter = "" }) {
    const [events, setEvents] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [showCreateEvent, setShowCreateEvent] = useState(false);
    const currentUser = useCurrentUser();
    const [query] = useState("");

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const { data } = await axiosReq.get(`/event/?${filter}search=${query}`);
                setEvents(data);
                setHasLoaded(true);
            } catch (err) {
                // console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchEvents();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname, currentUser]);

    return (
        <Row className="h-100">
            {hasLoaded ? (
                <>
                    {events.results.length ? (
                        <InfiniteScroll
                            children={events.results.map((event) => (
                                <Event key={event.id} {...event} setEvents={setEvents} currentUser={currentUser} />
                            ))}
                            dataLength={events.results.length}
                            loader={<Asset spinner />}
                            hasMore={!!events.next}
                            next={() => fetchMoreData(events, setEvents)}
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

            <>
                <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} onClick={() => setShowCreateEvent(true)}>Create New Event</Button>
                {showCreateEvent && <CreateEvent onClose={() => setShowCreateEvent(false)} />}
            </>

        </Row>
    );
}

export default EventsPage;