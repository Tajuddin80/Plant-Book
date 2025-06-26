import React from "react";
import { useLoaderData } from "react-router";
import Gardener from "./Gardener";
import { Helmet } from "react-helmet";

const ExploreGardeners = () => {
  const activeGardeners = useLoaderData();

  return (
    <div className="mb-10 py-15 rounded-2xl bg-base-200">
          <Helmet>
                <title>Plant Book 🌱 Active Gardeners</title>
            </Helmet>
      <h2 className="text-center text-primary text-2xl md:text-3xl font-semibold uppercase  pb-10 ">
        Active Gardeners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  px-6 md:px-16">
        {activeGardeners.map((activeGardener) => (
          <Gardener
            key={activeGardener._id}
            activeGardener={activeGardener}
          ></Gardener>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
