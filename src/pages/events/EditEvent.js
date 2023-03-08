import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function EditEvent() {
    const [event, setEvent] = useState({});
    const [location, setLocation] = useState(event.location || "");
    const [startTime, setStartTime] = useState(event.startTime || new Date());
    const [endTime, setEndTime] = useState(event.endTime || new Date());
    const [description, setDescription] = useState(event.description || "");
    const [title, setTitle] = useState(event.title || "");

    const [errors, setErrors] = useState({});

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const getEvent = async () => {
            try {
                const response = await axiosReq.get(`/event/${id}`);
                setEvent(response.data);
                setTitle(response.data.title || "");
                setLocation(response.data.location || "");
                setStartTime(response.data.startTime || "");
                setEndTime(response.data.endTime || "");
                setDescription(response.data.description || "");
            } catch (error) {
                console.log(error);
            }
        };
        getEvent();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setTitle(name === "title" ? value : title);
        setStartTime(name === "startTime" ? value : startTime);
        setEndTime(name === "endTime" ? value : endTime);
        setLocation(name === "location" ? value : location);
        setDescription(name === "description" ? value : description);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("startTime", startTime);
        formData.append("endTime", endTime);
        formData.append("location", location);
        formData.append("description", description);

        try {
            await axiosReq.patch(`/event/${id}`, formData);
            history.push(`/events`);
        } catch (err) {
            // console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>
                        <div className="text-center">
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="title"
                                    value={title}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Start Time:</Form.Label>
                                <br />
                                <DatePicker
                                    selected={startTime}
                                    onChange={(date) => setStartTime(date)}
                                    showTimeSelect
                                    timeFormat="HH:mm:ss"
                                    timeIntervals={15}
                                    dateFormat="yyyy-MM-dd HH:mm:ss"
                                    timeCaption="time"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>End Time:</Form.Label>
                                <br />
                                <DatePicker
                                    selected={endTime}
                                    onChange={(date) => setEndTime(date)}
                                    showTimeSelect
                                    timeFormat="HH:mm:ss"
                                    timeIntervals={15}
                                    dateFormat="yyyy-MM-dd HH:mm:ss"
                                    timeCaption="time"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="location"
                                    value={location}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="description"
                                    value={description}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors?.content?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                                onClick={() => history.goBack()}
                            >
                                cancel
                            </Button>
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                                type="submit"
                            >
                                save
                            </Button>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Form>
    );
}

export default EditEvent;