
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/DatePicker.module.css";

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the form fields
        if (!title || !startTime || !endTime || !location || !description) {
            alert('Please fill out all the fields.');
            return;
        }

        // Make a POST request to the Django API to create the event
        fetch('https://weshare-api-app.herokuapp.com/event/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                start_time: startTime,
                end_time: endTime,
                location: location,
                description: description
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                // Clear the form fields
                setTitle('');
                setStartTime(null);
                setEndTime(null);
                setLocation('');
                setDescription('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </label>
            <br />
            <label>
                Start Time:
                <DatePicker
                    selected={startTime}
                    onChange={(date) => setStartTime(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                />
            </label>
            <br />
            <label>
                End Time:
                <DatePicker
                    selected={endTime}
                    onChange={(date) => setEndTime(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                />
            </label>
            <br />
            <label>
                Location:
                <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
            </label>
            <br />
            <label>
                Description:
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Create Event</button>
        </form>
    );
};

export default CreateEvent;