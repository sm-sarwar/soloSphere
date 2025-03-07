import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import AddJobs from "../pages/AddJobs";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AllJobs from "../pages/AllJobs";
import PrivateRoute from "../Authentication/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<NotFoundPage></NotFoundPage>,
      children:[
        {
            index: true,
            element:<Home></Home>
        },
        {
          path: '/addJobs',
          element:<AddJobs></AddJobs>
        },
        {
          path:'/login',
          element: <Login></Login>
        },{
          path:"/registration",
          element:<Register></Register>
        },
        {
          path:"/allJobs",
          element:<PrivateRoute><AllJobs></AllJobs></PrivateRoute>
        }
      ]
    },
  ]);  
  export default router;