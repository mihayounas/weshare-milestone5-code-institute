import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import News from "./News";

function NewsPage() {
    const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&country=gb&language=en&category=health`

    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {

            const response = await fetch(url)
            const result = await response.json()

            setNews(result.results)


        }
        getNews()

    }, [])

    return (

        <div>
            {console.log(news)}
            {news.map(newsItem => <News newsItem={newsItem} />)}
        </div>
    );
}

export default NewsPage;