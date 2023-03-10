import { useState } from "react";
import Photos from "./Photos/Photos";

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
    <div className="py-1">
      <div className="flex flex-col sm:flex-row justify-center gap-2 items-center ">
        <input
          type="text"
          placeholder="Enter search term"
          value={title}
          onChange={handleTitleChange}
          className="bg-blue-200 border border-blue-400 text-black placeholder-cyan-900 text-sm rounded-md focus:ring-red-300 focus:border-blue-500  p-2.5 dark:bg-blue-100 dark:border-blue-700 md:w-96 w-80  "
        />
        <button
          onClick={handleButtonClick}
          className="items-center bg-initial bg-gradient-to-t from-cyan-300 to-blue-500 rounded-md shadow-blue-500/50 font-serif content-center m-0 px-6  py-2 text-center hover:from-cyan-400 hover:to-blue-600 hover:scale-110 hover:transition-shadow hover:shadow-xl    "
        >
          Search
        </button>
      </div>

      <Photos title={title} setSearchClicked={setSearchClicked} searchClicked={searchClicked} />
    </div>
  );
};

export default SearchButton;
