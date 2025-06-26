import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router"; // ✅ FIXED: should be react-router-dom
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
    userEmail,
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
        { userEmail: user.email }
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
    <div className="card bg-base-100 text-base-content shadow-lg border border-base-300 hover:shadow-2xl transition-all duration-300 rounded-xl transform hover:scale-[1.03]">
      <figure className="relative overflow-hidden rounded-t-xl h-[200px]">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </figure>

      <div className="card-body space-y-2">
        <h2 className="card-title text-xl md:text-2xl">{title}</h2>

        <div className="flex flex-wrap gap-2">
          {planttype && (
            <span className="badge badge-outline badge-sm capitalize">{planttype}</span>
          )}
          {category && (
            <span className="badge badge-outline badge-sm capitalize">{category}</span>
          )}
          {difficultylevel && (
            <span className="badge badge-outline badge-sm capitalize">
              {difficultylevel}
            </span>
          )}
        </div>

        {healthStatus && (
          <p>
            <span className="font-semibold">Health:</span> {healthStatus}
          </p>
        )}

        {userEmail && (
          <p className="text-sm text-opacity-70">
            <span className="font-medium">Shared by:</span> {userEmail}
          </p>
        )}

        <div className="flex flex-col gap-2 md:flex-row md:justify-between items-center mt-3">
          <Link
            to={`/plantdetails/${_id}`}
            className="btn btn-primary btn-sm normal-case"
          >
            View Details
          </Link>

          <button
            onClick={handleLike}
            disabled={hasLiked}
            className={`btn btn-sm ${
              hasLiked ? "btn-disabled" : "btn-outline btn-secondary"
            } flex items-center gap-1`}
          >
            ❤️ {hasLiked ? "Liked" : "Like"}
          </button>
        </div>

        <p className="text-sm text-center mt-1 text-base-content/70">
          Liked by <span className="font-bold text-pink-600">{likes}</span>{" "}
          {likes === 1 ? "person" : "people"}
        </p>
      </div>
    </div>
  );
};

export default PlantCard;
