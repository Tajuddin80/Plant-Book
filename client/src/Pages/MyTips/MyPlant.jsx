import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router";

const MyPlant = ({ plant, handleDelete }) => {
  const { image, category, availability, title, _id } = plant;

  return (
    <tr key={_id} className="hover:bg-base-200 transition-colors">
      <td className="py-3 px-4">
        <img
          src={image}
          alt={title}
          className="h-16 w-16 object-cover rounded"
        />
      </td>
      <td className="py-3 px-4 font-medium text-base-content">{title}</td>
      <td className="py-3 px-4 text-base-content">{category}</td>
      <td className="py-3 px-4 text-base-content">{availability}</td>

      {/* Edit button */}
      <td className="py-3 px-4">
        <Link
          to={`/updatetip/${_id}`}
          className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded transition"
        >
          <FiEdit size={18} />
        </Link>
      </td>

      {/* Delete button */}
      <td className="py-3 px-4">
        <button
          onClick={() => handleDelete(_id)}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white p-2 rounded transition"
        >
          <RiDeleteBin6Line size={18} />
        </button>
      </td>
    </tr>
  );
};

export default MyPlant;
