import { useState } from "react";
import Photos from "./Photos";

const SearchButton = () => {
  const [title, setTitle] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleButtonClick = () => {
    setSearchClicked(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search term"
        value={title}
        onChange={handleTitleChange}
      />
      <button onClick={handleButtonClick}>Search</button>
      <Photos title={title} setSearchClicked={setSearchClicked} searchClicked={searchClicked} />
    </div>
  );
};

export default SearchButton;
