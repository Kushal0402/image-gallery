import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LikeHeart from "../utils/like.png";

const ImageDetails = () => {
  const { id } = useParams();
  const baseUrl = "https://api.unsplash.com/";
  const authHeader = "Client-ID " + process.env.REACT_APP_API_ACCESS_KEY;
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPhotoDetails = async () => {
      const res = await axios.get(baseUrl + `photos/${id}`, {
        headers: {
          "Accept-Version": "v1",
          Authorization: authHeader,
        },
      });
      setDetails(res.data);
      setIsLoading(false);
    };
    getPhotoDetails();
  }, [authHeader, id]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading Image Details Please Wait...</h1>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-12 gap-4 h-screen items-center">
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <img
            src={details?.urls.small}
            alt="Banner"
            className="overflow-scroll rounded-md shadow-xl m-4"
          />
        </div>

        <div className="p-6 text-center md:text-left sm:p-0 col-span-12 md:col-span-6">
          <h2
            className={`text-2xl font-bold ${
              details?.description === null ? "hidden" : "block"
            }`}
          >
            "{details?.description}"
          </h2>
          <p className="text-sm my-2">Created at: {details?.created_at}</p>

          <div className="flex justify-center md:justify-normal items-center gap-2 my-4">
            <img src={LikeHeart} alt="Likes" className="h-4" />
            <p className="font-semibold">{details?.likes}</p>
          </div>

          <div className="user-details">
            <h1 className="text-xl font-semibold">Owner Details:</h1>

            <div className="flex justify-center items-center md:justify-normal gap-4 overflow-hidden my-2">
              <img
                src={details?.user.profile_image.small}
                alt="User Profile"
                className="rounded-full scale-125"
              />
              <p className="text-xl">{details?.user.name}</p>
            </div>

            <p className="text-xl font-semibold">Relevant Links:</p>
            <ul>
              {Object.values(details?.user.links).map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link}
                    className="text-blue-600 font-semibold underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="tags flex justify-evenly md:justify-normal flex-wrap gap-4 my-4">
            {details?.tags.map((tag, idx) => (
              <p key={idx} className="p-2 rounded-2xl font-bold bg-gray-300">
                {tag.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ImageDetails;
