import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import {  useNavigate, useParams } from "react-router";
import { Helmet } from "react-helmet";

const UpdateTip = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    planttype: "",
    category: "",
    difficultylevel: "",
    image: "",
    availability: "",
    wateringFrequency: "",
    healthStatus: "",
    description: "",
    userName: "",
    userEmail: "",
  });

  // Fetch tip data on mount
  useEffect(() => {
    fetch(`https://plant-book-server.vercel.app/alltips/${id}`)
      .then((res) => res.json())
      .then((data) => {
     
        
        setFormData({
          title: data.title || "",
          planttype: data.planttype || "",
          category: data.category || "",
          difficultylevel: data.difficultylevel || "",
          image: data.image || "",
          availability: data.availability || "",
          wateringFrequency: data.wateringFrequency || "",
          healthStatus: data.healthStatus || "",
          description: data.description || "",
          userName: data.userName || user?.displayName || "",
          userEmail: data.userEmail || user?.email || "",
        });
      })
      .catch((err) => {
        // console.error("Error loading tip data:", err);
      });
  }, [id, user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-book-server.vercel.app/alltips/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0 || data.acknowledged) {
              Swal.fire("Updated!", "", "success");
              navigate(`/dashboard/mytips/${data.userEmail || user?.email}`)
            } else {
              Swal.fire("No changes were made.", "", "info");
            }
          })
          .catch((err) => {
            // console.error("Submission error:", err);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className=" flex items-center justify-center bg-base-50  text-base-content">
            <Helmet>
                <title>Plant Book 🌱 Update Tip</title>
            </Helmet>
      <form
        onSubmit={handleUpdate}
        className="w-full max-w-5xl bg-base-100 shadow-md rounded-lg p-8"
      >
        <h2 className="text-center text-primary text-2xl md:text-3xl font-semibold uppercase border-b pb-2 mb-10">
          Update Tip
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Plant Type */}
          <div>
            <label className="block mb-1 font-medium">Plant Type</label>
            <input
              type="text"
              name="planttype"
              value={formData.planttype}
              onChange={(e) => setFormData({ ...formData, planttype: e.target.value })}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
              value={formData.difficultylevel}
              onChange={(e) =>
                setFormData({ ...formData, difficultylevel: e.target.value })
              }
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
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-1 font-medium">Availability</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
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
              value={formData.wateringFrequency}
              onChange={(e) =>
                setFormData({ ...formData, wateringFrequency: e.target.value })
              }
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
              value={formData.healthStatus}
              onChange={(e) =>
                setFormData({ ...formData, healthStatus: e.target.value })
              }
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
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="textarea textarea-bordered w-full resize-none"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="mt-8 w-full btn btn-primary">
          Update Tip
        </button>
      </form>
    </div>
  );
};

export default UpdateTip;
