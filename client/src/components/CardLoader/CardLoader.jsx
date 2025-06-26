import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function CardLoader({ count = 6 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="card bg-base-100 border border-base-200 rounded-xl shadow-md"
        >
          <Skeleton variant="rectangular" width="100%" height={208} />
          <div className="card-body space-y-2">
            <Skeleton variant="text" width="80%" height={32} />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="40%" />
            <div className="flex justify-end gap-2 mt-4">
              <Skeleton variant="rectangular" width={60} height={32} />
              <Skeleton variant="rectangular" width={60} height={32} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
