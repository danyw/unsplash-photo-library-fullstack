import React, { useState, useEffect } from "react";
import { deleteFromLibrary } from "../Components/Collections/deleteFromLibrary";

const MyCollections = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/userCollections`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  const handleDelete = (photoId) => {
    deleteFromLibrary(photoId, setPhotos);
  };

  return (
    <div>
      <h2>My Collections</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.photoId}>
            <img src={photo.imageUrlSmall} alt={photo.title} />
            <button onClick={() => handleDelete(photo.photoId)}>X</button>
            <p>{photo.creatorsName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCollections;
