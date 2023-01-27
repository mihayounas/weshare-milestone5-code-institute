import React, { useEffect, useState } from "react";
import News from "./News";
import { Col, Row } from 'react-bootstrap';

function NewsJobsPage() {
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

        <Row>
            {news.map((newsItem,index) => (
                <Col key={index} xs={6} md={4}>
                    <News newsItem={newsItem} />
                </Col>
            ))}
        </Row>


    );
}

export default NewsJobsPage;