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
    <div className="Collections-Container">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 w-full md:w-11/12  lg:w-11/12 m-auto">
        {photos.map((photo) => (
          <div key={photo.photoId} className="relative">
            <img
              src={`${photo.imageUrlSmall}?w=248&fit=crop&auto=format`}
              srcSet={`${photo.imageUrlSmall}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={photo.title}
              loading="lazy"
              className="mb-4"
            />
            <div className="absolute bottom-0 left-0 right-0  p-2 bg-slate-600 flex justify-between items-center opacity-0 hover:opacity-100">
              <p className="text-white font-serif text-sm m-0 ">{photo.creatorsName}</p>
              <button
                onClick={() => handleDelete(photo.photoId)}
                className="bg-transparent border-none text-white text-base cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollections;
