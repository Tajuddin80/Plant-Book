import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const AddNewPlantForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        userName: user.displayName || "",
        userEmail: user.email || "",
      }));
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formsData = new FormData(form);
    const plantDetails = Object.fromEntries(formsData.entries());

    // Include user info from formData
    const fullData = {
      ...plantDetails,
      userName: formData.userName,
      userEmail: formData.userEmail,
    };

    fetch("https://plant-book-server.vercel.app/addnewtip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New tip added!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();

          navigate(`/dashboard/mytips/${data.userEmail || user?.email}`);
        }
      })
      .catch((err) => {
        // console.error("Submission error:", err);
      });
  };

  return (
    <div className=" flex items-center justify-center bg-base-50  text-base-content">
      <Helmet>
        <title>Plant Book 🌱 Add New Tip</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-base-100 shadow-md rounded-lg p-8"
      >
        <h2 className="text-center text-primary text-2xl md:text-3xl font-semibold uppercase border-b pb-2 mb-10">
          Add New Tip
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., “How I Grow Tomatoes Indoors”"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Plant type */}
          <div>
            <label className="block mb-1 font-medium">Plant Type</label>
            <input
              type="text"
              name="planttype"
              placeholder="Plant Type"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Category</option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Indoor">Indoor</option>
              <option value="Flowering">Flowering</option>
            </select>
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="block mb-1 font-medium">Difficulty Level</label>
            <select
              name="difficultylevel"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Difficulty Level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="e.g., 'https://i.ibb.co/RG87qpm4/slider-3.png'"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-1 font-medium">Availability</label>
            <select
              name="availability"
              className="select select-bordered w-full"
              required
            >
              <option value="">Availability</option>
              <option value="Public">Public</option>
              <option value="Hidden">Hidden</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div>
            <label className="block mb-1 font-medium">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              placeholder="e.g., every 3 days"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Health Status */}
          <div>
            <label className="block mb-1 font-medium">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              placeholder="e.g., Healthy, Dry, Wilting"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* User Name (Read-only) */}
          <div>
            <label className="block mb-1 font-medium">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              readOnly
              className="input input-disabled w-full"
            />
          </div>

          {/* User Email (Read-only) */}
          <div>
            <label className="block mb-1 font-medium">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              readOnly
              className="input input-disabled w-full"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write a short description about the plant..."
              className="textarea textarea-bordered w-full resize-none"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="mt-8 w-full btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewPlantForm;
