import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function TableLoader() {
  return (
    <div className="overflow-x-auto px-4">
      <table className="w-full bg-base-200 border border-base-200 rounded-2xl shadow-md text-base-content">
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
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <td className="py-3 px-4">
                <Skeleton variant="rectangular" width={64} height={64} />
              </td>
              <td className="py-3 px-4">
                <Skeleton variant="text" width={100} />
              </td>
              <td className="py-3 px-4">
                <Skeleton variant="text" width={80} />
              </td>
              <td className="py-3 px-4">
                <Skeleton variant="text" width={80} />
              </td>
              <td className="py-3 px-4">
                <Skeleton variant="rectangular" width={60} height={32} />
              </td>
              <td className="py-3 px-4">
                <Skeleton variant="rectangular" width={60} height={32} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
