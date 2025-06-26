import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router"; // fixed router import
import axios from "axios";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";

const PlantCard = ({ data }) => {
  const {
    _id,
    title,
    planttype,
    category,
    difficultylevel,
    image,
    healthStatus,
    totalLiked = 0,
    likedBy = [],
  } = data;

  const { user } = useContext(AuthContext);
  const [likes, setLikes] = useState(totalLiked);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    if (user && likedBy.includes(user.email)) {
      setHasLiked(true);
    }
  }, [likedBy, user]);

  const handleLike = async () => {
    if (!user || hasLiked) return;

    try {
      const res = await axios.put(
        `https://plant-book-server.vercel.app/alltips/${_id}/like`,
        {
          userEmail: user.email,
        }
      );

      if (res.data.modifiedCount > 0 || res.data.acknowledged) {
        setLikes((prev) => prev + 1);
        setHasLiked(true);
      }
    } catch (error) {
      console.error("Error liking the tip:", error);
    }
  };

  return (
    <div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden transform hover:scale-[1.03]">
      <figure className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 hover:scale-105"
        />
      </figure>
<div className="card-body px-6 pt-6 pb-4 text-center flex flex-col">
  <h2 className="text-2xl font-semibold mb-4 font-[Playfair Display] text-primary transition-all duration-300 hover:scale-105">
    {title}
  </h2>

  <div className="flex justify-center flex-wrap gap-2 mb-3">
    <span className="badge badge-outline badge-sm capitalize">{planttype}</span>
    <span className="badge badge-outline badge-sm capitalize">{category}</span>
    <span className="badge badge-outline badge-sm">{difficultylevel}</span>
  </div>

  <p className="mb-2 text-sm">
    Health: <span className="font-medium">{healthStatus}</span>
  </p>

  <div className="card-actions mt-auto flex flex-col items-center gap-3">
    <Link to={`/plantdetails/${_id}`} className="btn btn-primary btn-wide">
      View Details
    </Link>

    <button
      onClick={handleLike}
      disabled={hasLiked}
      className={`btn btn-sm ${
        hasLiked ? "btn-disabled" : "btn-outline btn-secondary"
      } flex items-center gap-2`}
    >
      <span role="img" aria-label="heart">❤️</span> {hasLiked ? "Liked" : "Like"}
    </button>

    <span className="badge badge-info text-base-content">
      Liked by{" "}
      <span className="font-semibold text-pink-600">{likes}</span>{" "}
      {likes === 1 ? "person" : "people"}
    </span>
  </div>
</div>

    </div>
  );
};

export default PlantCard;
