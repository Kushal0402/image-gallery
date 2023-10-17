import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../subcomponents/ImageCard";
import Banner from "../components/Banner";
const Main = () => {
  const baseUrl = "https://api.unsplash.com/";
  const authHeader = "Client-ID " + process.env.REACT_APP_API_ACCESS_KEY;
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getPhotos = async () => {
      const res = await axios.get(baseUrl + "photos", {
        headers: {
          "Accept-Version": "v1",
          Authorization: authHeader,
        },
      });
      setPhotos(res?.data);
      setIsLoading(false);
    };

    const getSearchPhotos = async () => {
      const res = await axios.get(baseUrl + "search/photos", {
        headers: {
          "Accept-Version": "v1",
          Authorization: authHeader,
        },
        params: {
          query: searchTerm,
        },
      });
      setPhotos(res?.data.results);
    };
    if (searchTerm === "") {
      getPhotos();
    } else {
      getSearchPhotos();
    }
  }, [authHeader, searchTerm]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading Images Please Wait...</h1>
      </div>
    );
  } else {
    return (
      <>
        <Banner searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-12">
          {photos?.map((photo) => (
            <ImageCard photo={photo} key={photo.id} />
          ))}
        </div>
      </>
    );
  }
};

export default Main;
