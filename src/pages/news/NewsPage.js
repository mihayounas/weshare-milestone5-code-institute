import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";

import { fetchMoreData } from "../../utils/utils";

function NewsPage() {
    const { id } = useParams();

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;


    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>News</p>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                Popular news
            </Col>
            <Button>Add News</Button>
        </Row>
    );
}

export default NewsPage;