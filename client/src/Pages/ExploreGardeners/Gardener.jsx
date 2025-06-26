import React from "react";
import { Link } from "react-router"; // fixed from "react-router"

const Gardener = ({ activeGardener }) => {
  const { name, location, specialty, image, _id } = activeGardener;

  return (
    <div className="card bg-base-100 shadow-lg border border-base-300 rounded-3xl overflow-hidden transform hover:scale-[1.03] transition-transform duration-300">
      <figure className="overflow-hidden h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 hover:scale-105"
        />
      </figure>
      <div className="card-body text-center px-8 py-6 flex flex-col">
        <h2 className=" text-center text-3xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-1">{location}</p>
        <p className="text-md font-semibold mb-5">{specialty}</p>

        <div className="card-actions justify-center flex flex-col gap-3 sm:flex-row">
          <Link
            to={`/gardeners/${_id}`}
            className="btn btn-primary btn-wide sm:btn-sm"
          >
            View Profile
          </Link>
          <span className="badge badge-success text-lg font-semibold py-3 px-6 self-center sm:self-auto">
            Active
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gardener;
