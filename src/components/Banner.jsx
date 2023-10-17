import React from "react";

const Banner = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="banner-div flex justify-center items-center w-full h-[40vh] min-h-fit bg-banner bg-fixed">
      <div className="search-img">
        <input
          placeholder="Search an Image"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search"
        />
      </div>
    </div>
  );
};

export default Banner;
