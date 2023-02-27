export const deleteFromLibrary = (photoId, setPhotos) => {
  fetch(`http://localhost:5001/deletePhoto/${photoId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Photo deleted");
        setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.photoId !== photoId));
      } else {
        console.log("Photo not deleted");
      }
    })
    .catch((error) => {
      console.error("Error deleting photo: ", error);
    });
};
