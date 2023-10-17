import React from "react";
import LikeHeart from "../utils/like.png";
import { Link } from "react-router-dom";

const ImageCard = ({ photo }) => {
  return (
    <div className="image-card">
      <Link to={`/photo/${photo.id}`}>
        <div className="h-[16rem] overflow-hidden">
          <img
            src={photo.urls.regular}
            alt={`${photo.description}`}
            className="translate-y-[-1rem] sm:translate-y-[-6rem] hover:scale-125 duration-200 ease-linear"
          />
        </div>

        <div className="flex justify-between items-center p-2 font-bold">
          <p>{photo.user.name}</p>
          <div className="flex items-center gap-2">
            <img src={LikeHeart} alt="Likes" className="h-4" />
            <p>{photo.likes}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
