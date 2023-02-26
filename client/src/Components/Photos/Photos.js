import { useState, useEffect } from "react";
// import AddToCollection from "./addToCollection";
import { addToLibraryHandler } from "./addToLibraryHandler";



const Photos = ({ title, setSearchClicked, searchClicked }) => {
  const [backendData, setBackendData] = useState([]);
  // const [selectedPhotos, setSelectedPhotos] = useState([]);
  // console.log(props.title, props.setSearchClicked, props.searchClicked);

  // console.log(props);
  useEffect(() => {
    
    // if (props && props.searchClicked) {
      // const title = props.title;
      fetch(`http://localhost:5001/searchImage?title=${title}`)
        .then((res) => res.json())
        .then((data) => {
          setBackendData(data);
          setSearchClicked(false);
        });
     
  }, [searchClicked]);

  // const addToLibraryHandler = (data) => {
  //   console.log(`This is the data: ${JSON.stringify(data)}`);


  //   };

  //   fetch("http://localhost:5001/addPhoto", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(photoData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // };


  return (
    <div className=" photosContainer flex flex-row flex-wrap justify-center">
      {typeof backendData === "undefined" ? (
        <p>loading...</p>
      ) : (
        backendData.map((data, idx) => {
          return (
            <div key={idx}>
              <img src={data.imageUrlSmall} alt={data.description} className="max-w-sm h-auto hover:drop-shadow-2xl" />
              <button onClick={() => addToLibraryHandler(data)}>+</button>
              
            </div>
          );
          //   console.log(name);
        })




        
      )}
    </div>
  );
};

export default Photos;



