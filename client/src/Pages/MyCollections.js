import React, { useState, useEffect } from "react";

const MyCollections = () => {
  const [photos, setPhotos] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5001/userCollections");
      const data = await response.json();
      setPhotos(data);
    }
    fetchData();
  }, []);

  
  return (
    <div>
      <h2>My Collections</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo._id}>
            <img src={photo.imageUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCollections;