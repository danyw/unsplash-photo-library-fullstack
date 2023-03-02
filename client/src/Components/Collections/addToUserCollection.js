const addToUserCollection = async (collectionName, photoId) => {
  const photoData = { photoId, userCollection: collectionName };
  try {
    const response = await fetch("http://localhost:5001/addToCollection/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(photoData),
    });

    if (!response.ok) {
      throw new Error("Failed to add photo to user collection");
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default addToUserCollection;
