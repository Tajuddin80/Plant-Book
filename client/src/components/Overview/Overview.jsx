import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [allCount, setAllCount] = useState(0);
  const [myCount, setMyCount] = useState(0);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    axios.get("https://plant-book-server.vercel.app/alltips").then((res) => {
      setAllCount(res.data.length);
      const total = res.data.reduce((acc, item) => acc + (item.totalLiked || 0), 0);
      setTotalLikes(total);
    });

    if (user?.email) {
      axios
        .get(`https://plant-book-server.vercel.app/mytips/${user.email}`)
        .then((res) => setMyCount(res.data.length));
    }
  }, [user]);

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Likes */}
        <div className="card shadow-xl bg-base-200">
          <div className="card-body items-center text-center">
            <div className="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="card-title">Total Likes</h3>
            <p className="text-3xl font-bold text-primary">{totalLikes}</p>
            <p className="text-sm text-gray-500">Across all plant tips</p>
          </div>
        </div>

        {/* Total Items */}
        <div className="card shadow-xl bg-base-200">
          <div className="card-body items-center text-center">
            <div className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 4.5v15m-7.5-7.5h15" />
              </svg>
            </div>
            <h3 className="card-title">Total Tips</h3>
            <p className="text-3xl font-bold text-secondary">{allCount}</p>
            <p className="text-sm text-gray-500">All shared plant tips</p>
          </div>
        </div>

        {/* My Items */}
        <div className="card shadow-xl bg-base-200">
          <div className="card-body items-center text-center">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="card-title">My Tips</h3>
            <p className="text-3xl font-bold text-accent">{myCount}</p>
            <p className="text-sm text-gray-500">Tips you’ve submitted</p>
          </div>
        </div>

        {/* User Info */}
        <div className="card shadow-xl bg-base-200 col-span-full lg:col-span-1">
          <div className="card-body items-center text-center">
            <div className="avatar online mb-2">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL || "https://i.ibb.co/k6cvchkQ/male.jpg"} alt="User Avatar" />
              </div>
            </div>
            <h3 className="card-title">{user?.displayName || "Anonymous"}</h3>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
