import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import NoPlantsMessage from "../../components/NoPlantsMessage/NoPlantsMessage";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { PencilLine, Trash2 } from "lucide-react";
import CardLoader from "../../components/CardLoader/CardLoader";
import TableLoader from "../../components/TableLoader/TableLoader";

const MyTips = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [myPlants, setMyPlants] = useState([]);
  const [view, setView] = useState(localStorage.getItem("tipsView") || "card");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (email) {
      setIsLoading(true);
      fetch(`https://plant-book-server.vercel.app/mytips/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyPlants(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setIsLoading(false);
        });
    }
  }, [email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-book-server.vercel.app/alltips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your tip has been deleted",
                showConfirmButton: false,
                timer: 1500,
              });
              setMyPlants((prev) => prev.filter((plant) => plant._id !== id));
            }
          })
          .catch(() => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Something went wrong while deleting.",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  const handleViewChange = (e) => {
    const selectedView = e.target.value;
    setView(selectedView);
    localStorage.setItem("tipsView", selectedView);
  };

  return (
    <>
      <Helmet>
        <title>Plant Book 🌱 My Tips</title>
      </Helmet>

      {/* View Toggle */}
      <div className="flex justify-end mb-6 px-4">
        <div className="flex items-center gap-3">
          <label className="font-medium text-sm">View:</label>
          <select
            value={view}
            onChange={handleViewChange}
            className="select select-bordered select-sm"
          >
            <option value="card">Card View</option>
            <option value="table">Table View</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        view === "card" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-12">
            <CardLoader count={6} />
          </div>
        ) : (
          <TableLoader />
        )
      ) : myPlants.length ? (
        view === "card" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-12">
            {myPlants.map((plant) => (
              <div
                key={plant._id}
                className="card bg-base-100 border border-base-200 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl group"
              >
                <figure className="overflow-hidden rounded-t-xl">
                  <img
                    src={plant.image}
                    alt={plant.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                  />
                </figure>
                <div className="card-body space-y-2">
                  <h2 className="card-title text-primary">{plant.title}</h2>
                  <p className="text-sm">
                    <span className="font-semibold">Category:</span>{" "}
                    {plant.category}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Difficulty:</span>{" "}
                    {plant.difficultylevel || "Not specified"}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Status:</span>{" "}
                    {plant.availability || "Unknown"}
                  </p>

                  <div className="card-actions mt-4 justify-end gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/dashboard/updatetip/${plant._id}`)
                      }
                      className="btn btn-outline btn-warning btn-sm flex items-center gap-1"
                    >
                      <PencilLine className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(plant._id)}
                      className="btn btn-outline btn-error btn-sm flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto px-4">
            <table className="mb-10 w-full bg-base-200 border border-base-200 rounded-2xl shadow-md text-base-content">
              <thead className="bg-primary text-primary-content">
                <tr>
                  <th className="py-3 px-4 text-left">Image</th>
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Availability</th>
                  <th className="py-3 px-4 text-left">Edit</th>
                  <th className="py-3 px-4 text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                {myPlants.map((plant) => (
                  <tr key={plant._id} className="hover:bg-base-100 transition">
                    <td className="py-3 px-4">
                      <img
                        src={plant.image}
                        alt={plant.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="py-3 px-4">{plant.title}</td>
                    <td className="py-3 px-4">{plant.category}</td>
                    <td className="py-3 px-4">
                      {plant.availability || "Unknown"}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() =>
                          navigate(`/dashboard/updatetip/${plant._id}`)
                        }
                        className="btn btn-sm btn-outline btn-warning flex gap-1"
                      >
                        <PencilLine className="w-4 h-4" /> Edit
                      </button>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDelete(plant._id)}
                        className="btn btn-sm btn-outline btn-error flex gap-1"
                      >
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <NoPlantsMessage />
      )}
    </>
  );
};

export default MyTips;
