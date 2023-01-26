
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import "react-datepicker/dist/react-datepicker.css";
import {
    Form,
    Row,
    Col,
    Container,
} from "react-bootstrap";

import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";


const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate the form fields
        if (!title || !startTime || !endTime || !location || !description) {
            alert('Please fill out all the fields.');
            return;
        }
    
        try {
            // Make a POST request to the Django API to create the event
            const response = await axiosReq.post('/event/', {
                owner: is_owner,
                title: title,
                start_time: startTime,
                end_time: endTime,
                location: location,
                description: description
            });
            console.log('Success:', response.data);
            // Clear the form fields
            setTitle('');
            setStartTime(null);
            setEndTime(null);
            setLocation('');
            setDescription('');
        } catch (error) {
            console.error('Error:', error);
        }
    };
  

    return (<Form onSubmit={handleSubmit}>
        <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                <Container
                    className={"justify-content-center"}
                >
                    <label>
                        Name:
                        <input
                            type="text"
                            value={currentUser?.username}
                            readOnly
                            className="form-control"
                        />
                    </label>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Start Time:
                        <DatePicker
                            selected={startTime}
                            onChange={(date) => setStartTime(date)}
                            showTimeSelect
                            timeFormat="HH:mm:ss"
                            timeIntervals={15}
                            dateFormat="yyyy-mm-dd HH:mm:ss "
                            timeCaption="time"
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        End Time:
                        <DatePicker
                            selected={endTime}
                            onChange={(date) => setEndTime(date)}
                            showTimeSelect
                            timeFormat="HH:mm:ss"
                            timeIntervals={15}
                            dateFormat="yyyy-mm-dd HH:mm:ss"
                            timeCaption="time"
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Location:
                        <input
                            type="text"
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">Create Event</button>
                </Container>
            </Col>
        </Row>
    </Form>

    );
};

export default CreateEvent;