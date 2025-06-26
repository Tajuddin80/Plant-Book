import React from "react";
import { Link } from "react-router";

const Plant = ({ plant }) => {
  const {
    image,
    category,

    difficultylevel,
    healthStatus,

    title,
    _id,
  } = plant;

  const getCareLevelClass = (level) => {
    switch ((level || "").toLowerCase()) {
      case "difficult":
        return "text-error";
      case "medium":
        return "text-warning";
      case "easy":
        return "text-success";
      default:
        return "";
    }
  };

  return (
    <tr key={_id} className="hover:bg-base-200 transition-colors">
      <td className="py-2 px-4">
        <img
          src={image}
          alt={title}
          className="h-16 w-16 object-cover rounded"
        />
      </td>
      <td className="py-2 px-4">{title}</td>
      <td className="py-2 px-4">{category}</td>
      <td className="py-2 px-4">{healthStatus}</td>
      <td
        className={`${getCareLevelClass(
          difficultylevel
        )} font-medium py-2 px-4`}
      >
        {difficultylevel}
      </td>
      <td className="py-2 px-4">
        <Link to={`/plantdetails/${_id}`} className="text-info hover:underline">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default Plant;
