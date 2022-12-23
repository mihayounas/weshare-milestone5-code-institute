import React from "react";


const News = ({ newsItem }) => {



  return (
    
   <div>
    <h2>{newsItem.title}</h2>
    <p>{newsItem.description}</p>
   </div>
  );
};

export default News;