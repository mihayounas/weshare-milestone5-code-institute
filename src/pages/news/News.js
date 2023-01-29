import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


const News = ({ newsItem }) => {
  const [open, setOpen] = useState(false);
  return (
   
            <Card style={{ width: '18rem', border: '2px solid #e7e7e7', borderRadius: '4px', padding: '.5rem' }}>
              <Card.Img variant="top" src={newsItem.image_url} />
              <Card.Body>
                <Card.Title>{newsItem.title}</Card.Title>
                <>
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    Read More
                  </Button>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      {newsItem.description}
                    </div>
                  </Collapse>
                </>
              </Card.Body>
            </Card>
     
  );
};

export default News;