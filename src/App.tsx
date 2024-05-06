import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContentFromBoxes from "./components/ContentFromBoxes/ContentFromBoxes";
import Form from "./components/Form/Form";
import EditBlog from "./components/EditBlog/EditBlog";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
        {
            path:"/",
            element:<ContentFromBoxes/>,
            
        },
        {
            path:'blogs',
            element:<ContentFromBoxes/>
        },
        {
            path:'addBlog',
            element:<Form/>
        },
        {
            path:'blog/:id',
            element:<BlogDetails/>
        },
        {
            path:'editBlog/:id',
            element:<EditBlog/>
        }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
