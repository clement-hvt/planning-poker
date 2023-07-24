import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Register from "./pages/register.tsx";
import Layout from "./layout/layout.tsx";
import Room from "./pages/room.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/room",
        element: <Room/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Layout>
          <RouterProvider router={router} />
      </Layout>
  </React.StrictMode>,
)
