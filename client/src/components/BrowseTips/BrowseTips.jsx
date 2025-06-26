import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Plant from "./Plant";
import PlantCard from "./PlantCard";
import { Helmet } from "react-helmet";

const BrowseTips = () => {
  const allTips = useLoaderData();

  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [viewMode, setViewMode] = useState("card"); // 'table' or 'card'
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [filteredTips, setFilteredTips] = useState([]);

  useEffect(() => {
    let filtered = allTips;

    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (tip) => tip.difficultylevel?.toLowerCase() === selectedDifficulty
      );
    }

    // Sort by title ascending/descending
    filtered.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (sortOrder === "asc") return titleA.localeCompare(titleB);
      else return titleB.localeCompare(titleA);
    });

    setFilteredTips(filtered);
  }, [selectedDifficulty, sortOrder, allTips]);

  return (
    <div className="overflow-x-auto mb-10 py-15 rounded-2xl bg-base-200 px-10">
      <Helmet>
        <title>Plant Book 🌱 All Items</title>
      </Helmet>

      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-6  gap-10 px-6 md:px-16">
        {/* Difficulty Filter */}
        <div>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="select select-bordered"
          >
            <option value="all">All Difficulty Levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>

        {/* Sort Order */}
        <div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered"
          >
            <option value="asc">Sort by Title: Ascending</option>
            <option value="desc">Sort by Title: Descending</option>
          </select>
        </div>

        {/* View Mode Toggle */}
        <div>
          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value)}
            className="select select-bordered"
          >
            <option value="table">Table View</option>
            <option value="card">Card View</option>
          </select>
        </div>
      </div>

      {/* Display */}
      {viewMode === "table" ? (
        <table className="w-full bg-base-50 border border-base-300 rounded-lg shadow-sm text-base-content">
          <thead className="bg-primary text-primary-content">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Health Status</th>
              <th className="py-3 px-4 text-left">Care Level</th>
              <th className="py-3 px-4 text-left">View Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredTips.map((plant) => (
              <Plant key={plant._id} plant={plant} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredTips.map((tip) => (
            <PlantCard key={tip._id} data={tip} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTips;
