import { useState, useEffect } from "react";

const Photos = ({ title, setSearchClicked, searchClicked }) => {
  const [backendData, setBackendData] = useState([]);
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
    // }
  }, [searchClicked]);

  return (
    <div className=" photosContainer flex flex-row flex-wrap justify-center">
      {typeof backendData === "undefined" ? (
        <p>loading...</p>
      ) : (
        backendData.map((data, idx) => {
          return (
            <div key={idx}>
              <img src={data.imageUrl} alt={data.description} className="max-w-sm h-auto" />
            </div>
          );
          //   console.log(name);
        })
      )}
    </div>
  );
};

export default Photos;
