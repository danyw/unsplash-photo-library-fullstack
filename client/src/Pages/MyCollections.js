import React, { useState, useEffect } from "react";

const MyCollections = () => {
 const [photos, setPhotos] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5001/userCollections`)
    .then((res) => res.json())
    .then((data) => {
      setPhotos(data);
      console.log(photos);
    });
    
  }, []);

  
  return (
    <div>
      <h2>My Collections</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo._id}>
            <img src={photo.imageUrlSmall} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCollections;