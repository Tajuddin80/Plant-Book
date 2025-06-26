import { useLoaderData } from "react-router";
import { FaHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2"; // adjust path as needed
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";

const PlantDetailCard = () => {
  const plantArray = useLoaderData();
  const plant = plantArray[0];

  const { user } = useContext(AuthContext);

  const {
    _id,
    title,
    planttype,
    category,
    difficultylevel,
    image,
    availability,
    wateringFrequency,
    healthStatus,
    description,
    userName,
    userEmail,
    totalLiked = 0,
    likedBy = [],
  } = plant;

  const [likes, setLikes] = useState(totalLiked);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likedBy.includes(user.email)) {
      setLiked(true);
    }
  }, [user, likedBy]);

  const handleLike = async () => {
    if (!user || liked) return;

    try {
      const res = await fetch(`https://plant-book-server.vercel.app/alltips/${_id}/like`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: user.email }),
      });

      if (res.ok) {
        setLikes((prev) => prev + 1);
        setLiked(true);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Liked successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Unable to like",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-base-100 text-base-content rounded-3xl shadow-xl max-w-6xl mx-auto p-6 sm:p-8 lg:p-12 my-12 transition-all">
      {/* Image */}
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-12">
        <img
          src={image}
          alt={title}
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl border border-base-300"
        />
      </div>

      {/* Text Content */}
      <div className="text-sm sm:text-base lg:text-lg space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">{title}</h2>
        <p className="italic text-base-content/80">
          {category} • {planttype}
        </p>
        <p className="text-base-content mt-2">{description}</p>
        <p>
          <strong>Care Level:</strong> <span>{difficultylevel}</span>
        </p>
        <p>
          <strong>Watering Frequency:</strong> <span>{wateringFrequency}</span>
        </p>
        <p>
          <strong>Health Status:</strong> <span>{healthStatus}</span>
        </p>
        <p>
          <strong>Availability:</strong> <span>{availability}</span>
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Added by: <strong>{userName}</strong> (
          <a className="underline text-info" href={`mailto:${userEmail}`}>
            {userEmail}
          </a>
          )
        </p>
        <div className="flex items-center mt-4 gap-2">
          <button
            onClick={handleLike}
            disabled={liked}
            className={`text-lg px-4 py-2 rounded-md text-white ${
              liked ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            <FaHeart className="inline mr-1" /> {liked ? "Liked" : "Like"}
          </button>
          <span className="text-base-content/70">
            {likes} like{likes !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantDetailCard;
