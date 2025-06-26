import { createBrowserRouter } from "react-router";
import BrowseTips from "../components/BrowseTips/BrowseTips";
import AddNewPlantForm from "../Pages/AddNewPlantForm/AddNewPlantForm";
import HomeLayout from "../AllLayouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ExploreGardeners from "../Pages/ExploreGardeners/ExploreGardeners";
import PlantDetailCard from "../components/PlantDetailCard/PlantDetailCard";
import GardenerDetailsCard from "../Pages/ExploreGardeners/GardenerDetailsCard";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Error404 from "../components/Error404/Error404";
import MyTips from "../Pages/MyTips/MyTips";
import UpdateTip from "../Pages/MyTips/UpdateTip";
import AboutUs from "../Pages/AboutUs/AboutUs";
import BlogDetails from "../Pages/Home/BlogDetails";
import DashboardLayout from "../AllLayouts/DashboardLayout/DashboardLayout";
import Overview from "../components/Overview/Overview";
import Contact from "../Pages/Contact/Contact";
import Support from "../Pages/Support/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error404 />,
      },
      {
        path: "signin",
        element: <Signin />,
        errorElement: <Error404 />,
      },
      {
        path: "signup",
        element: <Signup />,
        errorElement: <Error404 />,
      },
      {
        path: "support",
        element: <Support></Support>,
        errorElement: <Error404 />,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
        errorElement: <Error404 />,
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>,
        errorElement: <Error404 />,
      },
      {
        path: "exploregardeners",
        loader: () => fetch("https://plant-book-server.vercel.app/gardeners"),
        element: <ExploreGardeners />,
        errorElement: <Error404 />,
      },
      {
        path: "gardeners/:id",
        loader: ({ params }) =>
          fetch(`https://plant-book-server.vercel.app/gardeners/${params.id}`),
        element: (
          <PrivateRoute>
            <GardenerDetailsCard />
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },

      {
        path: "browsetips",
        loader: () => fetch("https://plant-book-server.vercel.app/alltips"),
        element: <BrowseTips></BrowseTips>,
        errorElement: <Error404 />,
      },
      {
        path: "plantdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://plant-book-server.vercel.app/plantdetails/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <PlantDetailCard />
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },
      {
        path: "blog/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Overview /> },
      {
        path: "sharetip",
        element: (
          <PrivateRoute>
            <AddNewPlantForm />
          </PrivateRoute>
        ),
      },
      {
        path: "mytips/:email",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },
      {
        path: "updatetip/:id",
        element: (
          <PrivateRoute>
            <UpdateTip></UpdateTip>
          </PrivateRoute>
        ),
        errorElement: <Error404 />,
      },
    
    ],

    errorElement: <Error404 />,
  },
  {
    path: "*",
    element: <Error404 />, // catch-all fallback for unknown routes
  },
]);
