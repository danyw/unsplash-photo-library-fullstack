import { useState, useEffect } from "react";
import { addToLibraryHandler } from "./addToLibraryHandler";

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
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 w-full md:w-11/12  lg:w-11/12 m-auto">
      {backendData.map((photo) => (
        <div key={photo.photoId} className="relative">
          <img src={`${photo.imageUrlSmall}?w=248&fit=crop&auto=format`} alt={photo.title} loading="lazy" className="mb-4" />
          <div className="absolute bottom-0 left-0 right-0  p-2 bg-gray-600 flex justify-between items-center opacity-0 hover:opacity-80 transition-opacity duration-200">
            <p className="text-white font-serif text-sm m-0 ">{photo.creatorsName}</p>
            <button
              onClick={() => addToLibraryHandler(photo)}
              className="bg-transparent border-none text-white text-base cursor-pointer font-serif"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
