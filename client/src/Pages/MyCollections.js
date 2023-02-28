import React, { useState, useEffect } from "react";
import { deleteFromLibrary } from "../Components/Collections/deleteFromLibrary";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

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
      
      <Box sx={{ width: 1, height: 1, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {photos.map((photo) => (
            <ImageListItem key={photo.photoId}>
              <img
                src={`${photo.imageUrlSmall}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.imageUrlSmall}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={photo.title}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0  p-2 bg-slate-600 flex justify-between items-center opacity-0 hover:opacity-100"> 
              <p className="text-white font-serif text-sm m-0 ">{photo.creatorsName}</p>
              <button onClick={() => handleDelete(photo.photoId)} className="bg-transparent border-none text-white text-base cursor-pointer"  >Remove</button>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default MyCollections;
