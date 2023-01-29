
import React, { useEffect, useState } from "react";
import News from "./News";
import styles from "../../styles/News.module.css"

function NewsSportPage() {
    const [news, setNews] = useState([])

    useEffect(() => {
        const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&country=gb&language=en&category=sports`
        const getNews = async () => {
            const response = await fetch(url)
            const result = await response.json()
            setNews(result.results)
        }
        getNews()

    }, [])

    return (

        <div className={styles.NewsContainer}>
            {news.map((newsItem, id) => (
                <News newsItem={newsItem} key={id} />
            ))}
        </div>


    );
}

export default NewsSportPage;