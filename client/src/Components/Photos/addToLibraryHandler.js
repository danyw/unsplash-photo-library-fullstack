export const addToLibraryHandler = (photoData) => {
  fetch("http://localhost:5001/addPhoto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(photoData),
    
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

    
};
