import { useState, useEffect } from "react";
// import AddToCollection from "./addToCollection";
import { addToLibraryHandler } from "./addToLibraryHandler";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";




const Photos = ({ title, setSearchClicked, searchClicked }) => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    

      fetch(`http://localhost:5001/searchImage?title=${title}`)
        .then((res) => res.json())
        .then((data) => {
          setBackendData(data);
          setSearchClicked(false);
        });
     
  }, [searchClicked]);


  return (
    // <div className=" photosContainer flex flex-row flex-wrap justify-center">
    //   {typeof backendData === "undefined" ? (
    //     <p>loading...</p>
    //   ) : (
    //     backendData.map((data, idx) => {
    //       return (
    //         <div key={idx}>
    //           <img src={data.imageUrlSmall} alt={data.description} className="max-w-sm h-auto hover:drop-shadow-2xl" />
    //           <button onClick={() => addToLibraryHandler(data)}>Add</button>
              
    //         </div>
    //       );
          
    //     })


    //   )}
    // </div>

<div className="photosContainer">
    
      <Box sx={{ width: 1, height: 1, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {backendData.map((photo) => (
            <ImageListItem key={photo.photoId}>
              <img
                src={`${photo.imageUrlSmall}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.imageUrlSmall}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={photo.title}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0  p-2 bg-slate-600 flex justify-between items-center opacity-0 hover:opacity-100">
                <p className="text-white font-serif text-sm m-0 ">
                  {photo.creatorsName}
                </p>
                <button
                  onClick={() => addToLibraryHandler(photo)}
                  className="bg-transparent border-none text-white text-base cursor-pointer font-serif"
                >
                  Add
                </button>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>

  );
};

export default Photos;



