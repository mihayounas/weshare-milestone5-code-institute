import React from 'react';
import styles from "../styles/NotFound.module.css";
import NoResults from '../assets/no_result.webp';
import Asset from "../components/Asset";

// Not Found Page
const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <Asset src={NoResults} message="Sorry, the page you're looking for doesn't exist" />
        </div>
    )
}

export default NotFound;